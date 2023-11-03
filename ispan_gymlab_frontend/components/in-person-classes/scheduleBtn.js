import React, { useContext } from 'react'
import styles from '@/styles/class.module.css'
import Swal from 'sweetalert2'
import AuthContext from '@/context/auth-context'
import { useRouter } from 'next/router'
//! 課程-我要報名
export default function ScheduleBtn({ children, classScheduleId, classData }) {
  const { auth } = useContext(AuthContext)
  const router = useRouter()
  function alertBtn() {
    Swal.fire({
      title: '確定要報名此課程嗎?',
      // text: '日期/課程/教練!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '確定!',
      cancelButtonText: '取消',
    }).then((result) => {
      if (result.isConfirmed) {
        //! 如果用戶點擊 "確定"，則執行報名課程的操作

        enrollClass(classScheduleId, classData)
      }
    })
  }

  //!  發送 POST 將課程加到資料庫
  const enrollClass = (classScheduleId) => {
    const className = classData.class_Name
    const instructorName = classData.instructor_name
    const classDate = classData.class_date
    const scheduleId = classData.class_schedule_id
    console.log(classDate.class_date)

    if (auth.token == '') {
      router.push(
        `/member/login?from=${encodeURIComponent(`/in-person-classes`)}`
      )
    } else {
      const data = JSON.stringify({
        classScheduleId,
        className,
        instructorName,
        classDate,
        scheduleId,
        //? 如果後端要拿資料要用跟這幾個名字一樣才拿的到
      })
      console.log(data)

      //! 新增報名課程
      fetch('http://localhost:3002/in-person-classes/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          classScheduleId,
          className,
          instructorName,
          classDate,
          scheduleId,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success === true) {
            console.log(data.success)
            Swal.fire('課程報名成功!', '若要更改請至會員中心!', 'success')
          } else {
            Swal.fire('課程報名失敗!', '請再試一次', 'error')
          }
        })
    }
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button className={styles.schedulebtn} onClick={alertBtn}>
          {children}
        </button>
      </div>
    </>
  )
}
