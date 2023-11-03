import FormStyles from '@/styles/member/password-recovery2.module.css'
import TextField from '@mui/material/TextField'
import { Box, Typography, Stack } from '@mui/material'
import Btn1 from '@/components/btn1'
import Link from 'next/link'
import LinkStyle from '@/styles/member/link-style.module.css'
import MuiNavbar from '@/components/testing/MuiNavbar'
import Footer from '@/components/footer/footer'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'




export default function MemberCard({ header }) {
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const [password, setPassword] = useState('')
  const [checkPwd, setCheckPwd] = useState('')
  const [formData, setFormData] = useState({ email: '', password: '' })
  const router = useRouter()
  const handleVal = () => {}
  useEffect(() => {
    // const getEmail = () => {
    const email = localStorage.getItem('recoveryUser')
    // console.log('email', email)
    // return email
    // }
    setFormData({ ...formData, email: email })
  }, [])
  // console.log('formData', formData)
  const handleSubmit = () => {
    if (password == checkPwd) {
      fetch('http://localhost:3002/member/recovery2', {
        method: 'PUT',
        body: JSON.stringify({ email: formData.email, password: password }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((result) => {
          Swal.fire(result.msg)
          router.push('/member/login')
        })
    } else {
      Swal.fire('密碼不一致')
    }
  }
  // {console.log(password)}
  return (
    <>
      <MuiNavbar />
      <Box
        sx={{
          position: 'absolute',
          top: '0',
          left: '0',
          bottom: '0',
          right: '0',
          backgroundColor: '#0F172A',
        }}
      ></Box>
      <form
        className={FormStyles.up}
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <Box className={FormStyles.UIFrame}>
          <Box className={FormStyles.frame5}>
            <Box className={FormStyles.divWrapper}>
              <Box className={FormStyles.textWrapper5}>重設密碼</Box>
            </Box>
            <Box style={{ width: '29.0625rem' }} className={FormStyles.frame6}>
              <Box className={FormStyles.inputStyle}>
                {/* <TextField
                  id="standard-basic"
                  label="新密碼"
                  name="password"
                  value={password}
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  variant="standard"
                  InputLabelProps={{
                    style: { fontSize: '16px', color: 'white' },
                  }}
                  inputProps={{ style: { fontSize: '16px', color: 'white' } }}
                  sx={{
                    '.MuiInput-root:hover::before': {
                      borderColor: '#CCC',
                    },
                    '.MuiInput-root::after': {
                      borderColor: 'white',
                    },
                    // marginTop:'40px'
                  }}
                  fullWidth
                /> */}
                {/*  */}
                <FormControl
                  // name='password'
                  // value={formData.password}
                  // onChange={handlevalues}
                  sx={{
                    width: '100%',
                    color: '#f9f9f9',
                    '.MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
                      color: 'white',
                    },
                    '.MuiInputLabel-root': {
                      color: 'white',
                    },
                    '.MuiInputLabel-root:after': {
                      color: 'white',
                    },
                    '.MuiInputLabel-root:focused': {
                      color: 'white',
                    },
                    '.MuiInput-root:hover::before': {
                      borderColor: '#CCC',
                    },
                    '.MuiInput-root::after': {
                      borderColor: 'white',
                    },
                    width: '100%',
                    color: '#f9f9f9',
                    '.MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
                      color: 'white',
                    },
                    '.MuiInputLabel-root': {
                      color: 'white',
                    },
                    '.MuiInputLabel-root:after': {
                      color: 'white',
                    },
                    '.MuiInputLabel-root:focused': {
                      color: 'white',
                    },
                    '.MuiInput-root:hover::before': {
                      borderColor: '#CCC',
                    },
                    '.MuiInput-root::after': {
                      borderColor: 'white',
                    },
                  }}
                  variant="standard"
                >
                  <InputLabel htmlFor="standard-adornment-password">
                  新密碼
                  </InputLabel>
                  <Input
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    sx={{ color: 'white' }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                {/*  */}
                {/* <TextField
                  id="standard-basic"
                  label="確認密碼"
                  name="checkPwd"
                  value={checkPwd}
                  type="password"
                  onChange={(e) => {
                    setCheckPwd(e.target.value)
                  }}
                  variant="standard"
                  InputLabelProps={{
                    style: { fontSize: '16px', color: 'white' },
                  }}
                  inputProps={{ style: { fontSize: '16px', color: 'white' } }}
                  sx={{
                    '.Mui-focused': {
                        color: 'white',
                      },
                    '.MuiInput-root:hover::before': {
                      borderColor: '#CCC',
                    },
                    '.MuiInput-root::after': {
                      borderColor: 'white',
                    },
                  }}
                  fullWidth
                /> */}
                {/*  */}
                <FormControl
                  // name='password'
                  // value={formData.password}
                  // onChange={handlevalues}
                  sx={{
                    width: '100%',
                    color: '#f9f9f9',
                    '.MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
                      color: 'white',
                    },
                    '.MuiInputLabel-root': {
                      color: 'white',
                    },
                    '.MuiInputLabel-root:after': {
                      color: 'white',
                    },
                    '.MuiInputLabel-root:focused': {
                      color: 'white',
                    },
                    '.MuiInput-root:hover::before': {
                      borderColor: '#CCC',
                    },
                    '.MuiInput-root::after': {
                      borderColor: 'white',
                    },
                    width: '100%',
                    color: '#f9f9f9',
                    '.MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
                      color: 'white',
                    },
                    '.MuiInputLabel-root': {
                      color: 'white',
                    },
                    '.MuiInputLabel-root:after': {
                      color: 'white',
                    },
                    '.MuiInputLabel-root:focused': {
                      color: 'white',
                    },
                    '.MuiInput-root:hover::before': {
                      borderColor: '#CCC',
                    },
                    '.MuiInput-root::after': {
                      borderColor: 'white',
                    },
                  }}
                  variant="standard"
                >
                  <InputLabel htmlFor="standard-adornment-password">
                  確認密碼
                  </InputLabel>
                  <Input
                    name="checkPwd"
                    value={checkPwd}
                    onChange={(e) => {
                      setCheckPwd(e.target.value)
                    }}
    
                    id="standard-adornment-password"
                    type={showPassword2 ? 'text' : 'password'}
                    sx={{ color: 'white' }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword2}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword2 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                {/*  */}
              </Box>
              <Box sx={{ width: '100%' }}>
                <Stack onClick={handleSubmit}>
                  <Btn1 width={'100%'} fontSize={'24px'}>
                    送出
                  </Btn1>
                </Stack>
              </Box>
              {/* <Box className={FormStyles.btnstyle}>
                
              </Box> */}
            </Box>
          </Box>
        </Box>
      </form>
      <Footer />
    </>
  )
}
