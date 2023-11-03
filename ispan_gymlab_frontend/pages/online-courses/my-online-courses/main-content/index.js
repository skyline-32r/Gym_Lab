import React, { useState, useEffect, useContext } from 'react'
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Stack,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  styled,
} from '@mui/material'
import SearchBar from './search-bar'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import CourseCard from '@/components/online-courses/online-courses-home-page/course-card'
import MyCourseCard from '@/components/online-courses/online-courses-home-page/my-course-card'
import styles from '@/styles/online-courses/home-page.module.css'
import AuthContext from '@/context/auth-context'

const WhiteSelect = styled(Select)({
  height: '36px',
  padding: '0px',
  color: 'white',
  borderRadius: 'unset',
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '.MuiPaper-root.MuiPopover-paper.MuiMenu-paper': {
    borderRadius: 'unset',
  },
  '.MuiSelect-icon': {
    fill: 'white',
  },
})

export default function MainContent() {
  const { auth } = useContext(AuthContext)
  const [userCourses, setUserCourses] = useState([])
  const [userComments, setUserComments] = useState([])
  useEffect(() => {
    if (auth.token) {
      fetch(`http://localhost:3002/online-courses/my-online-courses`, {
        headers: {
          Authorization: 'Bearer ' + auth.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserCourses(data.rows)
          setUserComments(data.userComments)
        })
    }
  }, [auth])

  // const refresh = async () => {
  //   fetch(`http://localhost:3002/online-courses/my-online-courses/999`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       setUserCourses(data.rows)
  //       setUserComments(data.userComments)
  //     })
  // }

  console.log(userCourses)
  console.log(userComments)
  return (
    <Box
      p={2}
      // bgcolor="lightcoral"
      sx={{
        color: 'white',
        minHeight: 'calc(100vh - 60px)',
        // width: '300px',
        flex: '1 1 0',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: '50px',
            marginBottom: '16px',
          }}
        >
          我的線上課程
        </Typography>
      </Box>
      {/* <Stack
        direction="row"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '36px 0',
          alignItems: 'flex-end',
        }}
      >
        <Box
          sx={{
            m: 1,
            minWidth: 120,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            gap: '24px',
          }}
        >
          <Stack>
            <Typography>Sort By</Typography>
            <WhiteSelect value="" displayEmpty>
              <MenuItem value="">
                <em>Recently Accessed</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </WhiteSelect>
          </Stack>
          <Stack>
            <Typography>Filter By</Typography>
            <WhiteSelect value="" displayEmpty>
              <MenuItem value="">
                <em>課程類別</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </WhiteSelect>
          </Stack>
          <WhiteSelect value="" displayEmpty>
            <MenuItem value="">
              <em>進度</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </WhiteSelect>
          <WhiteSelect value="" displayEmpty>
            <MenuItem value="">
              <em>教練</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </WhiteSelect>
          <Typography
            sx={{
              color: '#CCC',
            }}
          >
            Reset
          </Typography>
        </Box>
        <SearchBar></SearchBar>
      </Stack> */}
      <Box className={styles.courseListContainer}>
        <Stack
          direction="row"
          sx={{ width: '100%', flexWrap: 'wrap', gap: '32px' }}
        >
          {userCourses?.map((userCourse, idx) => {
            return (
              <MyCourseCard
                key={userCourse.course_id}
                courseThumbnail={userCourse.course_thumbnail}
                courseInstructor={userCourse.instructor_name}
                courseName={userCourse.course_name}
                courseId={userCourse.course_id}
                userId={userCourse.user_id}
                userComments={userComments}
                // refresh={refresh}
              />
            )
          })}
        </Stack>
      </Box>
    </Box>
  )
}
