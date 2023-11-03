import login from '@/styles/member/login.module.css'
import TextField from '@mui/material/TextField'
import { Box, Typography } from '@mui/material'
import Btn1 from '@/components/btn1'
import Link from 'next/link'
import LinkStyle from '@/styles/member/link-style.module.css'
import MuiNavbar from '@/components/testing/MuiNavbar'
import Footer from '@/components/footer/footer'
import { useEffect, useState, useContext } from 'react'
import AuthContext from '@/context/auth-context'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import GoogleLogin from '@/components/member/google-login'
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

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const { setAuth } = useContext(AuthContext)
  const router = useRouter()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const handlevalues = (e) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value }
    setFormData(newFormData)
    console.log('newFormData: ', newFormData)
  }

  const handleSubmit = () => {
    // if (formData.email && formData.password) {
    fetch('http://localhost:3002/member/login', {
      method: 'POST',
      body: JSON.stringify(formData),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((obj) => {
        console.log('obj ', obj)
        if (obj.accessToken) {
          localStorage.setItem('auth', obj.accessToken)
          localStorage.setItem('user_photo', obj.user_photo)
          setAuth({
            id: '',
            email: '',
            nickname: '',
            user_photo: obj.user_photo,
            token: obj.accessToken,
          })
          Swal.fire({ icon: 'success', text: '登入成功' })
          if (router.query.from) {
            router.push(router.query.from)
          } else {
            router.push('/')
          }
        } else {
          Swal.fire({ icon: 'error', text: '登入失敗' + obj.msg })
        }
      })
    // }
  }

  return (
    <>
      <MuiNavbar />
      <form
        className={login.up}
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <Box className={login.UIFrame}>
          <Box className={login.frame5}>
            <Box className={login.divWrapper}>
              <div
                className={login.textWrapper5}
                onClick={() =>
                  setFormData({
                    email: 'ispanTeam1@gmail.com',
                    password: 'team1',
                  })
                }
              >
                會員登入
              </div>
            </Box>
            <Box style={{ width: '29.0625rem' }} className={login.frame6}>
              <TextField
                id="standard-basic"
                label="電子信箱(帳號)"
                name="email"
                value={formData.email}
                onChange={handlevalues}
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
              />

              <Box className={login.frame8}>
                {/* <TextField
                  id="standard-basic"
                  label="密碼"
                  name="password"
                  type="password"
                  // value={formData.password}
                  // onChange={handlevalues}
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

                  // style={{ color: '#ffffff' }}
                /> */}
                {/* <FormControl
                  variant="standard"
                  value={formData.password}
                  onChange={handlevalues}
                  sx={{
                    width: '100%',
                    color: '#f9f9f9',
                    ".MuiFormLabel-root.MuiInputLabel-root.Mui-focused": {
                      color: "white",
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
                >
                  <InputLabel
                    sx={{
                      fontSize: '16px',
                      color: 'white',
                      '.MuiInput-root:hover::before': {
                        borderColor: 'white',
                      },
                    }}
                    htmlFor="standard-adornment-password"
                  >
                    密碼
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handlevalues}
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
                </FormControl> */}
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
                    密碼
                  </InputLabel>
                  <Input
                    name="password"
                    value={formData.password}
                    onChange={handlevalues}
                    F
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
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Link
                    href={'/member/password-recovery1'}
                    className={LinkStyle.customLink}
                  >
                    忘記密碼
                  </Link>
                </Box>
              </Box>

              {/* <TextField
                  sx={{
                    boxShadow: 'none',
                    '.MuiOutlinedInput-notchedOutline': {
                      border: '1px solid white',
                    },
                    '.MuiOutlinedInput-root': {
                      border: '1px solid white',
                    },
                  }}
                /> */}

              <Box className={login.btnstyle}>
                <Btn1 width={'100%'} fontSize={'24px'} onClick={handleSubmit}>
                  登入
                </Btn1>
                <Typography>OR</Typography>
                {/* <Btn1 width={'100%'} fontSize={'24px'}>
                  google登入
                </Btn1> */}
                <GoogleLogin width={'100%'} />
              </Box>
              <Link className={LinkStyle.customLink} href={'./register'}>
                還沒有帳號嗎?註冊
              </Link>
            </Box>
          </Box>
        </Box>
      </form>
      <Footer />
      {/* <style jsx>
        {`
          .customLink {
            color: blue;
          }
          .customLink:hover {
            color: red;
          }
          .customLink:active {
            color: green;
          }
          .customLink:focus {
            color: purple;
          }
          .customLink:visited {
            color: white;
          }
        `}
      </style> */}
    </>
  )
}
