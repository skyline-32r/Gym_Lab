import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import styles from '@/styles/online-shop/product.module.css'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import CheckBox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Product(props) {
  const router = useRouter()

  //初始資料
  const [product, setProduct] = useState([])
  const [wishlist, setWishList] = useState(false)

  //加入收藏
  // useEffect(() => {
  //   if (wishlist) {
  //     fetch('http://localhost:3002/online-shop/add_wishlist', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         product_id: product.product_id,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data)
  //       })
  //       .catch((error) => {
  //         console.log('fail to add', error)
  //       })
  //     console.log(product.product_id)
  //   }
  //   if (!wishlist) {
  //     fetch('http://localhost:3002/online-shop/del_wishlist', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         product_id: product.product_id,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data)
  //       })
  //       .catch((error) => {
  //         console.log('fail to delet from wishlist', error)
  //       })
  //   }
  // }, [wishlist])

  // console.log(wishlist)

  return (
    <>
      <Link
        href={`http://localhost:3000/online-shop/${props.product_id}`}
        className={styles.link}
      >
        <Card sx={{ width: 320 }} className={styles.card}>
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
              href={`http://localhost:3000/online-shop/${props.product_id}`}
            >
              {props.product_name}
              <FormControlLabel
                control={
                  <CheckBox
                    icon={
                      <StarBorderRoundedIcon
                        sx={{ color: 'black', fontSize: 30 }}
                      />
                    }
                    checkedIcon={
                      <StarRoundedIcon
                        sx={{ color: '#FF00B8', fontSize: 30 }}
                      />
                    }
                    onChange={(e) => {
                      setWishList(!wishlist)
                      console.log(wishlist)
                    }}
                  />
                }
              ></FormControlLabel>
              {/* <CheckBox
                icon={<StarBorderRoundedIcon sx={{ fontSize: 30 }} />}
                checkedIcon={
                  <StarRoundedIcon sx={{ color: '#FF00B8', fontSize: 30 }} />
                }
              /> */}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.product_description}
            </Typography>
          </CardContent>
          <CardContent className={styles.price}>
            <Typography className={styles.pricetext}>
              NTD{props.price}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </>
  )
}
