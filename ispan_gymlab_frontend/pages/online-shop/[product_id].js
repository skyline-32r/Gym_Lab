import React from 'react'
import MuiNavbar from '@/components/testing/MuiNavbar'
import styles from '@/styles/online-shop/product-detail.module.css'
import Footer from '@/components/testing/footer'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import CheckBox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import ProductFlavor from '@/components/online-shop/product-flavor'
import Comment from '@/components/online-shop/comment'
import SubNav2 from '@/components/online-shop/sub-nav2'
import PidCarousel from '@/components/online-shop/pid-carousel'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import { useRouter } from 'next/router'
import { useState, useEffect, useReducer, useContext } from 'react'
import ProductSpec from '@/components/online-shop/product-spec'
import CartContext from '@/context/navbar-cart'
import SubNav3 from '@/components/online-shop/sub-nav3'
// import { result } from 'lodash'

//TODO:localStorage issues

export default function Detail() {
  //商品資料
  const [product, setProduct] = useState({
    sid: '',
    product_id: '',
    product_name: '',
    product_description: '',
    product_detail: '',
    flavor: '',
  })

  //1.定義初始狀態
  const iniState = { total: 1 }

  //2.定義action

  //3.reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increase':
        return { total: state.total + action.payload.value }
      case 'decrease':
        return { total: state.total - action.payload.value }
      default:
        return state
    }
  }

  //各種狀態設定
  const [price, setPrice] = useState('')
  const [flavorList, setFlavorList] = useState([]) //原始陣列->唯一口味陣列的原始資料
  const [capacity, setCapacity] = useState([]) //原始陣列->唯一口味容量的原始資料
  const [selectCapacity, setSelectCapacity] = useState('') //裝選到的容量裝態
  const [selectFlavor, setSelectFlavor] = useState('') //裝選到的口味狀態
  const [choose, setChoose] = useState('') //原始陣列->用來篩選出加入購物車的商品sid
  const [error, setError] = useState({}) //裝錯誤訊息
  const [comment, setComment] = useState([])
  // const [cart, setCart] = useState('') // 裝購物車數量
  const { cart, setCart } = useContext(CartContext)
  const [wishlist, setWishList] = useState(false)
  const router = useRouter()
  const [state, dispatch] = useReducer(reducer, iniState) //計數器
  // const [final, setFinal] = useState('')

  //讀入資料
  const data = async (product_id) => {
    const res = await fetch('http://localhost:3002/online-shop/' + product_id)
    const result = await res.json()
    setProduct(result[0])
    console.log(result[0].product_id)
    console.log(result)
    setFlavorList(result)
    setCapacity(result)
    setChoose(result)
  }

  console.log(choose)

  //讀入評論資料

  // const dataC = async (product_id) => {
  //   const res = await fetch(
  //     'http://localhost:3002/online-shop/page_comment/' + product_id
  //   )
  //   const result = await res.json()
  //   setComment(result[0])
  //   console.log(comment)
  // }

  useEffect(() => {
    fetch(
      `http://localhost:3002/online-shop/page_comment/${product.product_id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: product.product_id,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setComment(data)
      })
      .catch((error) => {
        console.log('fail', error)
      })
  }, [])

  console.log(comment)

  useEffect(() => {
    if (router.isReady) {
      const { product_id } = router.query
      data(product_id)
    }
  }, [router.isReady, router.query])

  // console.log(product.sid)

  // 設定唯一容量的陣列
  const uniqueCapacity = capacity
    ? capacity.reduce((acc, current) => {
        // 檢查是否已存在相同的 flavor_id
        const isDuplicate = acc.some(
          (item) => item.capacity_id === current.capacity_id
        )
        // 如果不存在，則加入 acc 陣列
        if (!isDuplicate) {
          acc.push(current)
        }
        return acc
      }, [])
    : []

  console.log(uniqueCapacity)

  //設定唯一的口味陣列
  const uniqueFlavors = flavorList
    ? flavorList.reduce((acc, current) => {
        // 檢查是否已存在相同的 flavor_id
        const isDuplicate = acc.some(
          (item) => item.flavor_id === current.flavor_id
        )
        // 如果不存在，則加入 acc 陣列
        if (!isDuplicate) {
          acc.push(current)
        }
        return acc
      }, [])
    : []

  //依據選擇的容量抓出價錢(抓出選擇的容量)
  useEffect(() => {
    console.log('----------------------1-----------------------')
    if (selectCapacity) {
      console.log('----------------------2-----------------------')
      const selectedCapacityObj = uniqueCapacity.find(
        (v) => v.capacity_name == selectCapacity
      )
      if (selectedCapacityObj) {
        const selectedPrice = selectedCapacityObj.price
        setPrice(selectedPrice)
      }
    }
  }, [selectCapacity, uniqueCapacity])

  //設定選擇的口味
  useEffect(() => {
    if (selectFlavor) {
      const selectFlavorObj = uniqueFlavors.find(
        (v) => v.flavor == selectFlavor
      )
    }
    setSelectFlavor(selectFlavor)
  }, [selectFlavor])
  console.log('口味', selectFlavor)
  console.log('容量', selectCapacity)
  console.log(choose)

  // HOOK : 父元素 傳遞 方法給 子元素 勾取狀態回 父元素
  // const selectFlavor2 = (v) => setSelectFlavor(v)
  //HOOK 1:selectFlavor2是方法:取到v塞回setSelectFlavor
  // const selectCapacity2 = (v) => setSelectCapacity(v)

  //加入收藏
  useEffect(() => {
    if (wishlist) {
      fetch('http://localhost:3002/online-shop/add_wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: product.product_id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
        .catch((error) => {
          console.log('fail to add', error)
        })
      console.log(product.product_id)
    }
    if (!wishlist) {
      fetch('http://localhost:3002/online-shop/del_wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: product.product_id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
        .catch((error) => {
          console.log('fail to delet from wishlist', error)
        })
    }
  }, [wishlist])

  console.log(wishlist)

  //加入所選商品到購物車
  //思考流程：從前端取到唯一的sid,以及購買數量,傳到後端塞到sql裡面
  const addToCart = () => {
    const errorMessage = {}

    if (!selectFlavor) {
      errorMessage.flavor = '請選擇口味'
    }
    if (!selectCapacity) {
      errorMessage.capacity = '請選擇規格'
    }
    console.log(errorMessage)
    setError(errorMessage)

    if (selectFlavor && selectCapacity) {
      const selectObj = flavorList.filter(
        (v) => v.flavor === selectFlavor && v.capacity_name === selectCapacity
      )
      setChoose(selectObj)
    }
    if (state.total && selectFlavor && selectCapacity) {
      const amount = state.total
      const cartTotal = parseInt(localStorage.getItem('cart'))
      const newCartTotal = amount + cartTotal
      setCart(newCartTotal)
      localStorage.setItem('cart', newCartTotal)
    }
  }
  //抓到購買商品的sid
  useEffect(() => {
    if (choose && choose.length === 1) {
      fetch('http://localhost:3002/online-shop/add_product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sid: choose[0].sid,
          amount: state.total ? state.total : 1,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          console.log(choose[0].sid)
        })
        .catch((error) => {
          console.log('fail to add product', error)
        })
    }
  }, [choose])

  return (
    <>
      <MuiNavbar />
      <SubNav3 />
      <div className={styles.sec1}>
        <div className={styles.imgContainer}>
          {product.product_id && (
            <PidCarousel>{product.product_id}</PidCarousel>
          )}
        </div>
        <div className={styles.textContainer}>
          <div className={styles.h1}>{product.product_name}</div>
          <div className={styles.desText}>{product.product_description}</div>
          <div className={styles.rate}>
            <div className={styles.stars}>
              <StarRoundedIcon className={styles.stars} />
              <StarRoundedIcon className={styles.stars} />
              <StarRoundedIcon className={styles.stars} />
              <StarRoundedIcon className={styles.stars} />
              <StarRoundedIcon className={styles.stars} />
            </div>
            <div className={styles.rateText}>/ 25 reviews</div>
          </div>
          <div className={styles.desText}>
            NTD $ {price ? price : product.price}
            {/* NTD $ */}
            {/* {price == true && product.price == true
              ? parseInt(price).toLocaleString('us-EN')
              : 'hi'} */}
            {/* : parseInt(product.price).toLocaleString('us-EN')} */}
            {/* NTD $
            {parseInt(price).toLocaleString('us-EN')
              ? parseInt(price).toLocaleString('us-EN')
              : parseInt(product.price)} */}
          </div>
          <div className={styles.detailText}>{product.product_detail}</div>
          <div>
            <div className={styles.qBar}>
              <ProductFlavor
                className={styles.select}
                // setFlavorList={setFlavorList} //把口味狀態傳給子元件
                // flavorList={flavorList}
                // selectFlavor2={setSelectFlavor}//HOOK 2:傳屬性給子元件->告訴子元件要執行這個方法
                uniqueFlavors={uniqueFlavors} //把口味傳給子元件
                setSelectFlavor={setSelectFlavor}
                setError={setError}
                error={error}
              >
                <span>口味</span>
              </ProductFlavor>
              <ProductSpec
                className={styles.select}
                // setCapacity={setCapacity}
                // capacity={capacity}
                // selectCapacity2={selectCapacity}
                setSelectCapacity={setSelectCapacity}
                uniqueCapacity={uniqueCapacity} //把容量傳給子元件
                setError={setError}
                error={error}
              >
                <span>規格</span>
              </ProductSpec>
            </div>
            <div className={styles.buttonBar}>
              <ButtonGroup>
                <Button
                  className={styles.numButtonMinus}
                  onClick={() => {
                    if (state.total > 0) {
                      dispatch({ type: 'decrease', payload: { value: 1 } })
                    }
                  }}
                >
                  <RemoveRoundedIcon />
                </Button>
                <Button className={styles.numButton}>
                  {state.total ? state.total : 1}
                </Button>
                <Button
                  className={styles.numButtonPlus}
                  onClick={() => {
                    dispatch({ type: 'increase', payload: { value: 1 } })
                  }}
                >
                  <AddRoundedIcon />
                </Button>
              </ButtonGroup>
              <Button
                className={styles.cartButton}
                onClick={() => {
                  addToCart()
                }}
              >
                加入購物車
              </Button>
              <Button
                className={styles.cartButton}
                href="http://localhost:3000/cart"
                onClick={() => {
                  addToCart()
                }}
              >
                立即購買
              </Button>
              <FormControlLabel
                control={
                  <CheckBox
                    icon={
                      <StarBorderRoundedIcon
                        sx={{ fontSize: 30, color: '#f9f9f9' }}
                      />
                    }
                    checkedIcon={
                      <StarRoundedIcon
                        sx={{ color: '#FF00B8', fontSize: 30 }}
                      />
                    }
                    onChange={(e) => {
                      setWishList(!wishlist)
                      console.log(wishlist)
                    }}
                  />
                }
                label="加入收藏"
              ></FormControlLabel>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sec2}>
        <div className={styles.productTextContainer}>
          <h5 className={styles.productTextL}>商品描述</h5>

          {/* /images/online-shop/products/pid_${children}-5.web */}
          {/* <h5 className={styles.productTextR}>配送及付款方式</h5> */}
        </div>
        <div className={styles.sec2Context}>
          <div className={styles.content}>
            <img
              className={styles.contentImg}
              src="/images/online-shop/pid/pid_2-1.webp"
            ></img>
          </div>
          <div className={styles.contentText}>
            <div className={styles.sec2Title}>什麼是乳清分離蛋白粉?</div>
            <div className={styles.sec2TextContent}>
              乳清分離蛋白粉特別適合需要增加蛋白質日常攝取量或健身訓練前後增加蛋白質攝入的人士。因其極高的蛋白質含​​量（每餐份
              22 克），
              乳清分離蛋白粉有助於肌肉的增長和維持，增加肌肉質量，幫您實現最佳健身和瘦身效果。本品有包括天然口味在內的多種豐富口味供選擇。
            </div>
            <div className={styles.sec2Title}>如何服用乳清分離蛋白粉?</div>
            <div className={styles.sec2TextContent}>
              乳清分離蛋白粉可在運動健身之前或之後服用，也可以在全天任意時間服用來補充蛋白質。服用乳清分離蛋白粉的最佳方式是作為蛋白奶昔補充飲料飲用，也可以發揮您的創意，加入烘烤和甜點中一起食用。
              請務必注意，基本的產品說明標籤為英文。此外，大部分產品也提供法語、意大利語、德語、西班牙語、丹麥語、瑞典語以及芬蘭語的標籤。味供選擇。
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sec3}>
        {/* <button onClick={loadComment}>button</button> */}
        <Comment comment={comment} />
      </div>
      <Footer />
    </>
  )
}
