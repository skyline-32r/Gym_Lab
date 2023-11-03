import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { MenuItem, FormControl, InputLabel, Select } from '@mui/material'
import { useState } from 'react'
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Swal from 'sweetalert2'

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
  // class_date,
  time,
  class_name,
  instructor_name,
  reloadEnroll,
  class_id,
  data,
  class_date_format,
  schedule,
  class_schedule_id,
  branch_id,
  branch_name,
}) {
  // console.log(schedule)

  // console.log(branch_id)

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [Date, setDate] = useState('')
  const [Time, setTime] = useState('')
  // const [branch, setBranch] = useState('')
  // console.log(class_schedule_id)

  const handleChangeDate = (event) => {
    setDate(event.target.value)
    // handleChangeTime()
  }
  const handleChangeTime = (event) => {
    setTime(event.target.value)
  }
  // const handleChangebranch = (event) => {
  //   setBranch(event.target.value)
  // }
  // console.log('hi')
  //! 修改路由
  const updateitem = async () => {
    const updateid_send = {
      enroll_id: enroll_id,
      class_date: Date,
      time: Time,
      branch_id: branch_id,
      user_id: 999,
    }
    try {
      console.log('傳', updateid_send)
      // console.log('hi')
      const res = await fetch('http://localhost:3002/dashboard/updclass', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateid_send),
      })
      if (res) {
        const res_data = await res.json()
        console.log('回傳', res_data)
        console.log('success', res_data.success)

        reloadEnroll()
        handleClose()
        updSwal(res_data.success)
      }
    } catch (ex) {
      console.log(ex)
    }
  }

  function updSwal(success) {
    if (success) {
      Swal.fire({
        icon: 'success',
        title: '修改成功',
        showConfirmButton: false,
        timer: 1500,
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: '修改失敗',
        showConfirmButton: false,
        timer: 1500,
      })
    }
  }
  // console.log()
  // const handleClickOpen = () => {
  //   setOpen(true)
  // }

  // const handleClose = () => {
  //   setOpen(false)
  // }
  // const handleClose = () => {
  //   setOpen(false)
  // }

  return (
    <>
      <div>
        {/* <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button> */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          // style={{ width: '600px' }}
        >
          <DialogTitle id="alert-dialog-title">{'更改課程日期'}</DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              style={{ width: '450px' }}
            >
              <div style={{ color: 'black', paddingBottom: '20px' }}>
                課程名稱:{class_name}
              </div>
              {/* <div style={{ color: 'black', paddingBottom: '20px' }}>
                分店:{branch_name}
              </div> */}
              {/* </DialogContentText> */}
              <div
                style={{
                  display: 'flex',
                  width: '200px',
                  // justifyContent: 'center',
                  paddingBottom: '30px',
                }}
              >
                <Box sx={{ minWidth: 180, pr: '30px' }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">日期</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={Date}
                      label="日期"
                      onChange={handleChangeDate}
                    >
                      {/* <MenuItem value={class_date_format}>
                        {class_date_format}
                      </MenuItem> */}
                      {/* {console.log(class_date_format)} */}
                      {schedule.map((v, i) => {
                        return v.class_name === class_name &&
                          v.branch_name === branch_name &&
                          v.instructor_name === instructor_name ? (
                          <MenuItem key={'date' + i} value={v.class_date}>
                            {v.class_date.slice(0, 10).split('-').join('/')}
                          </MenuItem>
                        ) : (
                          ''
                        )
                      })}
                    </Select>
                  </FormControl>
                </Box>
                {/*** 以下是select2 ***/}
                <Box sx={{ minWidth: 150 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">時間</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={Time}
                      label="時間"
                      onChange={handleChangeTime}
                    >
                      {/* {console.log(schedule)} */}
                      {schedule.map((v, i) => {
                        if (
                          v.class_id === class_id &&
                          v.class_date === Date &&
                          v.branch_name === branch_name
                        ) {
                          return (
                            <MenuItem key={'time' + i} value={v.time}>
                              {v.time}
                            </MenuItem>
                          )
                        }
                      })}
                    </Select>
                  </FormControl>
                </Box>
                {/*** 以上是select2 ***/}
                {/* ** 以下是select3 **
              <Box sx={{ minWidth: 150 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">分店</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={branch}
                    label="分店"
                    onChange={handleChangebranch}
                  >
                    {console.log(schedule)}
                    {schedule.map((v, i) => {
                      if (
                        v.class_id === class_id &&
                        v.class_date === Date &&
                        v.branch_name === branch_name
                      ) {
                        return (
                          <MenuItem key={i} value={v.branch_name}>
                            {v.branch_name}
                          </MenuItem>
                        )
                      }
                    })}
                  </Select>
                </FormControl>
              </Box> */}
                {/*** 以上是select3 ***/}
              </div>
              {/* anonymous location data to Google, even when no apps are running. */}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              style={{ marginRight: '20px', marginTop: '0px' }}
              onClick={updateitem}
            >
              確定
            </Button>
            <Button
              variant="outlined"
              style={{ marginRight: '20px', marginTop: '0px' }}
              onClick={handleClose}
            >
              取消
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      {/* <div> */}
      <BorderColorRoundedIcon onClick={handleOpen} style={{ color: '#FF00B8' }}>
        Open modal
      </BorderColorRoundedIcon>
      {/* <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        > */}
      {/* <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2"> */}
      {/* <div
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
              <div></div> */}
      {/* <div
                style={{
                  display: 'flex',
                  width: '200px',
                  // justifyContent: 'center',
                  paddingBottom: '30px',
                }}
              > */}
      {/*** 以下是select1 ***/}
      {/* <Box sx={{ minWidth: 180, pr: '30px' }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">日期</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={Date}
                      label="日期"
                      onChange={handleChangeDate}
                    > */}
      {/* <MenuItem value={class_date_format}>
                        {class_date_format}
                      </MenuItem> */}
      {/* {console.log(class_date_format)}
                      {schedule.map((v, i) => {
                        return v.class_name === class_name ? (
                          <MenuItem key={i} value={v.class_date}>
                            {v.class_date.slice(0, 10).split('-').join('/')}
                          </MenuItem>
                        ) : (
                          ''
                        )
                      })} */}
      {/* </Select>
                  </FormControl>
                </Box> */}
      {/*** 以上是select1 ***/}
      {/*** 以下是select2 ***/}
      {/* <Box sx={{ minWidth: 150 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">時間</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={Time}
                      label="時間"
                      onChange={handleChangeTime}
                    >
                      {console.log(schedule)}
                      {schedule.map((v, i) => {
                        if (v.class_id === class_id && v.class_date === Date) {
                          return (
                            <MenuItem key={i} value={v.time}>
                              {v.time}
                            </MenuItem>
                          )
                        }
                      })}
                    </Select>
                  </FormControl>
                </Box> */}
      {/*** 以上是select2 ***/}
      {/* </div> */}
      {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  style={{ marginRight: '20px', marginTop: '50px' }}
                  onClick={updateitem}
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
              </div> */}
      {/* </Typography>
          </Box> */}
      {/* </Modal> */}
      {/* </div> */}
    </>
  )
}
