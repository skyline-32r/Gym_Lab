import FormStyles from '@/styles/member/password-recovery1.module.css'
import TextField from '@mui/material/TextField'
import { Box, Typography, Stack } from '@mui/material'
import Btn1 from '@/components/btn1'
import Link from 'next/link'
import LinkStyle from '@/styles/member/link-style.module.css'
import MuiNavbar from '@/components/testing/MuiNavbar'
import Footer from '@/components/footer/footer'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export default function MemberCard({ header }) {
  const [email, setEmail] = useState('')
  const [verificationInput, setVerificationInput] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [] = useState()
  const router = useRouter()
  const sendVerification = () => {
    if (email == '') {
      Swal.fire('請輸入電子郵件')
    } else {
      Swal.fire('請至信箱確認驗證碼')
      fetch('http://localhost:3002/member/recovery1', {
        method: 'POST',
        body: JSON.stringify({ email: email }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log('res ', result)
          setVerificationCode(result.verification)
        })
    }
  }
  const handleVerify = () => {
    console.log('handleVerify')
    if (verificationCode != '') {
      if (verificationInput == verificationCode) {
        localStorage.setItem('recoveryUser', email)
        router.push('/member/password-recovery2')
      } else {
        Swal.fire({ icon: 'error', text: '驗證碼錯誤' })
      }
    }
  }
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
              <Box className={FormStyles.textWrapper5}>忘記密碼</Box>
            </Box>
            <Box style={{ width: '29.0625rem' }} className={FormStyles.frame6}>
              <Box className={FormStyles.inputStyle}>
                <Stack>
                  <TextField
                    id="standard-basic"
                    label="電子郵件"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                  <Typography
                    onClick={sendVerification}
                    sx={{
                      color: 'white',
                      paddingTop: '5px',
                      marginLeft: 'auto',
                      cursor: 'pointer',
                    }}
                  >
                    寄出驗證碼
                  </Typography>
                </Stack>
                <TextField
                  id="standard-basic"
                  label="驗證碼"
                  name="verificationInput"
                  value={verificationInput}
                  onChange={(e) => setVerificationInput(e.target.value)}
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
              </Box>

              <Box className={FormStyles.btnstyle}>
                {/* <Stack sx={{width:'100%'}} onClick={sendVerification}>
                <Btn1 width={'100%'} fontSize={'24px'}>
                  寄出驗證碼
                </Btn1>
                </Stack> */}
                <Stack sx={{ width: '100%' }} onClick={handleVerify}>
                  <Btn1 width={'100%'} fontSize={'24px'}>
                    email驗證
                  </Btn1>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </form>
      <Footer />
    </>
  )
}
