import React, { useEffect, useState } from 'react'
// Navbar 導覽列
import MuiNavbar from '@/components/testing/MuiNavbar'
//
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box } from '@mui/material'

//icon
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot'
import TurnedInIcon from '@mui/icons-material/TurnedIn'
//
import {
  Stack,
  Pagination,
  Tabs,
  Tab,
  Container,
  TextField,
  InputAdornment,
  Button,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
// import NotificationsIcon from '@mui/icons-material/Notifications'
import AddBoxIcon from '@mui/icons-material/AddBox'
import ChatIcon from '@mui/icons-material/Chat'
import AndroidIcon from '@mui/icons-material/Android'
import ArticleIcon from '@mui/icons-material/Article'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
//mood
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral'
import {
  //... (其它引入)
  // SentimentNeutralIcon,
  SentimentSatisfiedIcon,
  SentimentDissatisfiedIcon,
} from '@mui/icons-material'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import MoodIcon from '@mui/icons-material/Mood'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
//
import Link from 'next/link'

//頭像
import Avatar from '@mui/material/Avatar'
// Footer
// import Footer from '@/components/footer/footer'
import Footer from '@/components/testing/footer'
import { Value } from 'sass'
// import { Link } from 'react-router-dom'
//
import { useRouter } from 'next/router'
//
import dayjs from 'dayjs'
//
import HomeStyle from '@/styles/forum-style/home.module.css'

export default function List() {
  const [allData, setAllData] = useState([])
  const [postData, setPostData] = useState([])
  const [category, setCategory] = useState('')
  console.log(postData)
  const [postLike, setPostLike] = useState([])
  const router = useRouter()
  //
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalRow, setTotalRow] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [value, setValue] = useState(0)
  //愛心&收藏
  const [isFavorited, setIsFavorited] = useState(false)
  const [isCollected, setIsCollected] = useState(false)
  const [favoriteStatus, setFavoriteStatus] = useState({})
  const [collectStatus, setCollectStatus] = useState({})

  console.log(value)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const arr = ['飲食', '課程', '教練', '器材']

  const handleChange1 = (event) => {
    setSearchTerm(event.target.value)
  }
  // console.log(currentPage)
  const getList = async (page, category) => {
    fetch(`http://localhost:3002/forum?page=${page}&category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setPostData(data.data)
        setTotalPages(data.totalPages)
        setCurrentPage(data.currentPage)
        setTotalRow(data.totalRow)
        // setPostLike(data[1])
      })
  }

  useEffect(() => {
    if (router.isReady) {
      // const category = router.query.category

      let { category } = router.query
      if (category == undefined) {
        category = ''
      }
      // setCategory(category)
      setValue(arr.indexOf(category))
      fetch(
        `http://localhost:3002/forum?page=${currentPage}&category=${category}`
      )
        .then((res) => res.json())
        .then((data) => {
          setPostData(data.data)
          setTotalPages(data.totalPages)
          setCurrentPage(data.currentPage)

          // setPostLike(data[1])
        })
      // .then((data) => setPostLike(data[1]))
      // setPostData(allData[0])
      // setPostLike(allData[1])
    }
  }, [router.isReady, currentPage, router.query])
  console.log(allData)
  // setPostData(allData[0])
  // setPostLike(allData[1])
  console.log(
    postData.map((v, i) => {
      return v.post_id
    })
  )

  return (
    <>
      {/* Navbar */}
      <MuiNavbar></MuiNavbar>
      {/*  */}

      <Box
        sx={{
          //   marginTop: '100px',
          minHeight: 'calc(100vh - 128px)',
          width: '100%',
          // paddingLeft: '1000px',
          padding: '100px 156px 0 156px',
          //   borderRadius:'100px',
          backgroundColor: '#0F172A',
          // display:'flex',
          // flexDirection:'row',
          // justifyContent:'flex-end',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            paddingBottom: '20px',
            // paddingLeft:'50px'
            // marginRight: '100px',
            // gap:'50px'
          }}
        >
          <Tabs
            value={value}
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
                value="飲食"
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
                value="課程"
                className={HomeStyle.series}
                sx={{ color: 'white', opacity: 'unset' }}
                label="課程系列"
              />
            </Link>
            <Link
              href={'/forum-page/list?category=教練'}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Tab
                className={HomeStyle.series}
                sx={{ color: 'white', opacity: 'unset' }}
                value="教練"
                label="教練系列"
              />
            </Link>
            <Link
              href={'/forum-page/list?category=器材'}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Tab
                className={HomeStyle.series}
                sx={{ color: 'white', opacity: 'unset' }}
                value="器材"
                label="器材系列"
              />
            </Link>
          </Tabs>
          {/* Icon部分 */}
          <Box className={HomeStyle.icon}>
            {/* Search */}
            <Container maxWidth="md">
              <TextField
                // style={{ padding: 0 }}
                // sx={{ paddingLeft: '100px' }}
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
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                paddingLeft: '50px',
              }}
            >
              <Button
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  AlignItems: 'center',
                  minWidth: 'unset',
                  padding: 'unset',
                }}
              >
                <NotificationsIcon sx={{ color: 'white', fontSize: '24px' }} />
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
        {/* 10 */}
        {postData.map((v, i) => {
          return (
            <>
              <Accordion
                key={v.post_id}
                sx={{ borderRadius: '5px', backgroundColor: '#D9D9D9' }}
                expanded={true}
              >
                {/* <Link
                  href=""
                  key={v.post_id}
                  style={{ textDecoration: 'none' }}
                > */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    color: 'black',
                    justifyContent: 'space-between',
                    // paddingBottom:'5px'
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <AccordionSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography style={{ fontSize: '36px' }}>
                        {v.post_title}
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      {/* <Typography style={{ fontSize: '28px' }}>
                          {v.post_content.length > 49
                            ? v.post_content.slice(0, 49) + '...'
                            : v.post_content}
                        </Typography> */}
                      <Typography style={{ fontSize: '26px' }}>
                        {v.post_content}
                      </Typography>
                      {/* {console.log('length' + v.post_content.length)} */}
                      <Stack
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        <Avatar alt="Remy Sharp" src="/public/forum/1.jpg" />
                        <Typography style={{ paddingLeft: '10px' }}>
                          {dayjs(v.post_date).format('YYYY/MM/DD')}
                        </Typography>
                        <Typography style={{ paddingLeft: '10px' }}>
                          {v.post_time}
                        </Typography>
                        <Typography>
                          {v.mood_type_id === 1 ? (
                            <MoodIcon color="primary" />
                          ) : null}
                          {v.mood_type_id === 2 ? (
                            <SentimentNeutralIcon color="action" />
                          ) : null}
                          {v.mood_type_id === 3 ? (
                            <SentimentVeryDissatisfiedIcon color="error" />
                          ) : null}
                          {v.mood_type_id === 4 ? (
                            <SentimentSatisfiedIcon color="secondary" />
                          ) : null}
                          {v.mood_type_id === 5 ? (
                            <SentimentDissatisfiedIcon color="disabled" />
                          ) : null}
                          {v.mood_type_id === 6 ? (
                            <SentimentVerySatisfiedIcon color="primary" />
                          ) : null}
                        </Typography>
                      </Stack>
                    </AccordionDetails>
                  </Box>
                  <img
                    style={{
                      width: '10%',
                      display: 'flex',
                      flexDirection: 'flex-end',
                    }}
                    src={`http://localhost:3002/${v.post_img}`}
                    alt={v.post_title}
                  />
                  {console.log(v.post_img)}
                </Box>{' '}
                <Box
                  sx={{
                    width: '100%',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'end',
                    backgroundColor: '#0F172A',
                    gap: '30px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                    }}
                  >
                    {favoriteStatus[v.post_id] ? (
                      <FavoriteIcon
                        style={{ color: 'pink' }}
                        onClick={() => {
                          setFavoriteStatus({
                            ...favoriteStatus,
                            [v.post_id]: !favoriteStatus[v.post_id],
                          })
                        }}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        // sx={{ color: 'primary' }}
                        // style={{ color: 'white' }}
                        onClick={() => {
                          setFavoriteStatus({
                            ...favoriteStatus,
                            [v.post_id]: true,
                          })
                        }}
                      />
                    )}
                    <Typography>愛心</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', paddingBottom: '10px' }}>
                    {collectStatus[v.post_id] ? (
                      <TurnedInIcon
                        style={{ color: 'yellow' }}
                        onClick={() => {
                          setCollectStatus({
                            ...collectStatus,
                            [v.post_id]: !collectStatus[v.post_id],
                          })
                        }}
                      />
                    ) : (
                      <TurnedInNotIcon
                        onClick={() => {
                          setCollectStatus({
                            ...collectStatus,
                            [v.post_id]: true,
                          })
                        }}
                      />
                    )}
                    <Typography>收藏</Typography>
                  </Box>
                </Box>{' '}
                {/* </Link> */}
                {/* <Box sx={{width:'100%',color:'white',display:'flex',justifyContent:'end'}}> <EditIcon/> </Box> */}
              </Accordion>
            </>
          )
        })}

        {/* 分頁 */}
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            // backgroundColor: '#34434d',
            width: '100%',
          }}
          spacing={2}
        >
          <Pagination
            sx={{
              color: 'white',
              '.MuiButtonBase-root': {
                color: 'white',
              },
            }}
            count={totalPages}
            page={currentPage}
            rowPerPage={15}
            showFirstButton
            showLastButton
            onChange={(event, pageNumber) => {
              setCurrentPage(pageNumber)
            }}
          />
          {/* <Pagination count={10} hidePrevButton hideNextButton /> */}
        </Stack>
      </Box>
      {/*  */}

      {/* Footer */}
      <Footer />
    </>
  )
}
