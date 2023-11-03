import React from 'react'
import MuiNavbar from '@/components/testing/MuiNavbar'
import styles from '@/styles/online-shop/online-shop.module.css'
import Btn1 from '@/components/btn1'
import HomeProduct from '@/components/online-shop/home-product'
import Footer from '@/components/testing/footer'
import HomeCarousel from '@/components/online-shop/home-carousel'
import CourseReview from '@/components/online-courses/online-courses-home-page/course-review'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SubNav3 from '@/components/online-shop/sub-nav3'

export default function OnlineShopHome() {
  return (
    <>
      <MuiNavbar></MuiNavbar>
      <SubNav3 />
      <div className={styles.homeSec1}>
        <div className={styles.sec1Container}>
          <HomeCarousel />
        </div>
        <div className={styles.homeSec1sale}>
          <div className={styles.arrival}>本月銷售排行榜 // Best Seller</div>
          <div className={styles.homeSec1saleSub}>
            <HomeProduct />
          </div>
        </div>
      </div>
      <div className={styles.homesec2}>
        <div className={styles.homeSec2ImgContainer}>
          <div className={styles.homeSec2Img}>
            <div className={styles.btnContainer}>
              <Btn1 width={'200px'}>More</Btn1>
            </div>
          </div>
        </div>
        <div className={styles.homeSec2Text}>
          <h1 className={styles.homeSec2h1}>尖端預鍛鍊氮泵粉</h1>
          <h4 className={styles.homeSec2h4}>
            爆炸性的推進力
            <br />
            在您最需要時, 助您一臂之力
          </h4>
          <ul className={styles.homeLi}>
            <li>肌酸有助於提升體能表現</li>
            <li>咖啡因能夠增強耐力</li>
            <li>維他命 B6 能夠幫助消除疲勞</li>
            <li>添加 AstraGin®、BioPerine®、Capsimax® 與 TeaCrine®</li>
          </ul>
        </div>
      </div>
      <div className={styles.homesec3}>
        <div className={styles.homeSec3Text}>
          <h1 className={styles.homeSec3h1}>
            PERFOMIX
            <br />
            透明分離乳清蛋白粉
          </h1>
          <h4 className={styles.homeSec3h4}>補充高蛋白的清爽好滋味</h4>
          <ul className={styles.homeLi3}>
            <li>含有 20 克蛋白質</li>
            <li>清爽無負擔</li>
            <li>牛奶般的口感質地</li>
            <li>包含 4 克 BCAAs 支鏈氨基酸與 3 克麩醯胺酸</li>
            <li>低糖低鈉</li>
            <li>水果口味</li>
          </ul>
          <div className={styles.btnSec3}>
            <Btn1 width={'200px'}>More</Btn1>
          </div>
        </div>
        <div className={styles.homesec3ImgContainer}>
          <div className={styles.homesec3img}></div>
        </div>
      </div>
      <div className={styles.homesec2}>
        <div className={styles.homeSec4ImgContainer}>
          <div className={styles.homeSec4Img}></div>
        </div>
        <div className={styles.homeSec4Text}>
          <h1 className={styles.homeSec4h1}>豐富層次・輕盈極致</h1>
          <h4 className={styles.homeSec4h4}>
            如奶油般柔軟、輕盈，
            <br />
            伴你專注練習。
          </h4>
          <ul className={styles.homeLi4}>
            <li>內附胸墊，提升承托及包覆</li>
            <li>內設襯袋，胸墊可拆卸</li>
            <li>專為 A/B 罩杯穿著者提供低強度支撐</li>
            <li>緊身剪裁，凸顯身材曲線</li>
            <li>短版設計，長度落於腰部以上，適合配搭高腰長褲</li>
            <li>適合低強度運動</li>
          </ul>
          <div className={styles.btnSec4}>
            <Btn1 width={'200px'}>More</Btn1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
