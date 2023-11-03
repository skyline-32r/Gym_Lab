import React, { useEffect, useState } from 'react'
import MuiNavbar from '@/components/testing/MuiNavbar'
import styles from '@/styles/online-shop/product.module.css'
import Footer from '@/components/testing/footer'
import Product from '@/components/online-shop/product'
import SubNav2 from '@/components/online-shop/sub-nav2'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useRouter } from 'next/router'

export default function Products() {
  const [data, setData] = useState([])
  const [listdata, setListdata] = useState({})
  const [categoryId, setCategoryId] = useState('')
  const router = useRouter()
  let { page, search: searchParam } = router.query
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [order, setOrder] = useState('')

  searchParam = searchParam || ''

  useEffect(() => {
    setSearch(searchParam)
    const usp = new URLSearchParams({ page, search: searchParam })

    const pageNumber = page ? parseInt(page) : 1

    fetch(
      `http://localhost:3002/online-shop?page=${pageNumber}&categoryId=${categoryId}&${usp.toString()}&order=${order}`
    )
      .then((r) => r.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
  }, [page, searchParam, order])

  useEffect(() => {
    fetch(`http://localhost:3002/online-shop?page=1&categoryId=${categoryId}`)
      .then((r) => r.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
        console.log(data)
      })
  }, [categoryId])

  // useEffect(() => {

  //   fetch(
  //     `http://localhost:3002/online-shop?page=${pageNumber}&categoryId=${categoryId}&${usp.toString()}`
  //   )
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setData(data)
  //       setIsLoading(false)
  //     })
  // }, [order, categoryId, searchParam])

  // useEffect(() => {
  //   if (data) {
  //     setTimeout(() => {
  //       setIsLoading(false)
  //     }, 3000)
  //   }
  // }, [])

  console.log(data)

  const datalist = data.rows
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const handleChange = (e, newPage) => {
    router.push(
      `http://localhost:3000/online-shop/products?page=${newPage}&search=${search}&order=${order}`
    )
    // scrollTo()
  }
  console.log('CategoryId: ' + categoryId)
  // `http://localhost:3002/online-shop?page=1&category=${categoryId}`

  return (
    <>
      <MuiNavbar />
      <SubNav2
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        search={search}
        setSearch={setSearch}
        order={order}
        setOrder={setOrder}
      />
      <div className={styles.container}>
        {datalist &&
          datalist.length > 0 &&
          datalist.map(
            ({
              product_id,
              product_name,
              product_description,
              price,
              category_id,
            }) => {
              return (
                <Product
                  key={product_id}
                  product_id={product_id}
                  product_name={product_name}
                  product_description={product_description}
                  category={category_id}
                  order={order}
                  price={price}
                  images={`/images/online-shop/first-pic/pid_${product_id}-1.webp`}
                />
              )
            }
          )}

        <div className={styles.page}>
          <Stack spacing={2}>
            <Pagination
              count={data.totalPages || 1}
              page={parseInt(page ? parseInt(page) : 1)}
              onChange={handleChange}
            />
          </Stack>
        </div>
      </div>
      <Footer />
    </>
  )
}
