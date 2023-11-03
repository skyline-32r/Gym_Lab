import React, { useState } from 'react'
// Navbar 導覽列
import MuiNavbar from '@/components/testing/MuiNavbar'
// CSS樣式
import CreateStyles from '@/styles/forum-style/create.module.css'
// form(title、content)
import { alpha, styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
// Select
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem'
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'

//Icon
import ImageIcon from '@mui/icons-material/Image'
import HomeIcon from '@mui/icons-material/Home'
//button icon
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'
// Footer
import Footer from '@/components/footer/footer'
import { Height } from '@mui/icons-material'
// button
import BtnStyles from '@/components/btn1'

const CssTextField = styled(TextField)({
  // padding:'100px',
  '.MuiOutlinedInput-root': {
    padding: '0',
  },
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
})

export default function Create() {
  // 類別、心情(狀態)
  const [category, setCategory] = useState('')
  const [mood, setMood] = useState('')

  const handleChange = (event) => {
    setCategory(event.target.value)
  }
  const handleChange1 = (event) => {
    setMood(event.target.value)
  }
  return (
    <>
      {/* Navbar */}
      <MuiNavbar></MuiNavbar>
      <Box
        sx={{
          // marginTop: '64px',
          minHeight: 'calc(100vh - 64px)',
          backgroundColor: '#0F172A',
          paddingX: '156px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* 標題Title */}
        <Box
          sx={{
            display: 'inline-block',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '50px',
          }}
        >
          <Box component="form" noValidate>
            <Box />
            <CssTextField
              label="標題"
              id="custom-css-outlined-input"
              inputProps={{
                style: { backgroundColor: 'white', borderRadius: '5px' },
              }}
              sx={{
                width: '100%',
              }}
            />
          </Box>
          {/* category類別 */}
          <Box className={CreateStyles.abc}>
            <FormControl className={CreateStyles.cate} sx={{ flex: '1' }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                類別
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={category}
                onChange={handleChange}
                label="category"
                sx={{
                  borderRadius: 'unset',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </FormControl>
            {/* mood心情 */}
            <FormControl className={CreateStyles.cate} sx={{ flex: '1' }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                心情
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={mood}
                onChange={handleChange1}
                autoWidth
                label="Age"
                sx={{
                  borderRadius: 'unset',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {/* 內文Content */}
          <Box
            component="form"
            noValidate
            sx={{
              marginTop: '50px',
              gap: 2,
            }}
          >
            <Box />
            <CssTextField
              label="內文"
              id="custom-css-outlined-input"
              multiline
              inputProps={{
                style: {
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  minHeight: '300px',
                },
              }}
              sx={{
                width: '100%',
              }}
            />
          </Box>
          {/* img */}
          <Box
            component="form"
            noValidate
            sx={{
              marginTop: '40px',
              // display: 'grid',
              // gridTemplateColumns: { sm: '1fr 2fr 1fr' },
              // paddingTop: '30px',
              gap: 2,
              // backgroundColor: 'white',
            }}
          >
            <Box />
            {/* <CssTextField
              label=""
              id="custom-css-outlined-input"
              inputProps={{
                style: { backgroundColor: 'white', borderRadius: '5px' },
              }}
            /> */}
            <ImageIcon sx={{ color: 'white'}} style={{fontSize:'50px'}} />
          </Box>

          {/* 預覽照片 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              paddingTop: '50px',
            }}
          >
            <img
              style={{ width: '15%',borderBlockColor:'white'}}
              // src="/images/forum/avatar24-01.png"
            ></img>
            <img
              style={{ width: '15%',backgroundColor:'white' }}
              src=""
            ></img>
            <img
              style={{ width: '15%' }}
              src="/images/forum/avatar24-01.png"
            ></img>
          </Box>
          {/* 按鈕 */}
          <Stack
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              paddingTop: '50px',
              marginBottom:'50px'
              // width: "100%",
            }}
            // 0
            direction="row"
            spacing={5}
          >
            <BtnStyles>
              返回首頁
              <HomeIcon />
            </BtnStyles>
            <BtnStyles>
              編輯完成
              <SendIcon />
            </BtnStyles>
          </Stack>
          {/* </Box> */}
        </Box>
      </Box>
      {/* Footer */}
      <Footer />
    </>
  )
}
