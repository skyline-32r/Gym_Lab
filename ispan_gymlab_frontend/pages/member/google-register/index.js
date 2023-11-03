import FormStyles from '@/styles/member/google-register.module.css'
import TextField from '@mui/material/TextField'
import { Box, Typography } from '@mui/material'
import Btn1 from '@/components/btn1'
import Link from 'next/link'
import LinkStyle from '@/styles/member/link-style.module.css'
import MuiNavbar from '@/components/testing/MuiNavbar'
import Footer from '@/components/footer/footer'

export default function MemberCard({ header }) {
  return (
    <>
      <MuiNavbar />
      <form
        className={FormStyles.up}
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <Box className={FormStyles.UIFrame}>
          <Box className={FormStyles.frame5}>
            <Box className={FormStyles.divWrapper}>
              <Box className={FormStyles.textWrapper5}>google註冊</Box>
            </Box>
            <Box style={{ width: '29.0625rem' }} className={FormStyles.frame6}>
              <TextField
                id="standard-basic"
                label="姓名"
                name="name"
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

              <TextField
                id="standard-basic"
                label="居住地區"
                name="home_area"
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
              />

              <TextField
                id="standard-basic"
                label="詳細地址(選填)"
                name="address"
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
              />

              <TextField
                id="standard-basic"
                label="聯絡電話"
                name="phone"
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
              />

              <Box className={FormStyles.btnstyle}>
                <Btn1 width={'100%'} fontSize={'24px'}>
                  註冊
                </Btn1>
              </Box>
            </Box>
          </Box>
        </Box>
      </form>
      <Footer />
    </>
  )
}
