import * as React from 'react'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import styles from '@/styles/online-courses/rating-star.module.css'

export default function ShowCourseRating({
  courseRating = 0.0,
  fontSize = '1.5rem',
}) {
  courseRating = parseFloat(courseRating)
  return (
    <Stack spacing={1}>
      <Rating
        name="showCourseRating"
        // defaultValue={courseRating}
        value={courseRating}
        precision={0.5}
        sx={{
          color: 'aqua',
          '.MuiRating-iconEmpty': {
            color: 'white',
          },
          fontSize: fontSize,
        }}
        readOnly
      />
    </Stack>
  )
}
