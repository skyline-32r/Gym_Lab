import React, { useEffect, useState } from 'react'
import styles from '@/styles/class.module.css'
import ScheduleBtn from './scheduleBtn'
import ScheduleClasses from './schedule-classes'
import ScheduleInstructors from './schedule-instructors'
import ScheduleBtn2 from './schedule-btn-confirm'
import { styled } from '@mui/material'
import { FormControl, InputLabel, Select, Box } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'

import Swal from 'sweetalert2'
// import Swal from 'sweetalert2/dist/sweetalert2.js'

//! 本月課表!!!!!
export default function Schedule() {
  const [isMobile, setIsMobile] = useState(false)

  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])
  const [branchId, setBranchId] = useState('1')
  const branches = [
    '大安資展旗艦店',
    '內湖摩天輪分店',
    '中山美美分店',
    '信義101分店',
    '新店新的分店',
    '板橋耶誕城分店',
  ]
  useEffect(() => {
    let query = `?branchId=${branchId}`

    console.log(query)
    fetch(`http://localhost:3002/in-person-classes${query}`)
      .then((r) => r.json())
      .then((data) => {
        setData(data.r1)
        setData2(data.r2)
        setData3(data.r3)
      })
  }, [branchId])
  console.log(data)
  console.log(data2)
  console.log(data3)

  //? 判斷是星期幾
  let week1 = []
  let week2 = []
  let week3 = []

  if (data.length > 0) {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < data.length; j++) {
        if (data[j].weekday == i + 1) {
          week1[i] = data[j]
          break
        }
      }
      if (week1[i] == undefined) {
        week1[i] = null
      }
    }
  }
  // console.log('week1: ', week1)

  if (data2.length > 0) {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < data2.length; j++) {
        if (data2[j].weekday == i + 1) {
          week2[i] = data2[j]
          break
        }
      }
      if (week2[i] == undefined) {
        week2[i] = null
      }
    }
  }
  // console.log('week2: ', week2)

  if (data3.length > 0) {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < data3.length; j++) {
        if (data3[j].weekday == i + 1) {
          week3[i] = data3[j]
          break
        }
      }
      if (week3[i] == undefined) {
        week3[i] = null
      }
    }
  }
  // console.log('week3: ', week3)

  //! 篩選地區
  const [location, setLocation] = React.useState('')
  const handleChange = (event) => {
    setLocation(event.target.value)
  }
  const WhiteSelect = styled(Select)({
    height: '36px',
    padding: '0px',
    color: 'white',
    borderRadius: 'unset',
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '.MuiPaper-root.MuiPopover-paper.MuiMenu-paper': {
      borderRadius: 'unset',
    },
    '.MuiSelect-icon': {
      fill: 'white',
    },
  })
  useEffect(() => {
    // 在组件渲染后获取窗口宽度并设置isMobile状态
    setIsMobile(window.innerWidth <= 414)

    // 添加窗口大小变化的事件监听器
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 414)
    }

    window.addEventListener('resize', handleResize)

    // 清除事件监听器，以防止内存泄漏
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // 传入空数组以确保只在组件挂载时运行

  const TableHeader = styled('div')({
    width: '101px',
    display: 'flex',
    justifyContent: 'center',
  })

  return (
    <>
      {/* 桌機上應用桌機樣式 */}
      {!isMobile && (
        <>
          <div
            style={{
              // width: '300px',
              display: 'flex',
              justifyContent: 'flex-end',
              margin: '20px 480px 0 1000px',
            }}
          >
            <FormControl>
              {/* <InputLabel id="demo-simple-select-label">分店</InputLabel> */}
              <WhiteSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={branchId}
                // label="location"
                onChange={handleChange}
                displayEmpty
              >
                {/* {week1.map((v, i) => {
                  if (v.branch_id === branch_id) {
                    return (
                      <MenuItem key={i} value={v.branch_name}
                      onClick={()=> setBranch(v.branch_id)}>
                        {v.branch_name}
                      </MenuItem>
                    )
                  }
                })} */}
                {/* <MenuItem value="" disabled>
                  <em>選擇分店</em>
                </MenuItem> */}
                {branches.map((branch, idx) => {
                  return (
                    <MenuItem
                      key={idx}
                      value={idx + 1}
                      onClick={() => setBranchId(idx + 1)}
                    >
                      {branch}
                    </MenuItem>
                  )
                })}
                {/* <MenuItem value={1} onClick={() => setBranch(v.branch_id)}>
                  大安資展旗艦店
                </MenuItem>
                <MenuItem value={2} onClick={() => setBranch(v.branch_id)}>
                  內湖摩天輪分店
                </MenuItem>
                <MenuItem value={3} onClick={() => setBranch(v.branch_id)}>
                  淡水美美分店
                </MenuItem>
                <MenuItem value={4} onClick={() => setBranch(v.branch_id)}>
                  信義101分店
                </MenuItem>
                <MenuItem value={5} onClick={() => setBranch(v.branch_id)}>
                  新店新的分店
                </MenuItem>
                <MenuItem value={6} onClick={() => setBranch(v.branch_id)}>
                  板橋耶誕城分店
                </MenuItem> */}
              </WhiteSelect>
            </FormControl>
          </div>
          <div className={isMobile ? 'mobile-style' : styles.scheduleHome}>
            {/* style={{ padding: '30px 20px' }} */}
            <div>
              <div
                className={styles.scheduleTr}
                style={{ padding: '10px 0px' }}
              >
                <div
                  style={{ color: '#00000000', width: '41px', height: '63px' }}
                ></div>
                <TableHeader>10/23(一)</TableHeader>
                <TableHeader>10/24(二)</TableHeader>
                <TableHeader>10/25(三)</TableHeader>
                <TableHeader>10/26(四)</TableHeader>
                <TableHeader>10/27(五)</TableHeader>
                <TableHeader>10/28(六)</TableHeader>
                <TableHeader>10/29(日)</TableHeader>
              </div>
            </div>
            <div className={styles.bb}></div>
            <div>
              <div className={styles.scheduleTr}>
                <div
                  style={{
                    textAlign: 'center',
                  }}
                >
                  10:00
                  <br /> | <br />
                  12:00
                </div>
                {week1.map((v, i) => {
                  return v ? (
                    <div
                      key={'week' + v.class_schedule_id}
                      style={{ padding: '0 15px' }}
                    >
                      <ScheduleClasses>{v.class_name}</ScheduleClasses>
                      <ScheduleInstructors>
                        {v.instructor_name}
                      </ScheduleInstructors>
                      <ScheduleBtn
                        classData={v}
                        classScheduleId={v.class_schedule_id}
                      >
                        我要報名
                      </ScheduleBtn>
                    </div>
                  ) : (
                    <div
                      style={{
                        padding: '0 15px',
                        width: '101px',
                        height: '93px',
                      }}
                    />
                  )
                })}
              </div>
              <div className={styles.bb}></div>
              <div className={styles.scheduleTr}>
                <div
                  style={{
                    textAlign: 'center',
                  }}
                >
                  14:00
                  <br /> | <br />
                  16:00
                </div>
                {week2.map((v, i) => {
                  return v ? (
                    <div
                      key={'week2' + v.class_schedule_id}
                      style={{ padding: '0 15px' }}
                    >
                      <ScheduleClasses>{v.class_name}</ScheduleClasses>
                      <ScheduleInstructors>
                        {v.instructor_name}
                      </ScheduleInstructors>
                      <ScheduleBtn
                        classData={v}
                        classScheduleId={v.class_schedule_id}
                      >
                        我要報名
                      </ScheduleBtn>
                    </div>
                  ) : (
                    <div
                      style={{
                        padding: '0 15px',
                        width: '101px',
                        height: '93px',
                      }}
                    />
                  )
                })}
              </div>
              <div className={styles.bb}></div>
              <div
                className={styles.scheduleTr}
                style={{ borderBottom: 'none' }}
              >
                <div
                  style={{
                    textAlign: 'center',
                  }}
                >
                  18:00
                  <br /> | <br />
                  20:00
                </div>
                {week3.map((v, i) => {
                  return v ? (
                    <div
                      key={'week3' + v.class_schedule_id}
                      style={{ padding: '0 15px' }}
                    >
                      <ScheduleClasses>{v.class_name}</ScheduleClasses>
                      <ScheduleInstructors>
                        {v.instructor_name}
                      </ScheduleInstructors>
                      <ScheduleBtn
                        classData={v}
                        classScheduleId={v.class_schedule_id}
                      >
                        我要報名
                      </ScheduleBtn>
                    </div>
                  ) : (
                    <div
                      style={{
                        padding: '0 15px',
                        width: '101px',
                        height: '93px',
                      }}
                    />
                  )
                })}
              </div>
            </div>
          </div>
          <div style={{ height: '100px' }}></div>
        </>
      )}

      {/* 手機版 */}

      {isMobile && (
        <>
          <div
            className={'mobile-style'}
            style={{
              // backgroundColor: '#000',
              marginTop: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                // backgroundColor: '#000',
              }}
            >
              <div className={styles.day}>一</div>
              <div className={styles.day}>二</div>
              <div className={styles.day}>三</div>
              <div className={styles.day}>四</div>
              <div className={styles.day}>五</div>
              <div className={styles.day}>六</div>
              <div className={styles.day}>日</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginTop: '20px',
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                }}
              >
                10:00 - 12:00
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <ScheduleClasses>有氧入門</ScheduleClasses>
                <ScheduleInstructors>孫希傑</ScheduleInstructors>
                <ScheduleBtn>我要報名</ScheduleBtn>
              </div>

              {/* <div>
              <ScheduleClasses>有氧入門</ScheduleClasses>
              <ScheduleInstructors>孫希傑</ScheduleInstructors>
              <ScheduleBtn>我要報名</ScheduleBtn>
            </div>
            <div>
              <ScheduleClasses>有氧入門</ScheduleClasses>
              <ScheduleInstructors>孫希傑</ScheduleInstructors>
              <ScheduleBtn>我要報名</ScheduleBtn>
            </div>
            <div>
              <ScheduleClasses>有氧入門</ScheduleClasses>
              <ScheduleInstructors>孫希傑</ScheduleInstructors>
              <ScheduleBtn>我要報名</ScheduleBtn>
            </div>
            <div>
              <ScheduleClasses>有氧入門</ScheduleClasses>
              <ScheduleInstructors>孫希傑</ScheduleInstructors>
              <ScheduleBtn>我要報名</ScheduleBtn>
            </div>
            <div>
              <ScheduleClasses>有氧入門</ScheduleClasses>
              <ScheduleInstructors>孫希傑</ScheduleInstructors>
              <ScheduleBtn>我要報名</ScheduleBtn>
            </div>
            <div>
              <ScheduleClasses>有氧入門</ScheduleClasses>
              <ScheduleInstructors>孫希傑</ScheduleInstructors>
              <ScheduleBtn>我要報名</ScheduleBtn>
            </div> */}
            </div>
            <div className={styles.bb}></div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginTop: '20px',
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                }}
              >
                14:00 - 16:00
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <ScheduleClasses>有氧入門</ScheduleClasses>
                <ScheduleInstructors>孫希傑</ScheduleInstructors>
                <ScheduleBtn>我要報名</ScheduleBtn>
              </div>
              {/* <div>
              <ScheduleClasses>有氧入門</ScheduleClasses>
              <ScheduleInstructors>孫希傑</ScheduleInstructors>
              <ScheduleBtn>我要報名</ScheduleBtn>
            </div>
            <div>
              <ScheduleClasses>有氧入門</ScheduleClasses>
              <ScheduleInstructors>孫希傑</ScheduleInstructors>
              <ScheduleBtn>我要報名</ScheduleBtn>
            </div>
            <div>
              <ScheduleClasses>有氧入門</ScheduleClasses>
              <ScheduleInstructors>孫希傑</ScheduleInstructors>
              <ScheduleBtn>我要報名</ScheduleBtn>
            </div>
            <div>
              <ScheduleClasses>有氧入門</ScheduleClasses>
              <ScheduleInstructors>孫希傑</ScheduleInstructors>
              <ScheduleBtn>我要報名</ScheduleBtn>
            </div>
            <div>
              <ScheduleClasses>有氧入門</ScheduleClasses>
              <ScheduleInstructors>孫希傑</ScheduleInstructors>
              <ScheduleBtn>我要報名</ScheduleBtn>
            </div>
            <div>
              <ScheduleClasses>有氧入門</ScheduleClasses>
              <ScheduleInstructors>孫希傑</ScheduleInstructors>
              <ScheduleBtn>我要報名</ScheduleBtn>
            </div> */}
            </div>
            <div className={styles.bb}></div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginTop: '20px',
                paddingBottom: '50px',
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                }}
              >
                18:00 - 20:00
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <ScheduleClasses>有氧入門</ScheduleClasses>
                <ScheduleInstructors>孫希傑</ScheduleInstructors>
                <ScheduleBtn>我要報名</ScheduleBtn>
              </div>
              {/* <div>
              <ScheduleClasses>有氧入門</ScheduleClasses>
              <ScheduleInstructors>孫希傑</ScheduleInstructors>
              <ScheduleBtn>我要報名</ScheduleBtn>
            </div>
            <div>
              <ScheduleClasses>有氧入門</ScheduleClasses>
              <ScheduleInstructors>孫希傑</ScheduleInstructors>
              <ScheduleBtn>我要報名</ScheduleBtn>
            </div>
            <div>
              <ScheduleClasses>有氧入門</ScheduleClasses>
              <ScheduleInstructors>孫希傑</ScheduleInstructors>
              <ScheduleBtn>我要報名</ScheduleBtn>
            </div>
            <div>
              <ScheduleClasses>有氧入門</ScheduleClasses>
              <ScheduleInstructors>孫希傑</ScheduleInstructors>
              <ScheduleBtn>我要報名</ScheduleBtn>
            </div>
            <div>
              <ScheduleClasses>有氧入門</ScheduleClasses>
              <ScheduleInstructors>孫希傑</ScheduleInstructors>
              <ScheduleBtn>我要報名</ScheduleBtn>
            </div>
            <div>
              <ScheduleClasses>有氧入門</ScheduleClasses>
              <ScheduleInstructors>孫希傑</ScheduleInstructors>
              <ScheduleBtn>我要報名</ScheduleBtn>
            </div> */}
            </div>
          </div>
        </>
      )}
    </>
  )
}
