import express from "express";
import db from "./../modules/connect.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import multer from "multer";

const router = express.Router();

const getListData = async () => {
  // Popular courses
  // New courses
  // All/filtered courses

  let output = {
    success: false,
    redirect: "",
    info: "",
    data: [],
  };

  const [rows] = await db.query("SELECT * FROM `user_information`");

  // console.log(rows)

  return rows;
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/member");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      req.user.user_id +
        "_" +
        Date.now() +
        "." +
        file.originalname.split(".")[1]
    );
  },
});

let upload = multer({
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      cb(new Error("Please upload an image"));
    }
    cb(null, true);
  },
  storage: storage,
});

router.put("/uploadImg", upload.single("file"), async (req, res) => {
  let output = {
    status: "",
    code: "",
    msg: "",
    accessToken: "",
    error: "",
    user_photo: "",
  };
  let user_id = req.user.user_id;
  try {
    const sql = `UPDATE user_information SET user_photo = ? WHERE user_information.user_id = ?`;
    const [rows] = await db.query(sql, [req.file.filename, user_id]);
    // if(rows.affectedRows){
    //   const sql2 = `SELECT * FROM user_information WHERE user_id = ?`
    //   const [res] = await db.query(sql2, [user_id])
    //   console.log('res', res)
    //   return res
    // }
    console.log("rows ", rows);
    console.log(123);
    console.log(req.file);
    console.log(req.body);
  } catch (ex) {
    console.log(ex);
    output.error = ex;
  }
  res.json(req.file.filename);
});

router.get("/profile", async (req, res) => {
  res.locals.pageName = "member";
  // const output = await getListData()

  // res.json(output)
  res.json(req.user);
});

//取得token的data
router.post("/profileData", async (req, res) => {
  // res.locals.pageName = "member";
  console.log("req.user.user_id " + req.user.user_id);
  const sql = `SELECT * FROM user_information WHERE user_id = ${req.user.user_id} `;
  // const output = await getListData()
  const [[result]] = await db.query(sql);
  console.log(result);
  // res.json(output)
  res.json(result);
});

// 編輯基本資料
router.post("/profile/edit", async (req, res) => {
  res.locals.pageName = "edit";
  let output = {
    status: "",
    code: "",
    msg: "",
    accessToken: "",
    error: "",
  };
  try {
    console.log(req.body);
    let { user_id, name, gender, birthday, home_area, address } = req.body;
    const sql = `UPDATE user_information SET name="${name}",gender="${gender}",birthday="${birthday}",home_area="${home_area}",address="${address}" WHERE user_id=${user_id}`;
    // "UPDATE `user_information` SET `name`=?,`gender`=?,`birthday`=?,`home_area`=?,`address`=? WHERE `user_id`=?";
    // [
    //   user_id,
    //   name,
    //   gender,
    //   birthday,
    //   home_area,
    //   address,
    // ]
    const [rows] = await db.query(sql);
    // console.log(rows);
    if (rows.affectedRows) {
      const sql2 = `SELECT * FROM user_information WHERE user_id = ${user_id} `;
      const [[user]] = await db.query(sql2);
      console.log("user");
      console.log(user);
      const accessToken = jwt.sign(user, process.env.JWT_SECRET);
      output.accessToken = accessToken;

      output.status = "success";
      output.code = 200;
      output.msg = "修改成功";
    } else {
      output.status = "failed";
      output.code = 403;
      output.msg = "修改失敗";
    }
  } catch (ex) {
    console.log(ex);
    output.error = ex;
  }
  res.json(output);
  // res.json("ok");
});

//!  實體課程歷史報名資料
router.get("/class", async (req, res) => {
  const sql = `
     SELECT *
  FROM class_schedule 
  JOIN class_time ON class_schedule.time_id = class_time.time_id 
  JOIN instructor ON class_schedule.instructor_id = instructor.instructor_id 
  JOIN in_person_classes ON class_schedule.class_id = in_person_classes.class_id 
  JOIN class_enrollment ON class_enrollment.class_schedule_id=class_schedule.class_schedule_id
  JOIN user_information ON user_information.user_id=class_enrollment.user_id
  JOIN branch_location ON class_schedule.branch_id=branch_location.branch_id 
  WHERE user_information.user_id =999 
  ORDER BY class_enrollment.enroll_id ASC`;
  //   const sql = `SELECT * FROM class_schedule`
  //?  這裡先抓999的課程報名資料!!!
  const [r] = await db.query(sql);

  res.json(r);
  // console.log(r.class_date)
});

