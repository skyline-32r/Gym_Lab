import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { MenuItem, FormControl, InputLabel, Select } from '@mui/material'
import { useState } from 'react'
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function MuiSelect({
  enroll_id,
  class_date,
  time,
  class_name,
  instructor_name,
  reloadEnroll,
  class_id,
  data,
  class_date_format,
  schedule,
  class_schdule_id,
}) {
  console.log(class_schdule_id)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [date, setDate] = useState('')
  const [time1, setTime] = useState('')
  // console.log(data)

  const handleChangeDate = (event) => {
    setDate(event.target.value)
    console.log(event.target.value)
    // const value = event.target.value;
    // const changeClassInfo = {
    //   class_id: class_id,
    //   class_date: value
    // }
    // selectTimelist(changeClassInfo);
  }
  const handleChangeTime = (event) => {
    setTime(event.target.value)
  }
  // const sameClasses = schedule.filter((v, i) => {
  //   return v.class_id == class_id
  // })

  // const options = {}

  // for (let i = 0; i < sameClasses.length; i++) {
  //   let name = sameClasses[i].class_date
  //   let value = sameClasses[i].class_date.slice(0, 10).split('-').join('/')

  //   options[i] = { name, value }
  // }

  // !  查詢時段下拉
  // const selectTimelist = async (changeClassInfo) => {
  //   try {
  //     const res = await fetch('http://localhost:3002/dashboard/selectTimelist', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(changeClassInfo)
  //     })
  //     if (res) {
  //       const res_data = await res.json()
  //       console.log(res_data)
  //       //TODO:
  //     }
  //   } catch (ex) {
  //     result = ex
  //     console.log(ex)
  //   }
  // }


  return (
    <>
      <div>
        <BorderColorRoundedIcon onClick={handleOpen}>
          Open modal
        </BorderColorRoundedIcon>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <div
                style={{
                  textAlign: 'center',
                  color: 'black',
                  paddingBottom: '20px',
                }}
              >
                更改課程日期
              </div>
              <div style={{ color: 'black', paddingBottom: '20px' }}>
                課程名稱:{class_name}
              </div>
              <div></div>
              <div
                style={{
                  display: 'flex',
                  width: '200px',
                  // justifyContent: 'center',
                  paddingBottom: '30px',
                }}
              >
                {/*** 以下是select1 ***/}
                <Box sx={{ minWidth: 180, pr: '30px' }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-labelDate">日期</InputLabel>{console.log(class_date_format)}
                    <Select
                      labelId="demo-simple-select-labelDate"
                      id="demo-simple-selectDate"
                      value={class_date_format}

                      label="Date"
                      onChange={handleChangeDate}
                    >
                      <MenuItem value={class_name}>
                        {class_date_format}
                      </MenuItem>

                      {/* {console.log(schedule)} */}
                      {schedule.map((v, i) => {
                        console.log(class_date_format)
                        return v.class_name === class_name ? (
                          <MenuItem key={i} value={v.class_date}>
                            {v.class_date.slice(0, 10).split('-').join('/')}
                          </MenuItem>
                        ) : (
                          ''
                        )
                      })}
                    </Select>
                  </FormControl>
                </Box>
                {/*** 以上是select1 ***/}
                {/*** 以下是select2 ***/}
                <Box sx={{ minWidth: 150 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-labelTime">時間</InputLabel>
                    <Select
                      labelId="demo-simple-select-labelTime"
                      id="demo-simple-selectTime"
                      value={time1}
                      label="Time"
                      onChange={handleChangeTime}
                    >
                      {console.log(class_schdule_id)}
                      {schedule.map((v, i) => {
                        {
                          console.log(v.class_schdule_id)
                        }

                        return v.class_name === class_name &&
                          v.class_schdule_id === class_schdule_id ? (
                          <MenuItem key={v.time_id} value={v.time}>
                            {v.time}
                          </MenuItem>
                        ) : (
                          ''
                        )
                      })}
                      <MenuItem value={10}>{time}</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                {/*** 以上是select2 ***/}

              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  style={{ marginRight: '20px', marginTop: '50px' }}
                >
                  確定
                </Button>
                <Button
                  variant="outlined"
                  style={{ marginRight: '20px', marginTop: '50px' }}
                  onClick={handleClose}
                >
                  取消
                </Button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  )
}
