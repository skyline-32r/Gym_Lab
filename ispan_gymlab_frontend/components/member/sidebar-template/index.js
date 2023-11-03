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
//   import MuiNavbar from '@/components/testing/MuiNavbar'
// import MuiNavbar from '@/components/testing/MuiNavbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import Sidebar from '@/components/member/sidebar'
// import styles from '@/styles/member/profile.module.css'
import styles from '@/styles/member/SidebarTemplate.module.css'
import Btn1 from '@/components/btn1'
import Link from 'next/link'
// import { ActiveLinkProvider } from '@/context/active-link-context'

export default function SidebarTemplate({ children }) {
  return (
    <>
      {/* <MuiNavbar /> */}
      {/* <Box
          sx={{
            position: 'fixed',
            height: '100vh',
            right: '0',
            left: '0',
            backgroundColor: '#0F172A',
            zIndex: '-3',
          }}
        /> */}
      {/* <ActiveLinkProvider> */}
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

          '@media (max-width: 600px)': {
            width: '100%',
            padding: 0,
          },
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
              '@media (max-width: 600px)': {
                width: '100%',
                padding: 0,
              },
            }}
          >
            <Box className={styles.listContainer}>
              {/* <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '25px',
                }}
              > */}
              {children}
              {/* </Box> */}
            </Box>
          </Box>
        </Stack>
      </Box>
      {/* </ActiveLinkProvider> */}
    </>
  )
}
