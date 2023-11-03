import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext('')

export default CartContext

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState('')

  // 取到目前購物車內的商品數量
  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    console.log(storedCart)
    // if (storedCart) {
    //   // 如果 localStorage 中有購物車數量，就設定到 state 中
    //   setCart(storedCart)
    // } else {
    console.log('------------here---------------')
    // 否則向後端請求購物車數量
    fetch('http://localhost:3002/online-shop/cart_icon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Cart stuff from backend:', data) // 檢查這裡資料是不是正確
        console.log(data)
        setCart(data) // 修正這一行
        // 將購物車數量存入 localStorage
        localStorage.setItem('cart', JSON.stringify(data))
      })
      .catch((error) => {
        console.log('fail to add number', error)
      })
  }, [])

  useEffect(() => {
    if (cart) {
      fetch('http://localhost:3002/online-shop/add_cart_icon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseInt(cart),
        }),
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
        .catch((error) => {
          console.log('fail to add number', error)
        })
    }
  }, [cart])

  //   getNumber()
  // }, [cart])

  // //取到目前購物車內的商品數量
  // const getNumber = () => {
  //   fetch('http://localhost:3002/online-shop/add_cart_icon')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log('Cart stuff')
  //       console.log(data)F
  //       setCart(data)
  //     })
  //     .catch((error) => {
  //       console.log('fail to add number', error)
  //     })
  // }
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}
