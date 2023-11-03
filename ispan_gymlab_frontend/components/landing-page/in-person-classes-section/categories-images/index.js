import { Box } from '@mui/material'
import React from 'react'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import styles from '@/styles/landing.module.css'
import { useState, useEffect } from 'react'
export default function CategoriesImages({ expanded }) {
  const [classimg, setclassimg] = useState(['4.jpg', '2.jpg', '3.jpg', '1.png'])

  // arr = [0,1,2,3,4]
  // newArr = arr.slice(2) + arr.slice(0,2)
  // 2 3 4 0 1

  useEffect(() => {
    if (expanded == 'panel1') {
      setclassimg(['4.jpg', '2.jpg', '3.jpg', '1.png'])
    } else if (expanded == 'panel2') {
      setclassimg(['2.jpg', '3.jpg', '1.png', '4.jpg'])
    } else if (expanded == 'panel3') {
      setclassimg(['3.jpg', '1.png', '4.jpg', '2.jpg'])
    } else if (expanded == 'panel4') {
      setclassimg(['1.png', '4.jpg', '2.jpg', '3.jpg'])
    }
  }, [expanded])

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '450px',
          height: '450px',
          '@media (max-width: 600px)': {
            display: 'none',
          },
        }}
      >
        <div className={styles.imgContainer}>
          <div className={styles.inclassbox}>
            {/* <img src={'images/landing_page/ipclass' + classimg[0]} alt="" /> */}
          </div>
          <div className={styles.inclassbox}>
            <img src={'images/landing_page/ipclass' + classimg[0]} alt="" />
          </div>
          <div className={styles.inclassbox}>
            <img src={'images/landing_page/ipclass' + classimg[1]} alt="" />
          </div>
          <div className={styles.inclassbox}>
            <img src={'images/landing_page/ipclass' + classimg[2]} alt="" />
          </div>
          <div className={styles.inclassbox}>
            <img src={'images/landing_page/ipclass' + classimg[3]} alt="" />
          </div>
        </div>
      </Box>
    </>
  )
}
