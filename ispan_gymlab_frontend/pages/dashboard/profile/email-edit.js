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
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Link from 'next/link'
import pwdstyle from '@/styles/member/password-edit.module.css'
import SidebarTemplate from '@/components/member/sidebar-template'
import { useActiveLink } from '@/context/active-link-context'

export default function EmailVerify() {
  const { setActiveLink } = useActiveLink()
  useEffect(() => {
    setActiveLink('info')
  }, [])

  return (
    <>
      <MuiNavbar />
      <SidebarTemplate>
        <Box className={styles.listContainer}>
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
              label="請輸入新信箱"
              //   InputProps={{ readOnly: true }}
            ></TextField>
            <TextField
              sx={{
                width: '100%',
                backgroundColor: '#EFEDED',
                borderRadius: '5px',
              }}
              defaultValue={''}
              label="請輸入驗證碼"
              // label="Read Only"
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
                  href="./edit"
                  style={{
                    width: '100%',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  確定
                </Link>
              </Btn1>
              <Btn1
                // style={{ type: 'button' }}
                width="50%"
                margin="0"
                fonzSize="24px"
              >
                <Link
                  href="./edit"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    width: '100%',
                  }}
                >
                  取消
                </Link>
              </Btn1>
            </Stack>
          </Box>
        </Box>
      </SidebarTemplate>
    </>
  )
}
