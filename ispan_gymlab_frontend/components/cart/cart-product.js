import React from 'react'
import style from '@/styles/cart.module.css'
export default function CartProduct({
  product_name = 'Nike Dunk 低筒 SE',
  product_img = '/images/cart/1.webp',
  price = 1450,
  amount = 1,
}) {
  return (
    <>
      <div className={style.item2}>
        <img className={style.itemimg2} src={product_img} alt="商品圖片" />
        <div className={style.itemitem}>
          <div className={style.itemname}>{product_name}</div>
          <div>{'×' + amount}</div>
          <div className={style}>
            NTD$ {parseInt(price).toLocaleString('us-EN')}
          </div>
        </div>
      </div>
    </>
  )
}
