import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Stack,
  TextField,
  Typography,
  Modal,
  styled,
} from '@mui/material'
import { useState } from 'react'
import styles from '@/styles/online-courses/home-page.module.css'
import CourseReview from '@/components/online-courses/online-courses-home-page/course-review'
import Link from 'next/link'

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '20px',
})

export default function MyCourseCard({
  courseThumbnail,
  courseInstructor,
  courseName,
  courseId,
  userId,
  userComments,
}) {
  // const [open, setOpen] = useState(false)
  return (
    <>
      <Box>
        <Card
          sx={{
            width: '196px',
            height: '248px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#232334',
            color: 'white',
            cursor: 'pointer',
            transition: 'scale 0.2s ease-in-out',
            '&:hover': {
              scale: '1.1',
            },
            '.MuiCardContent-root': {
              backgroundColor: 'unset',
              paddingX: '0',
              paddingTop: 'unset',
              paddingBottom: '8px !important',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              // flex: '1',
            },
          }}
        >
          <Link
            href={`/online-courses/${courseId}/course-video`}
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
          >
            <CardMedia
              component="img"
              width="100%"
              height="112"
              image={courseThumbnail}
            ></CardMedia>
          </Link>
          <CardContent
            sx={{
              backgroundColor: 'unset',
              paddingX: '0',
            }}
          >
            <Box
              sx={{
                paddingX: '8px',
                paddingTop: '16px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <Link
                href={`/online-courses/${courseId}/course-video`}
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  flex: 1,
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '17px',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: '2',
                    }}
                  >
                    {courseName}
                  </Typography>
                </Box>
              </Link>
              <CourseReview
                // courseRating={courseRating}
                courseId={courseId}
                userId={userId}
                userComments={userComments}
                courseInstructor={courseInstructor}
                // refresh={refresh}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}
