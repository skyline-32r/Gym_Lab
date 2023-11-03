import { Box, Stack, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import styles from '@/styles/online-courses/home-page.module.css'
import CourseCard from '../course-card'
import CourseSwiper from '../swiper'
export default function RecommendSection() {
  const [coursesData, setCoursesData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3002/online-courses/recommend-section')
      .then((res) => res.json())
      .then((data) => setCoursesData(data))
  }, [])
  console.log('recommend section courses')
  console.log(coursesData)

  return (
    <Box sx={{ paddingY: '80px', paddingX: '156px', color: 'white' }}>
      <Typography
        sx={{ fontSize: '67px', textAlign: 'center', marginBottom: '40px' }}
      >
        廣泛的課程選擇
      </Typography>
      <Box>
        <Typography sx={{ fontSize: '50px', marginY: '36px' }}>
          熱門趨勢
        </Typography>
        <CourseSwiper
          className={styles.courseListContainer}
          coursesData={coursesData}
        />
      </Box>
      {/* <Box>
        <Typography sx={{ fontSize: '50px', marginY: '36px' }}>
          新課程
        </Typography>
        <CourseSwiper
          className={styles.courseListContainer}
          coursesData={coursesData}
        />
      </Box> */}
    </Box>
  )
}
