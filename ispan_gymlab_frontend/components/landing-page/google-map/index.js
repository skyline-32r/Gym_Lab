import React, { useState } from 'react'
import GoogleMaps from './map'
import styles from '@/styles/landing.module.css'
import YouTubeIcon from '@mui/icons-material/YouTube'
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'

export default function BranchMap() {
  const [location, setLocation] = useState({
    lat: 25.035690453028515,
    lng: 121.52021634583907,
  })
  const [zoomPoint, setZoomPoint] = useState(13)

  return (
    <>
      <div className={styles.mapSection}>
        <div className={styles.mapInfo}>
          <div className={styles.mapTextContainer}>
            <div className={styles.mapTextContainer2}>
              <div
                className={styles.titleText}
                onClick={() => {
                  setLocation({
                    lat: 25.035690453028515,
                    lng: 121.52021634583907,
                  })
                  setZoomPoint(13)
                }}
              >
                <div className={styles.logoText}>GYM LAB</div>
                <div className={styles.logoTextCh}>健身據點</div>
              </div>
              <div>
                <div className={styles.locationContainer}>
                  <div
                    className={styles.mapText}
                    onClick={() => {
                      setLocation({
                        lat: 25.033851716102784,
                        lng: 121.54350833233664,
                        // 25.033851716102784, 121.54350833233664
                      })
                      // setZoomPoint(15)
                      setZoomPoint(17)
                    }}
                  >
                    <img
                      src="/images/Group1.png"
                      className={styles.mapImg}
                    ></img>
                    大安資展旗艦店
                  </div>
                  <div
                    className={styles.mapText}
                    onClick={() => {
                      setLocation({
                        lat: 25.053114281870496,
                        lng: 121.52132437576518,
                      })
                      setZoomPoint(17)
                    }}
                  >
                    <img
                      src="/images/Group1.png"
                      className={styles.mapImg}
                    ></img>
                    中山美美分店
                  </div>
                  <div
                    className={styles.mapText}
                    onClick={() => {
                      setLocation({
                        lat: 25.034258270703255,
                        lng: 121.56403192546597,
                      })
                      setZoomPoint(17)
                    }}
                  >
                    <img
                      src="/images/Group1.png"
                      className={styles.mapImg}
                    ></img>
                    信義101分店
                  </div>
                </div>
                <div className={styles.locationContainer}>
                  <div
                    className={styles.mapText}
                    onClick={() => {
                      setLocation({
                        lat: 24.97365296651875,
                        lng: 121.53933485430048,
                      })
                      setZoomPoint(17)
                    }}
                  >
                    <img
                      src="/images/Group1.png"
                      className={styles.mapImg}
                    ></img>
                    新店新的分店
                  </div>
                  <div
                    className={styles.mapText}
                    onClick={() => {
                      setLocation({
                        lat: 25.00999948901109,
                        lng: 121.46170105430134,
                      })
                      setZoomPoint(17)
                    }}
                  >
                    <img
                      src="/images/Group1.png"
                      className={styles.mapImg}
                    ></img>
                    板橋耶誕城分店
                  </div>
                  <div
                    className={styles.mapText}
                    onClick={() => {
                      setLocation({
                        lat: 25.083490415729816,
                        lng: 121.55745094795886,
                      })
                      setZoomPoint(17)
                    }}
                  >
                    <img
                      src="/images/Group1.png"
                      className={styles.mapImg}
                    ></img>
                    內湖摩天輪分店
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.map1}>
              <GoogleMaps location={location} zoomPoint={zoomPoint} />
            </div>
            <div className={styles.titleText2}>
              <div className={styles.logoTextCh}>聯絡我們</div>
            </div>
            <ul className={styles.CAul}>
              <li className={styles.CAli}>
                <a href="/in-person-classes/location">
                  <MailOutlineRoundedIcon
                    fontSize="large"
                    sx={{
                      '@media (max-width: 600px)': {
                        fontSize: '24px',
                      },
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <YouTubeIcon
                    fontSize="large"
                    sx={{
                      '@media (max-width: 600px)': {
                        fontSize: '24px',
                      },
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="/Thanks">
                  <FavoriteRoundedIcon
                    fontSize="large"
                    sx={{
                      '@media (max-width: 600px)': {
                        fontSize: '24px',
                      },
                    }}
                  />
                </a>
              </li>
              <li className={styles.CAli}>
                <a href="#">
                  <InstagramIcon
                    fontSize="large"
                    sx={{
                      '@media (max-width: 600px)': {
                        fontSize: '24px',
                      },
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <FacebookIcon
                    fontSize="large"
                    sx={{
                      '@media (max-width: 600px)': {
                        fontSize: '24px',
                      },
                    }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.map2}>
          <GoogleMaps location={location} zoomPoint={zoomPoint} />
        </div>
      </div>
    </>
  )
}
