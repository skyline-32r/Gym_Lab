import React from 'react'
import styles from '@/styles/landing.module.css'
import { Typography, Box } from '@mui/material'
import OnlineCard from './online-courses-card'
export default function OnlineCoursesSection() {
  return (
    <>
      <Box className={styles.ocs}>
        <Box
          sx={{
            width: '100%',
            height: '60px',
            backgroundColor: '#F9F9F977',
          }}
        ></Box>
        <Box
          sx={{
            width: '100%',
            height: '40px',
            backgroundColor: '#F9F9F944',
          }}
        ></Box>
        <Box
          sx={{
            padding: ' 80px 156px',
            width: '100%',
            '@media (max-width: 600px)': {
              padding: '72px 16px 32px 16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: '67px',
              textAlign: 'center',
              color: '#f9f9f9',
              '@media (max-width: 600px)': {
                fontSize: '32px',
                width: '70%',
                margin: '20px 0 ',
              },
            }}
          >
            不受時間地點
            {/* <br /> */}
            限制的線上課程
            <br />
          </Typography>
          <Box className={styles.cardGroup}>
            <OnlineCard img="/images/landing_page/oc01.webp">
              街頭健身
            </OnlineCard>
            <OnlineCard img="/images/landing_page/oc02.webp">舉重</OnlineCard>
            <OnlineCard img="/images/landing_page/oc03.webp">瑜伽</OnlineCard>
            <OnlineCard img="/images/landing_page/oc04.webp">
              高強度間歇
            </OnlineCard>
          </Box>
        </Box>
      </Box>
    </>
  )
}
