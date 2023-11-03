import * as React from 'react'
import styles from '@/styles/online-shop/online-shop.module.css'
import { AppBar, Toolbar, Stack, Button, Popover } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Input from '@mui/material/Input'
import Link from 'next/link'
import { redirect } from 'next/dist/server/api-utils'

export default function SubNav2({
  setCategoryId,
  categoryId,
  search,
  setSearch,
  order,
  setOrder,
}) {
  const router = useRouter()
  const ariaLabel = { 'aria-label': 'description' }
  const [show, setShow] = useState(false)

  // 蛋白質button
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  // 營養補充品button1
  const [anchorEl1, setAnchorEl1] = useState(null)
  const open1 = Boolean(anchorEl1)
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget)
  }
  const handleClose1 = (e) => {
    setAnchorEl1(null)
  }
  // 居假健身用品button2
  const [anchorEl2, setAnchorEl2] = useState(null)
  const open2 = Boolean(anchorEl2)
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget)
  }
  const handleClose2 = () => {
    setAnchorEl2(null)
  }
  // 排序button3
  const [anchorEl3, setAnchorEl3] = useState(null)
  const open3 = Boolean(anchorEl3)
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget)
  }
  const handleClose3 = () => {
    setAnchorEl3(null)
  }

  return (
    <AppBar className={styles.sub}>
      <Toolbar className={styles.toolBar}>
        <Stack direction="row" spacing={5}>
          <Button
            className={styles.subButton}
            onClick={() => {
              setCategoryId('')
              setSearch('')
              setOrder('')
            }}
          >
            全部商品
          </Button>
          <div style={{ textAlign: 'center', alignSelf: 'center' }}>
            {/* {高蛋白系列button} */}
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onMouseOver={open ? handleClose : handleClick}
              className={styles.subButton}
              onClick={() => {
                handleClose()
                setCategoryId('101,102')
              }}
            >
              高蛋白系列
              <KeyboardArrowDownRoundedIcon />
            </Button>
          </div>
          <Menu
            sx={{ zIndex: 1 }}
            id="basic-menu"
            anchorEl={anchorEl}
            // onMouseOut={handleClose}
            open={open}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
              onMouseLeave: handleClose,
              color: 'grey',
            }}
            className={styles.menu}
          >
            <MenuItem
              onClick={(e) => {
                handleClose(e)
                setCategoryId('101')
              }}
              className={styles.menuItem}
            >
              高蛋白粉
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose(e)
                setCategoryId('102')
              }}
              className={styles.menuItem}
            >
              高蛋白零食
            </MenuItem>
          </Menu>
          {/* {營養補充品button} */}
          <Button
            id="basic-button1"
            aria-controls={open1 ? 'basic-menu1' : undefined}
            aria-haspopup="true"
            aria-expanded={open1 ? 'true' : undefined}
            onMouseOver={open1 ? handleClose1 : handleClick1}
            className={styles.subButton}
            onClick={(e) => {
              handleClose1(e)
              setCategoryId('201,202')
            }}
          >
            營養補充品
            <KeyboardArrowDownRoundedIcon />
          </Button>
          <Menu
            sx={{ zIndex: 1 }}
            id="basic-menu1"
            anchorEl={anchorEl1}
            open={open1}
            // onClose={handleClose1}
            // onMouseOut={handleClose1}
            MenuListProps={{
              'aria-labelledby': 'basic-button1',
              onMouseLeave: handleClose1,
            }}
            className={styles.menu}
          >
            <MenuItem
              onClick={(e) => {
                handleClose1(e)
                setCategoryId('201')
              }}
              className={styles.menuItem}
            >
              補給營養品
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose1(e)
                setCategoryId('202')
              }}
              className={styles.menuItem}
            >
              BACC支鏈氨基酸
            </MenuItem>
          </Menu>
          {/* {居家健身用品button} */}
          <Button
            id="basic-button2"
            aria-controls={open2 ? 'basic-menu2' : undefined}
            aria-haspopup="true"
            aria-expanded={open2 ? 'true' : undefined}
            onMouseOver={open2 ? handleClose2 : handleClick2}
            className={styles.subButton}
            onClick={(e) => {
              handleClose2(e)
              setCategoryId('301,302')
            }}
          >
            居家健身用品
            <KeyboardArrowDownRoundedIcon />
          </Button>
          <Menu
            sx={{ zIndex: 1 }}
            id="basic-menu2"
            anchorEl={anchorEl2}
            open={open2}
            onClose={handleClose2}
            MenuListProps={{
              'aria-labelledby': 'basic-button2',
              onMouseLeave: handleClose2,
            }}
          >
            <MenuItem
              onClick={(e) => {
                handleClose2(e)
                setCategoryId('301')
              }}
              className={styles.menuItem}
            >
              居家訓練
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose2(e)
                setCategoryId('302')
              }}
              className={styles.menuItem}
            >
              瑜伽用品
            </MenuItem>
          </Menu>
          <form
            className={styles.search}
            onSubmit={(e) => {
              e.preventDefault()
              router.push(`?search=${search}`)
            }}
          >
            <Input
              placeholder="請輸入關鍵字"
              inputProps={ariaLabel}
              sx={{ fontSize: 14 }}
              disableUnderline={true}
              // value={search}
              onChange={(e) => {
                setSearch(e.target.value)
              }}
            />
            <Button type="submit">
              <SearchIcon className={styles.searchIcon} />
            </Button>
          </form>
          <Button
            className={styles.subButton}
            id="basic-button3"
            aria-controls={open3 ? 'basic-menu3' : undefined}
            aria-haspopup="true"
            aria-expanded={open3 ? 'true' : undefined}
            onMouseOver={open3 ? handleClose3 : handleClick3}
            onClick={(e) => {
              handleClose3(e)
            }}
          >
            排序
            <KeyboardArrowDownRoundedIcon />
          </Button>
          <Menu
            sx={{ zIndex: 1 }}
            id="basic-menu3"
            anchorEl={anchorEl3}
            open={open3}
            onClose={handleClose3}
            MenuListProps={{
              'aria-labelledby': 'basic-button3',
              onMouseLeave: handleClose3,
            }}
          >
            <MenuItem
              onClick={(e) => {
                handleClose3(e)
                setOrder('price')
              }}
              className={styles.menuItem}
            >
              依價錢
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose3(e)
                setOrder('sold')
              }}
              className={styles.menuItem}
            >
              依銷售量
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose3(e)
                setOrder('launch_date')
              }}
              className={styles.menuItem}
            >
              最新上架
            </MenuItem>
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
