import style from '@/styles/btn1.module.css'
import React from 'react'

export default function Btn1({ children, width, margin, fontSize, onClick }) {
  const btnw = {
    width: width,
    margin: margin,
    fontSize: fontSize,
  }
  // console.log(btnw)

  const defaultVersion = (
    <>
      <button className={style.btnStyle} style={btnw}>
        {children}
      </button>
    </>
  )

  const uniqueVersion = (
    <>
      <button className={style.btnStyle} style={btnw} onClick={onClick}>
        {children}
      </button>
    </>
  )

  return (
    // <>
    //   <button className={style.btnStyle} style={btnw}>
    //     {children}
    //   </button>
    // </>
    <>{onClick ? uniqueVersion : defaultVersion}</>
  )
}
