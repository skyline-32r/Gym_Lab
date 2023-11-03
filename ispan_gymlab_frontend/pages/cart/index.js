import React, { useEffect } from 'react'
import style from '@/styles/cart.module.css'
import Footer from '@/components/testing/footer'
import Navbar from '@/components/testing/MuiNavbar'
import Btn1 from '@/components/testing/btn1'
import CartItems from '@/components/cart/cart-items'
import CartItemsV from '@/components/cart/cart-items-v'
import OrderList from '@/components/cart/orderlist'
import CartBar from '@/components/cart/cartBar'
import { Checkbox, FormControlLabel, Button } from '@mui/material'
import Discount from '@/components/cart/discount'
import { useState } from 'react'
import CartIcon from '@/components/cart/carticon'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter() //跳轉用
  const [data, setData] = useState([]) //商品
  const [data2, setData2] = useState([]) //影片
  // const [data3, setData3] = useState([]) //影片
  const [discount, setDiscount] = useState('') //優惠
  const [orderlist, setOrderlist] = useState([]) //右邊小清單
  useEffect(() => {
    fetchproduct()
    fetchcourse()
    // star()
  }, [])
  //!收藏
  // function star() {
  //   fetch('http://localhost:3002/cart/star')
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setData3(data)
  //     })
  // }
  //*載入商品
  function fetchproduct() {
    fetch('http://localhost:3002/cart/productcart')
      .then((r) => r.json())
      .then((data) => {
        setData(data)
      })
  }
  //?載入影片
  function fetchcourse() {
    fetch('http://localhost:3002/cart/onlineclasscart')
      .then((r) => r.json())
      .then((data) => {
        setData2(data)
      })
  }
  //*刪除商品
  const removeitem = async (id) => {
    const delid_send = {
      cart_id: id,
    }
    try {
      const res = await fetch('http://localhost:3002/cart/productcart/remove', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(delid_send),
      })
      if (res) {
        const res_data = await res.json()
        console.log(res_data)
        fetchproduct()
      }
    } catch (ex) {
      console.log(ex)
    }
  }
  //?刪除影片
  const removeitem2 = async (id) => {
    console.log(id)
    const delid_send = {
      cart_id: id,
    }
    try {
      const res = await fetch(
        'http://localhost:3002/cart/onlineclasscart/remove',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(delid_send),
        }
      )
      if (res) {
        const res_data = await res.json()
        console.log(res_data)
        fetchcourse()
      }
    } catch (ex) {
      console.log(ex)
    }
  }
  //*增加商品
  const addaitem = async (id) => {
    console.log(id)
    const delid_send = {
      cart_id: id,
    }
    try {
      const res = await fetch('http://localhost:3002/cart/productcart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(delid_send),
      })
      if (res) {
        const res_data = await res.json()
        console.log(res_data)
        fetchproduct()
      }
    } catch (ex) {
      console.log(ex)
    }
  }
  //*減少商品
  const delaitem = async (id) => {
    console.log(id)
    const delid_send = {
      cart_id: id,
    }
    try {
      const res = await fetch('http://localhost:3002/cart/productcart/del', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(delid_send),
      })
      if (res) {
        const res_data = await res.json()
        console.log(res_data)
        fetchproduct()
      }
    } catch (ex) {
      console.log(ex)
    }
  }
  //!優惠券修改
  const handleDiscount = (e) => {
    setDiscount(e.target.value)
  }
  //!右邊欄增加
  const addlist = (e) => {
    const id = e.target.value
    if (e.target.checked == true) {
      let newobj = data.filter(({ cart_id }) => cart_id == id)
      const newlist = [...orderlist, newobj[0]]
      setOrderlist(newlist)
    } else {
      let newobj = orderlist.filter((v) => v.cart_id != id)
      setOrderlist(newobj)
    }
  }
  //!右邊欄增加
  const addlist2 = (e) => {
    const id = e.target.value
    if (e.target.checked == true) {
      let newobj = data2.filter(({ course_cart_id }) => course_cart_id == id)
      const newlist = [...orderlist, newobj[0]]
      setOrderlist(newlist)
    } else {
      let newobj = orderlist.filter((v) => v.course_cart_id != id)
      setOrderlist(newobj)
    }
  }
  //!跳轉
  function next() {
    if (orderlist.length == 0) {
      Swal.fire({
        // backdrop: false,
        title: '請勾選要結帳的商品',
        icon: 'info',
        confirmButtonText: '確定',
      })
    } else {
      localStorage.setItem('orderlist', JSON.stringify(orderlist))
      // location = '/cart/order1'
      router.push('/cart/order1')
    }
  }
  //TODO->全選
  const toggleAll = (data, newChecked = false) => {
    return data.map((v) => {
      return { ...v, checked: newChecked }
    })
  }
  const handleToggleAll = (newIsSelect) => {
    setData(toggleAll(data, newIsSelect))
  }

  if (data.length == 0 && data2.length == 0) {
    return (
      <>
        <div className={style.body}>
          <Navbar />
          <div className={style.container}>
            <h1 className={style.h1}>目前購物車內沒有商品</h1>
            <CartIcon />
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                marginTop: '12px',
              }}
            >
              <Button
                sx={{
                  backgroundColor: 'white',
                  width: '40%',
                  fontSize: '12px',
                  padding: '8px 16px',
                  color: '#f9f9f9',
                  margin: '16px 0',
                  backgroundColor: '#140f2a',
                  border: '3px solid #f9f9f9',
                  '&:hover': {
                    backgroundColor: '#140f2a',
                    boxShadow:
                      '-4px -4px 0px 0px #00f0ff, 4px 4px 0px 0px #ff00b8',
                  },
                }}
                onClick={() => {
                  router.push('/online-shop/products')
                }}
              >
                前往購物商城
              </Button>
              <Button
                sx={{
                  backgroundColor: 'white',
                  width: '40%',
                  fontSize: '12px',
                  padding: '8px 16px',
                  color: '#f9f9f9',
                  margin: '16px 0',
                  backgroundColor: '#140f2a',
                  border: '3px solid #f9f9f9',
                  '&:hover': {
                    backgroundColor: '#140f2a',
                    boxShadow:
                      '-4px -4px 0px 0px #00f0ff, 4px 4px 0px 0px #ff00b8',
                  },
                }}
                onClick={() => {
                  router.push('/online-courses')
                }}
              >
                前往線上課程
              </Button>
            </div>
          </div>
          <Footer />
        </div>
      </>
    )
  } else {
    return (
      <>
        <Navbar />
        <div className={style.body}>
          <CartBar step="1" />
          <div className={style.container2}>
            <div className={style.container3}>
              <div className={style.type}>
                商城商品
                {/* <FormControlLabel
                  value="selectall"
                  control={
                    <Checkbox
                      sx={{
                        ml: 3,
                        color: '#F9F9F9',
                        '&.Mui-checked': {
                          color: '#00F0FF',
                        },
                      }}
                      onChange={(e) => handleToggleAll(!e.target.checked)}
                    />
                  }
                  label="全部選取"
                  labelPlacement="end"
                /> */}
              </div>
              {data &&
                data.map(
                  ({
                    cart_id,
                    product_name,
                    price,
                    capacity_name,
                    category_name,
                    flavor,
                    amount,
                    product_id,
                    user_id,
                  }) => {
                    return (
                      <CartItems
                        key={cart_id}
                        product_id={product_id}
                        cart_id={cart_id}
                        addlist={addlist}
                        product_name={product_name}
                        price={price}
                        capacity_name={capacity_name}
                        category_name={category_name}
                        flavor={flavor}
                        amount={amount}
                        removeitem={removeitem}
                        addaitem={addaitem}
                        delaitem={delaitem}
                        user_id={user_id}
                      />
                    )
                  }
                )}

              <div className={style.type}>
                線上課程
                {/* <FormControlLabel
                  value="selectall"
                  control={
                    <Checkbox
                      sx={{
                        ml: 3,
                        color: '#F9F9F9',
                        '&.Mui-checked': {
                          color: '#00F0FF',
                        },
                      }}
                    />
                  }
                  label="全部選取"
                  labelPlacement="end"
                /> */}
              </div>
              {data2 &&
                data2.map(
                  ({
                    course_cart_id,
                    course_name,
                    course_price,
                    course_thumbnail,
                  }) => {
                    return (
                      <CartItemsV
                        key={course_cart_id}
                        course_cart_id={course_cart_id}
                        course_name={course_name}
                        course_price={course_price}
                        course_thumbnail={course_thumbnail}
                        addlist2={addlist2}
                        removeitem2={removeitem2}
                      />
                    )
                  }
                )}
            </div>
            <div className={style.container4}>
              <div className={style.cartAside}>
                <OrderList discount={discount} orderlist={orderlist} />
                <Discount handleDiscount={handleDiscount} />
                <Button
                  sx={{
                    backgroundColor: 'white',
                    width: '100%',
                    fontSize: '12px',
                    padding: '8px 16px',
                    color: '#f9f9f9',
                    margin: '16px 0',
                    backgroundColor: '#140f2a',
                    border: '3px solid #f9f9f9',
                    '&:hover': {
                      backgroundColor: '#140f2a',
                      boxShadow:
                        '-4px -4px 0px 0px #00f0ff, 4px 4px 0px 0px #ff00b8',
                    },
                  }}
                  onClick={() => {
                    next()
                  }}
                >
                  填寫資料
                </Button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    )
  }
}
