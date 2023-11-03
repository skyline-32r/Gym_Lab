import React from 'react'
import styles from '@/styles/landing.module.css'

export default function OnlineCard({
  children = '居家健身',
  img = '/images/online-courses/header-section/category_thumbnail_pilates.jpg',
}) {
  return (
    <div className={styles.cardshadow}>
      <div className={styles.classCard}>
        <h2 className={styles.classname}>{children}</h2>
        <div
          style={{ backgroundImage: 'URL(' + img + ')' }}
          className={styles.onlineCardImg}
        />
      </div>
    </div>
  )
}
