import React from 'react'
import styles from '@/styles/landing.module.css'
import { Button, Box } from '@mui/material'
import Marquee from './marquee'

export default function ForumSection() {
  return (
    <Box className={styles.fs}>
      <Box
        sx={{
          width: '100%',
          padding: '0 124px 196px 124px',
          '@media (max-width: 600px)': {
            padding: '32px 16px',
          },
        }}
      >
        <h1 className={styles.fstext}>全國最大的健身論壇</h1>
        <Button
          sx={{
            backgroundColor: 'white',
            minWidth: '200px',
            height: '64px',
            fontSize: '24px',
            padding: '16px',
            color: '#fff',
            margin: '16px',
            backgroundColor: '#000',
            border: '3px solid #FFF',
            '&:hover': {
              border: '3px solid #000',
              backgroundColor: '#0f172a',
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
          前往論壇
        </Button>
      </Box>
      <Box
        sx={{
          width: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItem: 'center',
          justifyContent: 'center',
        }}
      >
        <Marquee color="pink"></Marquee>
        <Marquee color="blue">文章來了🥩</Marquee>
        <Marquee color="blue">怎麼都沒人??🤨</Marquee>
        <Marquee color="pink">問 有推推的課程嗎</Marquee>
        <Marquee color="blue">是要找實體課程嗎?</Marquee>
        <Marquee color="pink">對喔</Marquee>
        <Marquee color="blue">我ig有分享</Marquee>
        <Marquee color="blue">jie ig++🦕🦕🦕</Marquee>
        <Marquee color="pink">已加❤️❤️❤️</Marquee>
      </Box>
    </Box>
  )
}
