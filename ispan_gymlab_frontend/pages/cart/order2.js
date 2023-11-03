import React, { useState, useEffect } from 'react'
import style from '@/styles/cart.module.css'
import Footer from '@/components/testing/footer'
import Navbar from '@/components/testing/MuiNavbar'
// import Btn1 from '@/components/testing/btn1'
import CartBar from '@/components/cart/cartBar'
import CartProduct from '@/components/cart/cart-product'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
export default function Order2() {
  const router = useRouter()
  const [orderlist, setOrderlist] = useState([])
  const [data, setData] = useState([])
  const [payList, setPayList] = useState('')
  useEffect(() => {
    if (typeof localStorage != 'undefined') {
      const list = JSON.parse(localStorage.getItem('orderlist'))
      setOrderlist(list)
      console.log(list)
      let l = ''
      // if (orderlist != []) {
      list.map((v) => {
        l += `${v.product_name || v.course_name}#`
      })
      setPayList(l)
      // }
      fetch('http://localhost:3002/cart/order')
        .then((r) => r.json())
        .then((data) => {
          setData(data[0])
        })
    }
  }, [])

  // console.log('data ', data)
  // console.log('ordetlist ', orderlist)
  const handlepay = async () => {
    const vod = orderlist?.filter((v, i) => v.course_name)
    const pod = orderlist?.filter((v, i) => v.product_name)
    // console.log(vod)
    // console.log(pod)
    if (vod != []) {
      vod.map((v, i) => {
        addv(v)
        removeitem2(v.course_cart_id)
      })
    }
    if (pod != []) {
      pod.map((v, i) => {
        addp(v)
        removeitem(v.cart_id)
      })
    }
    localStorage.removeItem('orderlist')
    pay()
  }
  const addp = async (p) => {
    const delid_send = {
      order_id: data.order_id,
      sid: p.sid,
      price: p.price,
      amount: p.amount,
    }
    try {
      const res = await fetch('http://localhost:3002/cart/order/addp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(delid_send),
      })
      if (res) {
        const res_data = await res.json()
      }
    } catch (ex) {
      console.log(ex)
    }
  }
  const addv = async (v) => {
    const delid_send = {
      order_id: data.order_id,
      course_id: v.course_id,
      price: v.course_price,
    }
    try {
      const res = await fetch('http://localhost:3002/cart/order/addv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(delid_send),
      })
      if (res) {
        const res_data = await res.json()
      }
    } catch (ex) {
      console.log(ex)
    }
  }
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
      }
    } catch (ex) {
      console.log(ex)
    }
  }
  const removeitem2 = async (id) => {
    // console.log(id)
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
      }
    } catch (ex) {
      console.log(ex)
    }
  }
  const pay = async () => {
    console.log('pay0.5', payList)
    const delid_send = {
      product_name: payList,
      price: data.price,
    }
    // try {
    //   const res = await
    fetch('http://localhost:3002/cart/pay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(delid_send),
    })
      .then((res) => res.json())
      .then((res_data) => {
        console.log(res_data)
        document.querySelector('#A1').innerHTML = res_data
        document.querySelector('form').submit()
      })
      .catch((error) => console.log(error))
    //     if (res) {
    //       console.log(res)
    //       const res_data = await res.json()
    //       console.log(res_data)
    //       document.querySelector('#A1').innerHTML = res_data
    //       if (document.querySelector('form')) {
    //         console.log('gogogogogogo')
    //         document.querySelector('form').submit()
    //       }
    //     }
    //   } catch (ex) {
    //     console.log(ex)
    //   }
  }
  return (
    <>
      <Navbar />
      <div className={style.body}>
        <CartBar step="3" />
        <div className={style.container5} style={{ marginBottom: '40px' }}>
          <div className={style.type}>確認訂單資訊</div>
          <div className={(style.inputgroup, style.inputgroup2)}>
            {orderlist?.map((v, i) => {
              return (
                <CartProduct
                  key={v.cart_id || v.course_cart_id}
                  product_name={v.product_name || v.course_name}
                  price={v.price || v.course_price}
                  amount={v.amount || 1}
                  product_img={
                    v.course_thumbnail ||
                    `/images/online-shop/products/pid_${v.product_id}-1.webp`
                  }
                />
              )
            })}
            <div className={style.orderdata}>
              <div className={style.orderdatalist}>
                <div className={style.orderdatatext}>訂單編號</div>
                <div className={style.orderdatatext2}>{data.order_id}</div>
              </div>
              <div className={style.orderdatalist}>
                <div className={style.orderdatatext}>收件人姓名</div>
                <div className={style.orderdatatext2}>{data.customer_name}</div>
              </div>
              <div className={style.orderdatalist}>
                <div className={style.orderdatatext}>收件人電話</div>
                <div className={style.orderdatatext2}>
                  {`${data.customer_phone}`.replace(
                    /(\d{4})(\d{3})(\d{3})/,
                    '$1-$2-$3'
                  )}
                </div>
              </div>
              <div className={style.orderdatalist}>
                <div className={style.orderdatatext}>收件地址</div>
                <div className={style.orderdatatext2}>{data.address}</div>
              </div>
              <div className={style.orderdatalist}>
                <div className={style.orderdatatext}>付款方式</div>
                <div className={style.orderdatatext2}>
                  {data.payment_method}
                </div>
              </div>
            </div>
            <div className={style.orderdata} style={{ border: 'none' }}>
              <div className={style.orderdatalist}>
                <div className={style.orderdatatext}>商品總價</div>
                <div className={style.orderdatatext2}>
                  NTD$ {parseInt(data.price).toLocaleString('us-EN')}
                </div>
              </div>
              <div className={style.orderdatalist}>
                <div className={style.orderdatatext}>運費</div>
                <div className={style.orderdatatext2}>NTD$ 0</div>
              </div>
              <div className={style.orderdatalist}>
                <div className={style.orderdatatext}>優惠券</div>
                <div className={style.orderdatatext2}>NTD$ -0</div>
              </div>
              <div className={style.orderdatalist}>
                <div className={style.orderdatatext}>總計</div>
                <div className={style.orderdatatext2}>
                  NTD$ {parseInt(data.price).toLocaleString('us-EN')}
                </div>
              </div>
            </div>
          </div>
          <Button
            sx={{
              backgroundColor: 'white',
              width: '80%',
              fontSize: '12px',
              padding: '8px 16px',
              color: '#f9f9f9',
              margin: '16px 0',
              backgroundColor: '#140f2a',
              border: '3px solid #f9f9f9',
              '&:hover': {
                backgroundColor: '#140f2a',
                boxShadow: '-4px -4px 0px 0px #00f0ff, 4px 4px 0px 0px #ff00b8',
              },
            }}
            onClick={() => {
              handlepay()
            }}
          >
            確認付款
          </Button>
          {/* <Button
            sx={{
              backgroundColor: 'white',
              width: '80%',
              fontSize: '12px',
              padding: '8px 16px',
              color: '#f9f9f9',
              margin: '16px 0',
              backgroundColor: '#140f2a',
              border: '3px solid #f9f9f9',
              '&:hover': {
                backgroundColor: '#140f2a',
                boxShadow: '-4px -4px 0px 0px #00f0ff, 4px 4px 0px 0px #ff00b8',
              },
            }}
            onClick={() => {
              pay()
              console.log('pay0')
            }}
          >
            $$$$$
          </Button> */}
        </div>
        <Footer />
        <div id="A1" style={{ display: 'none' }}></div>
      </div>
    </>
  )
}
