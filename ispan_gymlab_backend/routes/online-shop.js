import express from "express";
import db from "./../modules/connect.js";

const router = express.Router();
const app = express();

//頂層middleware
router.use((req, res, next) => {
  next();
});

//取得全部商品資料
router.get("/", async (req, res) => {
  const perPage = 12; // 每頁最多有幾筆
  let output = {
    success: false, // 有沒有成功取得資料
    redirect: "", // 有沒有要轉向
    info: "",
    page: 1,
    perPage,
    totalRows: 0, // 總筆數
    totalPages: 0, // 總頁數
    rows: [], // 該頁資料
  };

  // 搜尋功能
  let search = req.query.search || "";
  let searchEsc = "";
  search = search.trim(); // 去掉頭尾空白字元
  let where = " ";
  if (search) {
    searchEsc = db.escape(`%${search}%`);
    where += ` AND product_name LIKE ${searchEsc} `;
  }

  //分頁
  let page = parseInt(req.query.page) || 1;
  let categoryId = req.query.categoryId;
  let order = req.query.order;
  console.log(categoryId);
  console.log(order);
  if (page < 1) {
    output.redirect = "?page=1";
    output.info = "page 值不能小於 1";
    return output;
  }

  let sqlAll = `SELECT COUNT(1) totalRows FROM online_shop WHERE 1 ${where}`;

  if (categoryId) {
    console.log("categoryId: ", categoryId);
    sqlAll = sqlAll + `AND category_id IN (${categoryId})`;
  }
  console.log(sqlAll);
  const [[{ totalRows }]] = await db.query(sqlAll);

  let totalPages = 0;
  let rows = [];
  if (totalRows > 0) {
    totalPages = Math.ceil(totalRows / perPage);
    if (page > totalPages) {
      output.redirect = "?page=" + totalPages;
      output.info = "page 值不能大於總頁數";
      return output;
    }
  }

  let categoryFilter = "";
  if (categoryId) {
    categoryFilter = `AND category_id IN (${categoryId}) `;
  }

  let orderFilter = "";
  if (order) {
    orderFilter = `ORDER by ${order}`;
  }
  const sql = `SELECT online_shop.product_id, online_shop.product_name,online_shop.category_id,online_shop.product_description, product_spec.price,online_shop.launch_date FROM online_shop, product_spec WHERE online_shop.product_id = product_spec.product_id ${categoryFilter}${where} GROUP BY online_shop.product_id ${orderFilter} LIMIT ${
    (page - 1) * perPage
  }, ${perPage} `;

  console.log(sql);
  // const result = await db.query(sql);
  [rows] = await db.query(sql);
  output = { ...output, perPage, page, totalRows, totalPages, rows };
  res.json(output);
});

// 取得單筆資料
router.get("/:product_id", async (req, res) => {
  const product_id = parseInt(req.params.product_id) || 0;
  const sql = `SELECT * FROM product_info WHERE product_id=${product_id}; `;
  const [rows] = await db.query(sql);

  // let item = {};
  // if (rows.length) {
  //   item = rows[0];
  // }
  res.json(rows);
});

//新增商品進購物車
router.post("/add_product", async (req, res) => {
  try {
    const { sid, amount } = req.body; //應該要加user_id
    // console.log(req.body);

    //測試用：先固定user_id
    const user_id = 999;
    const sql = `INSERT INTO product_cart(amount, sid, user_id) VALUES (${amount},${sid},${user_id})`;
    const result = await db.query(sql, [amount, sid, user_id]);
    console.log(result);
    res.json({ success: true, message: "yeah" });
  } catch (error) {
    // console.log("error message", error);
    res.status(500).json({ success: false, message: "wuwuwu" });
  }
  // res.json(result);
});

//讓右上角的購物車顯示買了多少東西（加入購物車前）
router.post("/cart_icon", async (req, res) => {
  console.log("----------0----------");
  try {
    // const { sid } = req.body;
    // console.log(req.body);
    const user_id = 999;
    console.log("----------1----------");
    const sql = `SELECT COUNT(*) AS cartTotal FROM product_cart WHERE user_id = ${user_id};`;
    const sql2 = `SELECT COUNT(*) AS cartTotalCourse FROM course_cart WHERE user_id = ${user_id};`;
    const [[{ cartTotal }]] = await db.query(sql);
    const [[{ cartTotalCourse }]] = await db.query(sql2);
    const totalAmount = parseInt(cartTotal + cartTotalCourse);
    console.log(totalAmount);
    res.json(totalAmount);
  } catch (error) {
    console.log("error message", error);
    res.status(500).json({ success: false, message: "nothing added" });
  }
});

//讓右上角的購物車顯示買了多少東西
router.post("/add_cart_icon", async (req, res) => {
  try {
    // const { sid } = req.body;
    // console.log(req.body);
    const user_id = 999;

    const sql = `SELECT COUNT(*) FROM product_cart WHERE user_id = ${user_id};`;
    console.log(sql);
    const [result] = await db.query(sql);
    res.json({ data: result[0].cart });
  } catch (error) {
    console.log("error message", error);
    res.status(500).json({ success: false, message: "nothing added" });
  }
});

//加入願望清單
router.post("/add_wishlist", async (req, res) => {
  console.log("-------------1---------------");
  try {
    const { product_id } = req.body;
    console.log(product_id);

    const user_id = 999;
    const sql = `INSERT INTO member_wishlist (user_id, product_id) VALUES (${user_id},${product_id})`;
    const result = await db.query(sql, [user_id, product_id]);
    res.json({ success: true, message: "add to wishlist" });
  } catch (error) {
    console.log("error message", error);
    req.text().then((text) => console.error("Request text:", text));
    res.status(500).json({ success: false, message: "nothing added" });
  }
});

//從願望清單移除
router.post("/del_wishlist", async (req, res) => {
  console.log("-----here-------");
  try {
    const product_id = parseInt(req.body) || 0;
    console.log("從願望清單移除", req.body);

    const user_id = 999;
    const sql = `DELETE FROM member_wishlist WHERE user_id = ${user_id} AND product_id = ${product_id}`;
    const [result] = await db.query(sql, [user_id, product_id]);
    res.json(result);
  } catch (error) {
    console.log("error message", error);
    res
      .status(500)
      .json({ success: false, message: "nothing change at wishlist" });
  }
});

//取得商品評論
router.post("/get_comment/999", async (req, res) => {
  console.log("-----get comment-------");
  try {
    const product_id = req.body.product_id;
    console.log("讀到評論了！！", req.body);
    const user_id = 999;
    const sql = `SELECT user_id, product_id, product_rating, product_comment FROM product_comment WHERE user_id =? and product_id =?`;
    const [result] = await db.query(sql, [user_id, product_id]);
    res.json(result);
  } catch (error) {
    console.log("error message", error);
    res.status(500).json({ success: false, message: "nothing change" });
  }
});

//取得顯示在頁面上的商品評論
router.post("/page_comment", async (req, res) => {
  console.log("------------comment-------------");
  try {
    const product_id = parseInt(req.body.product_id);
    console.log("有評論了！！", req.body);
    const sql = `SELECT user_information.name, product_comment.user_id, product_comment.product_rating, product_comment.product_comment,product_comment.product_id FROM user_information, product_comment WHERE user_information.user_id = product_comment.user_id && product_comment.product_id = 2 ORDER BY user_id DESC;`;
    const [result] = await db.query(sql);
    res.json(result);
  } catch (error) {
    console.log("error message", error);
    res.status(500).json({ success: false, message: "nothing change" });
  }
});

export default router;
