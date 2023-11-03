import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import './styles.css';
import style from 'styles/class.module.css'
// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules'

export default function Photo() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    // 在组件渲染后获取窗口宽度并设置isMobile状态
    setIsMobile(window.innerWidth <= 414)

    // 添加窗口大小变化的事件监听器
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 414)
    }

    window.addEventListener('resize', handleResize)

    // 清除事件监听器，以防止内存泄漏
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // 传入空数组以确保只在组件挂载时运行
  return (
    <>
      {/* 桌機上應用桌機樣式 */}
      {!isMobile && (
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          autoplay={{ delay: 2000 }} // 设置自动轮播的延迟时间（毫秒）
          className="mySwiper"
          style={{
            cursor: 'grab',
            marginLeft: '156px',
            marginRight: '156px',
            marginTop: '150px',
            marginBottom: '100px',
          }}
        >
          <SwiperSlide>
            <div className={style.swiperPhoto}>
              <img
                src="/images/in-person-classes/01.webp"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.swiperPhoto}>
              <img
                src="/images/in-person-classes/05.webp"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.swiperPhoto}>
              <img
                src="/images/in-person-classes/03.jpg"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.swiperPhoto}>
              <img
                src="/images/in-person-classes/04.webp"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.swiperPhoto}>
              <img
                src="/images/in-person-classes/06.webp"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.swiperPhoto}>
              <img
                src="/images/in-person-classes/07.webp"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.swiperPhoto}>
              <img
                src="/images/in-person-classes/08.jpg"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.swiperPhoto}>
              <img
                src="/images/in-person-classes/09.jpg"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.swiperPhoto}>
              <img
                src="/images/in-person-classes/10.jpg"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      )}
      {/* 手機版 */}
      {isMobile && (
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          style={{
            marginLeft: '32px',
            marginRight: '32px',
            marginTop: '50px',
          }}
        >
          <SwiperSlide>
            <div className={style.swiperPhoto}>
              <img
                src="/images/in-person-classes/05.webp"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.swiperPhoto}>
              <img
                src="/images/in-person-classes/05.webp"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.swiperPhoto}>
              <img
                src="/images/in-person-classes/05.webp"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.swiperPhoto}>
              <img
                src="/images/in-person-classes/05.webp"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.swiperPhoto}>
              <img
                src="/images/in-person-classes/05.webp"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.swiperPhoto}>
              <img
                src="/images/in-person-classes/05.webp"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.swiperPhoto}>
              <img
                src="/images/in-person-classes/05.webp"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.swiperPhoto}>
              <img
                src="/images/in-person-classes/05.webp"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.swiperPhoto}>
              <img
                src="/images/in-person-classes/05.webp"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  )
}
