import React from 'react'
import styles from '@/styles/member/glass.module.css'
export default function Glass() {
  return (
    <>
      <div
        className={styles.glassContainer}
        style={{
          display: 'inline-block',
        //   paddingTop: '156px',
        //   paddingBottom: '156px',
          backgroundColor: 'rgba(200,200,200,0.1)',
        //   backgroundColor: 'white',
          boxShadow: '0px 0px 20px rgba(255,255,255,0.3)',
        }}
      ></div>
    </>
  )
}
