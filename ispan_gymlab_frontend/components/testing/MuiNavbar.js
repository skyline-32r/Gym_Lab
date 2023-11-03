import {
  AppBar,
  Toolbar,
  Stack,
  Button,
  Box,
  Menu,
  MenuItem,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from '@mui/material'
import Logo from '@/components/icons/logo-gymlab'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import CartContext from '@/context/navbar-cart'
import AuthContext from '@/context/auth-context'
import Swal from 'sweetalert2'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useContext, useState, useEffect } from 'react'
import GoogleLogout from '@/components/member/google-logout'
import { useRouter } from 'next/router'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -2,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))

export default function MuiNavbar() {
  const router = useRouter() //跳轉用
  const { cart, setCart } = useContext(CartContext)

  const [loggedIn, setLoggedIn] = useState(false)
  const { auth, setAuth } = useContext(AuthContext)
  const [userData, setUserData] = useState({ toBeDetermined: '' })
  // const [cart, setCart] = useState('')
  // const [data, setData] = useState(0)

  // 購物車顯示數量
  // useEffect(() => {
  //   fetch('http://localhost:3002/online-shop/add_cart_icon')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       setCart(data)
  //     })
  //     .catch((error) => {
  //       console.log('fail to add number', error)
  //     })
  // }, [data])

  // useEffect(() => {}, [cart])

  // const cartData = () => {
  //   fetch(`http://localhost:3002/online-shop/cart_icon`)
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setData(data)
  //       setCart(data)
  //       console.log(data)
  //     })
  // }

  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  useEffect(() => {
    console.log(auth.token)
    if (auth.token) {
      fetch('http://localhost:3002/member/getData', {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + auth.token },
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(data)

          setUserData(data)
          setLoggedIn(true)
        })
    }
  }, [auth])
  console.log('userData ', userData)
  const handleLogout = () => {
    Swal.fire({
      title: '確認登出',
      text: '你確定要登出嗎？',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '確定',
      cancelButtonText: '取消',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('auth')
        localStorage.removeItem('user_photo')
        localStorage.removeItem('recoveryUser')
        localStorage.removeItem('cart')
        setAuth({
          id: '',
          email: '',
          nickname: '',
          token: '',
        })
        setLoggedIn(false)
        Swal.fire('已登出', '你已成功登出', 'success')
      }
    })
  }
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: '#222',
          margin: 0,
          paddingLeft: '156px',
          paddingRight: '156px',
          '@media (max-width: 600px)': {
            paddingLeft: '16px',
            paddingRight: '16px',
          },
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
            <Logo />
          </Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              '@media (max-width: 600px)': {
                display: ' none',
              },
            }}
          >
            <Button color="inherit" className="navBotton">
              <Link href="/" className="navBotton">
                首頁
              </Link>
            </Button>

            <Button color="inherit" className="navBotton">
              <Link href="/in-person-classes" className="navBotton">
                實體課程
              </Link>
            </Button>
            <Button color="inherit" className="navBotton">
              <Link href="/online-courses" className="navBotton">
                線上課程
              </Link>
            </Button>
            <Button color="inherit" className="navBotton">
              <Link href="/online-shop" className="navBotton">
                線上商城
              </Link>
            </Button>
            <Button color="inherit" className="navBotton">
              <Link href="/forum-page/home" className="navBotton">
                論壇
              </Link>
            </Button>
          </Stack>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '32px',
              '@media (max-width: 600px)': {
                display: ' none',
              },
            }}
          >
            <Link
              href="/cart"
              sx={{
                textDecoration: 'none',
                color: 'unset',
              }}
            >
              <IconButton aria-label="cart" style={{ color: '#00f0ff' }}>
                <StyledBadge badgeContent={cart ? cart : 0}>
                  <ShoppingCartIcon style={{ color: '#ff00b8' }} />
                </StyledBadge>
              </IconButton>
            </Link>
            {loggedIn ? (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '0px',
                }}
              >
                <Link
                  href="/dashboard/profile"
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                  }}
                >
                  {/* <AccountCircleIcon
                    sx={{
                      width: '32px',
                      height: '32px',
                    }}
                  /> */}
                  <Avatar src={`http://localhost:3002/member/${auth.user_photo}`} />
                </Link>
                <Button
                  color="inherit"
                  className="navBotton"
                  onClick={handleLogout}
                >
                  登出
                </Button>
              </Box>
            ) : (
              <Link
                href="/member/login"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                <Button color="inherit" className="navBotton">
                  登入
                </Button>
              </Link>
            )}
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              display: 'none',
              '@media (max-width: 600px)': {
                display: 'block',
              },
            }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ overflow: 'hidden' }}>
        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={toggleDrawer}
          sx={{ zIndex: 100 }}
        >
          <List sx={{ backgroundColor: '#140f2a', color: '#f0f0f0' }}>
            <ListItem sx={{ height: '64px' }}>
              <ListItemText />
            </ListItem>

            <ListItem>
              <ListItemButton onClick={() => router.push('/dashboard/profile')}>
                <ListItemIcon>
                  <AccountCircleIcon sx={{ color: '#f9f9f9' }} />
                </ListItemIcon>
                <ListItemText primary="會員中心" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton onClick={() => router.push('/')}>
                <ListItemText primary="首頁" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton onClick={() => router.push('/in-person-classes')}>
                <ListItemText primary="實體課程" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemText
                  primary="線上課程"
                  onClick={() => router.push('/online-courses')}
                />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemText
                  primary="線上商城"
                  onClick={() => router.push('/online-shop')}
                />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemText
                  primary="論壇"
                  onClick={() => router.push('/forum-page/home')}
                />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemText
                  primary="購物車"
                  onClick={() => router.push('/cart')}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  )
}
