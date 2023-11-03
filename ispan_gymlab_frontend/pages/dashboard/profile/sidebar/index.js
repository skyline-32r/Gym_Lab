import React,{ useState } from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Avatar,
  styled,
  Collapse,
  Stack,
  Typography,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import PagesIcon from '@mui/icons-material/Pages'
import GroupsIcon from '@mui/icons-material/Groups'
import StorefrontIcon from '@mui/icons-material/Storefront'
import GroupIcon from '@mui/icons-material/Group'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

const WhiteListItemIcon = styled(ListItemIcon)({
  color: 'white',
})

export default function Sidebar() {

    const [open, setOpen] = useState(true)
  const [open2, setOpen2] = useState(true)
  const [open3, setOpen3] = useState(true)
  const handleClick = () => {
    setOpen(!open)
  }

  const handleClick2 = () => {
    setOpen2(!open2)
  }

  const handleClick3 = () => {
    setOpen3(!open3)
  }

  return (
    <Box
      // flex={1}
      // bgcolor="skyblue"
      p={2}
      sx={{
        display: { xs: 'none', sm: 'block' },
        color: 'white',
        // border: '1px solid white',
        width: 'calc(12% + 16px)',
        backgroundColor: '#0F172A',
      }}
    >
      <Box
        position="fixed"
        sx={{
          left: '0px',
          width: '12%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
          <Stack p={2}
            sx={{
              display: 'flex',

              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <Avatar
              sx={{ width: 100, height: 100 }}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <Typography sx={{ fontSize: '30px' }}>使用者名稱</Typography>
          </Stack>
        </Box>
        <List>
          {/*  */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              {/* <WhiteListItemIcon>
                <HomeIcon />
              </WhiteListItemIcon> */}
              <ListItemText primary="基本資料" />
            </ListItemButton>
          </ListItem>
          {/*<ListItem disablePadding>
          <ListItemButton component="a" href="#Pages">
             <WhiteListItemIcon>
                <PagesIcon />
              </WhiteListItemIcon> //can delete
            <ListItemText primary="收藏" />
          </ListItemButton>
        </ListItem>*/}
          {/*  */}
          <ListItemButton onClick={handleClick}>
            {/* <ListItemIcon>
            <InboxIcon />
          </ListItemIcon> */}
            <ListItemText primary="收藏" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                {/* <ListItemIcon>
                <StarBorder />
              </ListItemIcon> */}
                <ListItemText primary="商品收藏" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                {/* <ListItemIcon>
                <StarBorder />
              </ListItemIcon> */}
                <ListItemText primary="課程收藏" />
              </ListItemButton>
            </List>
          </Collapse>
          {/*  */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Groups">
              {/* <WhiteListItemIcon>
                <GroupsIcon />
              </WhiteListItemIcon> */}
              <ListItemText primary="訂單" />
            </ListItemButton>
          </ListItem>
          {/*  */}
          <ListItemButton onClick={handleClick2}>
            {/* <ListItemIcon>
            <InboxIcon />
          </ListItemIcon> */}
            <ListItemText primary="我的課程" />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                {/* <ListItemIcon>
                <StarBorder />
              </ListItemIcon> */}
                <ListItemText primary="線上課程" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                {/* <ListItemIcon>
                <StarBorder />
              </ListItemIcon> */}
                <ListItemText primary="實體課程" />
              </ListItemButton>
            </List>
          </Collapse>

          {/*  */}

          <ListItemButton onClick={handleClick3}>
            {/* <ListItemIcon>
            <InboxIcon />
          </ListItemIcon> */}
            <ListItemText primary="會員等級" />
            {open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                {/* <ListItemIcon>
                <StarBorder />
              </ListItemIcon> */}
                <ListItemText primary="等級方案" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                {/* <ListItemIcon>
                <StarBorder />
              </ListItemIcon> */}
                <ListItemText primary="消費紀錄" />
              </ListItemButton>
            </List>
          </Collapse>
          {/*  */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Friends">
              {/* <WhiteListItemIcon>
                <GroupIcon />
              </WhiteListItemIcon> */}
              <ListItemText primary="優惠券" />
            </ListItemButton>
          </ListItem>
          {/* <ListItem disablePadding>
            <ListItemButton component="a" href="#Friends">
              <WhiteListItemIcon>
                <ModeNightIcon />
              </WhiteListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem> */}
        </List>
      </Box>
    </Box>
  )
}
