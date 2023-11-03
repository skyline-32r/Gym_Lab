import MuiNavbar from '@/components/testing/MuiNavbar'
import Footer from '@/components/footer/footer'
import SidebarTemplate from '@/components/member/sidebar-template'
import Product from '@/components/member/productscard'
import { Box, Stack, Pagination, styled, Select, MenuItem } from '@mui/material'
import styles from '@/styles/member/product-wishlist.module.css'
import { useActiveLink } from '@/context/active-link-context'
import { useEffect, useState } from 'react'

export default function Test() {
  const [data, setData] = useState([])
  const [wishlist, setWishList] = useState([])

  //抓取願望清單的資料
  useEffect(() => {
    wishlistData()
  }, [data])

  const wishlistData = () => {
    fetch(`http://localhost:3002/dashboard/product-wishlist`)
      .then((r) => r.json())
      .then((data) => {
        setData(data)
        console.log(data)
      })
  }

  // //清除願望清單
  // useEffect(() => {
  //   fetch('http://localhost:3002/dashboard/del_wishlist')
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setData(data)
  //     })
  // })

  console.log(data)

  const { setActiveLink } = useActiveLink()
  useEffect(() => {
    setActiveLink('products-wishlist')
  }, [])
  const UDMSelect = styled(Select)({
    width: '350px',
    // backgroundColor: '#EFEDED',
    // height: '36px',
    padding: '0px',
    color: 'white',
    borderRadius: '5px',
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '.MuiPaper-root.MuiPopover-paaper.MuiMenu.paper': {
      borderRadius: 'unset',
    },
    '.MuiSelect-icon': {
      fill: 'white',
    },
  })

  return (
    <>
      <MuiNavbar />
      <SidebarTemplate>
        <Box p={3} className={styles.boxContainer}>
          {/* filter */}
          {/* <Stack className={styles.selectionsContainer}>
            <UDMSelect value="" displayEmpty>
              <MenuItem value="">
                <em>商品類別</em>
              </MenuItem>
              <MenuItem value="12"></MenuItem>
              <MenuItem value="34"></MenuItem>
              <MenuItem value="56"></MenuItem>
            </UDMSelect>
            <UDMSelect>
              <MenuItem value=""></MenuItem>
              <MenuItem value=""></MenuItem>
              <MenuItem value=""></MenuItem>
              <MenuItem value=""></MenuItem>
            </UDMSelect>
            <UDMSelect>
              <MenuItem value=""></MenuItem>
              <MenuItem value=""></MenuItem>
              <MenuItem value=""></MenuItem>
              <MenuItem value=""></MenuItem>
            </UDMSelect>
          </Stack> */}
          {/* cards */}
          <Box className={styles.cardsContainer}>
            {data.map(
              ({ product_id, product_name, product_description, price }) => {
                return (
                  <Product
                    key={product_id}
                    product_id={product_id}
                    product_name={product_name}
                    product_description={product_description}
                    price={price}
                    images={`/images/online-shop/products/pid_${product_id}-1.webp`}
                    wishlistData={wishlistData}
                  />
                )
              }
            )}
          </Box>
          {/* pagination */}
          {/* <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              // backgroundColor: '#34434d',
              width: '100%',
            }}
            spacing={2}
          >
            <Pagination
              sx={{
                color: 'white',
                '.MuiButtonBase-root': {
                  color: 'white',
                },
                '.MuiPaginationItem-root': {
                  color: 'white',
                },
              }}
              count={10}
              showFirstButton
              showLastButton
            /> */}
          {/* <Pagination count={10} hidePrevButton hideNextButton /> */}
          {/* </Stack> */}
        </Box>
      </SidebarTemplate>
      <Footer></Footer>
    </>
  )
}
