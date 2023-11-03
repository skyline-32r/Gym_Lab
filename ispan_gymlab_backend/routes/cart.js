import express from "express";
import db from "./../modules/connect.js";
import ecpay_payment from "ecpay_aio_nodejs"; // 导入支付SDK
// import { options } from "./config";
const router = express.Router();
const { MERCHANTID, HASHKEY, HASHIV, HOST } = process.env;
const options = {
  OperationMode: "Test", //Test or Production
  MercProfile: {
    MerchantID: MERCHANTID,
    HashKey: HASHKEY,
    HashIV: HASHIV,
  },
  IgnorePayment: [
    //    "Credit",
    //    "WebATM",
    //    "ATM",
    //    "CVS",
    //    "BARCODE",
    //    "AndroidPay"
  ],
  IsProjectContractor: false,
};
let TradeNo;

router.use((req, res, next) => {
  next();
});

//!商城商品
router.get("/productcart", async (req, res) => {
  const sql = `SELECT * FROM product_cart LEFT JOIN product_info ON product_cart.sid = product_info.sid WHERE user_id = 999`;
  const result = await db.query(sql);
  res.json(result[0]); //
});

//!增加商品
router.post("/productcart/add", async (req, res) => {
  const output = {
    success: false,
    error: {},
    result: {},
    postData: req.body,
  };

  if (req.body.cart_id) {
    // console.log(JSON.parse(req.body.cart_id));
    const cart_id = req.body.cart_id;
    try {
      const sql = `UPDATE product_cart SET amount=amount+1 WHERE cart_id =${cart_id}`;
      console.log(sql);
      [result] = await db.query(sql);
      output.success = !!result.affectedRows;
      output.result = result;
    } catch (ex) {
      // output.error = "SQL錯誤";
      output.ex = ex;
    }
  }
  res.json(output);
});

//!減少商品
router.post("/productcart/del", async (req, res) => {
  const output = {
    success: false,
    error: {},
    result: {},
    postData: req.body,
  };

  if (req.body.cart_id) {
    // console.log(JSON.parse(req.body.cart_id));
    const cart_id = req.body.cart_id;
    try {
      const sql = `UPDATE product_cart SET amount=amount-1 WHERE cart_id =${cart_id}`;
      console.log(sql);
      [result] = await db.query(sql);
      output.success = !!result.affectedRows;
      output.result = result;
    } catch (ex) {
      // output.error = "SQL錯誤";
      output.ex = ex;
    }
  }
  res.json(output);
});

//!刪除商品
router.post("/productcart/remove", async (req, res) => {
  const output = {
    success: false,
    error: {},
    result: {},
    postData: req.body,
  };

  if (req.body.cart_id) {
    // console.log(JSON.parse(req.body.cart_id));
    const cart_id = req.body.cart_id;
    try {
      const sql = `DELETE FROM product_cart WHERE cart_id =${cart_id}`;
      console.log(sql);
      [result] = await db.query(sql);
      output.success = !!result.affectedRows;
      output.result = result;
    } catch (ex) {
      output.error = "SQL錯誤";
      output.ex = ex;
    }
  }
  res.json(output);
});

//!刪除影片
router.post("/onlineclasscart/remove", async (req, res) => {
  const output = {
    success: false,
    error: {},
    result: {},
    postData: req.body,
  };

  if (req.body.cart_id) {
    // console.log(JSON.parse(req.body.cart_id));
    const cart_id = req.body.cart_id;
    try {
      const sql = `DELETE FROM course_cart WHERE course_cart_id =${cart_id}`;
      console.log(sql);
      [result] = await db.query(sql);
      output.success = !!result.affectedRows;
      output.result = result;
    } catch (ex) {
      output.error = "SQL錯誤";
      output.ex = ex;
    }
  }
  res.json(output);
});

//!線上課程
router.get("/onlineclasscart", async (req, res) => {
  const sql = `SELECT * FROM course_cart LEFT JOIN course ON course_cart.course_id = course.course_id WHERE user_id = 999`;
  const result = await db.query(sql);
  res.json(result[0]); //
});

//!新增訂單
router.post("/newOrder", async (req, res) => {
  const output = {
    success: false,
    error: {},
    result: {},
    postData: req.body,
  };
  if (req.body.customer_name) {
    const orderData = {
      customer_name: req.body.customer_name,
      customer_phone: req.body.customer_phone,
      address: req.body.address,
      payment_method: req.body.payment_method,
      price: req.body.price,
    };
    try {
      const sql = `INSERT INTO orders 
      (order_id, customer_name, customer_phone, address, payment_method, price, user_id, order_date, user_coupon_id, order_status, isValid)
       VALUES 
       (NULL, '${orderData.customer_name}', '${orderData.customer_phone}', '${orderData.address}', '${orderData.payment_method}', '${orderData.price}', '999', CURRENT_TIMESTAMP, NULL, '1', '1');`;
      [result] = await db.query(sql);
      output.success = !!result.affectedRows;
      output.result = result;
    } catch (ex) {
      output.error = "SQL錯誤";
      output.ex = ex;
    }
  }
  res.json(output);
});

//!訂單資料
router.get("/order", async (req, res) => {
  const sql = `SELECT * FROM orders WHERE user_id = 999 ORDER BY order_id DESC LIMIT 1`;
  const result = await db.query(sql);
  res.json(result[0]); //
});

