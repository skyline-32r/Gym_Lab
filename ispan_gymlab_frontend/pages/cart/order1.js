import React, { useContext, useEffect, useState } from 'react'
import style from '@/styles/cart.module.css'
import Footer from '@/components/testing/footer'
import Navbar from '@/components/testing/MuiNavbar'
import OrderList from '@/components/cart/orderlist'
import CartBar from '@/components/cart/cartBar'
import Discount from '@/components/cart/discount'
import TWZipCode from '@/components/testing/TWZipCode'
import {
  Checkbox,
  FormControlLabel,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
} from '@mui/material'
import Select from '@/components/cart/select'
import { useRouter } from 'next/router'
// import AuthContext from '@/context/auth-context'

export default function Order1() {
  // const { auth } = useContext(AuthContext)
  const router = useRouter()
  const [discount, setDiscount] = useState('')
  const handleDiscount = (e) => {
    setDiscount(e.target.value)
  }
  const [video, setVideo] = useState(false)
  const errormsg = {
    fullname: '',
    phone: '',
    pickup: '1',
    location: '',
    country: '',
    town: '',
    address: '',
    payment: '行動支付',
  }
  const [user, setUser] = useState(errormsg)
  const [errors, setErrors] = useState(errormsg)
  const [orderlist, setOrderlist] = useState([])
  const [userData, setUserData] = useState({})
  const [auth, setAuth] = useState('')

  let [sum, setSum] = useState(0)
  useEffect(() => {
    // if (typeof localStorage != 'undefined') {
    const list = JSON.parse(localStorage.getItem('orderlist'))
    const auth1 = localStorage.getItem('auth')

    setOrderlist(list)
    setSum(0)

    setAuth(auth1)
    list.map((v, i) => {
      setSum((sum += (v.price || v.course_price) * (v.amount || 1)))
    })
    list.map((v) => {
      if (v.course_name) {
        setVideo(true)
      }
    })
    // }
  }, [])
  useEffect(() => {
    // console.log('attempting to get user data')
    if (auth) {
      // console.log('getting user data')
      getUserData()
    }
  }, [auth])
  const getUserData = () => {
    if (auth) {
      fetch('http://localhost:3002/cart/getUserData', {
        headers: { Authorization: 'Bearer ' + auth },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserData(data)
        })
    }
  }
  const country0 = [
    '基隆市',
    '臺北市',
    '新北市',
    '宜蘭縣',
    '新竹市',
    '新竹縣',
    '桃園市',
    '苗栗縣',
    '臺中市',
    '彰化縣',
    '南投縣',
    '嘉義市',
    '嘉義縣',
    '雲林縣',
    '臺南市',
    '高雄市',
    '屏東縣',
    '臺東縣',
    '花蓮縣',
    '金門縣',
    '連江縣',
    '澎湖縣',
  ]
  const handleFieldChange = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value }
    setUser(newUser)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let hasErrors = false
    const newEerrors = { ...errormsg }

    if (user.fullname == '') {
      hasErrors = true
      newEerrors.fullname = '請填寫收件者姓名'
    } else if (user.fullname.length < 2) {
      hasErrors = true
      newEerrors.fullname = '收件者姓名需大於2個字'
    }

    if (user.phone == '') {
      hasErrors = true
      newEerrors.phone = '請填寫收件者手機'
    } else if (user.phone.length != 10) {
      hasErrors = true
      newEerrors.phone = '收件者手機格式有誤'
    }

    if (user.pickup == '1') {
      if (user.location == '') {
        hasErrors = true
        newEerrors.location = '請選擇收件地址'
      }
    } else if (user.pickup == '2') {
      if (user.address == '') {
        hasErrors = true
        newEerrors.address = '請填寫收件地址'
      }
      if (user.town == '') {
        hasErrors = true
        newEerrors.town = '請選擇收件地址'
      }
      if (user.country == '') {
        hasErrors = true
        newEerrors.country = '請選擇收件地址'
      }
    }

    setErrors(newEerrors)
    if (hasErrors == false) {
      newOrder(user)
    }
  }
  const newOrder = async (user) => {
    const orderData = {
      customer_name: user.fullname,
      customer_phone: user.phone,
      address:
        user.location || country0[user.country - 1] + user.town + user.address,
      payment_method: user.payment,
      price: sum,
    }
    try {
      const res = await fetch('http://localhost:3002/cart/newOrder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      })
      if (res) {
        const res_data = await res.json()
        router.push('order2')
      }
    } catch (ex) {
      console.log(ex)
    }
  }
  const useUserData = (e) => {
    if (e.target.checked && auth) {
      const town = userData.home_area.slice(3)
      const country = country0.indexOf(userData.home_area.slice(0, 3)) + 1
      const newUser = {
        ...user,
        fullname: userData.name,
        phone: userData.phone,
        pickup: '2',
        country: country,
        town: town,
        address: userData.address,
      }
      setUser(newUser)
    } else {
      const newUser = {
        ...user,
        fullname: '',
        phone: '',
        pickup: '1',
        country: '',
        town: '',
        address: '',
      }
      setUser(newUser)
    }
  }
  return (
    <>
      <Navbar />
      <div className={style.body}>
        <CartBar step="2" />
        <div className={style.container2}>
          <div className={style.container3}>
            <div className={style.type}>填寫收件資訊</div>
            <form className={style.inputgroup}>
              <FormControlLabel
                value="selectall"
                control={
                  <Checkbox
                    sx={{
                      '&.Mui-checked': {
                        color: '#00F0FF',
                      },
                    }}
                    onClick={useUserData}
                  />
                }
                label="使用會員資料"
                // labelPlacement="selectall"
              />
              <TextField
                required
                id="outlined-required"
                name="fullname"
                label="收件人姓名"
                value={user.fullname}
                fullWidth
                sx={{ color: '#140F2A' }}
                onChange={handleFieldChange}
                helperText={errors.fullname}
                FormHelperTextProps={{
                  error: true,
                }}
              />
              <TextField
                required
                id="outlined-required"
                name="phone"
                label="收件人手機"
                fullWidth
                value={user.phone}
                onChange={handleFieldChange}
                helperText={errors.phone}
                FormHelperTextProps={{
                  error: true,
                }}
              />
              <FormControl fullWidth>
                <FormLabel id="demo-radio-buttons-group-label">
                  選取收件方式
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="1"
                  name="pickup"
                  value={user.pickup}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="門市取貨"
                    onChange={handleFieldChange}
                  />
                  <Select
                    text="選擇門市"
                    name="location"
                    handleFieldChange={handleFieldChange}
                    value={user.location}
                    errortext={errors.location}
                    disabled={user.pickup == 1 ? false : true}
                  />

                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="宅配到府"
                    onChange={handleFieldChange}
                  />
                  <TWZipCode
                    errortext1={errors.country}
                    errortext2={errors.town}
                    handleFieldChange={handleFieldChange}
                    value1={user.country}
                    value2={user.town}
                    disabled={user.pickup == 2 ? false : true}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="詳細地址"
                    name="address"
                    fullWidth
                    onChange={handleFieldChange}
                    helperText={errors.address}
                    FormHelperTextProps={{
                      error: true,
                    }}
                    value={user.address}
                    disabled={user.pickup == 2 ? false : true}
                  />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  付款方式
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="payment"
                  value={user.payment}
                  onChange={handleFieldChange}
                >
                  <FormControlLabel
                    value="行動支付"
                    control={<Radio />}
                    label="行動支付"
                  />
                  <FormControlLabel
                    value="信用卡付款"
                    control={<Radio />}
                    label="信用卡付款"
                  />
                  <FormControlLabel
                    value="貨到付款"
                    control={<Radio />}
                    label={
                      video ? '貨到付款 *購買商品不支援此付款方式' : '貨到付款'
                    }
                    disabled={video}
                  />
                </RadioGroup>
              </FormControl>
            </form>
          </div>
          <div className={style.container4}>
            <div className={style.cartAside}>
              <OrderList discount={discount} orderlist={orderlist} />
              <Discount handleDiscount={handleDiscount} />
              <Button
                type="button"
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
                onClick={handleSubmit}
              >
                資料確認
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
