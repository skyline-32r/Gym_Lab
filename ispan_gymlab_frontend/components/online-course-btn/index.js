import style from '@/styles/online-course-btn1.module.css'
import React from 'react'

export default function OCBtn({
  children,
  width,
  margin,
  fontSize,
  onClickCallback,
}) {
  const moreBtnStyles = {
    width: width,
    margin: margin,
    fontSize: fontSize,
  }
  // console.log(btnw)

  const defaultVersion = (
    <>
      <button
        className={style.ocBtnStyle}
        // onClick={onClickCallback}
      >
        {children}
      </button>
    </>
  )

  const uniqueVersion = (
    <>
      <button
        className={style.ocBtnStyle}
        style={moreBtnStyles}
        onClick={onClickCallback}
      >
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
    <>{onClickCallback ? uniqueVersion : defaultVersion}</>
  )
}
