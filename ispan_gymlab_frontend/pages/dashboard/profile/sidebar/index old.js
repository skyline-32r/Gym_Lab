import React from 'react'
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
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import PagesIcon from '@mui/icons-material/Pages'
import GroupsIcon from '@mui/icons-material/Groups'
import StorefrontIcon from '@mui/icons-material/Storefront'
import GroupIcon from '@mui/icons-material/Group'
import ModeNightIcon from '@mui/icons-material/ModeNight'

const WhiteListItemIcon = styled(ListItemIcon)({
  color: 'white',
})

export default function Sidebar() {
  return (
    <Box
      // flex={1}
      // bgcolor="skyblue"
      p={2}
      sx={{
        display: { xs: 'none', sm: 'block' },
        color: 'white',
        // border: '1px solid white',
        width: 'calc(20% + 32px)',
      }}
    >
      <Box
        position="fixed"
        sx={{
          left: '0px',
          width: '20%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <WhiteListItemIcon>
                <HomeIcon />
              </WhiteListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Pages">
              <WhiteListItemIcon>
                <PagesIcon />
              </WhiteListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Groups">
              <WhiteListItemIcon>
                <GroupsIcon />
              </WhiteListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#MarketPlace">
              <WhiteListItemIcon>
                <StorefrontIcon />
              </WhiteListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Friends">
              <WhiteListItemIcon>
                <GroupIcon />
              </WhiteListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Friends">
              <WhiteListItemIcon>
                <ModeNightIcon />
              </WhiteListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}
