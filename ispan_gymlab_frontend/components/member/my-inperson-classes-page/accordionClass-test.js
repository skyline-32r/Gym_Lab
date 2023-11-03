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
}) {
  const [selectedOption, setSelectedOption] = useState(class_date) // Initialize the selected option in the state
  const [date, setDate] = useState('')
  const [timePeriod, setTimePeriod] = useState('')
  const class_date_format = class_date.slice(0, 10).split('-').join('/')

  console.log(data)

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
  console.log('schedule.class_id:')
  console.log(schedule)

  // !  修改的路由
  const updateitem = async (id) => {
    const delid_send = {
      class_id: id,
    }
    try {
      const res = await fetch('http://localhost:3002/dashboard/updateclass', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(delid_send),
      })
      if (res) {
        const res_data = await res.json()
        console.log(res_data)
        // reloadEnroll()
      }
    } catch (ex) {
      result = ex
      console.log(ex)
    }
  }
  //! 修改
  console.log('This is the data')
  console.log(data)
  // 创建一个包含现有选项的 options 对象

  // const options = {
  // 'Option 1': 'value1',
  // 'Option 2': 'value2',
  // 'Option 3': 'value3',
  // 'Option 4': 'value4',
  // }
  // 创建第二个下拉选择框的选项对象
  // const options2 = {
  //   'Option 5': 'value5',
  //   'Option 6': 'value6',
  //   'Option 7': 'value7',
  // }

  const sameClasses = schedule.filter((v, i) => {
    return v.class_id == class_id
  })

  // const options = {}
  const options = []
  for (let i = 0; i < sameClasses.length; i++) {
    let name = sameClasses[i].class_date
    let value = sameClasses[i].class_date.slice(0, 10).split('-').join('/')

    options[i] = { name, value }
  }

  console.log(date)
  // useEffect(() => {})
  // const options = sameClasses.map((v, i) => {
  //   return value.class_date:v.class_date[10].split("-").join("/")}
  // })

  //? console.log(options)

  // const options = schedule.map((v, i) => {
  //   return (v.class_id == class_id

  // })
  // schedule
  //   .map((v, i) => {
  //     return v.class_id === class_id
  //       ? `<option value=${i + 1}>${class_date_format}</option>`
  //       : ''
  //   })
  // $('.chosen').css('width', '450px')

  function myFunction(e) {
    setDate(e.target.value)
  }
  console.log(schedule)
  //!  修改的alert
  function updateBtn() {
    console.log(class_name)
    Swal.fire({
      title: '更改課程日期',
      text: '課程',
      icon: 'warning',
      html:
        `<div>${class_name}</div>` +
        `<br/>` +
        `<select id="menu2" className="swal2-input" value="${date}" onChange="${myFunction}(event)">` +
        // `<option value="">${class_date_format}</option>` +
        // `${matchingDates
        //   .map((date, i) => {
        //     return `<option value=${i}>${date}</option>`
        //   })
        //   .join('')}` +
        // `${schedule
        //   .map((v, i) => {
        //     return v.class_id === class_id
        //       ? `<option value=${i + 1}>${class_date_format}</option>`
        //       : ''
        //   })
        //   .join('')}}` +
        `${options
          .map((v, i) => {
            return `<option value=${v.name}>${v.value}</option>`
          })
          .join('')}` +
        // '<option value="hello">123</option>' +
        '</select>' +
        '&nbsp;' +
        '&nbsp;' +
        '<select id="menu3" className="swal2-input">' +
        // `<option value="">${time}</option>` +
        `${schedule
          .map((v, i) => {
            return v.class_id === class_id
              ? `<option value=${i}>${time}</option>`
              : ''
          })
          .join('')}}` +
        // '<option value="3">3</option>' +
        '</select>',

      inherit_select_classes: true,
      showCancelButton: true,
      confirmButtonText: '確定',
      cancelButtonColor: '#d33',
      cancelButtonText: '取消',
      confirmButtonColor: '#3085d6',
      inputValue: 2,
      inputAttributes: {
        style: 'width: 50px;', // 在這裡設定下拉式選單的寬度
      },
      //? inputOptions: options,
      preConfirm: (value) => {
        if (!value) {
          const selectedValue1 = document.getElementById('menu1').value
          const selectedValue2 = document.getElementById('menu2').value
          const selectedValue3 = document.getElementById('menu3').value
          return { menu1: selectedValue1, menu2: 'hello' }
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('hello')
        const selectedOption = document.getElementedById('menu2').value
        setDate(selectedOption)
        // Swal.fire('已修改課程', '', 'success')
        // updateitem(enroll_id)
        // reloadEnroll()
      }
    })
  }
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

  // console.log(class_date)
  // const dates = [23, 24, 25, 26, 27, 28, 29]
  // const date = '2023/10/' + `${dates[0]}`

  return (
    <>
      <Accordion expanded={false} sx={{ backgroundColor: '#F9F9F9' }}>
        <AccordionSummary>
          <Box sx={{ width: '5%', flexShrink: 0, ml: 5 }}>
            <div
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
            </div>
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
            <div style={{ marginRight: '100px' }}>
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
              </div>
            </div>
            <div style={{ display: 'flex', marginLeft: '100px' }}>
              <div>
                <BorderColorRoundedIcon
                  onClick={updateBtn}
                ></BorderColorRoundedIcon>
              </div>
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
                ></MuiSelect>
              </div>
              <SweetAlertt
                class_name={class_name}
                instructor_name={instructor_name}
                class_date={class_date}
                time={time}
                enroll_id={enroll_id}
                reloadEnroll={reloadEnroll}
                class_id={class_id}
                data={data}
              />
              <div style={{ marginLeft: '20px' }}>
                <DeleteIcon onClick={delBtn}></DeleteIcon>
              </div>
            </div>
          </div>
        </AccordionSummary>
      </Accordion>
    </>
  )
}
