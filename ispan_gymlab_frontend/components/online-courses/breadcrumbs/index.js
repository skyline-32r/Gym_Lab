import * as React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

export default function BreadCrumbs() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/online-courses"
      sx={{
        color: 'rgb(255, 0, 184)',
        '&:hover': {
          textDecoration: 'none',
        },
      }}
    >
      線上課程
    </Link>,
    <Typography
      key="3"
      sx={{
        color: 'white',
      }}
    >
      線上課程詳細頁
    </Typography>,
  ]

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" sx={{ color: 'white' }} />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  )
}
