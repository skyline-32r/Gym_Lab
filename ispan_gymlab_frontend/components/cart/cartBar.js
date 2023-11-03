import style from '@/styles/cart.module.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
export default function CartBar({ step }) {
  return (
    <div className={style.cartBarmain}>
      <div className={style.cartBar}>
        <div className={step >= 1 ? style.textactive : ''}>確認商品</div>
        <KeyboardDoubleArrowRightIcon
          className={step >= 1 ? style.textactive : ''}
        />
        <div className={step >= 2 ? style.textactive : ''}>填寫資料</div>
        <KeyboardDoubleArrowRightIcon
          className={step >= 2 ? style.textactive : ''}
        />
        <div className={step >= 3 ? style.textactive : ''}>確認訂單</div>
        <KeyboardDoubleArrowRightIcon
          className={step >= 3 ? style.textactive : ''}
        />
        <div className={step >= 4 ? style.textactive : ''}>完成訂單</div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'flex-start ',
          padding: '0 0 32px 0 ',
        }}
      >
        <div
          className={style.cartBar1}
          style={{ width: `${step * 25}%  ` }}
        ></div>
        <div
          className={style.cartBar2}
          style={{ width: `${100 - step * 25}% ` }}
        ></div>
      </div>
    </div>
  )
}
