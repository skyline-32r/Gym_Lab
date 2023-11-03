import React from 'react'
import { Stack, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'

export default function RatingFilterOption({
  minRating,
  minRatingFilter,
  setFilterSettings,
  setPage,
}) {
  console.log(minRating)
  console.log(minRatingFilter)
  return (
    <Stack
      direction="row"
      spacing={1}
      onClick={() => {
        setFilterSettings((oldValue) => ({
          ...oldValue,
          minRatingFilter: minRating,
        }))
        setPage(1)
      }}
      sx={{
        cursor: 'pointer',
        paddingY: '4px',
      }}
    >
      {minRating == minRatingFilter ? (
        <RadioButtonCheckedIcon />
      ) : (
        <RadioButtonUncheckedIcon />
      )}
      <Typography>{minRating} 以上</Typography>
      <StarIcon
        sx={{
          color: 'aqua',
        }}
      />
    </Stack>
  )
}