//!  實體課程歷史報名資料修改
router.post("/updclass", async (req, res) => {
  console.log(req.body);
  const output = {
    success: false,
    error: {},
    result: {},
    postData: req.body,
  };
  const user_id = req.body.user_id;
  const enroll_id = req.body.enroll_id;
  const class_date = req.body.class_date;
  const time = req.body.time;
  const branch_id = req.body.branch_id;

  try {
    // 執行查詢
    const getClassScheduleIdSql = `
    select class_schedule_id
    from class_schedule
    JOIN class_time ON class_schedule.time_id = class_time.time_id
    where class_date = '${class_date}'
      and time = '${time}'
      and branch_id = ${branch_id}
    `;
    console.log(getClassScheduleIdSql);
    const [result] = await db.query(getClassScheduleIdSql);
    if (result.length > 0) {
      const classScheduleId = result[0].class_schedule_id;
      console.log("查詢結果:" + classScheduleId);

      // 執行修改
      const updateSql = `
      update class_enrollment
      set class_schedule_id = ${classScheduleId}
      where enroll_id = ${enroll_id}
      `;
      const [updateResult] = await db.query(updateSql);

      console.log("修改操作结果：", updateResult);
      output.success = !!updateResult.affectedRows;
      output.result = updateResult;
    } else {
      console.log("找不到資料");
      output.ex = "找不到資料";
    }
  } catch (ex) {
    // output.error = "SQL錯誤";
    output.ex = ex;
    console.error(ex);
  }
  res.json(output);
});

//!  實體課程歷史刪除資料

router.delete("/delclass", async (req, res) => {
  const output = {
    success: false,
    error: {},
    result: {},
    postData: req.body,
  };
  if (req.body.enroll_id) {
    // console.log(JSON.parse(req.body.cart_id));
    const enroll_id = req.body.enroll_id;
    try {
      const sql = `DELETE FROM class_enrollment WHERE class_enrollment.enroll_id = ${enroll_id}`;
      console.log(sql);
      const [result] = await db.query(sql);
      output.success = !!result.affectedRows;
      output.result = result;
      // console.log(result)
    } catch (ex) {
      // output.error = "SQL錯誤";
      output.ex = ex;
      console.error(ex);
    }
  }
  res.json(output);
});

//! 全部的schedule課程
router.get("/schedule", async (req, res) => {
  const output = {
    success: false,
    error: {},
    result: {},
  };
  try {
    // const class_id = req.body.class_id
    const sql = `
  SELECT class_schedule.time_id, 
  class_time.time, 
  class_schedule.class_schedule_id, 
  class_schedule.weekday,
  class_schedule.class_date,
  class_schedule.instructor_id,
  instructor.instructor_name,
  class_schedule.class_id,
  class_schedule.branch_id,
   branch_location.branch_name,
  in_person_classes.class_name
  FROM class_schedule 
  JOIN class_time ON class_schedule.time_id = class_time.time_id 
  JOIN instructor ON class_schedule.instructor_id = instructor.instructor_id 
  JOIN in_person_classes ON class_schedule.class_id = in_person_classes.class_id
  JOIN branch_location ON branch_location.branch_id=class_schedule.branch_id 
  ORDER BY class_schedule.class_date ASC`;
    // console.log(sql)
    const [result] = await db.query(sql);
    output.success = !!result.affectedRows;
    output.result = result;
    // console.log(result)
    res.json(output);
  } catch (ex) {
    output.ex = ex;
    console.error(ex);
  }
});

//商品願望清單
router.get("/product-wishlist", async (req, res) => {
  const user_id = 999;
  // parseInt(req.params.user_id);
  const sql = `SELECT member_wishlist.user_id, member_wishlist.product_id,online_shop.product_name,online_shop.product_description, product_spec.price 
  FROM member_wishlist
  LEFT JOIN online_shop ON member_wishlist.product_id = online_shop.product_id
  LEFT JOIN product_spec ON product_spec.product_id = online_shop.product_id WHERE user_id=${user_id} GROUP BY product_id;`;
  const [result] = await db.query(sql);

  res.json(result);
});

//刪除商品願望清單
router.post("/del_wishlist", async (req, res) => {
  console.log("-------1-------");
  try {
    const user_id = 999;
    const { product_id } = req.body;
    const sql = `DELETE FROM member_wishlist WHERE user_id = ${user_id} AND product_id = ${product_id};`;
    console.log(sql);
    const [result] = await db.query(sql);
    res.json(result);
  } catch (error) {
    console.log("error message", error);
    res.status(500).json({ success: false, message: "nothing change" });
  }
});

