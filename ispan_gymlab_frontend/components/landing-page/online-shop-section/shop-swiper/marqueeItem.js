import React from 'react'
import styles from '@/styles/landing.module.css'
export default function MarqueeItem({
  img = '/images/landing_page/01.png',
  href = 'https://www.google.com',
  children = '高蛋白系列',
}) {
  return (
    <div className={styles.marqueeItem}>
      <a href={href} className={styles.marqueeLink}>
        <img
          src={img}
          alt=""
          style={{ objectFit: 'contain', height: '200px' }}
          draggable={false}
        />
        {children}
      </a>
    </div>
  )
}
