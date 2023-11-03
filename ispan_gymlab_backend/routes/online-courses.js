import express from "express";
import db from "./../modules/connect.js";
const router = express.Router();

const getListData = async (query) => {
  // Popular courses
  // New courses
  // All/filtered courses

  // Left join course table with view that contains course (avg) ratings, and then join with instructor table
  // Used "USING" keyword to avoid having columns with same field name
  let {
    minRatingFilter,
    durationLowerBounds,
    durationUpperBounds,
    courseCategoriesId,
    priceLowerBound,
    priceUpperBound,
    sortSetting,
    searchCourse,
  } = query;
  console.log(sortSetting);
  // let sql =
  //   "SELECT * FROM (SELECT * FROM `course` LEFT JOIN `avg_course_rating` USING (course_id)) as course_info JOIN `instructor` using (instructor_id) WHERE 1 ";
  let sql =
    "SELECT * FROM (SELECT * FROM `course` LEFT JOIN `avg_course_rating` USING (course_id)) as course_info JOIN `instructor` USING (instructor_id) LEFT JOIN (SELECT course_id, count(*) AS sales_volume FROM user_courses GROUP BY course_id) AS course_sales_volume USING (course_id) WHERE 1 ";

  let sqlCount =
    "SELECT COUNT(*) AS totalRows FROM (SELECT * FROM `course` LEFT JOIN `avg_course_rating` USING (course_id)) as course_info JOIN `instructor` USING (instructor_id) LEFT JOIN (SELECT course_id, count(*) AS sales_volume FROM user_courses GROUP BY course_id) AS course_sales_volume USING (course_id) WHERE 1 ";

  if (minRatingFilter) {
    sql += `AND avg_course_rating >= ${minRatingFilter} `;
    sqlCount += `AND avg_course_rating >= ${minRatingFilter} `;
  }

  const secondsPerMin = 60;
  if (durationLowerBounds) {
    durationLowerBounds = durationLowerBounds.split(",");
    const durationLowerBoundSec =
      Math.min(...durationLowerBounds) * secondsPerMin;
    sql += `AND course_duration >= ${durationLowerBoundSec} `;
    sqlCount += `AND course_duration >= ${durationLowerBoundSec} `;
  }
  if (durationUpperBounds) {
    durationUpperBounds = durationUpperBounds.split(",");
    const durationUpperBoundSec =
      Math.max(...durationUpperBounds) * secondsPerMin;

    sql += `AND course_duration <= ${durationUpperBoundSec} `;
    sqlCount += `AND course_duration <= ${durationUpperBoundSec} `;
  }

  if (priceLowerBound) {
    sql += `AND course_price >= ${priceLowerBound} `;
    sqlCount += `AND course_price >= ${priceLowerBound} `;
  }
  if (priceUpperBound) {
    sql += `AND course_price <= ${priceUpperBound} `;
    sqlCount += `AND course_price <= ${priceUpperBound} `;
  }
  if (courseCategoriesId) {
    sql += `AND category_id IN (${courseCategoriesId})`;
    sqlCount += `AND category_id IN (${courseCategoriesId})`;
  }
  if (searchCourse) {
    sql += `AND LOWER(course_name) LIKE LOWER("%${searchCourse}%") `;
    sqlCount += `AND LOWER(course_name) LIKE LOWER("%${searchCourse}%") `;
  }
  const mapSort = {
    mostPopular: "sales_volume",
    highestRated: "avg_course_rating",
    new: "creation_date",
  };

  if (sortSetting) {
    const sortValue = mapSort[sortSetting];

    // Add sort to sql statement
    sql += `ORDER BY ${sortValue} DESC `;
  }

  // const [rows] = await db.query(sql);

  // const output = rows;

  const perPage = 10;
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

  let page = parseInt(query.page) || 1;
  console.log("page: ", page);
  if (page < 1) {
    res.redirect = "?page=" + 1;
    res.info = "page 不能小於 1";
    return output;
  }

  const [[{ totalRows }]] = await db.query(sqlCount);
  console.log("totalRows: ", totalRows);
  if (totalRows > 0) {
    const totalPages = Math.ceil(totalRows / perPage);
    if (page > totalPages) {
      res.redirect = "?page=" + totalPages;
      res.info = "page 不能大於" + page;
      return output;
    }
    console.log("in if statement");
    const sql2 = `${sql} LIMIT ${(page - 1) * perPage}, ${perPage}`;
    const [rows] = await db.query(sql2);

    //   for (let row of rows) {
    //     if (row.birthday) {
    //       row.birthday = dayjs(row.birthday).format("YYYY-MM-DD");
    //     } else {
    //       row.birthday = "";
    //     }
    //   }
    output.success = true;
    output = { ...output, totalRows, totalPages, rows, page };
    return output;
  }
  return output;
};

