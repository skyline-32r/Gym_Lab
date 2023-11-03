import FormStyles from '@/styles/member/register1.module.css'
import TextField from '@mui/material/TextField'
import { Box, Typography, MenuItem, styled, Select } from '@mui/material'
import Btn1 from '@/components/btn1'
import Link from 'next/link'
import LinkStyle from '@/styles/member/link-style.module.css'
// import MuiNavbar from '@/components/testing/MuiNavbar'
import MuiNavbar from '@/components/testing/MuiNavbar'
import Footer from '@/components/footer/footer'
import { useState } from 'react'
import Swal from 'sweetalert2'
import HomeArea from '@/components/member/homearea/TWZipCode'
import Router from 'next/router'

export default function MemberCard({ header }) {
  const demoData = () => {
    setFormData({
      email: 'ispandemo@gmail.com',
      password: 'password',
      checkpwd: 'password',
      gender: 'private',
      name: 'ispandemo',
      country: '2',
      town: '大安區',
      home_area: '',
      address: '復興南路一段390號二樓',
      phone: '0912345678',
    })
  }
  const UDMSelect = styled(Select)({
    width: '100%',
    // backgroundColor: '#EFEDED',
    // height: '36px',
    padding: '0px',

    color: 'white',
    borderRadius: '0px',
    '.MuiInputBase-input': {
      paddingLeft: '0px',
    },

    '.MuiOutlinedInput-notchedOutline': {
      // borderColor: 'white',
      border: 'none',
      borderBottom: '1px solid black',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      // borderColor: 'white',
      border: 'none',
      borderBottom: '2px solid black',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
      border: 'none',
      borderBottom: '1px solid white',
    },
    '.MuiPaper-root.MuiPopover-paaper.MuiMenu.paper': {
      borderRadius: 'unset',
    },
    // '.MuiSelect-icon': {
    //   fill: 'white',
    // },
  })
  const [gender, setGender] = useState('')
  const handleChange = (event) => {
    setGender(event.target.value)
    handlevalues(event)
  }

  const [step, setStep] = useState(1)
  const msg = {
    email: '',
    password: '',
    checkpwd: '',
    gender: '',
    name: '',
    country: '',
    town: '',
    home_area: '',
    address: '',
    phone: '',
  }
  const [formData, setFormData] = useState(msg)

  const [validmsg, setValidmsg] = useState(msg)

  console.log('formData ', formData)

  const handlevalues = (e) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value }
    setFormData(newFormData)
  }

  const country0 = [
    '基隆市',
    '臺北市',
    '新北市',
    '宜蘭縣',
    '新竹市',
    '新竹縣',
    '桃園市',
    '苗栗縣',
    '臺中市',
    '彰化縣',
    '南投縣',
    '嘉義市',
    '嘉義縣',
    '雲林縣',
    '臺南市',
    '高雄市',
    '屏東縣',
    '臺東縣',
    '花蓮縣',
    '金門縣',
    '連江縣',
    '澎湖縣',
  ]
  const Previous = () => {
    setStep(1)
  }

  const verify = () => {
    let flag = true
    const email_reg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const password_reg = /.{6,}/
    let newobj = { ...msg }
    if (formData.gender == '') {
      flag = false
      newobj.gender = '請選擇性別'
      Swal.fire('請選擇性別')
    }
    if (formData.password != formData.checkpwd) {
      flag = false
      newobj.password = '密碼不一致'
      Swal.fire('密碼不一致')
    }
    if (!password_reg.test(formData.password)) {
      flag = false
      // newobj.password = '請輸入六個字元以上的密碼'
      Swal.fire('請輸入六個字元以上的密碼')
    }

    if (!email_reg.test(formData.email)) {
      flag = false
      newobj.email = '請填寫正確的email'
      Swal.fire('請填寫正確的 email')
    }

    console.log('newobj: ', newobj)
    setValidmsg(newobj)
    if (flag) {
      setStep(2)
    }
  }

  const handleSubmit = () => {
    let newobj = { ...msg }
    const sendData = {
      email: formData.email,
      password: formData.password,
      gender: formData.gender,
      name: formData.name,
      home_area: country0[formData.country - 1] + formData.town,
      address: formData.address,
      phone: formData.phone,
    }
    console.log('sendData ', sendData)
    let flag = true
    if (formData.phone == '') {
      flag = false
      newobj.name = '請輸入聯絡電話'
      Swal.fire('請輸入聯絡電話')
    }
    if (formData.town == '') {
      flag = false
      newobj.name = '請輸入區域'
      Swal.fire('請輸入區域')
    }
    if (formData.country == '') {
      flag = false
      newobj.name = '請選擇縣市'
      Swal.fire('請輸入縣市')
    }
    if (formData.name == '') {
      flag = false
      newobj.name = '請輸入姓名'
      Swal.fire('請輸入姓名')
    }

    if (flag == true) {
      fetch('http://localhost:3002/member/register', {
        method: 'POST',
        body: JSON.stringify(sendData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          return res.json()
        })
        .then((j) => {
          console.log(j)
          if (j.msg == '註冊成功') {
            Swal.fire({ icon: 'success', text: j.msg })
            Router.push('/member/login')
          } else if (j.msg != '註冊成功') {
            Swal.fire({ icon: 'error', text: j.msg })
          }
        })
    }
  }
  return (
    <>
      <MuiNavbar />
      {step == 1 ? (
        <form
          className={FormStyles.up}
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <Box className={FormStyles.UIFrame}>
            <Box className={FormStyles.frame5}>
              <Box className={FormStyles.divWrapper}>
                <Box className={FormStyles.textWrapper5} onClick={demoData}>
                  加入會員
                </Box>
              </Box>
              <Box
                style={{ width: '29.0625rem' }}
                className={FormStyles.frame6}
              >
                <TextField
                  id="standard-basic"
                  label="電子信箱(帳號)"
                  name="email"
                  value={formData.email}
                  onChange={handlevalues}
                  placeholder="example@gmail.com"
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

                <TextField
                  id="standard-basic"
                  label="密碼"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handlevalues}
                  placeholder="請輸入六個字元以上的密碼"
                  variant="standard"
                  InputLabelProps={{
                    style: { fontSize: '16px', color: 'white' },
                  }}
                  inputProps={{ style: { fontSize: '16px', color: 'white' } }}
                  sx={{
                    /*'.Mui-focused': {
                        color: 'white',
                      },*/
                    '.MuiInput-root:hover::before': {
                      borderColor: '#CCC',
                    },
                    '.MuiInput-root::after': {
                      borderColor: 'white',
                    },
                  }}
                  fullWidth
                />
                {/* <p style={{ color: 'red' }}>{validmsg.password}</p> */}
                <TextField
                  id="standard-basic"
                  label="確認密碼"
                  name="checkpwd"
                  type="password"
                  value={formData.checkpwd}
                  onChange={handlevalues}
                  placeholder="請輸入六個字元以上的密碼"
                  variant="standard"
                  InputLabelProps={{
                    style: { fontSize: '16px', color: 'white' },
                  }}
                  inputProps={{ style: { fontSize: '16px', color: 'white' } }}
                  sx={{
                    /*'.Mui-focused': {
                        color: 'white',
                      },*/
                    '.MuiInput-root:hover::before': {
                      borderColor: '#CCC',
                    },
                    '.MuiInput-root::after': {
                      borderColor: 'white',
                    },
                  }}
                  fullWidth
                />
                <UDMSelect
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    <em>性別</em>
                  </MenuItem>
                  <MenuItem value="male">男</MenuItem>
                  <MenuItem value="female">女</MenuItem>
                  <MenuItem value="private">不公開</MenuItem>
                </UDMSelect>
                <Box
                  className={FormStyles.btnstyle}
                  onClick={() => {
                    verify()
                  }}
                >
                  {/* <Link
                    href="./register2"
                    style={{
                      width: '100%',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  > */}
                  <Btn1 width={'100%'} fontSize={'24px'}>
                    下一步
                  </Btn1>
                  {/* </Link> */}
                </Box>
              </Box>
            </Box>
          </Box>
        </form>
      ) : (
        <form
          className={FormStyles.up}
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <Box className={FormStyles.UIFrame}>
            <Box className={FormStyles.frame5}>
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  padding: '0 0 0 55px',
                  fontSize: ' 30px',
                  cursor: 'pointer',
                }}
                onClick={Previous}
              >
                ←
              </div>
              <Box className={FormStyles.divWrapper}>
                <Box className={FormStyles.textWrapper5}>加入會員</Box>
              </Box>
              <Box
                style={{ width: '29.0625rem' }}
                className={FormStyles.frame6}
              >
                <TextField
                  id="standard-basic"
                  label="姓名"
                  name="name"
                  placeholder='請輸入姓名'
                  onChange={handlevalues}
                  value={formData.name}
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

                {/* <TextField
                  id="standard-basic"
                  label="居住地區"
                  name="home_area"
                  onChange={handlevalues}
                  value={formData.home_area}
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
                <HomeArea
                  // errortext1={errors.country}
                  // errortext2={errors.town}
                  handleFieldChange={handlevalues}
                  value1={formData.country}
                  value2={formData.town}
                />
                {/*  */}
                <TextField
                  id="standard-basic"
                  label="詳細地址(選填)"
                  name="address"
                  value={formData.address}
                  onChange={handlevalues}
                  variant="standard"
                  InputLabelProps={{
                    style: { fontSize: '16px', color: 'white' },
                  }}
                  inputProps={{ style: { fontSize: '16px', color: 'white' } }}
                  sx={{
                    /*'.Mui-focused': {
                        color: 'white',
                      },*/
                    '.MuiInput-root:hover::before': {
                      borderColor: '#CCC',
                    },
                    '.MuiInput-root::after': {
                      borderColor: 'white',
                    },
                  }}
                  fullWidth
                />

                <TextField
                  id="standard-basic"
                  label="聯絡電話"
                  name="phone"
                  placeholder='0912345678'
                  value={formData.phone}
                  onChange={handlevalues}
                  variant="standard"
                  InputLabelProps={{
                    style: { fontSize: '16px', color: 'white' },
                  }}
                  inputProps={{ style: { fontSize: '16px', color: 'white' } }}
                  sx={{
                    /*'.Mui-focused': {
                        color: 'white',
                      },*/
                    '.MuiInput-root:hover::before': {
                      borderColor: '#CCC',
                    },
                    '.MuiInput-root::after': {
                      borderColor: 'white',
                    },
                  }}
                  fullWidth
                />

                <Box
                  className={FormStyles.btnstyle}
                  onClick={() => {
                    handleSubmit()
                  }}
                >
                  {/* <Link
                    href="./login"
                    style={{
                      width: '100%',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  > */}
                  <Btn1 width={'100%'} fontSize={'24px'}>
                    註冊
                  </Btn1>
                  {/* </Link> */}
                </Box>
              </Box>
            </Box>
          </Box>
        </form>
      )}

      <Footer />
    </>
  )
}
