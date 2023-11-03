import * as React from 'react'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import styles from '@/styles/online-courses/rating-star.module.css'

export default function GiveProductRating({
  productRating = 0.0,
  setProductRating,
  fontSize = '1rem',
}) {
  productRating = parseFloat(productRating)
  return (
    <Stack spacing={1}>
      <Rating
        name="showProductRating"
        // defaultValue={courseRating}
        value={productRating}
        precision={1}
        sx={{
          color: 'aqua',
          '.MuiRating-iconEmpty': {
            color: 'white',
          },
          fontSize: fontSize,
        }}
        onChange={(e) => setProductRating(e.target.value)}
      />
    </Stack>
  )
}
