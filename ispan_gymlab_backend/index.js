import "dotenv/config";
import express from "express";
import sales from "./data/sales.json" assert { type: "json" };
import multer from "multer";
// import fs from "fs";
import fs from "node:fs/promises";
// import upload from "./modules/upload-imgs.js";
import upload from "./modules/upload-imgs.js";
import onlineCoursesRouter from "./routes/online-courses.js";
import dashboardRouter from "./routes/dashboard.js";
import memberRouter from "./routes/member.js";
import onlineShopRouter from "./routes/online-shop.js";
import cartRouter from "./routes/cart.js";
import inPersonClassesRouter from "./routes/in-person-classes.js";
import forumRouter from "./routes/forum.js";
import admin2Router from "./routes/admin2.js";
import addrBookRouter from "./routes/address-book.js";
import session from "express-session";
import moment from "moment-timezone";
import dayjs from "dayjs";
import db from "./modules/connect.js";
import cors from "cors";
import expressMysqlSession from "express-mysql-session";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const app = express();
const MysqlStore = expressMysqlSession(session);
const sessionStore = new MysqlStore({}, db);
app.set("view engine", "ejs");

// const whitelist = ["http://localhost:3000", "http://localhost:3002"];

const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    console.log({ origin });
    callback(null, true);
  },
};

// var corsOptions = {
//   credentials: true,
//   origin: function (origin, callback) {
//     console.log({ origin });
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

app.use(cors(corsOptions));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: "abcdefg",
    store: sessionStore,
    cookie: {
      maxAge: 1_200_000,
    },
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public/forum"));
app.use((req, res, next) => {
  res.locals.title = "誰的網站";
  res.locals.pageName = "";
  res.locals.session = req.session;

  let auth = req.get("Authorization");
  console.log({ auth });
  // && auth.indexOf("Bearer ") === 0
  if (auth && auth.indexOf("Bearer ") === 0) {
    console.log("auth:", auth);
    // console.log(auth);
    auth = auth.slice(7);
    // auth = auth.split('"')[1];
    // console.log("auth2", auth);
    try {
      // res.locals.jwtData = jwt.verify(auth, process.env.JWT_SECRET);
      jwt.verify(auth, process.env.JWT_SECRET, (err, tokenData) => {
        if (err) {
          console.log("here");
          return res.sendStatus(403);
        }
        req.user = tokenData;
      });
    } catch (ex) {
      console.log(ex);
    }
  }

  next();
});

app.use("/online-courses", onlineCoursesRouter);
app.use("/dashboard", dashboardRouter);
app.use("/member", memberRouter);
app.use("/online-shop", onlineShopRouter);
app.use("/cart", cartRouter);
app.use("/in-person-classes", inPersonClassesRouter);
app.use("/forum", forumRouter);

app.use("/admins", admin2Router);
app.use("/address-book", addrBookRouter);

app.get("/home", (req, res) => {
  res.locals.title = "首頁 | " + res.locals.title;
  res.render("home", { name: "wassup broski" });
});

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// })

app.get("/api", (req, res) => {
  const obj = { name: "jayce", age: 18 };
  res.json(obj);
});

app.get("/json-sales", (req, res) => {
  res.locals.pageName = "json-sales";
  console.log(sales[0]);
  res.json(sales);
});

app.get("/sales", (req, res) => {
  res.render("sales", { sales: sales });
});

app.get("/try-qs", (req, res) => {
  res.json(req.query);
});

app.post("/try-qs", (req, res) => {
  res.json(req.query);
});

app.post("/try-post", (req, res) => {
  res.json(req.body);
});

app.post("/try-upload", upload.single("avatar"), (req, res) => {
  console.log(req.file);
  res.json({
    file: req.file,
    name: req.body,
  });
});

app.post("/try-uploads", upload.array("photos"), (req, res) => {
  res.json(req.files);
});

app.get("/try-post-form", (req, res) => {
  res.locals.pageName = "try-post-form";
  res.render("try-post-form");
});

app.post("/try-post-form", (req, res) => {
  res.locals.pageName = "try-post-form";
  // res.render("try-form-upload", req.body);
  res.json(req.body);
});

