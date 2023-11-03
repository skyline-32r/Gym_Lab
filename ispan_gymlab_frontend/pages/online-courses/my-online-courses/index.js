import { Box, Stack, Typography } from '@mui/material'
import MuiNavbar from '@/components/testing/MuiNavbar'
import NextVideoCard from './next-video-card'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
// import Sidebar from './sidebar'
import Sidebar from '@/components/member/sidebar'
import MainContent from './main-content'
import { useActiveLink } from '@/context/active-link-context'
import { useEffect } from 'react'


export default function CourseVideo() {
  const {setActiveLink} = useActiveLink()
  useEffect(() => {
    setActiveLink('my-online-courses')
  }, [])
  return (
    <>
      <MuiNavbar />
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
      <Box
        sx={{
          backgroundColor: '#2F2F45',
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
          justifyContent="flex-start"
          sx={{
            height: '100%',
          }}
        >
          <Sidebar />
          <MainContent />
        </Stack>
      </Box>
    </>
  )
}
