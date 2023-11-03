import React, { useEffect, useState, useRef, useContext } from 'react'
import AuthContext from '@/context/auth-context'
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
import Link from 'next/link'
import { json } from 'react-router'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

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
  const msg1 = {
    post_title: '',
    post_content: '',
    post_img: '',
    mood_type_id: '',
    category: '',
  }
  const { auth } = useContext(AuthContext)
  const [formData, setFormData] = useState(msg1)
  console.log(formData.post_img)
  const router = useRouter()
  const handleSubmit1 = async () => {
    console.log('sendData', sendData)
    const form = new FormData()
    form.append('post_title', formData.post_title)
    form.append('mood_type_id', formData.mood_type_id)
    form.append('post_img', formData.post_img)
    form.append('post_content', formData.post_content)
    form.append('category', formData.category)
    await fetch('http://localhost:3002/forum/create', {
      method: 'POST',
      credentials: 'include',
      headers: { Authorization: 'Bearer ' + auth.token },
      body: form,
    })
      .then((res) => {
        return res.json()
      })
      .then((j) => {
        console.log(j)
        if (j.msg == '新建成功') {
          Swal.fire({ icon: 'success', text: j.msg }).then(() => {
            router.push('/forum-page/mypost')
          })
        } else if (j.msg != '新建成功') {
          Swal.fire({ icon: 'error', text: j.msg })
        }
      })
  }

  const [imagePreview, setImagePreview] = useState('')
  const sendData = {
    post_title: formData.post_title,
    category: formData.category,
    mood_type_id: formData.mood_type_id,
    post_content: formData.post_content,
    post_img: imagePreview,
  }

  // 類別、心情(狀態)
  const [category, setCategory] = useState('')
  const [mood, setMood] = useState('')

  const handleChangeTitle = (event) => {
    setCategory(event.target.value)
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }
  const handleChangeCategory = (event) => {
    setMood(event.target.value)
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }
  const handleContentMood = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }
  const handleContentCnt = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }
  const handleContentImg = (event) => {
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.files[0],
    }
    setFormData(newFormData)
  }

  // 點選img icon，可以點進去選擇照片
  const fileInputRef = useRef(null)

  // console.log('imagePreview: ', imagePreview)
  const handleIconClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    const newFormData = {
      ...formData,
      post_img: file,
    }
    setFormData(newFormData)
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
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
          {/* <form> */}
          <Box component="form" noValidate>
            <Box />
            <CssTextField
              name="post_title"
              label="標題"
              onChange={handleChangeTitle}
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
                value={sendData.category}
                onChange={handleChangeCategory}
                name="category"
                label="category"
                sx={{
                  borderRadius: 'unset',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="飲食">飲食</MenuItem>
                <MenuItem value="課程">課程</MenuItem>
                <MenuItem value="教練">教練</MenuItem>
                <MenuItem value="器材">器材</MenuItem>
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
                value={sendData.mood_type_id}
                name="mood_type_id"
                onChange={handleContentMood}
                autoWidth
                label="Age"
                sx={{
                  borderRadius: 'unset',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>開心</MenuItem>
                <MenuItem value={2}>生氣</MenuItem>
                <MenuItem value={3}>傷心</MenuItem>
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
              name="post_content"
              onChange={handleContentCnt}
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
            name="post_img"
            onChange={handleFileChange}
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
            <input
              ref={fileInputRef}
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            ></input>
            <Button onClick={handleIconClick}>
              <ImageIcon sx={{ color: 'white' }} style={{ fontSize: '50px' }} />
            </Button>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{ marginTop: '20px', maxWidth: '100%' }}
              />
            )}
          </Box>
          {/* 請問一下怎麼讓img 的 icon 做照片瀏覽的動作 ，可以讓他選擇照片，可以幫寫程式碼嗎? */}

          {/* 預覽照片 */}
          {/* <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              paddingTop: '50px',
              
            }}
          >
            <img
              style={{ width: '15%', borderBlockColor: 'white' }}
              // src="/images/forum/avatar24-01.png"
            ></img>
            <img
              style={{ width: '15%', backgroundColor: 'white' }}
              src=""
            ></img>
            <img
              style={{ width: '15%' }}
              src="/images/forum/avatar24-01.png"
            ></img>
          </Box> */}
          {/* 按鈕 */}
          <Stack
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              paddingTop: '50px',
              marginBottom: '50px',
              // width: "100%",
            }}
            direction="row"
            spacing={5}
          >
            <Link href="/forum-page/home">
              <BtnStyles>
                返回首頁
                <HomeIcon />
              </BtnStyles>
            </Link>
            {/* <Link href="/forum-page/list"> */}
            <Box onClick={handleSubmit1}>
              <BtnStyles>
                編輯完成
                <SendIcon />
              </BtnStyles>
            </Box>
            {/* </Link> */}
          </Stack>
          {/* </form> */}
        </Box>
      </Box>
      {/* Footer */}
      <Footer />
    </>
  )
}
