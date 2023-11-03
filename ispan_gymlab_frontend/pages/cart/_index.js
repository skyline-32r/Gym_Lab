import Navbar from '@/components/testing/MuiNavbar'
import Btn1 from '@/components/testing/btn1'
import CartIcon from '@/components/cart/carticon'
import style from '@/styles/cart.module.css'
import Footer from '@/components/testing/footer'

export default function Index() {
  return (
    <>
      <div className={style.body}>
        <Navbar />
        <div className={style.container}>
          <h1 className={style.h1}>目前購物車內沒有商品</h1>
          <CartIcon />
          <Btn1 width={'70%'} margin="50px auto">
            前往商城
          </Btn1>
        </div>
        <Footer />
      </div>

    </>
  )
}
