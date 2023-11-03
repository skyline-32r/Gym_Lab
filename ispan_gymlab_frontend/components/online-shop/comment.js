import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import StarRoundedIcon from '@mui/icons-material/StarRounded'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'
import styles from '@/styles/online-shop/comment.module.css'

// import './styles.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

export default function Comment({ comment }) {
  return (
    <>
      <div className={styles.bkSlider}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          style={{
            '--swiper-pagination-color': '#00F0FF',
            '--swiper-navigation-color': '#00F0FF',}}
        >
          {comment.map(({ product_comment, name, product_rating }) => {
            const stars = Array.from({ length: product_rating }, (_, index) => (
              <StarRoundedIcon key={index} className={styles.stars} />
            ))
            return (
              <SwiperSlide className={styles.commentCard}>
                <div className={styles.commentContainer}>
                  <div className={styles.sec1}>
                    <h6 className={styles.title}></h6>
                    <div className={styles.rate}>
                      {/* <StarRoundedIcon className={styles.stars} />
                      <StarRoundedIcon className={styles.stars} />
                      <StarRoundedIcon className={styles.stars} />
                      <StarRoundedIcon className={styles.stars} />
                      <StarRoundedIcon className={styles.stars} /> */}
                      {stars}
                    </div>
                  </div>
                  <div className={styles.comment}>{product_comment}</div>
                  <div className={styles.memberContainer}>
                    <div className={styles.member}>{name}</div>
                    {/* <div className={styles.member}>time</div> */}
                  </div>
                </div>
              </SwiperSlide>
            )
          })}

          {/* <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </>
  )
}
