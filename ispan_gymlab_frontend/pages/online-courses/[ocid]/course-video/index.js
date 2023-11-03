import { Box, Stack, Typography } from '@mui/material'
import MuiNavbar from '@/components/testing/MuiNavbar'
import NextVideoCard from './next-video-card'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import MyVideoReactPlayer from '@/components/online-courses/my-video-react-player'
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import AuthContext from '@/context/auth-context'
export default function CourseVideo() {
  const { auth } = useContext(AuthContext)
  const [userCourses, setUserCourses] = useState([])
  const [userSelectedCourse, setUserSelectedCourse] = useState({
    tobeDetermined: '',
  })
  const [courseId, setCourseId] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      setCourseId(router.query.ocid)
    }
  }, [router.isReady])

  useEffect(() => {
    if (courseId && auth.token) {
      fetch(`http://localhost:3002/online-courses/${courseId}/course-video`, {
        headers: { Authorization: 'Bearer ' + auth.token },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setUserCourses(data.rows)
          setUserSelectedCourse(data.selectedCourse)
        })
    }
  }, [courseId, auth])
  console.log(courseId)
  return (
    <>
      <MuiNavbar />
      <Box
        sx={{
          position: 'fixed',
          height: '100vh',
          right: '0',
          left: '0',
          backgroundColor: '#0F172A',
          zIndex: '-1',
        }}
      />
      <Box
        sx={{
          height: 'calc(100vh - 64px)',
          overflow: 'auto',
        }}
      >
        <Stack
          direction="row"
          sx={{
            // backgroundColor: '#2F2F45',
            color: 'white',
            // marginTop: '64px',
            paddingX: '156px',
            paddingTop: '44px',
            height: '100%',
            // justifyContent: 'space-between',
          }}
        >
          <Stack
            sx={{
              // position: 'absolute',
              // left: '156px',
              height: '100%',
            }}
          >
            <Box
              sx={{
                width: '60vw',
                height: '70vh',
                marginBottom: '16px',
              }}
            >
              {/* <img
                src="/images/online-courses/course-video/wallpaper1.jpg"
                style={{
                  width: '100%',
                  height: '100%',
                  // objectFit: 'cover',
                  // objectPosition: 'center',
                }}
              ></img> */}
              {/* <MyReactPlayr /> */}
              <MyVideoReactPlayer courseId={courseId} />
              {/* <video width="320" height="240" controls>
                <source src="/videos/online-course-2.mp4" type="video/mp4" />
              </video> */}
            </Box>
            <Typography
              sx={{
                fontSize: '20px',
                marginBottom: '8px',
              }}
            >
              {userSelectedCourse.course_name}
            </Typography>
            <Typography
              sx={{
                fontSize: '18px',
              }}
            >
              {userSelectedCourse.instructor_name}
            </Typography>
          </Stack>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flex: '1',
              height: '100%',
              // overflow: 'scroll',
              position: 'relative',
              // backgroundColor: 'gray',
            }}
          >
            <PerfectScrollbar>
              {/* <div
                // spacing={3}
                sx={{
                  position: 'absolute',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  paddingRight: '20px',
                }}
              > */}
              {userCourses.map((course, idx) => {
                console.log(course)
                return (
                  <NextVideoCard
                    key={course.course_id}
                    courseName={course.course_name}
                    courseInstructor={course.instructor_name}
                    courseThumbnail={course.course_thumbnail}
                    courseId={course.course_id}
                    setCourseId={setCourseId}
                  />
                )
              })}
              {/* <NextVideoCard />
              <NextVideoCard />
              <NextVideoCard />
              <NextVideoCard />
              <NextVideoCard />
              <NextVideoCard /> */}
              {/* </div> */}
            </PerfectScrollbar>
          </Box>
        </Stack>
      </Box>
    </>
  )
}
