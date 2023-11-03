import {
  Box,
  Typography,
  Stack,
  Card,
  CardMedia,
  CardContent,
  Button,
  Modal,
  styled,
  TextField,
} from '@mui/material'
import { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import CourseReviewCard from '@/components/online-courses/online-courses-detail-page/course-review-card'
import MuiNavbar from '@/components/testing/MuiNavbar'
import Footer from '@/components/testing/footer'
import FaceIcon from '@mui/icons-material/Face'
import StarIcon from '@mui/icons-material/Star'
import CircleIcon from '@mui/icons-material/Circle'
import CourseReviewItem from '@/components/online-courses/online-courses-detail-page/course-review-item'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import LineShareButton from '@/components/online-courses/online-courses-detail-page/line-share-button'
import ShowCourseRating from '@/components/online-courses/online-courses-detail-page/show-course-rating'
import BreadCrumbs from '@/components/online-courses/breadcrumbs'
import Link from 'next/link'
import OCBtn from '@/components/online-course-btn'
import AuthContext from '@/context/auth-context'
import CartContext from '@/context/navbar-cart'

const MySwal = withReactContent(Swal)

const StyledModal = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // position: 'absolute',
  // top: '10%',
  // paddingTop: '5%',
  display: 'block',
  overflowY: 'auto',
  '.MuiBox-root': {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '96px',
  },
})

