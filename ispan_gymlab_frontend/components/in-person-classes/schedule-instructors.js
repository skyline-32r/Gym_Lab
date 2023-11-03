import React from 'react'
import styles from '@/styles/class.module.css'
//! 課程-教練們
export default function ScheduleInstructors({ children }) {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button className={styles.scheduleInstructors}>{children}</button>
      </div>
    </>
  )
}
