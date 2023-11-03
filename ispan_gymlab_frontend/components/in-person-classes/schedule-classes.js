import React from 'react'
import styles from '@/styles/class.module.css'
//! 課程-名稱
export default function ScheduleClasses({ children }) {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button className={styles.scheduleInstructors}>{children}</button>
      </div>
    </>
  )
}
