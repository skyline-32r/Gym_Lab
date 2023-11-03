import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined'
import { IconButton, Button } from '@mui/material'
import ProductComment from '@/components/online-shop/product-comment'
import { useEffect, useState } from 'react'
import React from 'react'
import Link from 'next/link'

export default function AccordionOrderDetails({
  product_name,
  amount,
  price,
  course_name,
  course_price,
  course_thumbnail,
  product_id,
  customer_name,
  user_id,
  order_status,
}) {
  const [open, setOpen] = useState(false)
  const [userComments, setUserComments] = useState([])

  const handleOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    console.log('Get comments')
    fetch('http://localhost:3002/online-shop/get_comment/999', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: product_id,
        user_id: user_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('User comment')
        console.log(data[0])
        setUserComments(data[0])
      })
      .catch((error) => {
        console.log('fail', error)
      })
  }, [open])

  // console.log(data)

  return (
    <>
      <div style={{ display: 'flex', marginLeft: '40px' }}>
        <div
          // 照片家
          style={{
            width: '60px',
            height: '60px',
            margin: '4px',
          }}
        >
        <Link href={`http://localhost:3000/online-shop/${product_id}`}>
          <img
            src={
              course_thumbnail ||
              `/images/online-shop/products/pid_${product_id}-1.webp`
            }
            alt=""
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'cover',
              borderRadius: ' 5px',
            }}
          />
          </Link>
        </div>
        <div
          style={{
            width: '90%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            margin: '16px',
          }}
        >
          <div
            style={{
              width: '60%',
              overflow: 'hidden',
              whiteSpace: ' nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            {product_name || course_name}
          </div>
          <div style={{ width: '120px' }}>
            NTD$ {parseInt(price || course_price).toLocaleString('us-EN')}
          </div>
          <div style={{ width: '40px' }}>x{amount || 1}</div>
          <div style={{ width: '120px' }}>
            NTD${' '}
            {parseInt(price || course_price) *
              parseInt(amount || 1).toLocaleString('us-EN')}
          </div>
          {order_status == 4 && product_name ? (
            // <Button
            //   color="inherit"
            //   aria-label="add to shopping cart"
            //   onClick={handleOpen}
            // >
            <ProductComment
              open={open}
              setOpen={setOpen}
              product_id={product_id}
              userComments={userComments}
              setUserComments={setUserComments}
              customer_name={customer_name}
            />
          ) : // </Button>
          order_status == 4 && course_name ? (
            <Button
              disabled
              style={{
                opacity: 0,
              }}
            >
              <ProductComment />
            </Button>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  )
}