router.get("/", async (req, res) => {
  res.locals.pageName = "online-courses";
  const query = req.query;
  // const onlineCourses = [];
  // const result = {
  //   onlineCourses: [],
  //   error: "",
  // };

  const result = await getListData(query);
  res.json(result);
});

router.get("/recommend-section", async (req, res) => {
  const query = req.query;
  let output = {
    success: false,
    redirect: "",
    info: "",
    rows: [],
  };
  // const onlineCourses = [];
  // const result = {
  //   onlineCourses: [],
  //   error: "",
  // };
  const sql =
    "SELECT * FROM `course` LEFT JOIN `avg_course_rating` USING (course_id) JOIN `instructor` USING (instructor_id) WHERE 1 ORDER BY creation_date DESC LIMIT 10;";

  // ("SELECT * FROM (SELECT * FROM `course` LEFT JOIN `avg_course_rating` USING (course_id)) as course_info JOIN `instructor` USING (instructor_id) LEFT JOIN (SELECT course_id, count(*) AS sales_volume FROM user_courses GROUP BY course_id) AS course_sales_volume USING (course_id) WHERE 1 ");

  const [result] = await db.query(sql);
  output.rows = result;
  res.json(output);
});

router.get("/my-online-courses", async (req, res) => {
  const user_id = req.user.user_id;
  console.log("retrieving my-online-courses");
  console.log("user_id");
  console.log(user_id);

  const output = {
    success: false,
    redirect: "",
    info: "",
    result: "",
    err: "",
  };

  try {
    if (user_id) {
      const sql = `SELECT * FROM user_courses JOIN user_information using (user_id) JOIN course using (course_id) JOIN instructor using (instructor_id) WHERE 1 AND user_id=${user_id};`;
      console.log(sql);
      const [rows] = await db.query(sql);
      output.rows = rows;
      const userCommentsSql = `SELECT * FROM course_reviews JOIN user_information using (user_id) WHERE user_id=${user_id}`;
      const [userComments] = await db.query(userCommentsSql);
      output.userComments = userComments;
      output.success = true;
    }
  } catch (err) {
    output.err = err;
  }
  res.json(output);
});

router.get("/:ocid", async (req, res) => {
  const ocid = req.params.ocid;

  // console.log(uid)
  console.log("req.user");
  console.log(req.user);
  const output = {
    success: false,
    redirect: "",
    info: "",
    courseData: {},
    err: "",
    courseAddedToCart: false,
    coursePurchased: false,
  };

  try {
    const sql = `SELECT * FROM (SELECT * FROM course LEFT JOIN avg_course_rating USING (course_id)) as course_info JOIN instructor USING (instructor_id) LEFT JOIN (SELECT course_id, count(*) AS sales_volume FROM user_courses GROUP BY course_id) AS course_sales_volume USING (course_id) WHERE 1 AND course_id=${ocid}`;

    const [[courseData]] = await db.query(sql);
    output.courseData = courseData;

    const courseCommentsSql = `SELECT * FROM course_reviews JOIN user_information using (user_id) WHERE course_id=${ocid} ORDER BY creation_date DESC`;

    const [courseCommentsData] = await db.query(courseCommentsSql);
    output.courseCommentsData = courseCommentsData;
    if (req.user) {
      const user_id = req.user.user_id;
      const sqlUserCourseCart = `SELECT * FROM course_cart WHERE course_id=${ocid} AND user_id=${user_id}`;
      const [userCourseCartData] = await db.query(sqlUserCourseCart);
      if (userCourseCartData.length) {
        output.courseAddedToCart = true;
      }
      const sqlUserCourse = `SELECT * FROM user_courses WHERE course_id=${ocid} AND user_id=${user_id}`;
      const [userCourseData] = await db.query(sqlUserCourse);
      if (userCourseData.length) {
        output.coursePurchased = true;
      }
    }
    output.success = true;
  } catch (err) {
    output.err = err;
  }
  res.json(output);
});

