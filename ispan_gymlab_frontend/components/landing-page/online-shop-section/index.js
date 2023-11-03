import React from 'react'
import styles from '@/styles/landing.module.css'
import { Button, Box } from '@mui/material'
import ShopSwiper from './shop-swiper'
export default function OnlineShopSection() {
  return (
    <Box className={styles.os}>
      <Box
        sx={{
          width: '100%',
          height: '60px',
          backgroundImage: ' url(/images/landing_page/oclass3.png)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          opacity: '0.6',
        }}
      ></Box>
      <Box
        sx={{
          width: '100%',
          height: '40px',
          backgroundImage: ' url(/images/landing_page/oclass3.png)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          opacity: '0.3',
        }}
      ></Box>
      <Box
        sx={{
          padding: '30px 156px',
          '@media (max-width: 600px)': {
            padding: '24px 16px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            padding: '0 124px',
            '@media (max-width: 600px)': {
              padding: '0',
              paddingBottom: '28px',
            },
          }}
        >
          <h1 className={styles.ostext}>
            健身商城
            <br />
            伴您健身事半功倍
          </h1>
          <Button
            sx={{
              backgroundColor: 'white',
              minWidth: '200px',
              height: '50px',
              fontSize: '20px',
              padding: '16px',
              color: '#fff',
              margin: '16px',
              backgroundColor: '#0f172a',
              border: '3px solid #FFF',
              '&:hover': {
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
            前往商城
          </Button>
        </Box>
        <Box sx={{}}></Box>
      </Box>
      <ShopSwiper />
    </Box>
  )
}
