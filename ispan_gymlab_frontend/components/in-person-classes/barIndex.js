import React from 'react'
import styles from '@/styles/class.module.css'
import { AppBar, Toolbar, Stack, Button } from '@mui/material'

export default function BarIndex() {
  return (
    <>
      <AppBar className={styles.sub}>
        <Toolbar className={styles.toolBar}>
          <Stack direction="row" spacing={5}>
            <Button className={styles.subButton}>
              <a href="#a" className={styles.aa}>
                課程介紹
              </a>
            </Button>
            <Button className={styles.subButton}>
              <a href="#b" className={styles.aa}>
                教練介紹
              </a>
            </Button>
            <Button className={styles.subButton}>
              <a href="#c" className={styles.aa}>
                課程照片
              </a>
            </Button>
            <Button className={styles.subButton}>
              <a href="#d" className={styles.aa}>
                課表
              </a>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  )
}
