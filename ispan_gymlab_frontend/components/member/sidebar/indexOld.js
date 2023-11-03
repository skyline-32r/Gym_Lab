import React, { useContext, useEffect, useRef, useState } from 'react'
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
import { useActiveLink } from '@/context/active-link-context'
import Link from 'next/link'
import AuthContext from '@/context/auth-context'

const WhiteListItemIcon = styled(ListItemIcon)({
  color: 'white',
})

export default function Sidebar() {
  const { auth, setAuth } = useContext(AuthContext)
  const [open, setOpen] = useState(true)
  const [open2, setOpen2] = useState(true)
  const [open3, setOpen3] = useState(true)
  const [photo, setPhoto] = useState('')
  const uploadInput = useRef(null)
  const { activeLink } = useActiveLink()

  const handleClick = () => {
    setOpen(!open)
  }

  const handleClick2 = () => {
    setOpen2(!open2)
  }

  const handleClick3 = () => {
    setOpen3(!open3)
  }

 
  const handlePhotos = (e) => {
    setPhoto(e.target.files[0])  
    const Image = new FormData()
    Image.append('file', e.target.files[0])

    fetch('http://localhost:3002/dashboard/uploadImg', {
      method: 'PUT',
      headers: { Authorization: 'Bearer ' + auth.token },
      body: Image,
    })
      .then((r) => r.json())
      .then((result) => {
        setAuth({...auth, user_photo: result})
      })
  }
  const handleFileInput = () => {
    uploadInput.current.click()
 
  }
  return (
    <Box
      // flex={1}
      // bgcolor="skyblue"
      // p={2}
      pt={2}
      sx={{
        display: { xs: 'none', sm: 'block' },
        color: 'white',
        // border: '1px solid white',
        width: 'calc(232px + 16px)',
        backgroundColor: '#33334D',
        minHeight: 'calc(100vh - 60px)',
      }}
    >
      <Box
        position="fixed"
        sx={{
          left: '0px',
          // width: '232px',
          width: 'calc(232px + 16px)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
          <Stack
            p={2}
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
              src={`http://localhost:3002/member/${auth.user_photo}`}
              // src="/static/images/avatar/1.jpg"
              onClick={handleFileInput}
            />
            <input
              ref={uploadInput}
              type="file"
              hidden
              onChange={handlePhotos}
            ></input>
            <Typography sx={{ fontSize: '30px' }}>使用者名稱</Typography>
          </Stack>
        </Box>
        <List>
          {/*  */}
          <ListItem
            disablePadding
            sx={
              activeLink == 'info'
                ? { backgroundColor: '#8D6DA1', borderRight: '3px solid white' }
                : {}
            }
          >
            <Link
              href="/dashboard/profile"
              style={
                activeLink == 'info'
                  ? { width: '100%', textDecoration: 'none', color: 'white' }
                  : {
                      width: '100%',
                      textDecoration: 'none',
                      color: '#C2C2C2',
                    }
              }
            >
              <ListItemButton>
                {/* <WhiteListItemIcon>
                <HomeIcon />
              </WhiteListItemIcon> */}
                <ListItemText primary="基本資料" />
              </ListItemButton>
            </Link>
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
          {/* <Link
            href="/dashboard/profile"
            style={{
              width: '100%',
              textDecoration: 'none',
              color: '#C2C2C2',
            }}
          > */}
          <ListItemButton
            onClick={handleClick}
            sx={
              activeLink == 'products-wishlist'
                ? {
                    color: 'white',
                  }
                : { color: '#C2C2C2' }
            }
          >
            {/* <ListItemIcon>
            <InboxIcon />
          </ListItemIcon> */}
            <ListItemText primary="收藏" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          {/* </Link> */}
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link
                href="/dashboard/products-wishlist"
                style={
                  activeLink == 'products-wishlist'
                    ? { width: '100%', textDecoration: 'none', color: 'white' }
                    : {
                        width: '100%',
                        textDecoration: 'none',
                        color: '#C2C2C2',
                      }
                }
              >
                <ListItemButton
                  sx={
                    activeLink == 'products-wishlist'
                      ? {
                          backgroundColor: '#8D6DA1',
                          borderRight: '3px solid white',
                          pl: 4,
                        }
                      : { pl: 4 }
                  }
                  // style={
                  //   activeLink == 'products-wishlist'
                  //     ? { backgroundColor: '#8D6DA1' }
                  //     : {}
                  // }
                >
                  {/* <ListItemIcon>
                <StarBorder />
              </ListItemIcon> */}
                  <ListItemText primary="商品收藏" />
                </ListItemButton>
              </Link>
              {/* <Link
                href="/online-courses/my-online-courses"
                style={{
                  width: '100%',
                  textDecoration: 'none',
                  color: '#C2C2C2',
                }}
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
                  <ListItemText primary="課程收藏" />
                </ListItemButton>
              </Link> */}
            </List>
          </Collapse>
          {/*  */}
          <ListItem
            disablePadding
            sx={
              activeLink == 'myorders'
                ? { backgroundColor: '#8D6DA1', borderRight: '3px solid white' }
                : {}
            }
          >
            <Link
              href="/dashboard/myorders"
              style={
                activeLink == 'myorders'
                  ? { width: '100%', textDecoration: 'none', color: 'white' }
                  : {
                      width: '100%',
                      textDecoration: 'none',
                      color: '#C2C2C2',
                    }
              }
            >
              <ListItemButton>
                {/* <WhiteListItemIcon>
                <GroupsIcon />
              </WhiteListItemIcon> */}
                <ListItemText primary="訂單" />
              </ListItemButton>
            </Link>
          </ListItem>
          {/*  */}
          <Link
            href="#"
            style={{
              width: '100%',
              textDecoration: 'none',
              color: '#C2C2C2',
            }}
          >
            <ListItemButton
              onClick={handleClick2}
              sx={
                (activeLink == 'my-online-courses') |
                (activeLink == 'my-inperson-classes')
                  ? {
                      color: 'white',
                    }
                  : { color: '#C2C2C2' }
              }
            >
              {/* <ListItemIcon>
            <InboxIcon />
          </ListItemIcon> */}
              <ListItemText primary="我的課程" />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </Link>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link
                href="/online-courses/my-online-courses"
                style={
                  activeLink == 'my-online-courses'
                    ? { width: '100%', textDecoration: 'none', color: 'white' }
                    : {
                        width: '100%',
                        textDecoration: 'none',
                        color: '#C2C2C2',
                      }
                }
              >
                <ListItemButton
                  sx={
                    activeLink == 'my-online-courses'
                      ? {
                          backgroundColor: '#8D6DA1',
                          borderRight: '3px solid white',
                          pl: 4,
                        }
                      : { pl: 4 }
                  }
                >
                  {/* <ListItemIcon>
                <StarBorder />
              </ListItemIcon> */}
                  <ListItemText primary="線上課程" />
                </ListItemButton>
              </Link>
              <Link
                href="/dashboard/my-inperson-classes"
                style={
                  activeLink == 'my-inperson-classes'
                    ? { width: '100%', textDecoration: 'none', color: 'white' }
                    : {
                        width: '100%',
                        textDecoration: 'none',
                        color: '#C2C2C2',
                      }
                }
              >
                <ListItemButton
                  sx={
                    activeLink == 'my-inperson-classes'
                      ? {
                          backgroundColor: '#8D6DA1',
                          borderRight: '3px solid white',
                          pl: 4,
                        }
                      : { pl: 4 }
                  }
                >
                  {/* <ListItemIcon>
                <StarBorder />
              </ListItemIcon> */}
                  <ListItemText primary="實體課程" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

          {/*  */}
          <Link
            href="#"
            style={{
              width: '100%',
              textDecoration: 'none',
              color: '#C2C2C2',
            }}
          >
            <ListItemButton
              onClick={handleClick3}
              sx={
                activeLink == 'tiers'
                  ? {
                      color: 'white',
                    }
                  : { color: '#C2C2C2' }
              }
            >
              {/* <ListItemIcon>
            <InboxIcon />
          </ListItemIcon> */}
              <ListItemText primary="會員等級" />
              {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </Link>
          <Collapse in={open3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link
                href="/dashboard/tiers"
                style={
                  activeLink == 'tiers'
                    ? { width: '100%', textDecoration: 'none', color: 'white' }
                    : {
                        width: '100%',
                        textDecoration: 'none',
                        color: '#C2C2C2',
                      }
                }
              >
                <ListItemButton
                  sx={
                    activeLink == 'tiers'
                      ? {
                          pl: 4,
                          backgroundColor: '#8D6DA1',
                          borderRight: '3px solid white',
                        }
                      : { pl: 4 }
                  }
                >
                  {/* <ListItemIcon>
                <StarBorder />
              </ListItemIcon> */}
                  <ListItemText primary="等級方案" />
                </ListItemButton>
              </Link>
              {/* <Link
                href="/dashboard/tiers/purchase-history"
                style={{
                  width: '100%',
                  textDecoration: 'none',
                  color: '#C2C2C2',
                }}
              >
                <ListItemButton sx={{ pl: 4 }}>
                   <ListItemIcon>
                <StarBorder />
              </ListItemIcon> 
                  <ListItemText primary="消費紀錄" />
                </ListItemButton>
              </Link> */}
            </List>
          </Collapse>
          {/*  */}
          {/* <ListItem disablePadding>
            <Link
              href="/"
              style={
                activeLink == 'coupons'
                  ? { width: '100%', textDecoration: 'none', color: 'white' }
                  : {
                      width: '100%',
                      textDecoration: 'none',
                      color: '#C2C2C2',
                    }
              }
            >
              <ListItemButton component="a" href="#Friends">
                <WhiteListItemIcon>
                  <GroupIcon />
                </WhiteListItemIcon>
                <ListItemText primary="優惠券" />
              </ListItemButton>
            </Link>
          </ListItem> */}
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
