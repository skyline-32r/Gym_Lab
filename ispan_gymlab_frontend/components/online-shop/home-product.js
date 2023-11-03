import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import styles from '@/styles/online-shop/online-shop.module.css'

// import required modules
import { Pagination, Autoplay } from 'swiper/modules'

export default function HomeProduct() {
  return (
    // <Card sx={{ maxWidth: 345, maxHeight: 200, margin: 1, }}>
    //     <CardActionArea>
    //         <CardMedia
    //             component="img"
    //             height="140"
    //             image="/images/online-shop/top1Product.jpg"
    //             alt="green iguana"
    //         />
    //         <CardContent>
    //             <Typography gutterBottom variant="h5" component="div">
    //                 Top1
    //             </Typography>
    //             <Typography variant="body2" color="text.secondary">
    //                 Lizards are a widespread group of squamate reptiles
    //             </Typography>
    //         </CardContent>
    //     </CardActionArea>
    // </Card>
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        freeMode={true}
        speed={5000}
        freeModeMomentum={false}
        rewind={true}
        modules={[Pagination, Autoplay]}
        style={{ '--swiper-pagination-bullet-size': 0 }}
        className={styles.productSwiper}
      >
        <SwiperSlide className={styles.homeProduct}>
          <img
            className={styles.productImg}
            src="/images/online-shop/products/pid_12-1.webp"
            alt="top1"
          ></img>
        </SwiperSlide>
        <SwiperSlide className={styles.homeProduct}>
          <img
            className={styles.productImg}
            src="/images/online-shop/products/pid_13-1.webp"
            alt=""
          ></img>
        </SwiperSlide>
        <SwiperSlide className={styles.homeProduct}>
          <img
            className={styles.productImg}
            src="/images/online-shop/products/pid_1-1.webp"
            alt=""
          ></img>
        </SwiperSlide>
        <SwiperSlide className={styles.homeProduct}>
          <img
            className={styles.productImg}
            src="/images/online-shop/products/pid_3-1.webp"
            alt=""
          ></img>
        </SwiperSlide>
        <SwiperSlide className={styles.homeProduct}>
          <img
            className={styles.productImg}
            src="/images/online-shop/products/pid_42-1.webp"
            alt=""
          ></img>
        </SwiperSlide>
        <SwiperSlide className={styles.homeProduct}>
          <img
            className={styles.productImg}
            src="/images/online-shop/products/pid_11-1.webp"
            alt=""
          ></img>
        </SwiperSlide>
        <SwiperSlide className={styles.homeProduct}>
          <img
            className={styles.productImg}
            src="/images/online-shop/products/pid_9-1.webp"
            alt=""
          ></img>
        </SwiperSlide>
        {/* <SwiperSlide className={styles.homeProduct}>
          <img
            className={styles.productImg}
            src="/images/online-shop/top1Product.jpg"
            alt=""
          ></img>
        </SwiperSlide>
        <SwiperSlide className={styles.homeProduct}>
          <img
            className={styles.productImg}
            src="/images/online-shop/top1Product.jpg"
            alt=""
          ></img>
        </SwiperSlide>
        <SwiperSlide className={styles.homeProduct}>
          <img
            className={styles.productImg}
            src="/images/online-shop/top1Product.jpg"
            alt=""
          ></img>
        </SwiperSlide> */}
      </Swiper>
    </>
  )
}
