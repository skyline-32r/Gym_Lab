import React, { useState, useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRouter } from 'next/router'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import styles from '@/styles/online-shop/product-detail.module.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

export default function PidCarousel({ children }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const router = useRouter()
  console.log(router.query.product_id)

  const defaultId = router.query.product_id
  console.log(defaultId)

  return (
    <>
      <div className={styles.mainImg}>
        <Swiper
          style={{
            '--swiper-navigation-color': '#00F0FF',
            '--swiper-pagination-color': '#00F0FF',
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          <SwiperSlide>
            <img
              className={styles.img}
              src={`/images/online-shop/products/pid_${children}-1.webp`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.img}
              src={`/images/online-shop/products/pid_${children}-2.webp`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.img}
              src={`/images/online-shop/products/pid_${children}-3.webp`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.img}
              src={`/images/online-shop/products/pid_${children}-4.webp`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.img}
              src={`/images/online-shop/products/pid_${children}-5.webp`}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.subImgs}>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className={styles.img}
              src={`/images/online-shop/products/pid_${children}-1.webp`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.img}
              src={`/images/online-shop/products/pid_${children}-2.webp`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.img}
              src={`/images/online-shop/products/pid_${children}-3.webp`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.img}
              src={`/images/online-shop/products/pid_${children}-4.webp`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.img}
              src={`/images/online-shop/products/pid_${children}-5.webp`}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
