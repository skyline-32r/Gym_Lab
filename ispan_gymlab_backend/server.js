import express from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const app = express();

app.use(express.json());

const posts = [
  {
    user_id: 1,
    title: "Post 1",
  },
  {
    user_id: 2,
    title: "Post 2",
  },
];

app.post("/login", (req, res) => {
  // Authenticate user
  const user_id = req.body.user_id;
  console.log(user_id);
  const user = { user_id: user_id };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

app.get("/posts", authenticateToken, async (req, res) => {
  res.json(posts.filter((post) => post.user_id == req.user.user_id));
  // const sql = `SELECT * FROM user_courses WHERE user_id=${req.user.user_id}`;
  // const [output] = await db.query(sql);
  // res.json(output);
});

// const port = process.env.WEB_PORT || 3002;
const port = 3003;

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    console.log(req.user.user_id);
    next();
  });
}

app.listen(port, () => {
  console.log(`啓動 server 偵聽埠號${port}`);
});
