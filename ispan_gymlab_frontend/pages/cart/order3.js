import Navbar from '@/components/testing/MuiNavbar'
import SvgIcon from '@/components/cart/svgicon'
import style from '@/styles/cart.module.css'
import Footer from '@/components/testing/footer'
import CartBar from '@/components/cart/cartBar'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
export default function Order3() {
  const router = useRouter()

  return (
    <>
      <Navbar />

      <div className={style.body}>
        <CartBar step="4" />
        <div className={style.container}>
          <h1 className={style.h1}>訂單已完成， 感謝您的購買!</h1>
          <SvgIcon />
          {/* <Btn1
            width={'70%'}
            margin="50px auto"
            onClick={() => {
              location = '/dashboard/myorders'
            }}
          >
            檢視訂單
          </Btn1> */}
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
              router.push('/dashboard/myorders')
            }}
          >
            查看訂單
          </Button>
        </div>
        <Footer />
      </div>
    </>
  )
}
