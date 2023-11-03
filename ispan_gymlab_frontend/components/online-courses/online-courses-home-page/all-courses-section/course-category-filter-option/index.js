import React, { useState, useEffect } from 'react'
import { Stack, Typography } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
export default function CourseCategoryFilterOption({
  courseCategory,
  courseCategoryId,
  filterSettings,
  setFilterSettings,
  setPage,
}) {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    if (!filterSettings.courseCategoriesId.length) {
      setChecked(false)
    }
  })
  function handleCourseCategoryFilter(checked) {
    if (!checked) {
      setFilterSettings((oldValue) => ({
        ...oldValue,
        courseCategoriesId: [...oldValue.courseCategoriesId, courseCategoryId],
      }))
    } else {
      setFilterSettings((oldValue) => {
        const courseCategoryIdIndex =
          oldValue.courseCategoriesId.indexOf(courseCategoryId)
        return {
          ...oldValue,
          courseCategoriesId: oldValue.courseCategoriesId.filter(
            (item, idx) => idx != courseCategoryIdIndex
          ),
        }
      })
    }
    setChecked((oldValue) => !oldValue)
    setPage(1)
  }
  return (
    <Stack
      direction="row"
      spacing={1}
      onClick={() => handleCourseCategoryFilter(checked)}
      sx={{
        paddingY: '4px',
        cursor: 'pointer',
      }}
    >
      {checked ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankIcon />}
      <Typography>{courseCategory}</Typography>
    </Stack>
  )
}
