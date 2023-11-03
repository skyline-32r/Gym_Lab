import React from 'react'
import styles from "@/styles/online-shop/online-shop.module.css"
import { AppBar, Toolbar, Stack, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


export default function SubNav() {
    return (
        <>
            <AppBar className={styles.sub}>
                <Toolbar className={styles.toolBar}>
                    <Stack direction="row" spacing={5}>
                        <Button className={styles.subButton}>高蛋白系列</Button>
                        <Button className={styles.subButton}>營養補充品</Button>
                        <Button className={styles.subButton}>居家健身用品</Button>
                        <div className={styles.search}>
                            <Button>
                                <SearchIcon className={styles.searchIcon} />
                            </Button>
                        </div>
                        <Button className={styles.subButton}>進階搜尋</Button>
                    </Stack>
                </Toolbar>
            </AppBar >
        </>
    )
}
