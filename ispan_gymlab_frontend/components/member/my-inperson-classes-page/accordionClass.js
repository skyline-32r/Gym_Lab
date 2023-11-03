import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import { useState, useEffect } from 'react'
import { Box, Tabs, Tab } from '@mui/material'
import Swal from 'sweetalert2'
import DeleteIcon from '@mui/icons-material/Delete'
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded'
import { result } from 'lodash'
import { output } from '@/next.config'
import MuiSelect from './muiSelect'
import { FaVuejs } from 'react-icons/fa'
import SweetAlertt from '@/components/in-person-classes/SweetAlertt'

export default function AccordionClass({
  enroll_id,
  class_date,
  time,
  class_name,
  instructor_name,
  reloadEnroll,
  class_id,
  data,
  class_schedule_id,
  branch_id,
  branch_name,
}) {
  // const [selectedOption, setSelectedOption] = useState(class_date) // Initialize the selected option in the state
  const [date, setDate] = useState('')
  // const [timePeriod, setTimePeriod] = useState('')
  const class_date_format = class_date.slice(0, 10).split('-').join('/')

  // console.log(class_date)

  //! 拿到課表所有課程的路由
  const [schedule, setSchedule] = useState([])
  useEffect(() => {
    // console.log('In the useeffect')
    fetch('http://localhost:3002/dashboard/schedule')
      .then((r) => r.json())
      .then((schedule) => {
        setSchedule(schedule.result)
      })
  }, [])
  console.log(schedule)

  const sameClasses = schedule.filter((v, i) => {
    return v.class_id == class_id
  })

  // const options = {}
  // const options = []
  // for (let i = 0; i < sameClasses.length; i++) {
  //   let name = sameClasses[i].class_date
  //   let value = sameClasses[i].class_date.slice(0, 10).split('-').join('/')

  //   options[i] = { name, value }
  // }

  // function myFunction(e) {
  //   setDate(e.target.value)
  // }
  // console.log(class_date_format)

  // !  刪除的路由
  const removeitem = async (id) => {
    const delid_send = {
      enroll_id: id,
    }
    try {
      const res = await fetch('http://localhost:3002/dashboard/delclass', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(delid_send),
      })
      if (res) {
        const res_data = await res.json()
        console.log(res_data)
        reloadEnroll()
        //TODO:
      }
    } catch (ex) {
      result = ex
      console.log(ex)
    }
  }
  //! 刪除
  function delBtn() {
    Swal.fire({
      title: '確定要刪除此課程嗎?',
      text: `${class_date_format}   ${time}   ${class_name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '確定',
      cancelButtonText: '取消',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('已刪除課程', '', 'success')
        removeitem(enroll_id)
        // reloadEnroll()
      }
    })
  }

  return (
    <>
      <Accordion expanded={false} sx={{ backgroundColor: '#F9F9F9' }}>
        <AccordionSummary>
          <Box sx={{ width: '0%', flexShrink: 0, ml: 5 }}>
            {/* <div
              // 照片家
              style={{
                width: '75px',
                height: '75px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '20px',
              }}
            >
              <img
                src="/images/in-person-classes/classes/05.webp"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                  borderRadius: ' 5px',
                }}
              />
            </div> */}
          </Box>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              alignContent: 'center',
              margin: 'auto',
            }}
          >
            <div style={{ marginRight: '50px' }}>
              <div style={{ display: 'flex' }}>
                <div style={{ marginBottom: '16px' }}>課程日期</div>
                <div style={{ marginLeft: '10px' }}>{class_date_format}</div>
              </div>
              <div style={{ display: 'flex' }}>
                <div>課程名稱</div>
                <div style={{ marginLeft: '10px' }}>{class_name}</div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginBottom: '16px' }}>課程時間</div>
                <div style={{ marginLeft: '10px' }}>{time}</div>
              </div>
              <div style={{ display: 'flex' }}>
                <div>教練姓名</div>
                <div style={{ marginLeft: '10px' }}>{instructor_name}</div>
                <div style={{ display: 'flex', width: '300px' }}>
                  <div style={{ marginLeft: '100px' }}>分店</div>
                  <div style={{ marginLeft: '10px' }}>{branch_name}</div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', marginLeft: '50px' }}>
              <div>
                <MuiSelect
                  class_name={class_name}
                  instructor_name={instructor_name}
                  class_date={class_date}
                  time={time}
                  enroll_id={enroll_id}
                  reloadEnroll={reloadEnroll}
                  class_id={class_id}
                  data={data}
                  class_date_format={class_date_format}
                  schedule={schedule}
                  class_schedule_id={class_schedule_id}
                  branch_id={branch_id}
                  branch_name={branch_name}
                ></MuiSelect>
              </div>

              <div style={{ marginLeft: '20px' }}>
                <DeleteIcon
                  onClick={delBtn}
                  style={{ color: '#FF00B8' }}
                ></DeleteIcon>
              </div>
            </div>
          </div>
        </AccordionSummary>
      </Accordion>
    </>
  )
}
