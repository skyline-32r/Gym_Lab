import React, { useEffect, useState } from 'react'
import style from '@/styles/cart.module.css'
import { Checkbox, Button, IconButton, ButtonGroup } from '@mui/material'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import DeleteIcon from '@mui/icons-material/Delete'
import styles from '@/styles/online-shop/product-detail.module.css'
export default function CartItems({
  product_name = 'Nike Dunk 低筒 SE',
  price = 1450,
  amount = 1,
  addlist,
  flavor,
  capacity_name,
  category_name,
  cart_id,
  removeitem,
  addaitem,
  delaitem,
  product_id,
}) {
  const [data, setData] = useState([]) //收藏
  const [islike, setIslike] = useState(false) //收藏
  useEffect(() => {
    fetchproduct()
  }, [])
  useEffect(() => {
    data.map((v) => {
      if (v.product_id == product_id) {
        setIslike(true)
      }
    })
  }, [data])
  function fetchproduct() {
    fetch('http://localhost:3002/cart/star')
      .then((r) => r.json())
      .then((data) => {
        setData(data)
      })
  }

  const [num, setNum] = useState(amount)
  console.log('this', data)
  return (
    <>
      <div className={style.item}>
        <Checkbox
          sx={{
            color: 'action',
            '&.Mui-checked': {
              color: '#00F0FF',
            },
          }}
          value={cart_id}
          onChange={addlist}
        />
        <div className={style.itemimg}>
          <img
            className={style.itemimg}
            src={`/images/online-shop/products/pid_${product_id}-1.webp`}
            alt="商品圖片"
          />
        </div>
        <div className={style.itemitem}>
          <div>
            <div className={style.productName}>{product_name}</div>
            <div style={{ fontSize: '14px', color: '#777', margin: '10px 0' }}>
              {flavor == 'N/A' ? '' : flavor}&nbsp;
              {/* {category_name}&nbsp; */}
              {capacity_name}
            </div>
          </div>

          <ButtonGroup
            sx={{
              '@media (max-width: 600px)': {
                width: '70%',
              },
            }}
          >
            <Button
              className={styles.numButtonMinus}
              onClick={() => {
                if (num >= 2) {
                  delaitem(cart_id)
                  setNum(num - 1)
                }
              }}
            >
              -
            </Button>
            <Button className={styles.numButton}>{num}</Button>
            <Button
              className={styles.numButtonPlus}
              onClick={() => {
                addaitem(cart_id)
                setNum(num + 1)
              }}
            >
              +
            </Button>
          </ButtonGroup>
          <div className={style.price}>
            <div style={{ padding: '12px' }}>
              {'NTD$ ' + parseInt(price).toLocaleString('us-EN')}
            </div>
            <div>
              <Checkbox
                icon={
                  <StarBorderRoundedIcon
                    sx={{ color: '#FF00B8', fontSize: '2rem' }}
                  />
                }
                checked={islike}
                onClick={() => setIslike(!islike)}
                checkedIcon={
                  <StarRoundedIcon
                    sx={{ color: '#FF00B8', fontSize: '2rem' }}
                  />
                }
              />
              <IconButton
                sx={{ color: '#FF00B8' }}
                aria-label="delete"
                size="large"
                onClick={() => {
                  removeitem(cart_id)
                }}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
