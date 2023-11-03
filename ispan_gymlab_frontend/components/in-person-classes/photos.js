import React from 'react'
import styles from '@/styles/class.module.css'
export default function Photos() {
  return (
    // 飛輪海
    <div className={styles.photoHome}>
      <div className={styles.photoDiv}>
        <img src="/images/in-person-classes/03.jpg" />
      </div>
      <div className={styles.photoDiv}>
        <img src="/images/in-person-classes/03.jpg" />
      </div>
      <div className={styles.photoDiv}>
        <img src="/images/in-person-classes/03.jpg" />
      </div>
      <div className={styles.photoDiv}>
        <img src="/images/in-person-classes/03.jpg" />
      </div>
      <div className={styles.photoDiv}>
        <img src="/images/in-person-classes/03.jpg" />
      </div>
    </div>
  )
}
