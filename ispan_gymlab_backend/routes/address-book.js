import express from "express";
import db from "./../modules/connect.js";
import dayjs from "dayjs";
import upload from "./../modules/upload-imgs.js";

const router = express.Router();

const getListData = async (req) => {
  const perPage = 20;
  let output = {
    success: false,
    redirect: "",
    info: "",
    page: 1,
    perPage,
    totalRows: 0,
    totalPages: 0,
    rows: [],
  };

  let page = parseInt(req.query.page) || 1;
  if (page < 1) {
    res.redirect = "?page=" + 1;
    res.info = "page 不能小於 1";
    return output;
  }

  const [[{ totalRows }]] = await db.query(
    "SELECT count(*) AS totalRows FROM `address_book`"
  );
  const result = await db.query(
    "SELECT count(*) AS totalRows FROM `address_book`"
  );

  if (totalRows > 0) {
    const totalPages = Math.ceil(totalRows / perPage);
    if (page > totalPages) {
      res.redirect = "?page=" + page;
      res.info = "page 不能大於" + page;
      return output;
    }
    const sql = `SELECT * FROM address_book ORDER BY sid DESC LIMIT ${
      (page - 1) * perPage
    }, ${perPage}`;
    const [rows] = await db.query(sql);

    for (let row of rows) {
      if (row.birthday) {
        row.birthday = dayjs(row.birthday).format("YYYY-MM-DD");
      } else {
        row.birthday = "";
      }
    }
    output.success = true;
    output = { ...output, totalRows, totalPages, rows, page };
    return output;
  }
};

router.get("/", async (req, res) => {
  res.locals.pageName = "ab-list";

  const output = await getListData(req);
  // console.log(output);
  // res.send("hi");
  if (output.redirect) {
    res.redirect(output.redirect);
  } else {
    res.render("address-book/address-book.ejs", output);
  }
});

router.get("/api", async (req, res) => {
  const output = await getListData(req);

  res.json(output);
});

router.get("/api-jwt", async (req, res) => {
  const output = await getListData(req);
  if (res.locals.jwtData) {
    output.jwtData = res.locals.jwtData;
  }

  res.json(output);
});

router.get("/del/:sid", async (req, res) => {
  const sid = req.params.sid;
  const sql = `DELETE FROM address_book WHERE sid='${sid}'`;
  const [result] = await db.query(sql);

  let comeFrom = req.get("referer");
  console.log(comeFrom);
  if (comeFrom) {
    res.redirect(comeFrom);
  } else {
    res.redirect("/address-book");
  }
});

router.get("/del/:sid", async (req, res) => {
  const sid = req.params.sid;
  const sql = `DELETE FROM address_book WHERE sid='${sid}'`;
  const [result] = await db.query(sql);

  let comeFrom = req.get("referer");
  console.log(comeFrom);
  if (comeFrom) {
    res.redirect(comeFrom);
  } else {
    res.redirect("/address-book");
  }
});

router.delete("/api/del/:sid", async (req, res) => {
  const sid = parseInt(req.params.sid);
  const sql = `DELETE FROM address_book WHERE sid='${sid}'`;
  const [result] = await db.query(sql);
  res.json({
    success: !!result.affectedRows,
    sid,
  });
});

router.get("/api/:sid", async (req, res) => {
  const sid = parseInt(req.params.sid);
  const sql = `SELECT * FROM address_book WHERE sid='${0}'`;
  // const [[personalInfo]] = await db.query(sql);
  // res.json(personalInfo);
  const [rows] = await db.query(sql);
  let item = {};
  if (rows.length) {
    item = rows;
    res.json(item);
  } else {
    res.send("Didn't work properly");
  }
});

router.get("/add", async (req, res) => {
  res.locals.pageName = "ab-add";
  res.render("address-book/address-add");
});

router.post("/api", upload.none(), async (req, res) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // const output = {
  //   success: false,
  //   error: "",
  //   result: {},
  //   postData: req.body,
  // };

  const output = {
    success: false,
    errors: {},
    result: {},
    postData: req.body,
  };

  let isPass = true;

  if (req.body.name) {
    const { name, email, mobile, address } = req.body;
    let { birthday } = req.body;
    // 檢查姓名欄位
    if (name.length < 2) {
      output.errors.name = "姓名字串長度請大於 2 個字元";
      isPass = false;
    }
    // 檢查 email
    if (!emailRegex.test(email)) {
      output.errors.email = "Email 格式不正確";
      isPass = false;
    }

    birthday = dayjs(birthday);
    if (!birthday.isValid()) {
      birthday = null;
    } else {
      birthday = birthday.format("YYYY-MM-DD");
    }

    let result;

    try {
      const sql = `INSERT INTO address_book SET ?`;
      req.body.created_at = new Date();

      [result] = db.query(sql, [req.body]);
      output.success = !!result.affectedRows;
      output.result = result;
      // res.json(result);
      console.log(result);
    } catch (err) {
      output.error = "SQL 錯誤";
      output.errorMsg = err;
    }
  }
  res.send("hi");
  // res.json(output);
});

// 編輯資料的表單
router.get("/edit/:sid", async (req, res) => {
  const sid = parseInt(req.params.sid) || 0;
  const sql = `SELECT * FROM address_book WHERE sid=${sid} `;
  const [rows] = await db.query(sql);

  if (!rows.length) {
    return res.redirect("/address-book");
  }

  let item = { ...rows[0] };
  const convBirthday = dayjs(item.birthday);
  if (convBirthday.isValid()) {
    item.birthday = convBirthday.format("YYYY-MM-DD");
  } else {
    item.birthday = "";
  }

  res.render("/address-book/address-edit", item);
});

// 編輯資料的功能
router.put("/api/:sid", async (req, res) => {
  const output = {
    success: false,
    error: null,
    errors: {},
    result: {},
    postData: req.body, // 除錯檢查用
  };
  // TODO: 欄位格式檢查
  let isPass = true; // 有沒有通常檢查

  if (req.body.name) {
    let { sid, name, email, mobile, birthday, address } = req.body;
    // 檢查姓名欄位
    if (name.length < 2) {
      output.errors.name = "姓名字串長度請大於 2 個字元";
      isPass = false;
      output.error = true;
    }
    // 檢查 email
    if (!email_re.test(email)) {
      output.errors.email = "Email 格式不正確";
      isPass = false;
      output.error = true;
    }
    birthday = dayjs(birthday);
    if (!birthday.isValid()) {
      birthday = null;
    } else {
      birthday = birthday.format("YYYY-MM-DD");
    }

    let result;
    if (isPass) {
      try {
        const sql =
          "UPDATE `address_book` SET `name`=?,`email`=?,`mobile`=?,`birthday`=?,`address`=? WHERE `sid`=? ";

        [result] = await db.query(sql, [
          name,
          email,
          mobile,
          birthday,
          address,
          sid,
        ]);
        output.success = !!result.changedRows;
        output.result = result;
      } catch (ex) {
        output.error = "SQL 錯誤";
        output.ex = ex;
      }
    }
  }

  res.json(output);
});

// router.get("/login", (req, res) => {
//   res.locals.pageName = "login";
//   res.render("address-book/login");
// });

// router.post("/login", (req, res) => {
//   res.json(req.body);
// });

export default router;
