import React from 'react'
import styles from '@/styles/class.module.css'
import { AppBar, Toolbar, Stack, Button } from '@mui/material'

export default function SubNav() {
  return (
    <>
      <AppBar className={styles.sub}>
        <Toolbar className={styles.toolBar}>
          <Stack direction="row" spacing={5}>
            <Button className={styles.subButton}>
              <a href="#a" className={styles.aa}>
                有氧
              </a>
            </Button>
            <Button className={styles.subButton}>
              <a href="#b" className={styles.aa}>
                飛輪
              </a>
            </Button>
            <Button className={styles.subButton}>
              <a href="#c" className={styles.aa}>
                綜合格鬥
              </a>
            </Button>
            <Button className={styles.subButton}>
              <a href="#d" className={styles.aa}>
                懸吊
              </a>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  )
}