router.post("/:ocid/addToCart", async (req, res) => {
  const output = {
    success: false,
    redirect: "",
    info: "",
    rows: [],
    err: "",
  };

  if (req.user) {
    const user_id = req.user.user_id;
    const ocid = req.params.ocid;
    console.log(user_id);
    // const user_id = 1;
    // const course_id = 2;

    try {
      const sql = `INSERT INTO course_cart (user_id, course_id)
    VALUES (${user_id},${ocid});`;
      console.log(sql);
      const [result] = await db.query(sql);
      output.result = result;
      output.success = true;
    } catch (err) {
      output.err = err;
    }
  }
  res.json(output);
});

router.get("/:ocid/course-video", async (req, res) => {
  const user_id = req.user.user_id;

  const course_id = req.params.ocid;
  console.log(user_id);

  const output = {
    success: false,
    redirect: "",
    info: "",
    rows: [],
    selectedCourse: {},
    err: "",
  };

  try {
    const sql = `SELECT * FROM user_courses JOIN course using (course_id) JOIN instructor using (instructor_id) WHERE 1 AND user_id=${user_id} AND course_id !=${course_id};`;
    console.log(sql);
    const [rows] = await db.query(sql);
    const sqlCourse = `SELECT * FROM user_courses JOIN course using (course_id) JOIN instructor using (instructor_id) WHERE 1 AND user_id=${user_id} AND course_id =${course_id};`;
    console.log(sql);
    const [[selectedCourse]] = await db.query(sqlCourse);
    output.rows = rows;
    output.selectedCourse = selectedCourse;
    output.success = true;
    res.json(output);
  } catch (err) {
    output.err = err;
    res.json(output);
  }
});

router.post("/my-online-courses/:uid", async (req, res) => {
  const user_id = req.params.uid;
  const courseRating = req.body.courseRating;
  const review = req.body.review;
  const course_id = req.body.courseId;
  const commentExists = req.body.commentExists;
  console.log(commentExists);
  console.log(commentExists == true);
  console.log(user_id, courseRating, review, course_id);
  const output = {
    success: false,
    redirect: "",
    info: "",
    result: "",
    err: "",
  };

  try {
    if (courseRating && review && course_id) {
      let sql;
      if (commentExists == true) {
        sql = `UPDATE course_reviews SET rating=${courseRating}, review_comment="${review}", creation_date=CURRENT_DATE() WHERE 1 AND user_id=${user_id} AND course_id=${course_id}`;
      } else {
        sql = `INSERT INTO course_reviews (user_id, course_id, review_comment, rating, creation_date) VALUES (?,?,?,?,CURRENT_DATE())`;
      }
      console.log(sql);
      const [result] = await db.query(sql, [
        user_id,
        course_id,
        review,
        courseRating,
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

router.delete("/my-online-courses/:uid", async (req, res) => {
  const user_id = req.params.uid;
  const course_id = req.body.courseId;
  const commentExists = req.body.commentExists;
  console.log(commentExists);
  console.log(commentExists == true);
  const output = {
    success: false,
    redirect: "",
    info: "",
    result: "",
    err: "",
  };

  try {
    if (commentExists && user_id && course_id) {
      let sql;
      sql = `DELETE FROM course_reviews WHERE user_id=? AND course_id=?`;

      console.log(sql);
      const [result] = await db.query(sql, [user_id, course_id]);

      output.success = true;
      output.result = result;
    }
  } catch (err) {
    output.err = err;
  }
  res.json(output);
});

export default router;
