import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '@/styles/online-shop/online-shop.module.css'
import Link from 'next/link'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import "./style.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

export default function HomeCarousel() {
  return (
    <>
      <div className={styles.bkSlider}>
        <Swiper
          effect={'coverflow'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3.5,
            slideShadows: true,
          }}
          slidesPerView={3}
          grabCursor={true}
          centeredSlides={true}
          rewind={true}
          spaceBetween={-688}
          initialSlide={1}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          style={{
            '--swiper-pagination-color': '#00F0FF',
            '--swiper-navigation-color': '#00F0FF',
            '--swiper-navigation-size': '42px',
            height: 'auto',
          }}
        >
          {/* <div className={styles.slideContainer}> */}
          <SwiperSlide>
            <a href="http://localhost:3000/online-shop/products">
              <img
                className={styles.img}
                src="/images/online-shop/homePage3.jpg"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="http://localhost:3000/online-shop/products">
              <img
                className={styles.img}
                src="/images/online-shop/homePage1.jpg"
                alt=""
                href="https://www.apple.com/tw/"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="http://localhost:3000/online-shop/products">
              <img
                className={styles.img}
                src="/images/online-shop/homePage2.jpg"
                alt=""
              />
            </a>
          </SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          {/* </div> */}
          {/* <h5 className={styles.sec1Text}>高蛋白系列</h5> */}
        </Swiper>
        {/* <div className='sliderControler'>
            <div className="swiper-pagination"></div>
          </div> */}
      </div>
    </>
  )
}
