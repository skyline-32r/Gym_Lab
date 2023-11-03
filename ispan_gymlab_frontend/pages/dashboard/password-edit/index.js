import {
  Box,
  Stack,
  TextField,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  styled,
} from '@mui/material'
import MuiNavbar from '@/components/testing/MuiNavbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
// import Sidebar from './sidebar'
import Sidebar from '@/components/member/sidebar'
// import Sidebar from '@/pages/online-courses/my-online-courses/sidebar'
import styles from '@/styles/member/profile.module.css'
import Btn1 from '@/components/btn1'
import { useContext, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Link from 'next/link'
import pwdstyle from '@/styles/member/password-edit.module.css'
import { useActiveLink } from '@/context/active-link-context'
import AuthContext from '@/context/auth-context'
import Swal from 'sweetalert2'
import router from 'next/router'

export default function PasswordEdit() {
  const { auth } = useContext(AuthContext)
  
    
  
  const { setActiveLink } = useActiveLink()
  useEffect(() => {
    setActiveLink('info')
    if (typeof localStorage != undefined && !localStorage.getItem('auth')) {
      router.push('/member/login')
    }
    // if (auth.token == '') {
    //   router.push('/member/login')
    // }
  }, [])
  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [checkPwd, setCheckPwd] = useState('')

  const handleOldPwd = (event) => {
    setOldPassword(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  const handleCheckPwd = (event) => {
    setCheckPwd(event.target.value)
  }
  let formdata = {
    oldPassword: oldPassword,
    password: password,
    checkPwd: checkPwd,
  }
  const handleSubmit = () => {
    fetch('http://localhost:3002/dashboard/password-edit', {
      method: 'PUT',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + auth.token,
      },
    })
      .then((r) => r.json())
      .then((result) => {
        console.log(result)
        if (result.status == 'success') {
          Swal.fire({ icon: 'success', text: result.msg })
        } else {
          Swal.fire({ icon: 'error', text: result.msg })
        }
      })
  }
  // console.log('oldPassword', oldPassword)
  // console.log('password', password)
  // console.log('checkPwd', checkPwd)
  return (
    <>
      <MuiNavbar />
      <Box
        sx={{
          backgroundColor: '#0F172A',
          color: 'white',
          // marginTop: '64px',
          // paddingTop: '60px',
          paddingRight: '156px',
          minHeight: '100vh',
          // backgroundColor: 'pink',
          // justifyContent: 'space-between',
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          sx={{
            height: '100%',
          }}
        >
          <Sidebar />
          {/* <Box component='form' p={0} sx={{width:'100%'}}><TextField></TextField></Box> */}
          {/* <MainContent /> */}
          <Box
            flex={1}
            p={2}
            // bgcolor="lightcoral"
            sx={{
              color: 'white',
              minHeight: 'calc(100vh - 60px)',
            }}
          >
            <Box className={styles.listContainer}>
              {/* <Stack
                  direction="row"
                  sx={{ width: '100%', flexWrap: 'wrap', gap: '32px' }}
                > */}
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '25px',
                }}
                component="form"
                onSubmit={(e) => e.preventDefault()}
              >
                <TextField
                  sx={{
                    width: '100%',
                    backgroundColor: '#EFEDED',
                    borderRadius: '5px',
                  }}
                  defaultValue={''}
                  name="oldPassword"
                  value={oldPassword}
                  // label="請輸入原密碼"
                  placeholder="請輸入原密碼"
                  onChange={handleOldPwd}
                  type="password"
                  // InputProps={{ readOnly: true }}
                ></TextField>
                <TextField
                  sx={{
                    width: '100%',
                    backgroundColor: '#EFEDED',
                    borderRadius: '5px',
                  }}
                  defaultValue={''}
                  name="password"
                  value={password}
                  // label="請輸入新密碼"
                  placeholder="請輸入新密碼"
                  onChange={handlePassword}
                  type="password"
                  // label="Read Only"
                  // InputProps={{ readOnly: true }}
                ></TextField>
                <TextField
                  className={pwdstyle.placeholder}
                  sx={{
                    width: '100%',
                    backgroundColor: '#EFEDED',
                    borderRadius: '5px',
                  }}
                  defaultValue={''}
                  name="checkPwd"
                  value={checkPwd}
                  // label="確認密碼"
                  placeholder="確認密碼"
                  onChange={handleCheckPwd}
                  type="password"
                  // InputProps={{ readOnly: true }}
                ></TextField>

                <Stack
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    gap: '40px',
                  }}
                >
                  <Btn1
                    // style={{ type: 'button' }}
                    width="50%"
                    margin="0"
                    fonzSize="24px"
                  >
                    <Link
                      href="./profile/edit"
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        width: '100%',
                      }}
                    >
                      取消
                    </Link>
                  </Btn1>
                  <Btn1
                    // style={{ type: 'button' }}
                    width="50%"
                    margin="0"
                    fonzSize="24px"
                    onClick={handleSubmit}
                  >
                    {/* <Link
                      href="./profile/edit"
                      style={{
                        width: '100%',
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    > */}
                    確定
                    {/* </Link> */}
                  </Btn1>
                </Stack>
              </Box>
              {/* </Stack> */}
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  )
}
