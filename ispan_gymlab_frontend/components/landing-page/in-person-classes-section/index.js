import CategoriesAccordion from './categories-accordion'
import CategoriesImages from './categories-images'
import { Box, Typography } from '@mui/material'
import styles from '@/styles/landing.module.css'
import { useState } from 'react'
export default function InPersonClassesSection() {
  const [expanded, setExpanded] = useState('panel1')
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <Box
      sx={{
        minHeight: '960px',
        backgroundImage: 'url(images/landing_page/bg1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
        backgroundAttachment: 'fixed',
        '@media (max-width: 600px)': {
          minHight: '667px',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100px',
          clipPath: ' polygon(100% 0, 0 0 , 0 10% , 100% 100%)',
          backgroundColor: '#bcadff88',
          '@media (max-width: 600px)': {
            height: '50px',
          },
        }}
      ></Box>
      <Box
        sx={{
          paddingY: '80px',
          paddingX: '156px',
          '@media (max-width: 600px)': {
            padding: '32px 16px',
          },
        }}
      >
        <Typography
          sx={{
            fontSize: '67px',
            textAlign: 'center',
            color: '#140f2a',
            '@media (max-width: 600px)': {
              fontSize: '32px',
            },
          }}
        >
          多種實體健身課程
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            mt: 5,
            flexWrap: 'wrap',
          }}
        >
          <CategoriesAccordion
            expanded={expanded}
            handleChange={handleChange}
          />
          <CategoriesImages expanded={expanded} />
        </Box>
      </Box>
    </Box>
  )
}
