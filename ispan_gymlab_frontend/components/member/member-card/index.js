import login from '@/styles/member/login.module.css'
import TextField from '@mui/material/TextField'
import { Box, Typography } from '@mui/material'
import Btn1 from '@/components/btn1'
import Link from 'next/link'
import LinkStyle from '@/styles/member/link-style.module.css'

export default function MemberCard({ props }) {
  return (
    <>
      <form
        className={login.up}
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <Box className={login.UIFrame}>
          <Box className={login.frame5}>
            <Box className={login.divWrapper}>
              <Box className={login.textWrapper5}>會員登入</Box>
            </Box>
            <Box style={{ width: '29.0625rem' }} className={login.frame6}>
              <TextField
                id="standard-basic"
                label="電子信箱(帳號)"
                variant="standard"
                InputLabelProps={{
                  style: { fontSize: '16px', color: 'white' },
                }}
                inputProps={{ style: { fontSize: '16px' } }}
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
                <TextField
                  id="standard-basic"
                  label="確認密碼"
                  variant="standard"
                  InputLabelProps={{
                    style: { fontSize: '16px', color: 'white' },
                  }}
                  inputProps={{ style: { fontSize: '16px' } }}
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
                  // style={{ color: '#ffffff' }}
                />
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Link href={'#'} className={LinkStyle.customLink}>
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
                <Btn1 width={'100%'} fontSize={'24px'}>
                  登入
                </Btn1>
                <Typography>OR</Typography>
                <Btn1 width={'100%'} fontSize={'24px'}>
                  google登入
                </Btn1>
              </Box>
              <Link className={LinkStyle.customLink} href={'#'}>
                還沒有帳號嗎?註冊
              </Link>
            </Box>
          </Box>
        </Box>
      </form>
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
