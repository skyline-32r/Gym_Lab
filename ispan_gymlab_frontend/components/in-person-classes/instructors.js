import React from 'react'
import styles from '@/styles/class.module.css'
import { Avatar } from '@mui/material'
export default function Instructors() {
  return (
    <div className={styles.instructorHome}>
      <div className={styles.instructor}>
        <Avatar
          alt="Remy Sharp"
          src="/images/in-person-classes/instructor/0012.jpg"
          sx={{ width: 152, height: 152 }}
        />
        <div className={styles.instructorName}>林新凡</div>
      </div>
      <div className={styles.instructor}>
        <Avatar
          alt="Remy Sharp"
          src="/images/in-person-classes/instructor/0015.png"
          sx={{ width: 152, height: 152 }}
        />
        <div className={styles.instructorName}>姚幸弘</div>
      </div>
      <div className={styles.instructor}>
        <Avatar
          alt="Remy Sharp"
          src="/images/in-person-classes/instructor/0003.jpg"
          sx={{ width: 152, height: 152 }}
        />
        <div className={styles.instructorName}>蔡克齊</div>
      </div>
      <div className={styles.instructor}>
        <Avatar
          alt="Remy Sharp"
          src="/images/in-person-classes/instructor/0006.webp"
          sx={{ width: 152, height: 152 }}
        />
        <div className={styles.instructorName}>鄭威菁</div>
      </div>
      <div className={styles.instructor}>
        <Avatar
          alt="Remy Sharp"
          src="/images/in-person-classes/instructor/0007.jpg"
          sx={{ width: 152, height: 152 }}
        />
        <div className={styles.instructorName}>郭玄卿</div>
      </div>
      <div className={styles.instructor}>
        <Avatar
          alt="Remy Sharp"
          src="/images/in-person-classes/instructor/0008.png"
          sx={{ width: 152, height: 152 }}
        />
        <div className={styles.instructorName}>程財凱</div>
      </div>
      <div className={styles.instructor}>
        <Avatar
          alt="Remy Sharp"
          src="/images/in-person-classes/instructor/0009.jpg"
          sx={{ width: 152, height: 152 }}
        />
        <div className={styles.instructorName}>曹萱元</div>
      </div>

      <div className={styles.instructor}>
        <Avatar
          alt="Remy Sharp"
          src="/images/in-person-classes/instructor/0010.jpg"
          sx={{ width: 152, height: 152 }}
        />
        <div className={styles.instructorName}>林初茹</div>
      </div>
      <div className={styles.instructor}>
        <a
          href="../in-person-classes/instructors/instructors"
          style={{ textDecoration: 'none' }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/images/in-person-classes/instructor/0001.jpg"
            sx={{ width: 152, height: 152 }}
          />
          <div className={styles.instructorName}>孫希傑</div>
        </a>
      </div>
      <div className={styles.instructor}>
        <Avatar
          alt="Remy Sharp"
          src="/images/in-person-classes/instructor/0011.jpg"
          sx={{ width: 152, height: 152 }}
        />
        <div className={styles.instructorName}>蕭萱映</div>
      </div>
    </div>
  )
}
