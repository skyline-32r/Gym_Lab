import express from "express";
import db from "./../modules/connect.js";
const router = express.Router();

router.use((req, res, next) => {
  next();
});
//!  課表呈現
router.get("/", async (req, res) => {
  // const sql = `SELECT * FROM class_schedule`
  const branchId = req.query.branchId

  //? 10-12點
  const sql = `SELECT class_s.time_id,
        class_t.time,
        class_s.class_schedule_id,
        class_s.weekday,
        class_s.class_date,
        class_s.instructor_id,
        it.instructor_name,
        class_s.class_id,
        ipc.class_name,
        class_s.branch_id,
        bl.branch_name
    FROM class_schedule class_s
      JOIN class_time class_t ON class_s.time_id = class_t.time_id
      JOIN instructor it ON class_s.instructor_id = it.instructor_id
      JOIN branch_location bl ON class_s.branch_id = bl.branch_id
      JOIN in_person_classes ipc ON class_s.class_id = ipc.class_id
    WHERE class_t.time_id = 1 and class_s.branch_id= ${branchId}
    ORDER BY class_s.weekday ASC `
  const [r1] = await db.query(sql)

  //? 14-16點
  const sql2 = `SELECT class_s.time_id,
        class_t.time,
        class_s.class_schedule_id,
        class_s.weekday,
        class_s.class_date,
        class_s.instructor_id,
        it.instructor_name,
        class_s.class_id,
        ipc.class_name,
        class_s.branch_id,
        bl.branch_name
    FROM class_schedule class_s
      JOIN class_time class_t ON class_s.time_id = class_t.time_id
      JOIN instructor it ON class_s.instructor_id = it.instructor_id
      JOIN branch_location bl ON class_s.branch_id = bl.branch_id
      JOIN in_person_classes ipc ON class_s.class_id = ipc.class_id
    WHERE class_t.time_id = 2 and class_s.branch_id= ${branchId}
    ORDER BY class_s.weekday ASC `
  const [r2] = await db.query(sql2)

  //? 18-20點
  const sql3 = `SELECT class_s.time_id,
        class_t.time,
        class_s.class_schedule_id,
        class_s.weekday,
        class_s.class_date,
        class_s.instructor_id,
        it.instructor_name,
        class_s.class_id,
        ipc.class_name,
        class_s.branch_id,
        bl.branch_name
    FROM class_schedule class_s
      JOIN class_time class_t ON class_s.time_id = class_t.time_id
      JOIN instructor it ON class_s.instructor_id = it.instructor_id
      JOIN branch_location bl ON class_s.branch_id = bl.branch_id
      JOIN in_person_classes ipc ON class_s.class_id = ipc.class_id
    WHERE class_t.time_id = 3 and class_s.branch_id= ${branchId}
    ORDER BY class_s.weekday ASC `
  const [r3] = await db.query(sql3)
  res.json({ r1, r2, r3 })
})

//!  新增課程
router.post("/add", async (req, res) => {
  try {
    // const output = {
    //   success: false,
    //   errors: {},
    //   result: {},
    //   postData: req.body
    // }
    let { classScheduleId, scheduleId } = req.body
    // 如果需要，在此處進行更多驗證和身份驗證。

    // parseInt 函式會把第一個參數變成字串
    // (req.params.sid)拿到回傳參數裡面的sid
    // const sid = parseInt(req.params.sid)

    // const schedule_id = req.body.class_schedule_id
    // const classDate = req.body.class_date
    console.log('class date: ', req.body)
    const sql = `
    INSERT INTO class_enrollment 
    (enroll_id, user_id,  class_schedule_id) 
    VALUES 
    (DEFAULT, '999',  '${scheduleId}');`

    const result = await db.query(sql, [classScheduleId, scheduleId])
    // const [result] = await db.query(sql, [
    //   enroll_id,
    //   user_id,
    //   class_date,
    //   class_schedule_id
    // ])
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

export default router;