app.get("/my-params1/:action?/:id?", (req, res) => {
  res.json(req.params);
});

app.get("/09d{2}-?d{3}-?d{3}", (req, res) => {
  res.json(req.params);
});

app.get("/try-session", (req, res) => {
  req.session.my_var = req.session.my_var || 0;
  req.session.my_var++;
  res.json({
    my_var: req.session.my_var,
    session: req.session,
  });
});

app.get("/try-sess", (req, res) => {
  req.session.my_num = req.session.my_num || 0;
  req.session.my_num++;
  res.json(req.session);
});

app.get("/try-moment", (req, res) => {
  const fm = "YYYY-MM-DD HH:mm:ss";
  const mo1 = moment();
  const mo2 = moment(req.session.cookie.expires);
  const d1 = dayjs();

  res.json({
    "local-mo1": mo1.format(fm),
    "local-mo2": mo2.format(fm),
    "london-mo1": mo1.tz("America/Los_Angeles").format(fm),
    "london-m2": mo2.tz("America/Los_Angeles").format(fm),
    "local-d1": d1.format(fm),
  });
});

app.get("try-db", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM posts LIMIT 5");
  res.json(rows);
});

// const urlencodedParser = express.urlencoded({ extended: false });
// app.post("/try-post", urlencodedParser, (req, res) => {
//     res.json(req.body);
// });

// app.get("/address_book", async (req, res) => {
//     const [rows] = await db.query("SELECT * FROM `address_book` LIMIT 5");
//     res.json(rows);
// })

app.get("/login", (req, res) => {
  res.locals.pageName = "login";
  res.render("login");
});

app.post("/login", async (req, res) => {
  let output = {
    success: false,
    postData: req.body,
    code: 0,
    data: {},
  };

  const sql = `SELECT * FROM members WHERE email=?`;

  const [rows] = await db.query(sql, [req.body.email]);
  if (!rows.length) {
    output.code = 400; // 帳號是錯的
    return res.json(output);
  }
  const member = rows[0];

  let result;
  try {
    result = await bcrypt.compare(req.body.password, member.password);
  } catch {}
  if (!result) {
    output.code = 420; // 密碼是錯的
  } else {
    output.success = true;
    output.code = 200;
    // TODO: 記錄到 session

    req.session.admin = {
      id: member.id,
      email: member.email,
      nickname: member.nickname,
    };
  }

  res.json(output);
});

app.post("/login-jwt", async (req, res) => {
  let output = {
    success: false,
    postData: req.body,
    code: 0,
  };

  const sql = `SELECT * FROM members WHERE email=?`;

  const [rows] = await db.query(sql, [req.body.email]);
  if (!rows.length) {
    output.code = 400; // 帳號是錯的
    return res.json(output);
  }
  const member = rows[0];
  try {
    const result = await bcrypt.compare(req.body.password, member.password);

    if (!result) {
      output.code = 420; // 密碼是錯的
    } else {
      output.success = true;
      output.code = 200;
      // TODO: 記錄到 session

      const payload = {
        id: member.id,
        email: member.email,
        nickname: member.nickname,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET);

      output.data = {
        id: member.id,
        email: member.email,
        nickname: member.nickname,
        token,
      };

      // req.session.admin = {
      //   id: member.id,
      //   email: member.email,
      //   nickname: member.nickname,
      // };
    }
  } catch (ex) {
    console.log("Password did not match");
    console.log(ex);
  }

  res.json(output);
});

// 登出
app.get("/logout", (req, res) => {
  delete req.session.admin;
  res.redirect("/");
});

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));
app.use(express.static("node_modules/jquery/dist"));
app.use(express.static("build"));

let htmlReact = "";

fs.readFile("./build/index.html").then((txt) => {
  htmlReact = txt.toString();
});

app.use((req, res) => {
  res.send(htmlReact);
});

app.use("*", (req, res) => {
  res.status(404);
  res.send("出錯啦，你的錯");
});

const port = process.env.WEB_PORT || 3002;

app.listen(port, () => {
  console.log(`啓動 server 偵聽埠號${port}`);
});
