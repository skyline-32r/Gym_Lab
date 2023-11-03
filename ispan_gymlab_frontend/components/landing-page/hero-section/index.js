import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import styles from '@/styles/landing.module.css'
import Link from 'next/link'
export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '950px',
        '@media (max-width: 600px)': {
          minHeight: '667px',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '120px',
          alignItems: 'center',
          padding: '64px 16px',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '55%',
          transform: 'translate(0%, -50%)',
          width: 1 / 3,
          '@media (max-width: 600px)': {
            position: 'relative',
            top: '0',
            left: '0',
            width: '100%',
          },
        }}
      >
        <Typography
          variant="h1"
          className={styles.logotext}
          sx={{
            fontSize: '118px',
            marginBottom: '20px',
            '@media (max-width: 600px)': {
              fontSize: '64px',
            },
          }}
        >
          GYM LAB
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '30px',
            marginBottom: '20px',
            '@media (max-width: 600px)': {
              fontSize: '18px',
            },
          }}
        >
          絕佳健身，體驗極致。
          <br />
          為您打造最佳健康之旅。
        </Typography>
        <Link href="/member/login">
          <Button
            sx={{
              backgroundColor: 'white',
              marginTop: '20px',
              minWidth: '240px',
              height: '60px',
              fontSize: '24px',
              padding: '16px',
              color: '#fff',
              backgroundColor: '#0f172A',
              border: '3px solid #FFF',
              '&:hover': {
                border: '3px solid #000',
                backgroundColor: 'black',
                color: 'white',
                boxShadow: '-4px -4px 0px 0px #00f0ff, 4px 4px 0px 0px #ff00b8',
                border: '3px solid #fff',
              },
              '@media (max-width: 600px)': {
                minWidth: '160px',
                height: '48px',
                fontSize: '18px',
              },
            }}
          >
            加入我們
          </Button>
        </Link>
      </Box>
    </Box>
  )
}
