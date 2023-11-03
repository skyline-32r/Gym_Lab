import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// import slide_image_1 from 'assets/images/img_1.jpg';
import slide_image_2 from 'assets/images/img_2.jpg';
import slide_image_3 from 'assets/images/img_3.jpg';
import slide_image_4 from 'assets/images/img_4.jpg';
import slide_image_5 from 'assets/images/img_5.jpg';
import slide_image_6 from 'assets/images/img_6.jpg';
import slide_image_7 from 'assets/images/img_7.jpg';

export default function App() {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination2', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next2',
          prevEl: '.swiper-button-prev2',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src="/images/online-shop/img_1.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="/images/online-shop/img_2.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide >
          <img  src="/images/online-shop/img_3.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide >
          <img  src="/images/online-shop/img_4.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="/images/online-shop/img_5.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide >
          <img  src="/images/online-shop/img_6.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide >
          <img  src="/images/online-shop/img_7.jpg" alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination2"></div>
        </div>
      </Swiper>
    </div>
  );
}

