import express from "express";
import db from "./../modules/connect.js";
import multer from "multer";

const router = express.Router();

router.get("/", async (req, res) => {
  // res.locals.pageName = "online-courses";
  // const category = req.query.category;
  let output = {
    success: false,
    redirect: "",
    info: "",
    data: [],
  };

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 15;
  const category = req.query.category || "";
  let categoryString = "";
  if (category) {
    categoryString = `AND category = "${category}"`;
  }
  const [[{ totalRows }]] = await db.query(
    `SELECT COUNT(1) totalRows FROM posts WHERE 1 ${categoryString}`
  );
  let totalPages = 0;
  if (totalRows > 0) {
    totalPages = Math.ceil(totalRows / limit);
    if (page > totalPages) {
      output.info = "不大於總頁數";
      return res.json(output);
    }
  }
  // const posts = await db.query("SELECT * FROM posts LIMIT ? OFFSET ?", [
  //   limit,
  //   offset,
  // ]);
  // const totalPosts = await db.query("SELECT COUNT(*) as count FROM posts");
  // const totalPages = Math.ceil(totalPosts[0].count / limit);
  let sql = `SELECT * FROM posts WHERE 1 ${categoryString} ORDER BY post_id DESC LIMIT ${
    (page - 1) * limit
  },${limit} `;

  const [rows] = await db.query(sql);
  // const [row1] = await db.query("SELECT * FROM `post_likes_dislikes` WHERE 1");

  res.json({
    data: rows,
    totalPages: totalPages,
    totalRows: totalRows,
    currentPage: page,
  });
  //   res.json(row1);
  //   res.json(output);
});
router.use("/uploads", express.static("uploads"));

router.post("/mypost", async (req, res) => {
  let output = {
    success: false,
    redirect: "",
    info: "",
    data: [],
  };

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 15;
  const category = req.query.category || "";
  const [[{ totalRows }]] = await db.query(
    `SELECT COUNT(1) totalRows FROM posts`
  );
  let totalPages = 0;
  if (totalRows > 0) {
    totalPages = Math.ceil(totalRows / limit);
    if (page > totalPages) {
      output.info = "不大於總頁數";
      return res.json(output);
    }
  }

  // let sql = `SELECT * FROM posts WHERE 1 ORDER BY post_id DESC LIMIT ${
  //   (page - 1) * limit
  // },${limit}`;
  // res.locals.pageName = "online-courses";
  const sql = `SELECT * FROM posts WHERE user_id = 999 ORDER BY post_id DESC LIMIT ${
    (page - 1) * limit
  },${limit}`;
  const [rows] = await db.query(sql);
  console.log(rows);
  // res.json(rows);
  res.json({
    data: rows,
    totalPages: totalPages,
    totalRows: totalRows,
    currentPage: page,
  });
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/forum");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "." + file.originalname.split(".")[1]);
  },
});
const upload = multer({ storage: storage });

router.post("/create", upload.single("post_img"), async (req, res) => {
  let output = {
    msg: "",
  };
  // console.log(req.body);
  // console.log(req.file);
  console.log(req.user);
  if (!req.user) {
    output.msg = "請先登入";
    return res.json(output);
  }
  try {
    if (!req.body) {
      output.status = "failed";
      output.msg = "新建失敗";
      res.json(output);
    }
    let {
      post_id,
      user_id,
      post_title, //
      post_content, //
      post_date,
      post_time,
      mood_type_id, //
      post_img, //
      category, //
    } = req.body;

    if (post_title === "") {
      output.status = "failed";
      output.msg = "新建失敗";
      return res.json(output);
    }
    let sql =
      "INSERT INTO `posts`(`user_id`,`post_title`, `post_content`, `mood_type_id`, `post_img`, `category`)  VALUES (?,?,?,?,?,?)";

    const [rows] = await db.query(sql, [
      req.user.user_id,
      post_title,
      post_content,
      mood_type_id,
      req.file.filename,
      category,
    ]);

    console.log("rows", rows);
    console.log("rows, affectndRows", rows.affectedRows);

    if (!rows.affectedRows) {
      output.status = "failed";
      output.msg = "新建失敗";
      return res.json(output);
    }
    output.status = "success";
    output.msg = "新建成功";
    return res.json(output);
  } catch (ex) {
    console.log(ex);
    output.msg = "Error";
    res.json(output);
  }
});
router.get("/edit", async (req, res) => {
  const output = {
    msg: "",
    data: {},
  };
  const { post_title, category, mood_type_id, post_content, post_img } =
    req.body;
  const postId = req.query.post_id;
  console.log(postId);
  // "UPDATE posts SET post_title=?, category=?, mood_type_id=?, post_content=?, post_img=? WHERE post_id=?";
  if (postId) {
    let sql = `SELECT * from posts where 1 and post_id = ${postId} `;
    try {
      let [rows] = await db.query(sql, [
        post_title,
        category,
        mood_type_id,
        post_content,
        post_img,
        postId,
      ]);
      output.msg = "取得成功";
      output.data = rows;

      // res.json({ msg: "修改成功" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "伺服器錯誤" });
    }
  } else {
    output.msg = "沒有這則貼文";
  }
  res.json(output);
  // javascript
  // Copy code

  //
  router.put("/edit", upload.single("post_img"), async (req, res) => {
    console.log(123);
    // return res.json(123);
    let output = {
      status: "",
      code: "",
      msg: "",
    };
    try {
      console.log("req: ", req.body);
      const {
        post_title,
        category,
        mood_type_id,
        post_content,
        post_img,
        post_id,
      } = req.body;

      // "UPDATE `posts` SET post_title=?, category=?, mood_type_id=?, post_content=?, post_img=? WHERE post_id=?";
      let sql = `UPDATE posts SET post_title='${post_title}', category='${category}', mood_type_id=${mood_type_id}, post_content='${post_content}', post_img='${req.file.filename}' WHERE post_id=${post_id}`;
      // postId = req.query.post_id;
      // console.log(postId);
      const [edit] = await db.query(sql);
      console.log(sql);
      console.log(edit);
      if (edit.affectedRows) {
        output.msg = "修改成功";
      } else {
        output.msg = "修改失敗";
      }
    } catch (ex) {
      console.log(ex);
    }
    res.json(output);

    // 假設有一個updatePost函數來更新資料庫
    // updatePost(
    //   post_id,
    //   post_title,
    //   category,
    //   mood_type_id,
    //   post_content,
    //   post_img
    // )
    // .then(() => {
    //   res.json({ msg: "修改成功" });
    // })
    // .catch((err) => {
    //   console.error(err);
    //   res.json({ msg: "修改失敗" });
    // });
    // res.json(sql);
  });
});
router.delete("/delete/:postId", async (req, res) => {
  let output = {
    msg: "",
  };

  const postId = req.params.postId;

  try {
    let sql = "DELETE FROM `posts` WHERE post_id = ?";
    const [rows] = await db.query(sql, [postId]);

    if (rows.affectedRows) {
      output.msg = "刪除成功";
      res.json(output);
    } else {
      output.msg = "刪除失敗";
      res.json(output);
    }
  } catch (ex) {
    console.log(ex);
    output.msg = "Error";
    res.json(output);
  }
});

export default router;
