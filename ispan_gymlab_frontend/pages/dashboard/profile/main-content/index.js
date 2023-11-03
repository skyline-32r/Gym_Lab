import React from 'react'
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
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'

import CourseCard from '@/components/online-courses/online-courses-home-page/course-card'
import styles from '@/styles/online-courses/home-page.module.css'

export default function MainContent() {
  return (
    <Box
      flex={1}
      p={2}
      // bgcolor="lightcoral"
      sx={{
        color: 'white',
        minHeight: 'calc(100vh - 60px)',
      }}
    >
      <Box className={styles.courseListContainer}>
        <Stack
          direction="row"
          sx={{ width: '100%', flexWrap: 'wrap', gap: '32px' }}
        >
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
        </Stack>
      </Box>
    </Box>
  )
}
