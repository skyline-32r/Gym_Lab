import style from '@/styles/cart.module.css'

export default function Discount({ handleDiscount }) {
  return (
    <>
      <select
        name=""
        id=""
        className={style.discount}
        onChange={handleDiscount}
      >
        <option value="" disabled className={style.discountItems}>
          選擇優惠券
        </option>
        <option value="-0" className={style.discountItems}>
          不使用優惠券
        </option>
        <option value="-100" className={style.discountItems}>
          生日禮金 折100元
        </option>
        <option value="-10%" className={style.discountItems}>
          會員註冊禮 10%off
        </option>
      </select>
    </>
  )
}
