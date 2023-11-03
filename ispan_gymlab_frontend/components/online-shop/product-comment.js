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
import GiveProductRating from './product-rating'
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined'

const StyledModal = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export default function ProductComment({
  user_id,
  product_id,
  customer_name,
  userComments,
  setUserComments,
  open,
  setOpen,
}) {
  // const [open, setOpen] = useState(false)
  const [review, setReview] = useState('')
  const [commentExists, setCommentExists] = useState(false)
  const [productRating, setProductRating] = useState(0) //產品星星評分

  useEffect(() => {
    // for (let i = 0; i < userComments.length; i++) {
    if (userComments) {
      setCommentExists(true)
      setReview(userComments.product_comment)
      setProductRating(userComments.product_rating)
    } else {
      // 如果評論不存在，將評論內容和星星評分設定為預設值
      setCommentExists(false)
      setReview('')
      setProductRating(0)
    }
  }, [commentExists, userComments])

  const handleSubmit = () => {
    console.log('----------1----------')
    try {
      //新增評論
      console.log('handlesubmit')
      console.log('----------4----------')
      fetch('http://localhost:3002/dashboard/add_conmment/999', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: 999,
          product_id: product_id,
          product_rating: productRating,
          review: review,
          commentExists: commentExists,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setCommentExists(true)
        })
    } catch (error) {
      console.error('Error updating or adding comment:', error)
    }
  }

  console.log(review)
  console.log('product id: ', product_id)

  const NewReview = (
    <Typography
      sx={{
        color: 'white',
        textDecoration: 'underline',
      }}
    ></Typography>
  )
  const UpdateReview = (
    <Typography
      sx={{
        color: 'white',
        textDecoration: 'underline',
      }}
    ></Typography>
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
        {/* {commentExists ? UpdateReview : NewReview} */}
        <RateReviewOutlinedIcon />
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
            borderRadius: 3,
            // boxShadow:  10px 5px 5px blac,
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
              <GiveProductRating
                productRating={productRating}
                setProductRating={setProductRating}
                fontSize="30px"
              ></GiveProductRating>
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
            placeholder="歡迎留下對產品的意見和好評喲～"
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
            儲存評論
          </Button>
        </Box>
      </StyledModal>
    </>
  )
}
