import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Box,
} from '@mui/material'
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics'
import Image from 'next/image'
import { useState } from 'react'
import Logo from '@/components/icons/logo-gymlab'

export default function MuiNavbar() {

  return (
    <AppBar
      position="fixed"
      style={{
        background: '#222',
        margin: 0,
        paddingLeft: '156px',
        paddingRight: '156px',
      }}
    >
      <Toolbar
        style={{
          paddingLeft: '0px',
          paddingRight: '0px',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <SportsGymnasticsIcon />
          </IconButton> */}
          {/* <Typography variant="h6" component="span">
            GymLab
          </Typography> */}
          <Logo />
        </Box>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" className='navBotton'>首頁</Button>
          <Button color="inherit" className='navBotton'>課程</Button>
          <Button color="inherit" className='navBotton'>線上商城</Button>
          <Button color="inherit" className='navBotton'>論壇</Button>
        </Stack>
        <Button color="inherit" className='navBotton'>登入</Button>
      </Toolbar>
    </AppBar >
  )
}