export default function OnlineCourseDetail() {
  const router = useRouter()

  const [courseData, setCourseData] = useState({
    toBeDetermined: '',
  })
  const [courseCommentsData, setCourseCommentsData] = useState([])
  const [courseCreationDate, setCourseCreationDate] = useState('')
  const { auth, setAuth } = useContext(AuthContext)
  const [courseAddedToCart, setCourseAddedToCart] = useState(null)
  const [coursePurchased, setCoursePurchased] = useState(null)
  const { cart, setCart } = useContext(CartContext)

  useEffect(() => {
    if (router.isReady) {
      const { ocid } = router.query

      fetch(`http://localhost:3002/online-courses/${ocid}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
        .then((res) => res.json())
        .then((obj) => {
          console.log(obj)
          setCourseData(obj.courseData)
          setCourseCommentsData(obj.courseCommentsData)
          setCoursePurchased(obj.coursePurchased)
          setCourseAddedToCart(obj.courseAddedToCart)
          const date = obj.courseData.creation_date.substr(0, 10).split('-')
          const timeUnit = ['年', '月', '日']
          const combined = timeUnit.map((unit, idx) => {
            return date[idx] + timeUnit[idx]
          })
          const creationDate = combined.join(' ')
          setCourseCreationDate(creationDate)
        })
    }
  }, [router.isReady])

  console.log(courseData)
  console.log(courseCommentsData)
  console.log(courseCreationDate)

  const [open, setOpen] = useState(false)

  const handleAddToCart = async () => {
    console.log('hi')
    const { ocid } = router.query
    if (auth.token == '') {
      router.push(
        `/member/login?from=${encodeURIComponent(`/online-courses/${ocid}`)}`
      )
    } else {
      console.log('attempting to add to cart database')
      const res = await fetch(
        `http://localhost:3002/online-courses/${ocid}/addToCart`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth.token}`,
          },
          body: JSON.stringify({
            user_id: 999,
          }),
        }
      )
      const result = await res.json()
      const cartTotal = parseInt(localStorage.getItem('cart'))
      const newCartTotal = cartTotal + 1
      setCart(newCartTotal)
      localStorage.setItem('cart', newCartTotal)
      setCourseAddedToCart(true)
      MySwal.fire('加入購物車', '', 'success')
    }
  }

  const CourseActionButton = styled(Button)({
    border: '1px solid white',
    padding: '8px',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    display: 'inline-block',
    width: '100%',
    color: 'white',
    borderRadius: 'unset',
  })

  const AddToCartButton = (
    <OCBtn onClickCallback={handleAddToCart}>加入購物車</OCBtn>
  )

  const GoToCartButton = (
    <Link
      href="/cart"
      style={{
        textDecoration: 'none',
        color: 'white',
      }}
    >
      <OCBtn>前往購物車</OCBtn>
    </Link>
  )

  const GoToMyCoursesButton = (
    <Link
      href="/online-courses/my-online-courses"
      style={{
        display: 'block',

        width: '100%',
        textDecoration: 'none',
        color: 'white',
      }}
    >
      <OCBtn>前往我的線上課程</OCBtn>
    </Link>
  )

  return (
    <>
      <MuiNavbar />
      <Box
        sx={{
          backgroundColor: '#0F172A',
        }}
      >
        <Stack
          spacing={2}
          sx={{
            width: '100%',
            backgroundColor: '#2F2F45',
            paddingX: '156px',
            paddingY: '40px',
            // backgroundImage: 'url(/images/online-courses/course2-banner.jpg)',
          }}
        >
          <BreadCrumbs />
          <Typography sx={{ fontSize: '32px' }}>
            {courseData?.course_name}
          </Typography>
          <Typography
            sx={{
              fontSize: '28px',
            }}
          >
            {courseData?.instructor_name}
          </Typography>
          <Stack direction="row">
            <ShowCourseRating
              courseRating={courseData?.avg_course_rating}
              fontSize="28px"
            />
            <Typography
              sx={{
                marginLeft: '8px',
                fontSize: '23px',
                lineHeight: '1.8rem',
                letterSpacing: '0.1rem',
              }}
            >
              {courseData?.avg_course_rating &&
                parseFloat(courseData.avg_course_rating).toFixed(1)}
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: '23px',
              lineHeight: '1.8rem',
            }}
          >
            上架日期：{courseCreationDate}
          </Typography>
        </Stack>
        <Box
          sx={{
            paddingX: '156px',
            paddingY: '40px',
            backgroundColor: '',
          }}
        >
          <Stack
            sx={{
              width: 'calc(50%)',
            }}
          >
            <Box
              sx={{
                marginBottom: '40px',
              }}
            >
              <Typography sx={{ fontSize: '50px', marginBottom: '20px' }}>
                課程描述
              </Typography>
              <Box
                sx={{
                  backgroundColor: '#2F2F45',
                  padding: '24px',
                  borderRadius: '4px',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '23px',
                    lineHeight: '1.8rem',
                    letterSpacing: '0.1rem',
                  }}
                >
                  {courseData?.course_description ||
                    '在這段充滿活力的健美操視頻中，與健身專家本·阿弗萊克一起指導您進行全面的全身鍛煉，而這種鍛煉只需要您自己的體重和積極的態度即可！該例程旨在挑戰從初學者到高級愛好者的所有健身水平，為每項鍛煉提供可擴展的選項。'}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                marginBottom: '40px',
              }}
            >
              <Typography sx={{ fontSize: '50px', marginBottom: '20px' }}>
                教練
              </Typography>
              <Box
                sx={{
                  backgroundColor: '#2F2F45',
                  padding: '24px',
                  borderRadius: '4px',
                }}
              >
                <Box
                  sx={{
                    width: '64px',
                    height: '64px',
                    // backgroundImage:
                    //   'linear-gradient(to right bottom, #29a4ac, #26b7c0, #21c9d5, #17ddea, #00f0ff)',
                    backgroundImage:
                      'linear-gradient(to right bottom, #29a4ac, #26b7c0, #21c9d5, #17ddea, #00f0ff)',
                    borderRadius: '4px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '8px',
                  }}
                >
                  {/* <img src=""></img> */}
                  {/* <FaceIcon
                    sx={{
                      color: 'black',
                      width: '32px',
                      height: '32px',
                    }}
                  /> */}
                  {/* <Box
                    sx={{
                      width: '32px',
                      height: '32px',
                    }}
                  > */}
                  <img
                    src="/images/online-courses/instructor-1.jpg"
                    style={{
                      width: '56px',
                      height: '56px',

                      objectFit: 'contain',
                    }}
                  />
                  {/* </Box> */}
                </Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    display: 'inline-block',
                    marginBottom: '16px',
                  }}
                >
                  {courseData?.instructor_name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '23px',
                    lineHeight: '1.8rem',
                    letterSpacing: '0.1rem',
                  }}
                >
                  {courseData?.instructor_description ||
                    '憑藉在健身領域十多年的經驗，我擁有健美操、個人訓練和營養方面的認證，為您提供改變體質和整體健康所需的知識和技能。'}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                marginBottom: '40px',
              }}
            >
              <Typography sx={{ fontSize: '50px', marginBottom: '20px' }}>
                評論
              </Typography>

              <Stack
                direction="row"
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '48px',
                }}
              >
                {courseCommentsData
                  ?.slice(0, 4)
                  ?.map((courseCommentData, idx) => {
                    return (
                      <CourseReviewCard
                        key={courseCommentData.review_id}
                        name={courseCommentData.name}
                        comment={courseCommentData.review_comment}
                        userPhoto={courseCommentData.user_photo}
                        courseRating={courseCommentData.rating}
                        date={courseCommentData.creation_date}
                      />
                    )
                  })}
                {/* <CourseReviewCard />
                <CourseReviewCard />
                <CourseReviewCard />
                <CourseReviewCard /> */}
              </Stack>
            </Box>
          </Stack>
          <Stack
            // spacing={3}
            sx={
              open
                ? {
                    position: 'fixed',
                    left: 'calc(53% + 156px - 9.5px)',
                    top: '50%',
                    transform: 'translate(0,-50%)',
                    width: '480px',
                    backgroundColor: '#140F2A',
                    borderRadius: '4px',
                    alignItems: 'center',
                    border: '2px solid',
                    borderImage: 'linear-gradient(-45deg, #ff00b8, #00f0ff) 1',
                  }
                : {
                    position: 'fixed',
                    left: 'calc(53% + 156px)',
                    top: '50%',
                    transform: 'translate(0,-50%)',
                    width: '480px',
                    backgroundColor: '#140F2A',
                    borderRadius: '4px',
                    alignItems: 'center',
                    border: '2px solid',
                    borderImage: 'linear-gradient(-45deg, #ff00b8, #00f0ff) 1',
                  }
            }
          >
            {/* <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/NPK0DLP4_r8?si=zxxHauXx_SSwMAaF&clip=UgkxtNIUl-4orzcvI0wUageOfDTyfA6vQsrX&clipt=EAAYsOoB&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe> */}
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/A8H8Wkt-B2Q?si=EUJGD9tZYaJZ-ZhH&amp;clip=Ugkx5ApsxFfzgDrNOavLOZbQ7YFI1ndZjgp0&amp;clipt=EAAYsOoB"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <Stack
              spacing={2}
              sx={{
                width: '100%',
                paddingY: '24px',
                paddingX: '48px',
              }}
            >
              <Typography
                sx={{
                  fontSize: '30px',
                  fontWeight: 'bold',
                  margin: 'unset',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                $699
              </Typography>
              <Stack
                direction="column"
                gap={3}
                sx={{
                  width: '100%',
                  // paddingX: '48px',
                }}
              >
                <Stack
                  direction="column"
                  spacing={1}
                  sx={{
                    width: '100%',
                  }}
                >
                  {/* <CourseActionButton onClick={handleAddToCart}> */}
                  {coursePurchased == null ? (
                    <OCBtn></OCBtn>
                  ) : coursePurchased ? (
                    GoToMyCoursesButton
                  ) : courseAddedToCart ? (
                    GoToCartButton
                  ) : (
                    AddToCartButton
                  )}
                  {/* <OCBtn onClickCallback={handleAddToCart}>加入購物車</OCBtn> */}
                  {/* </CourseActionButton> */}

                  {/* <Button
                    sx={{
                      border: '1px solid white',
                      padding: '8px',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      display: 'inline-block',
                      width: '100%',
                      color: 'white',
                    }}
                  >
                    立即購買
                  </Button> */}
                </Stack>
                <LineShareButton />
              </Stack>
            </Stack>
          </Stack>
          <Button
            id="basic-button"
            sx={{
              color: 'white',
              width: '100%',
              padding: 'unset',
              display: 'flex',
              width: '134px',
              height: '52px',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#2F2F45',
              padding: '16px',
              borderRadius: 'unset',
              border: '1px solid #525282',

              '&:hover': {
                color: 'white',
                backgroundColor: '#3E3E5C',
              },
            }}
            onClick={(e) => setOpen(true)}
          >
            <Typography
              sx={{
                // textDecoration: 'underline',
                cursor: 'pointer',
                display: 'inline-block',
              }}
            >
              顯示所有評論
            </Typography>
          </Button>
        </Box>
      </Box>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          // width={400}
          // height={280}
          bgcolor="#232334"
          p={3}
          // borderRadius={5}
          sx={{
            maxWidth: '920px',
            minHeight: '620px',
            padding: '32px',
            boxSizing: 'content-box',
            '&:focus-visible': {
              outline: 'unset',
            },
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <StarIcon
              sx={{
                color: '#00F0FF',
              }}
            />
            <Typography
              color="white"
              sx={{
                fontSize: '23px',
                lineHeight: '1.8rem',
              }}
            >
              {courseData?.avg_course_rating
                ? Number(courseData.avg_course_rating).toFixed(1) + ' '
                : ''}
              課程評分
            </Typography>
            <CircleIcon
              sx={{
                color: '#00F0FF',
                width: '12px',
                height: '12px',
              }}
            />
            <Typography
              color="white"
              sx={{
                fontSize: '23px',
                lineHeight: '1.8rem',
              }}
            >
              {courseCommentsData.length} 評分次數
            </Typography>
          </Stack>
          <Stack direction="row">
            <Stack
              direction="column"
              sx={{
                margin: 'unset',
                width: '100%',
              }}
            >
              {courseCommentsData?.map((courseCommentData, idx) => {
                console.log(courseCommentData)
                return (
                  <CourseReviewItem
                    key={courseCommentData.review_id}
                    name={courseCommentData.name}
                    comment={courseCommentData.review_comment}
                    userPhoto={courseCommentData.user_photo}
                    courseRating={courseCommentData.rating}
                    date={courseCommentData.creation_date}
                  />
                )
              })}
            </Stack>
          </Stack>
        </Box>
      </StyledModal>
      <Footer />
    </>
  )
}
