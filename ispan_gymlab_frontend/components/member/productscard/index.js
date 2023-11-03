import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import styles from '@/styles/member/product.module.css'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import { IconButton } from '@mui/material'

export default function Product(props, wishlistData) {
  const [delWishlist, setDelWishList] = useState(false)
  const deleteWish = () => {
    fetch('http://localhost:3002/dashboard/del_wishlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: props.product_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        wishlistData
      })
      .catch((error) => {
        console.log('fail to delet from wishlist', error)
      })
    console.log(props.product_id)
  }

  return (
    <>
      <Card sx={{ maxWidth: 360 }} className={styles.card}>
        <CardMedia
          component="img"
          alt="test1"
          height="400"
          image={props.images}
        />
        <CardContent sx={{ height: 80 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={styles.titlecontainer}
          >
            {props.product_name}
            <IconButton onClick={deleteWish}>
              <DeleteRoundedIcon sx={{ color: 'grey', fontSize: 30 }} />
            </IconButton>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.product_description}
          </Typography>
        </CardContent>
        <CardContent className={styles.price}>
          <Typography className={styles.pricetext}>
            NTD {props.price}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
