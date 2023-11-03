import btn from '@/styles/online-shop.module.css'
import React from 'react'

export default function Btn1({ children, width, margin }) {
  const btnw = {
    width: width,
    margin: margin,
  }
  return (
    <>
      <button className={btn.btnStyle} style={btnw}>
        {children}
      </button>
    </>
  )
}
