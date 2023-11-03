import React, { useEffect } from 'react'
// Navbar 導覽列
import MuiNavbar from '@/components/testing/MuiNavbar'
// CSS樣式
import HomeStyle from '@/styles/forum-style/home.module.css'
// 四大類
import { Stack, Box, Tabs, Tab, Button } from '@mui/material'
// import Box from '@mui/material/Box'
// import Tabs from '@mui/material/Tabs'
// import Tab from '@mui/material/Tab'
// 搜尋
import { Container, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
// Icon
import NotificationsIcon from '@mui/icons-material/Notifications'
import AddBoxIcon from '@mui/icons-material/AddBox'
import ChatIcon from '@mui/icons-material/Chat'
import AndroidIcon from '@mui/icons-material/Android'
import ArticleIcon from '@mui/icons-material/Article'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
// swiper
import SwiperCss from '@/styles/forum-style/swipertstyles.module.css'
import { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import './styles.css';
// import required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper/modules'

// Card
import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Skeleton from '@mui/material/Skeleton'
import Link from 'next/link'
// Footer
// import Footer from '@/components/footer/footer'
import Footer from '@/components/testing/footer'
import { Style } from '@mui/icons-material'
import Router from 'next/router'
import { useActiveLink } from '@/context/active-link-context'

export default function Home(props) {
  const { setActiveLink } = useActiveLink()
  useEffect(() => {
    setActiveLink('home_forum')
  }, [])
  // 四大類
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  //搜尋
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange1 = (event) => {
    setSearchTerm(event.target.value)
  }
  //類別
  const [category, setCategory] = useState('')
  // Card
  const { loading = false } = props

  // const handleDiet = () => {
  //   Router.push('/list')
  // }
  return (
    <>
      {/* Navbar */}
      <MuiNavbar></MuiNavbar>
      <Box
        sx={{
          // marginTop: '64px',
          minHeight: 'calc(100vh - 64px)',
          backgroundColor: '#0F172A',
        }}
      >
        {/* 四大類 & 搜尋 & Icon*/}
        <Box
          sx={{
            width: '100%',
            // bgcolor: 'background.paper',
            paddingTop: '30px',
            paddingLeft: '100px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <Tabs
              value=""
              onChange={handleChange}
              centered
              // sx={{ color: 'white' }}
            >
              <Link
                href={'/forum-page/list?category=飲食'}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Tab
                  className={HomeStyle.series}
                  value=""
                  label="飲食系列"
                  sx={{
                    '&.MuiTab-root': {
                      color: 'white',
                      opacity: 'unset',
                    },
                  }}
                />
                {/* <Typography>飲食系列</Typography> */}
              </Link>
              <Link
                href={'/forum-page/list?category=課程'}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Tab
                  // onChange={handleChange}
                  value=""
                  className={HomeStyle.series}
                  sx={{
                    color: 'white',
                    opacity: 'unset',
                  }}
                  label="課程系列"
                />
              </Link>
              <Link
                href={'/forum-page/list?category=教練'}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Tab
                  className={HomeStyle.series}
                  value=""
                  label="教練系列"
                  sx={{
                    color: 'white',
                    opacity: 'unset',
                  }}
                />
              </Link>
              <Link
                href={'/forum-page/list?category=器材'}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Tab
                  className={HomeStyle.series}
                  value={0}
                  label="器材系列"
                  sx={{
                    color: 'white',
                    opacity: 'unset',
                  }}
                />
              </Link>
            </Tabs>
            {/* Icon部分 */}
            <Box className={HomeStyle.icon}>
              {/* Search */}
              <Container maxWidth="md">
                <TextField
                  // style={{ padding: 0 }}
                  className={HomeStyle.search}
                  id="search"
                  type="search"
                  label="Search"
                  size="small"
                  value={searchTerm}
                  onChange={handleChange1}
                  color="secondary"
                  InputProps={{
                    // style: { color: 'red', padding: '0' },
                    // style: { padding: 0 },
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Container>
              {/* 鈴鐺、創建 */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <Button
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    AlignItems: 'center',
                    minWidth: 'unset',
                    padding: 'unset',
                  }}
                >
                  {/* <NotificationsIcon
                    sx={{ color: 'white', fontSize: '24px' }}
                  /> */}
                </Button>

                {/* <Button> */}
                <Link
                  href="/forum-page/create"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    AlignItems: 'center',
                  }}
                >
                  <AddBoxIcon sx={{ color: 'white', fontSize: '24px' }} />
                </Link>
                {/* </Button> */}
                {/* <ArticleIcon sx={{color:'white'}}/> */}
                <Link href="/forum-page/mypost">
                  <ManageSearchIcon
                    sx={{
                      color: 'white',
                      fontSize: '24px',
                      height: '30px',
                      width: '30px',
                    }}
                  />
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* 輪播牆 */}
        <Box sx={{ marginTop: '64px', height: '600px', padding: '0px 156px' }}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              height: '100px',
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={SwiperCss.swiper}
          >
            <SwiperSlide className={SwiperCss.swiperSlide}>
              <Box className={SwiperCss.imgContainer}>
                <img
                  src="/images/forum/3.jpg"
                  className={SwiperCss.swiperImg}
                ></img>
              </Box>
              {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1jxADgMtIQH2jBuOpLf1MWWrj5EX15qABfw&usqp=CAU */}
            </SwiperSlide>
            <SwiperSlide>
              <Box className={SwiperCss.imgContainer}>
                <img
                  src="/images/forum/2.jpg"
                  className={SwiperCss.swiperImg}
                ></img>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className={SwiperCss.imgContainer}>
                <img
                  src="/images/forum/3.jpg"
                  className={SwiperCss.swiperImg}
                ></img>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className={SwiperCss.imgContainer}>
                <img
                  src="/images/forum/7.jpg"
                  className={SwiperCss.swiperImg}
                ></img>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className={SwiperCss.imgContainer}>
                <img
                  src="/images/forum/5.jpg"
                  className={SwiperCss.swiperImg}
                ></img>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className={SwiperCss.imgContainer}>
                <img
                  src="/images/forum/6.jpg"
                  className={SwiperCss.swiperImg}
                ></img>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className={SwiperCss.imgContainer}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8M19A9hoRoEaV_L7jBBU8tCWXLBAW8d-keA&usqp=CAU"
                  className={SwiperCss.swiperImg}
                ></img>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className={SwiperCss.imgContainer}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqorYXnzv1qL9hzD1elonIKAu5wqCiICiE6g&usqp=CAU"
                  className={SwiperCss.swiperImg}
                ></img>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className={SwiperCss.imgContainer}>
                <img
                  src="/images/forum/6.jpg"
                  className={SwiperCss.swiperImg}
                ></img>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
        {/* 最新文章 */}
        <article className={HomeStyle.news}>最新文章</article>
        <Box
          className={HomeStyle.card1}
          sx={{
            overflow: 'hidden',
          }}
        >
          <Link href="">
            <Card sx={{ maxWidth: 500, width: '100%' }}>
              {loading ? (
                <Skeleton
                  sx={{ height: 190 }}
                  animation="wave"
                  variant="rectangular"
                />
              ) : (
                <CardMedia
                  sx={{ width: 500 }}
                  component="img"
                  height="250"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFyrTgk2T_QQ-Z9vjCG6ILfSQnjK5A14WQw&usqp=CAU"
                />
              )}
              <CardContent>
                {loading ? (
                  <React.Fragment>
                    <Skeleton
                      animation="wave"
                      height={10}
                      style={{ marginBottom: 6 }}
                    />
                    <Skeleton animation="wave" height={10} width="80%" />
                  </React.Fragment>
                ) : (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="p"
                  >
                    {
                      '“The hardest thing about exercise is to start doing it. Once you are doing exercise regularly, the hardest thing is to stop it.”'
                    }
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Link>
          {/* 1.2小圖 */}
          {/* 1 */}
          <Box>
            <Link href="">
              <Card
                sx={{
                  maxWidth: 250,
                  maxHeight: 170,
                  width: '100%',
                  marginBottom: '24px',
                }}
              >
                {loading ? (
                  <Skeleton
                    sx={{ height: 190 }}
                    animation="wave"
                    variant="rectangular"
                  />
                ) : (
                  <CardMedia
                    sx={{ width: 250, height: 100 }}
                    component="img"
                    // height="200="
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfdksWDVuOdekkN51PoB1modVavDDmvWAeEw&usqp=CAU"
                  />
                )}
                <CardContent sx={{ height: '70px', paddingTop: '1px' }}>
                  {loading ? (
                    <React.Fragment>
                      <Skeleton
                        animation="wave"
                        height={10}
                        style={{ marginBottom: 6 }}
                      />
                      <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                  ) : (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="p"
                    >
                      {
                        'Going to the gym is great for your body, but it’s also great for your mind.'
                      }
                    </Typography>
                  )}
                </CardContent>
              </Card>
              {/* 2 */}
              <Card sx={{ maxWidth: 250, maxHeight: 170, width: '100%' }}>
                {loading ? (
                  <Skeleton
                    sx={{ height: 190 }}
                    animation="wave"
                    variant="rectangular"
                  />
                ) : (
                  <CardMedia
                    sx={{ width: 250, height: 100 }}
                    component="img"
                    height="200"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROk5aQradSC9LWQ-xaIvZLCbPS-1_LlAGVIA&usqp=CAU  "
                  />
                )}
                <CardContent sx={{ height: '70px', paddingTop: '1px' }}>
                  {loading ? (
                    <React.Fragment>
                      <Skeleton
                        animation="wave"
                        height={10}
                        style={{ marginBottom: 6 }}
                      />
                      <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                  ) : (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="p"
                    >
                      {'An early morning walk is a blessing for the whole day.'}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Link>
          </Box>
          {/* 3.4小圖 */}
          <Box>
            <Link href="">
              <Card
                sx={{
                  maxWidth: 250,
                  maxHeight: 170,
                  width: '100%',
                  marginBottom: '24px',
                }}
              >
                {loading ? (
                  <Skeleton
                    sx={{ height: 190 }}
                    animation="wave"
                    variant="rectangular"
                  />
                ) : (
                  <CardMedia
                    sx={{ width: 250, height: 100 }}
                    component="img"
                    height="200"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Pv7M0wuoZdZgHHidWfeHrt1pAHpfLfoRjA&usqp=CAU"
                  />
                )}
                <CardContent sx={{ height: '70px', paddingTop: '1px' }}>
                  {loading ? (
                    <React.Fragment>
                      <Skeleton
                        animation="wave"
                        height={10}
                        style={{ marginBottom: 6 }}
                      />
                      <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                  ) : (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="p"
                    >
                      {
                        'When I feel tired, I just think about how great I will feel once I finally reach my goal.'
                      }
                    </Typography>
                  )}
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 250, maxHeight: 170, width: '100%' }}>
                {loading ? (
                  <Skeleton
                    sx={{ height: 190 }}
                    animation="wave"
                    variant="rectangular"
                  />
                ) : (
                  <CardMedia
                    sx={{ width: 250, height: 100 }}
                    component="img"
                    height="200"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9yVMf0DWNCu73J38YADiAr131eavra0WoFw&usqp=CAU"
                  />
                )}
                <CardContent sx={{ height: '70px', paddingTop: '1px' }}>
                  {loading ? (
                    <React.Fragment>
                      <Skeleton
                        animation="wave"
                        height={10}
                        style={{ marginBottom: 6 }}
                      />
                      <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                  ) : (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="p"
                    >
                      {
                        'If you don’t make time for exercise, you’ll probably have to make time for illness.'
                      }
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Link>
          </Box>
          {/* 5.6小圖 */}
          <Box>
            <Link href="">
              <Card
                sx={{
                  maxWidth: 250,
                  maxHeight: 170,
                  width: '100%',
                  marginBottom: '24px',
                }}
              >
                {loading ? (
                  <Skeleton
                    sx={{ height: 190 }}
                    animation="wave"
                    variant="rectangular"
                  />
                ) : (
                  <CardMedia
                    sx={{ width: 250, height: 100 }}
                    component="img"
                    height="200"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKhzPJqog8SGK-PBApbUwmfjDaYwKNrGlfl9eQilOASfFoiQYCt08v2AcECsEDTZcmJM&usqp=CAU"
                  />
                )}
                <CardContent sx={{ height: '70px', paddingTop: '1px' }}>
                  {loading ? (
                    <React.Fragment>
                      <Skeleton
                        animation="wave"
                        height={10}
                        style={{ marginBottom: 6 }}
                      />
                      <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                  ) : (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="p"
                    >
                      {
                        'Your health account, your bank account, they’re the same thing. The more you put in, the more you can take out.'
                      }
                    </Typography>
                  )}
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 250, maxHeight: 170, width: '100%' }}>
                {loading ? (
                  <Skeleton
                    sx={{ height: 190 }}
                    animation="wave"
                    variant="rectangular"
                  />
                ) : (
                  <CardMedia
                    sx={{ width: 250, height: 100 }}
                    component="img"
                    height="200"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJeFC6HDB48BpHRChAH7ZbxRb-KeCRU_Z3Gw&usqp=CAU"
                  />
                )}
                <CardContent sx={{ height: '70px', paddingTop: '1px' }}>
                  {loading ? (
                    <React.Fragment>
                      <Skeleton
                        animation="wave"
                        height={10}
                        style={{ marginBottom: 6 }}
                      />
                      <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                  ) : (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="p"
                    >
                      {
                        'Your body can stand almost anything. It’s your mind that you have to convince.'
                      }
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Link>
          </Box>
        </Box>

        {/* 熱門討論 */}
        <article className={HomeStyle.news}>熱門討論</article>
        <Box className={HomeStyle.bottom2}>
          <img
            className={HomeStyle.img}
            src="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=375"
            alt="aaaa"
          ></img>
          {/* <Box className={HomeStyle.ii}> */}
          <Box className={HomeStyle.t}>
            <Box className={HomeStyle.i}>
              <Link className={HomeStyle.content} href="/forum-page/list">
                鍛鍊腹肌，訓練核心肌群，讓身材更加壯碩. . .
              </Link>
              <Stack className={HomeStyle.icons}>
                <ChatIcon sx={{ color: 'white' }} />
                <p>22</p>
                <AndroidIcon sx={{ color: 'white' }} />
                <p>50</p>
              </Stack>
            </Box>
            {/*  */}
            <Box className={HomeStyle.i}>
              <Link className={HomeStyle.content} href="">
                如果你開始跑步，你就是一個跑者。不管是. . .
              </Link>
              <Stack className={HomeStyle.icons}>
                <ChatIcon sx={{ color: 'white' }} />
                <p>20</p>
                <AndroidIcon sx={{ color: 'white' }} />
                <p>40</p>
              </Stack>
            </Box>
            {/*  */}
            <Box className={HomeStyle.i}>
              <Link className={HomeStyle.content} href="">
                我不計算仰臥起坐的次數。我只在開始受傷時. . .
              </Link>
              <Stack className={HomeStyle.icons}>
                <ChatIcon sx={{ color: 'white' }} />
                <p>17</p>
                <AndroidIcon sx={{ color: 'white' }} />
                <p>33</p>
              </Stack>
            </Box>
            {/*  */}
            <Box className={HomeStyle.i}>
              <Link className={HomeStyle.content} href="">
                你的身體幾乎可以承受任何東西。你必須說服. . .
              </Link>
              <Stack className={HomeStyle.icons}>
                <ChatIcon sx={{ color: 'white' }} />
                <p>10</p>
                <AndroidIcon sx={{ color: 'white' }} />
                <p>12</p>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Footer */}
      <Footer />
    </>
  )
}
