import MuiNavbar from '@/components/testing/MuiNavbar'
import Btn from '@/components/in-person-classes/btn'
import styles from '@/styles/class.module.css'
import { IconButton } from '@mui/material'
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded'
import Card from '@/components/in-person-classes/card'
import Card2 from '@/components/in-person-classes/card2'
import Card3 from '@/components/in-person-classes/card3'
import Card4 from '@/components/in-person-classes/card4'
import Instructors from '@/components/in-person-classes/instructors'
import Photo from '@/components/in-person-classes/photo'
import Schedule from '@/components/in-person-classes/schedule'
import Footer from '@/components/testing/footer'
import { useEffect, useState } from 'react'
import BarIndex from '@/components/in-person-classes/barIndex'

export default function InPersonClasses() {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('http://localhost:3002/in-person-classes')
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setData(data)
  //     })
  // }, [])
  // console.log(data)

  return (
    <>
      <MuiNavbar />
      <BarIndex />
      {/* <div
        style={{
          paddingTop: '110px',
          width: '100%',
          backgroundColor: 'rgba(20, 15, 42, 0.65)',
          position: 'fixed',
          display: 'flex',
        }}
      >
        <barIndex />
      </div> */}
      <div className={styles.body}>
        <div className={styles.bgi}>
          <div className={styles.classes}>實體課程</div>
          <div className={styles.classesS}>加入VVIP會員即可免費參加</div>
          <Btn>了解更多</Btn>
          <IconButton
            color="#00F0FF"
            aria-label="upload picture"
            component="span"
            sx={{ mt: '200px' }}
            //直接加a在icon上面沒效果,所以加onClick
            onClick={() => {
              const element = document.getElementById('a')
              element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <KeyboardDoubleArrowDownRoundedIcon
              sx={{
                color: '#00f0ff',
                fontSize: '50px',
              }}
            ></KeyboardDoubleArrowDownRoundedIcon>
          </IconButton>
        </div>
        <div className={styles.bgc}>
          <div style={{ paddingTop: '20px' }}></div>
          <div
            className={styles.classesTitle}
            style={{ paddingTop: '20px' }}
            id="a"
          >
            課程介紹
          </div>
          <div className={styles.classesHome}>
            <Card />
            <Card2 />
            <Card3 />
            <Card4 />
          </div>
          {/* <div></div>
          <div
          // style={{
          //   backgroundColor: ' rgba(255, 255, 255, 0.8)',
          //   backgroundImage: 'url(/Images/in-person-classes/121212.jpeg)',
          //   backgroundSize: 'cover',
          //   // position: 'absolute',
          //   // top: '0px',
          //   // right: '0px',
          //   // bottom: '0px',
          //   // left: '0px',
          //   opacity: '0.3',
          // }}
          > */}
          <div className={styles.hero}>
            <div style={{ paddingTop: '20px' }}></div>
            <div
              id="b"
              className={styles.classesTitle}
              style={{ position: ' relative', color: '#000' }}
            >
              教練介紹
            </div>
            <div>
              <Instructors />
            </div>
          </div>
          {/* </div> */}
          <div style={{ paddingTop: '20px' }}></div>
          <div className={styles.classesTitle} id="c">
            課程照片
          </div>
          <div>
            <Photo />
          </div>
          <div className={styles.classesTitle} id="d">
            課表
          </div>
          <div>
            <Schedule />
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}
