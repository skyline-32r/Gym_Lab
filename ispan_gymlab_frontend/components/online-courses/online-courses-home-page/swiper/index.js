import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Mousewheel } from 'swiper/modules'
import styles from '@/styles/online-courses/slider.module.css'
import CourseCard from '../course-card'

export default function CourseSwiper({ coursesData }) {
  // const coursesDataSlice = coursesData?.slice(10, 19)

  return (
    <>
      <Swiper
        direction={'horizontal'}
        slidesPerView={6}
        spaceBetween={0}
        mousewheel={true}
        modules={[Mousewheel]}
        className={styles.swiperBackground}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {coursesData?.rows?.map((course, idx) => {
          return (
            <SwiperSlide key={course['course_id']}>
              <CourseCard
                courseName={course['course_name']}
                courseThumbnail={course['course_thumbnail']}
                coursePrice={course['course_price']}
                courseInstructor={course['instructor_name']}
                avgCourseRating={course['avg_course_rating']}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
