import express from "express";
import db from "./../modules/connect.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

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

  console.log(rows);

  return rows;
};

router.get("/", async (req, res) => {
  res.locals.pageName = "member";

  const output = await getListData();

  res.json(output);
});

router.get("/logout", async (req, res) => {
  // res.locals.pageName = "member";
  res.redirect("/");
  // res.json(output);
});

// login //登入
router.post("/login", async (req, res) => {
  let output = {
    code: "",
    status: "",
    data: "",
    msg: "",
    accessToken: "",
    user_id: "",
    name: "",
    user_photo: "",
  };
  let { email, password } = req.body;

  try {
    if (email && password) {
      let sql = `SELECT * FROM user_information WHERE email = ? `;
      // sql += `AND email="${req.body.email}" `;
      const [rows] = await db.query(sql, [email]);
      if (!rows.length) {
        output.status = "failed";
        output.msg = "查無此帳號";
        res.json(output);
      } else {
        console.log(rows);
        console.log("password ", password);
        const result = await bcrypt.compareSync(password, rows[0].password);
        if (result) {
          const user = rows[0];
          const accessToken = jwt.sign(user, process.env.JWT_SECRET);
          output.accessToken = accessToken;
          output.code = 200;
          output.user_photo = rows[0].user_photo;
          // output.user_id = user.user_id;
          // output.name = user.name;
          return res.json(output);
        } else {
          output.status = "failed";
          output.msg = "使用者密碼錯誤";
          res.json(output);
        }
      }
    } else {
      output.code = 403;
      return res.json(output);
    }
  } catch (err) {
    console.log(err);
    output.code = 403;
    res.json(output);
  }
});

// google-login //google登入
router.post("/google-login", async (req, res) => {
  let output = {
    code: "",
    status: "",
    data: "",
    msg: "",
    accessToken: "",
    user_id: "",
    name: "",
    error: "",
  };

  // INSERT INTO `user_information` (`user_id`, `name`, `gender`, `birthday`, `home_area`, `address`, `phone`, `tier_id`, `user_photo`, `email`, `password`, `registered_datetime`, `login_google`, `login_facebook`, `isValid`) VALUES (NULL, 'hello', '', NULL, NULL, NULL, NULL, '1', 'data', 'hello@gmail.com', NULL, current_timestamp(), NULL, NULL, 'unlocked');
  try {
    console.log("req.body", req.body);
    const { email, name, picture } = req.body;
    const check = `SELECT * FROM user_information WHERE email = ?`;
    const [checks] = await db.query(check, [email]);
    // if (checks.length != 0) {
    // } else {
      const sql = `INSERT INTO user_information (email, name, user_photo, login_google) VALUES ( '${email}', '${name}', '${picture}', 1 ) `;
      const [result] = await db.query(sql);
      console.log(result);
    // }

    const sql2 = `SELECT * FROM user_information WHERE email = "${email}" and name = "${name}"`;
    const [[user]] = await db.query(sql2);
    const accessToken = jwt.sign(user, process.env.JWT_SECRET);
    output.accessToken = accessToken;
    output.code = 200;
  } catch (ex) {
    output.msg = "google登入錯誤";
    output.error = ex;
    console.log(ex);
  }
  res.json(output);
});

router.get("/getData", async (req, res) => {
  // console.log("hi");
  // console.log(req.user)
  res.json(req.user);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  res.locals.pageName = "member";

  res.json("ok");
});

router.post("/register", async (req, res) => {
  res.locals.pageName = "register";
  let output = {
    code: "",
    status: "",
    data: "",
    accessToken: "",
    msg: "",
  };
  // console.log(req.body);
  try {
    if (!req.body) {
      output.status = "failed";
      output.msg = "註冊失敗,沒有資料";
      res.json(output);
    } else {
      let {
        email,
        password,
        gender,
        name,
        home_area = country + town,
        address,
        phone,
        country,
        town,
      } = req.body;
      // console.log("email ", email);
      const check = `SELECT * FROM user_information WHERE email= ?`;
      const [checks] = await db.query(check, [email]);
      // console.log('checks ', checks)
      if (checks.length != 0) {
        output.msg = "此信箱已經註冊過了";
      } else {
        let passwordb = await bcrypt.hash(req.body.password, 10);
        // console.log('passwordb ', passwordb)
        let sql = `INSERT INTO user_information (email, password, gender, name, home_area, address, phone) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const [rows] = await db.query(sql, [
          email,
          passwordb,
          gender,
          name,
          home_area,
          address,
          phone,
        ]);
        // console.log("rows ", rows);
        // console.log("rows.affectedRows ", rows.affectedRows);
        if (!rows.affectedRows) {
          output.status = "failed";
          output.msg = "註冊失敗,資料是空的";
          res.json(output);
        } else {
          output.status = "success";
          output.msg = "註冊成功";
        }
      }
    }
  } catch (ex) {
    console.log(ex);
    output.status = "error";
    output.msg = "發生錯誤";
  }
  res.json(output);
});

router.post("/recovery1", async (req, res) => {
  let output = {
    verification: "",
    msg: "",
  };

  function generateRandomString(length) {
    const lettersAndDigits =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomVal = "";
    for (let i = 0; i < length; i++) {
      randomVal += lettersAndDigits.charAt(
        Math.floor(Math.random() * lettersAndDigits.length)
      );
    }
    return randomVal;
  }

  const randomString = generateRandomString(6);
  // console.log(randomString);

  const verification = generateRandomString(6);
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    // secure: true,
    secureConnection: false,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "thinfu012313690258@gmail.com",
      pass: "U5190RLjqgbJABO7", // Master Password
    },
  });

  // async..await is not allowed in global scope, must use a wrapper
  // async function main() {
  // send mail with defined transport object
  try {
    const info = await transporter.sendMail({
      from: "Gym_Lab<ispanTeam1_gym_lab@iSpan.com>", // sender address
      to: req.body.email, // list of receivers
      // to: "ispanTeam1@gmail.com", // list of receivers
      subject: "感謝您使用Gym_Lab找回密碼服務", // Subject line
      text: `先生/小姐您好，此為您的驗證碼${verification}，20分鐘內有效
      
      
      
      敬祝 順心
      Gym_Lab團隊敬上
      `, // plain text body
      // html: "<b>此為驗證碼</b>", // html body
    });
    output.verification = verification;
    output.msg = "寄信成功";
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
    // }
  } catch (error) {
    console.log(error);
  }
  // console.log("hi");
  // main().catch(console.error);
  console.log(output);
  res.json(output);
});
router.delete("/test", (req, res) => {
  // res.json(bcrypt.compare())
});
router.put("/recovery2", async (req, res) => {
  let output = {
    code: "",
    status: "",
    data: "",
    accessToken: "",
    msg: "",
    error: "",
  };
  // console.log("req.body ", req.body);
  const email = req.body.email;
  let passwordb = await bcrypt.hash(req.body.password, 10);
  // console.log("req.body.password ", req.body.password);
  // console.log("passwordb ", passwordb);
  try {
    const sql = `UPDATE user_information SET password = '${passwordb}' WHERE user_information.email = '${email}'`;
    const [result] = await db.query(sql);
    if (result.affectedRows) {
      output.msg = "重設密碼成功";
    }
    console.log(result);
  } catch (ex) {
    console.log(ex);
    output.msg = "其他錯誤";
    output.error = ex;
  }
  res.json(output);
});
export default router;
