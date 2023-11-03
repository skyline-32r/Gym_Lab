import React from 'react'
import styles from '@/styles/landing.module.css'
import MarqueeItem from './marqueeItem'
export default function Shopswiper() {
  return (
    <>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          <MarqueeItem img="/images/landing_page/02.webp">
            <div>居家健身系列</div>
          </MarqueeItem>
          <MarqueeItem img="/images/landing_page/03.webp">
            <div>營養補充系列</div>
          </MarqueeItem>
          <MarqueeItem img="/images/landing_page/04.webp">
            <div>高蛋白系列</div>
          </MarqueeItem>
          <MarqueeItem img="/images/landing_page/05.webp">
            <div>居家健身系列</div>
          </MarqueeItem>
          <MarqueeItem img="/images/landing_page/07.webp">
            <div>營養補充系列</div>
          </MarqueeItem>
          <MarqueeItem img="/images/landing_page/06.webp">
            <div>高蛋白系列</div>
          </MarqueeItem>

          <MarqueeItem img="/images/landing_page/02.webp">
            <div>居家健身系列</div>
          </MarqueeItem>
          <MarqueeItem img="/images/landing_page/03.webp">
            <div>營養補充系列</div>
          </MarqueeItem>
          <MarqueeItem img="/images/landing_page/04.webp">
            <div>高蛋白系列</div>
          </MarqueeItem>
          <MarqueeItem img="/images/landing_page/05.webp">
            <div>居家健身系列</div>
          </MarqueeItem>
          <MarqueeItem img="/images/landing_page/07.webp">
            <div>營養補充系列</div>
          </MarqueeItem>
          <MarqueeItem img="/images/landing_page/06.webp">
            <div>高蛋白系列</div>
          </MarqueeItem>
        </div>
      </div>
    </>
  )
}
