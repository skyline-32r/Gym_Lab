import React, { useState, useEffect } from 'react'
import {
  Stack,
  Typography,
  Box,
  TextField,
  Button,
  Modal,
  styled,
} from '@mui/material'
import GiveCourseRating from '../../online-courses-detail-page/give-course-rating'
import StarIcon from '@mui/icons-material/Star'

const StyledModal = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export default function CourseReview({ userId, courseId, userComments }) {
  const [open, setOpen] = useState(false)
  const [review, setReview] = useState('')
  const [courseRating, setCourseRating] = useState(0)
  const [commentExists, setCommentExists] = useState(false)

  const handleSubmit = async () => {
    const res = await fetch(
      'http://localhost:3002/dashboard/my-online-courses/999',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseRating: courseRating,
          review: review,
          courseId: courseId,
          userId: userId,
          commentExists: commentExists,
        }),
      }
    )
    const data = await res.json()
    console.log(data)
    setCommentExists(true)
  }

  // const handleDelete = async() => {
  //   const res = await fetch(
  //     'http://localhost:3002/dashboard/my-online-courses/999',
  //     {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         courseId: courseId,
  //         userId: userId,
  //         commentExists: commentExists,
  //       }),
  //     }
  //   )
  //   const data = await res.json()
  //   console.log(data)
  //   setCommentExists(true)
  // }

  console.log(userComments)
  console.log('course id: ', courseId)

  useEffect(() => {
    for (let i = 0; i < userComments.length; i++) {
      if (userComments[i].course_id == courseId) {
        setCommentExists(true)
        setReview(userComments[i].review_comment)
        setCourseRating(userComments[i].rating)
        break
      }
    }
  }, [commentExists])

  const NewReview = (
    <Typography
      sx={{
        color: 'white',
        textDecoration: 'underline',
      }}
    >
      新增評論
    </Typography>
  )
  const UpdateReview = (
    <Typography
      sx={{
        color: 'white',
        textDecoration: 'underline',
      }}
    >
      修改評論
    </Typography>
  )
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ paddingX: '8px', cursor: 'pointer' }}
        onClick={(e) => setOpen(true)}
      >
        {commentExists ? UpdateReview : NewReview}
        <StarIcon sx={{ color: 'aqua' }} />
        {/* <Tooltip onClick={(e) => setOpen(true)} title="Make a post">
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Tooltip> */}
      </Stack>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          // height={280}
          bgcolor="#232334"
          p={3}
          // borderRadius={5}
          sx={{
            boxSizing: 'content-box',
            '&:focus-visible': {
              outline: 'unset',
            },
          }}
        >
          {/* <Typography
              variant="h6"
              color="white"
              textAlign="center"
              sx={{
                marginBottom: '16px',
              }}
            >
              Review
            </Typography> */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '32px',
            }}
          >
            <Typography
              color="white"
              textAlign="center"
              sx={{
                fontSize: '32px',
                marginBottom: '8px',
              }}
            >
              商品評論
            </Typography>
            <Stack
              direction="row"
              // spacing={1}
              sx={{
                alignItems: 'end',
              }}
            >
              <Typography
                color="white"
                textAlign="center"
                sx={{
                  fontSize: '18px',
                }}
              >
                選擇評分：
              </Typography>
              <GiveCourseRating
                courseRating={courseRating}
                setCourseRating={setCourseRating}
                fontSize="30px"
              ></GiveCourseRating>
            </Stack>
          </Box>
          <TextField
            sx={{
              width: '100%',
              borderRadius: 'unset',
              marginBottom: '32px',
              backgroundColor: 'white',
            }}
            id="standard-multiline-static"
            multiline
            rows={5}
            placeholder="您對本課程有什麽感想？告訴我們您參加本課程的個人經歷。"
            variant="outlined"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <Button
            onClick={(e) => {
              handleSubmit()
              setOpen(false)
            }}
            sx={{
              width: '100%',
              color: 'white',
              border: '1px solid white',
              '&:hover': {
                backgroundColor: '#3E3E5C',
              },
            }}
          >
            儲存並繼續
          </Button>
          {/* {commentExists && (
            <Button
              sx={{
                width: '100%',
                color: 'white',
                border: '1px solid white',
                '&:hover': {
                  backgroundColor: '#3E3E5C',
                },
              }}
            >
              刪除
            </Button>
          )} */}
        </Box>
      </StyledModal>
    </>
  )
}
