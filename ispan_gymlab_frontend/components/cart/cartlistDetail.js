import style from '@/styles/cart.module.css'

export default function CartlistDetail({ v = { price: '0', amount: '1' } }) {
  const sum = parseInt(v.price || v.course_price) * parseInt(v.amount || 1)
  return (
    <>
      <div className={style.tr}>
        <div className={style.th}>{v.product_name || v.course_name}</div>
        <div className={style.th2}>{'×' + (v.amount || '1')}</div>
        <div className={style.th2}>
          {'$ ' + parseInt(sum).toLocaleString('us-EN')}
        </div>
      </div>
    </>
  )
}