//!新增訂單商品
router.post("/order/addp", async (req, res) => {
  const output = {
    success: false,
    error: {},
    result: {},
    postData: req.body,
  };

  if (req.body.order_id) {
    const orderp = {
      order_id: req.body.order_id,
      sid: req.body.sid,
      price: req.body.price,
      amount: req.body.amount,
    };
    try {
      const sql = `INSERT INTO product_order_details 
      (product_orderlist_id, order_id, sid, product_price, amount) 
      VALUES 
      (NULL, '${orderp.order_id}', '${orderp.sid}','${orderp.price}', '${orderp.amount}');`;
      [result] = await db.query(sql);
      output.success = !!result.affectedRows;
      output.result = result;
    } catch (ex) {
      output.error = "SQL錯誤";
      output.ex = ex;
    }
  }
  res.json(output);
});

//!新增訂單影片
router.post("/order/addv", async (req, res) => {
  const output = {
    success: false,
    error: {},
    result: {},
    postData: req.body,
  };

  if (req.body.order_id) {
    const orderv = {
      order_id: req.body.order_id,
      course_id: req.body.course_id,
      price: req.body.price,
    };
    try {
      const sql = `INSERT INTO course_order_details 
      (course_orderlist_id, order_id, course_id, course_price) 
      VALUES 
      (NULL, '${orderv.order_id}', '${orderv.course_id}', '${orderv.price}');`;
      const sql2 = `INSERT INTO user_courses (order_date, user_id, course_id)`
      const [result2] = db.query(sql2)
      const [result] = await db.query(sql);
      output.success = !!result.affectedRows;
      output.result = result;
    } catch (ex) {
      output.error = "SQL錯誤";
      output.ex = ex;
    }
  }
  res.json(output);
});

//!歷史訂單
router.get("/orders", async (req, res) => {
  const sql = `SELECT * FROM orders WHERE user_id = 999 ORDER BY order_id DESC`;
  const sql1 = `SELECT * FROM orders LEFT JOIN product_order_details ON orders.order_id = product_order_details.order_id LEFT JOIN product_info ON product_order_details.sid = product_info.sid WHERE user_id = 999 AND product_order_details.sid ORDER BY orders.order_id DESC;`;
  const sql2 = `SELECT * FROM orders LEFT JOIN course_order_details ON orders.order_id = course_order_details.order_id LEFT JOIN course ON course_order_details.course_id = course.course_id WHERE user_id = 999 AND course_orderlist_id ORDER BY orders.order_id DESC;`;
  const sql3 = `SELECT orders.order_id ,count(product_order_details.sid) AS p FROM orders LEFT JOIN product_order_details ON orders.order_id = product_order_details.order_id WHERE user_id = 999 AND product_order_details.sid GROUP BY orders.order_id`;
  const sql4 = `SELECT orders.order_id ,count(course_orderlist_id) AS v FROM orders LEFT JOIN course_order_details ON orders.order_id = course_order_details.order_id WHERE user_id = 999 AND course_orderlist_id GROUP BY orders.order_id`;
  //敏加５
  // const sql5 = `SELECT user_id, product_id, product_rating, product_comment FROM product_comment WHERE user_id =9 and product_id = ${product_id};`;
  // console.log(sql5);
  const result = await db.query(sql);
  const result1 = await db.query(sql1);
  const result2 = await db.query(sql2);
  const result3 = await db.query(sql3);
  const result4 = await db.query(sql4);
  res.json([result[0], result1[0], result2[0], result3[0], result4[0]]); //
});

//!trytry epay
router.post("/pay", (req, res) => {
  // SDK 提供的範例，參數設定
  // https://github.com/ECPay/ECPayAIO_Node.js/blob/master/ECPAY_Payment_node_js/conf/config-example.js
  console.log("pay1.5", req.body);
  if (req.body.product_name) {
    const order = {
      product_name: req.body.product_name,
      price: req.body.price,
    };
    console.log(order);
    const MerchantTradeDate = new Date().toLocaleString("zh-TW", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "UTC",
    });
    TradeNo = "test" + new Date().getTime();
    let base_param = {
      MerchantTradeNo: TradeNo, //請帶20碼uid, ex: f0a0d7e9fae1bb72bc93
      MerchantTradeDate,
      TotalAmount: `${order.price}`, //金額
      TradeDesc: "GYM LAB 線上購物",
      ItemName: order.product_name, //商品名稱用#分隔
      ReturnURL: `http://localhost:3002/cart/return`,
      ClientBackURL: `http://localhost:3000/cart/order3`,
    };
    const create = new ecpay_payment(options);

    // 注意：在此事直接提供 html + js 直接觸發的範例，直接從前端觸發付款行為
    const html = create.payment_client.aio_check_out_all(base_param);
    console.log(html);
    res.json(html);
    // res.render("index", {
    //   title: "Express",
    //   html,
    // });
  }
});
//*後端接收綠界回傳的資料
router.post("/return", async (req, res) => {
  console.log("req.body:", req.body);

  const { CheckMacValue } = req.body;
  const data = { ...req.body };
  delete data.CheckMacValue; // 此段不驗證

  const create = new ecpay_payment(options);
  const checkValue = create.payment_client.helper.gen_chk_mac_value(data);

  console.log(
    "確認交易正確性：",
    CheckMacValue === checkValue,
    CheckMacValue,
    checkValue
  );

  // 交易成功後，需要回傳 1|OK 給綠界
  res.send("1|OK");
});

//!userdata
router.get("/getUserData", async (req, res) => {
  res.json(req.user);
});

//!收藏功能
router.get("/star", async (req, res) => {
  const sql = `SELECT * FROM member_wishlist  WHERE user_id = 999`;
  const result = await db.query(sql);
  res.json(result[0]); //
});

//SELECT * FROM `member_wishlist`
export default router;

//TODO :)-----> footer 統一 , 改title , 購物車btn if(auth)alert(X)
