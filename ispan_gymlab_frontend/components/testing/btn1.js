import style from '@/styles/cart.module.css'
import React from 'react'

export default function Btn1({ children, width, margin = '20px 0' }) {
  const btnw = {
    width: width,
    margin: margin,
  }
  return (
    <>
      <button className={style.btnStyle} style={btnw}>
        {children}
      </button>
    </>
  )
}
