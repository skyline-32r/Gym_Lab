import React from 'react'
import styles from '@/styles/landing.module.css'

export default function Marquee({
  color = 'blue',
  children = '全國最大健身論壇需要你的文章:)',
  href = 'https://www.instagram.com/therock/',
}) {
  let btn = {
    textcolor: '#f9f9f9',
    backgroundColor: '#FF00B8',
    Self: 'flex-end',
  }
  if (color == 'pink') {
    btn = {
      textcolor: '#f9f9f9',
      backgroundColor: '#FF00B8',
      Self: 'flex-end',
    }
  } else {
    btn = {
      textcolor: '#140f2a',
      backgroundColor: '#00f0ff',
      Self: 'flex-start',
    }
  }
  return (
    <button
      className={styles.btnMarquee}
      style={{
        backgroundColor: btn.backgroundColor,
        outline: '0.3rem solid' + btn.backgroundColor,
        color: btn.textcolor,
        minWidth: '80px',
        alignSelf: btn.Self,
      }}
    >
      <a href={href}>
        <span
          data-text={children}
          style={{
            color: btn.textcolor,
          }}
        >
          {children}
        </span>
      </a>
    </button>
  )
}