//更新評論資料
router.post("/update_comment/:user_id", async (req, res) => {
  console.log("------------una update-----------");
  try {
    const user_id = req.params.user_id;
    const product_id = req.body.product_id;
    const product_rating = req.body.product_rating;
    const product_comment = req.body.product_comment;
    const sql = `UPDATE product_comment SET product_rating = ${product_rating},product_comment = '${product_comment}' WHERE user_id = ${user_id} AND product_id = ${product_id};`;
    console.log(sql);
    const [result] = await db.query(sql);
    res.json(result);
  } catch (error) {
    console.log("error message", error);
    res.status(500).json({ success: false, message: "no comment change" });
  }
});

//將評論寫入資料庫
router.post("/add_conmment/:user_id", async (req, res) => {
  const user_id = req.params.user_id;
  const product_id = req.body.product_id;
  const product_rating = req.body.product_rating;
  const product_comment = req.body.product_comment;
  const review = req.body.review;
  const commentExists = req.body.commentExists;
  console.log(commentExists);
  console.log(commentExists == true);
  console.log(user_id, product_rating, review, product_id);
  const output = {
    success: false,
    redirect: "",
    info: "",
    result: "",
    err: "",
  };

  try {
    if (product_rating && review && product_id) {
      let sql;
      if (commentExists == true) {
        sql = `UPDATE product_comment SET product_rating = ${product_rating},product_comment = '${review}' WHERE user_id = ${user_id} AND product_id = ${product_id};`;
      } else {
        sql = `INSERT INTO product_comment(user_id, product_id, product_rating, product_comment) VALUES (${user_id},${product_id},${product_rating},'${review}')`;
      }
      console.log(sql);
      const [result] = await db.query(sql, [
        user_id,
        product_id,
        review,
        product_rating,
      ]);

      output.success = true;
      output.result = result;
    }
    res.json(output);
  } catch (err) {
    output.err = err;
    res.json(output);
  }
});
//   console.log("------------una-----------");
//   try {
//     const user_id = 9;
//     const product_id = req.body.product_id;
//     const product_rating = req.body.product_rating;
//     const product_comment = req.body.product_comment;
//     const sql = `INSERT INTO product_comment(user_id, product_id, product_rating, product_comment) VALUES (${user_id},${product_id},${product_rating},'${product_comment}')`;
//     console.log(sql);
//     const result = await db.query(sql);
//     res.json(result);
//   } catch (error) {
//     console.log("error message", error);
//     res.status(500).json({ success: false, message: "no comment added" });
//   }
// });

// 更改密碼
router.put("/password-edit", async (req, res) => {
  console.log("req.user.user_id ", req.user.user_id);
  console.log("req.body", req.body);
  const user_id = req.user.user_id;
  // console.log(originalPwd)
  // let compareResult = bcrypt.compareSync("team1", hash);
  let output = {
    code: "",
    status: "",
    // data: "",
    msg: "",
    // accessToken: "",
    // user_id: "",
    // name: "",
    error: "",
    token: "",
  };
  try {
    const { oldPassword, password, checkPwd } = req.body;
    const CheckOldPwd = bcrypt.compareSync(oldPassword, req.user.password);
    if (CheckOldPwd) {
      if (password.length < 6) {
        output.msg = "密碼長度最少6位元";
      } else if (password == checkPwd) {
        console.log("password", password);
        const newPassword = await bcrypt.hash(password, 10);
        console.log("newPassword: ", newPassword);
        const sql = `UPDATE user_information SET password='${newPassword}' WHERE user_id='${user_id}'`;
        const [result] = await db.query(sql);
        console.log(result);
        console.log("yes");
        if (result.affectedRows) {
          output.status = "success";
          output.msg = "更改成功";
          const sql2 = `SELECT * from user_information WHERE user_id = ${user_id}`;
          const [[userData]] = await db.query(sql2);
          output.token = jwt.sign(userData, process.env.JWT_SECRET);
        }
      }
    } else {
      output.status = "error";
      output.msg = "原密碼不正確";
    }
  } catch (ex) {
    output.status = "error";
    output.msg = "sql或傳入資料錯誤";
    output.error = ex;
    console.log(ex);
  }
  res.json(output);
});
export default router;
