import React, { useEffect, useState, useContext } from 'react'
import AuthContext from '@/context/auth-context'
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
// Hreat Full
import FavoriteIcon from '@mui/icons-material/Favorite'
// BOOK
import BookmarkIcon from '@mui/icons-material/Bookmark'

import { Stack, Pagination, Button } from '@mui/material'
// Footer
// import Footer from '@/components/footer/footer'
import Footer from '@/components/testing/footer'
import Link from 'next/link'
//
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Edit from './edit'

//
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
// import Link from 'next/link'
import { method } from 'lodash'
import Swal from 'sweetalert2'
import { FaSwatchbook } from 'react-icons/fa'
import { useRouter } from 'next/router'
//
import dayjs from 'dayjs'
import Avatar from '@mui/material/Avatar'


export default function MyPost() {
  const [allData, setAllData] = useState([])
  const [postData, setPostData] = useState([])
  const [postLike, setPostLike] = useState([])
  // const router = useRouter()
  //
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalRow, setTotalRow] = useState(0)
  console.log(currentPage)
  const { auth } = useContext(AuthContext)

  useEffect(() => {
    if (auth.token) {
      console.log(auth)
      fetch(`http://localhost:3002/forum/mypost?page=${currentPage}`, {
        method: 'POST',
        headers: { Authorization: 'Bearer ' + auth.token },
      })
        .then((res) => res.json())
        .then((data) => {
          setPostData(data.data)
          setTotalPages(data.totalPages)
          setCurrentPage(data.currentPage)
          // console.log(data[0])
          // setPostLike(data[1])
        })
    }
    // .then((data) => setPostLike(data[1]))
    // setPostData(allData[0])
    // setPostLike(allData[1])
  }, [auth, currentPage])
  console.log(allData)
  console.log(postData)
  // console.log(
  //   postData.map((v, i) => {
  //     return v.post_id
  //   })
  // )

  // {postData.map(()=>{

  // })}
  //修改文章
  const handleEdit = (postId) => {
    Swal.fire({
      title: '確定要修改此文章嗎?',
      text: '你將會被導向到修改頁面。',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '確定修改',
      cancelButtonText: '取消',
    }).then((result) => {
      if (result.isConfirmed) {
        // 使用 next/router 重定向到 edit 頁面，並傳遞 postId
        router.push(`/forum-page/edit?post_id=${postId}`)
      }
    })
  }

  //刪除文章
  const router = useRouter()
  const handleDelete = async (postId) => {
    Swal.fire({
      title: '確定要刪除嗎?',
      text: '你將無法恢復此文章!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '確定刪除',
      cancelButtonText: '取消',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `http://localhost:3002/forum/delete/${postId}`,
            {
              method: 'DELETE',
            }
          )
          const data = await response.json()

          if (data.msg === '刪除成功') {
            Swal.fire({ icon: 'success', text: data.msg })

            // 重新获取最新的帖子数据
            fetch(`http://localhost:3002/forum/mypost?page=${currentPage}`, {
              method: 'POST',
              headers: { Authorization: 'Bearer ' + auth.token },
            })
              .then((res) => res.json())
              .then((data) => {
                setPostData(data.data)
                setTotalPages(data.totalPages)
                setCurrentPage(data.currentPage)
              })
          } else {
            Swal.fire({ icon: 'error', text: data.msg })
          }
        } catch (error) {
          console.error('刪除時發生錯誤：', error)
        }
      }
    })
  }

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
          paddingLeft: '100px',
          padding: '100px 156px 0 156px',
          //   borderRadius:'100px',
          backgroundColor: '#0F172A',
        }}
      >
        {/* 1 */}
        {postData.map((v, i) => {
          return (
            <Accordion
              key={v.post_id}
              sx={{ borderRadius: '5px', backgroundColor: '#D9D9D9' }}
              expanded={true}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  color: 'black',
                  justifyContent: 'space-between',
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography style={{ fontSize: '44px' }}>
                      {v.post_title}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                    <Typography
                      style={{ fontSize: '24px', letterSpacing: '4px' }}
                    >
                      {v.post_content}
                    </Typography>

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
                            {/* {v.mood_type_id === 1 ? (
                              <MoodIcon color="primary" />
                            ) : null} */}
                            {v.mood_type_id === 2 ? (
                              <SentimentNeutralIcon color="action" />
                            ) : null}
                            {v.mood_type_id === 3 ? (
                              <SentimentVeryDissatisfiedIcon color="error" />
                            ) : null}
                            {/* {v.mood_type_id === 4 ? (
                              <SentimentSatisfiedIcon color="secondary" />
                            ) : null} */}
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
                  style={{ width: '230px' }}
                  src={`http://localhost:3002/${v.post_img}`}
                  alt={v.post_title}
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  // color: 'white',
                  display: 'flex',
                  justifyContent: 'end',
                  backgroundColor: '#0F172A',
                  gap: '20px',
                }}
              >
                <Box
                // sx={{
                //   display: 'flex',
                //   flexDirection: 'row',
                // }}
                >
                  <Link href="#" onClick={() => handleEdit(v.post_id)}>
                    <Box
                      sx={{
                        display: 'flex',
                        color: 'white',
                        paddingTop: '7px',
                      }}
                    >
                      <EditIcon />
                      <Typography>編輯</Typography>
                    </Box>
                  </Link>
                </Box>
                {/* <Box></Box> */}
                <Button onClick={() => handleDelete(v.post_id)}>
                  <Box sx={{ display: 'flex', color: 'white' }}>
                    <DeleteIcon />
                    <Typography>刪除</Typography>
                  </Box>
                </Button>
              </Box>
            </Accordion>
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
