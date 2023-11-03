import React from 'react'
// Navbar
import MuiNavbar from '@/components/testing/MuiNavbar'
import { Box, Stack } from '@mui/material'
// import Box from '@mui/material/Box'
//icon
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ChatIcon from '@mui/icons-material/Chat'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

// ...
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'

//留言區
import TextField from '@mui/material/TextField'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
// Footer
import Footer from '@/components/footer/footer'
import Textstyle from '@/styles/forum-style/home.module.css'

const options = ['編輯', '刪除']

const ITEM_HEIGHT = 48

export default function Detail() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      {/* // */}
      <MuiNavbar></MuiNavbar>
      {/* 整個頁面 */}
      <Box
        sx={{
          backgroundColor: '#0F172A',
          display: 'flex',
          flexDirection: 'row',
          marginTop: '64px',
          padding: '20px 156px 0 156px',
          gap: '30px',
        }}
      >
        {/* 左 */}
        <Box
          sx={{
            // margin: '0 156px',
            minHeight: 'calc(100vh - 64px)',
            border: '1px solid white',
            padding: '0 20px',
          }}
        >
          <div
            style={{
              width: '100%',
              color: 'white',
              paddingTop: '15px',
              fontSize: '36px',
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <Typography sx={{ fontSize: '36px' }}>
              展現男人的魅力，引人注目
            </Typography>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'end',
              }}
            >
              <IconButton
                sx={{ color: 'white', position: 'absolute', right: '0' }}
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option}
                    selected={option === 'Pyxis'}
                    onClick={handleClose}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
          <div style={{ color: 'white', paddingTop: '20px', fontSize: '24px' }}>
            很多人健身其實是想要保持健康的狀態，保持健康的狀態很多人健身其實是想要保持健康的狀態，，保持健康的狀態
            很多人健身其實是想要保持健康的狀態，保持健康的狀態很多人健身其
            很多人健身其實是想要保持健康的狀態，保持健康的狀態很多人健身其實是想要保持健康的狀態，，保持健康的狀態是想要保持健康的狀態，保持健康的狀態。。
          </div>
          <div>
            <img
              src="/images/forum/1.jpg"
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                // objectPosition: '-30% 0',
              }}
            ></img>
          </div>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ color: 'pink' }}>
                <FavoriteIcon />
              </div>
              <div style={{ color: 'white' }}>133</div>
              <div style={{ color: 'white' }}>
                <ChatIcon />
              </div>
              <div style={{ color: 'white' }}>133</div>
            </Stack>
            <Box>
              <FavoriteBorderIcon />
              <BookmarkBorderIcon />
            </Box>
          </Box>
          <Box>
            <Box>
              <Stack
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: '10px',
                }}
              >
                <Avatar alt="Remy Sharp" src="/public/forum/1.jpg" />
                <Typography sx={{ color: 'white' }}>
                  xxxx-xx-xx xx-xx-xx
                </Typography>
              </Stack>
            </Box>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': {
                  // m: 1,
                  width: '80%',
                  // marginTop:'10px',
                  // height:'1px',
                },

                // backgroundColor:'blue',
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  sx={{ backgroundColor: 'white', marginTop: '10px' }}
                  id="filled-read-only-input"
                  label="Read Only"
                  defaultValue="Hello World"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
              </div>
            </Box>
            {/*  */}
            <Box>
              <Stack
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: '10px',
                }}
              >
                <Avatar alt="Remy Sharp" src="/public/forum/1.jpg" />
                <Typography sx={{ color: 'white' }}>
                  xxxx-xx-xx xx-xx-xx
                </Typography>
              </Stack>
            </Box>
            <Box
              component="form"
              sx={{
                marginBottom: '10px',
                '& .MuiTextField-root': {
                  // m: 1,
                  width: '70%',
                  // paddingTop:'10px'
                  // marginTop:'10px'
                },

                // backgroundColor:'blue',
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  sx={{ backgroundColor: 'white' }}
                  id="filled-read-only-input"
                  label="Read Only"
                  defaultValue="Hello World"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
              </div>
            </Box>
          </Box>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { width: '100ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                sx={{
                  backgroundColor: 'white',
                }}
                id="outlined-multiline-static"
                label="comment"
                multiline
                rows={3}
                // defaultValue="Default Value"
              />
            </div>
          </Box>
        </Box>
        {/* 右 */}
        <Box>
          <Box>
            <Box
              sx={{
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                fontSize: '36px',
                paddingTop: '36px',
              }}
            >
              <article>最新文章</article>
            </Box>
            <Box>
              <Box sx={{ paddingTop: '30px', width: '100%' }}>
                <img src="/images/forum/1.jpg" />
              </Box>
              <div
                style={{
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                擺個POSE，無極限顯示
              </div>
            </Box>
          </Box>
          <Box>
            {/* <Box sx={{color:'white',display:'flex',justifyContent:'center',fontSize:'36px',paddingTop:'36px'}}>
          <article>最新文章</article>
        </Box> */}
            <Box>
              <Box sx={{ paddingTop: '30px', width: '100%' }}>
                <img src="/images/forum/1.jpg" />
              </Box>
              <div
                style={{
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                擺個POSE，無極限顯示
              </div>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* // */}
      <Footer />
    </>
  )
}
