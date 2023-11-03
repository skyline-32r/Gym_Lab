import React, { useState, useEffect } from 'react'
import { Stack, Typography } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
export default function DurationFilterOption({
  durationLowerBound,
  durationUpperBound,
  filterSettings,
  setFilterSettings,
  setPage,
}) {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    if (!filterSettings.durationLowerBounds.length) {
      setChecked(false)
    }
  })
  function handleDurationFilter(checked) {
    if (!checked) {
      setFilterSettings((oldValue) => ({
        ...oldValue,
        durationLowerBounds: [
          ...oldValue.durationLowerBounds,
          durationLowerBound,
        ],
        durationUpperBounds: [
          ...oldValue.durationUpperBounds,
          durationUpperBound,
        ],
      }))
    } else {
      setFilterSettings((oldValue) => {
        const durationLowerBoundIndex =
          oldValue.durationLowerBounds.indexOf(durationLowerBound)
        const durationUpperBoundIndex =
          oldValue.durationUpperBounds.indexOf(durationUpperBound)
        return {
          ...oldValue,
          durationLowerBounds: oldValue.durationLowerBounds.filter(
            (item, idx) => idx != durationLowerBoundIndex
          ),
          durationUpperBounds: oldValue.durationUpperBounds.filter(
            (item, idx) => idx != durationUpperBoundIndex
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
      onClick={() => handleDurationFilter(checked)}
      sx={{
        paddingY: '4px',
        cursor: 'pointer',
      }}
    >
      {checked ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankIcon />}
      <Typography>
        {durationLowerBound}
        {durationUpperBound == 999 ? '+' : `-${durationUpperBound}`} 分鐘
      </Typography>
    </Stack>
  )
}
