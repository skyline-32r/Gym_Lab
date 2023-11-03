import style from '@/styles/cart.module.css'
import CartlistDetail from './cartlistDetail'

export default function OrderList({ discount, orderlist }) {
  let sum = 0

  return (
    <>
      <div className={style.list}>
        <div className={style._list}>
          <div className={style.tr}>
            <div className={style.th}>商品名稱</div>
            <div className={style.th2}>數量</div>
            <div className={style.th2}>價格</div>
          </div>
          {orderlist?.map((v, i) => {
            sum += (v.price || v.course_price) * (v.amount || 1)
            return <CartlistDetail v={v} key={i} />
          })}
          <div className={style.th3}>{'優惠券  NTD$ ' + discount}</div>
          <div className={style.th3}>VVIP 會員免運費</div>
          <div className={style.th3}>
            {'總計  NTD$ ' +
              (parseInt(sum) - parseInt(-discount)).toLocaleString('us-EN')}
          </div>
        </div>
      </div>
    </>
  )
}
