import MuiNavbar from '@/components/testing/MuiNavbar'
import styles from '@/styles/class.module.css'
import { Avatar } from '@mui/material'
import Skills from '@/components/in-person-classes/skills'
import CardS1 from '@/components/in-person-classes/cardS-1'
import Footer from '@/components/footer/footer'

export default function InPersonClasses() {
  return (
    <>
      <MuiNavbar />
      <div className={styles.body}>
        <div className={styles.bgiInstructor}>
          {/* <div className={styles.bgcInstructor}> */}
          <div className={styles.classesTitle}>教練介紹</div>
          <div></div>
          <div
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '50px 156px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div className={styles.instructorHomeL}>
              <Avatar
                alt="Remy Sharp"
                src="/images/in-person-classes/instructor/0001.jpg"
                sx={{ width: 408, height: 414 }}
              />
              <div className={styles.instructorNameL}>孫希傑</div>
            </div>
            <div style={{ color: '#fff' }}>
              <div style={{ fontSize: '20px', margin: '30px 0px' }}>專長</div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '100px' }}>
                  <Skills>-增肌減脂</Skills>
                  <Skills>-重量訓練</Skills>
                  <Skills>-功能性訓練</Skills>
                </div>
                <div>
                  <Skills>-體態評估與調整</Skills>
                  <Skills>-銀髮族肌力訓練</Skills>
                  <Skills>-核心肌群強化訓練</Skills>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '20px', margin: '30px 0px' }}>經歷</div>
                <Skills>全真瑜珈健身教練</Skills>
              </div>
              <div>
                <div style={{ fontSize: '20px', margin: '30px 0px' }}>
                  專業證照
                </div>
                <Skills>-心肺復甦術(CPR+AED)</Skills>
                <Skills>-中華民國健身協會體適能C級指導員</Skills>
                <Skills>-NASM-CPT美國運動醫學私人教練證照</Skills>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bgiInstructor2}>
        <div>
          <div
            className={styles.classesTitle}
            style={{ padding: '100px', margin: '0px', color: '#000' }}
          >
            教練訓練課程
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <a
                href="/in-person-classes/class-page"
                style={{ textDecoration: 'none' }}
              >
                <CardS1 imageSrc="/images/in-person-classes/classes/05.webp">
                  有氧課程
                </CardS1>
              </a>
            </div>
            <div>
              <CardS1 imageSrc="/images/in-person-classes/classes/08.jpg">
                飛輪課程
              </CardS1>
            </div>
            <div>
              <CardS1 imageSrc="/images/in-person-classes/classes/07.jpg">
                綜合格鬥課程
              </CardS1>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      {/* </div> */}
    </>
  )
}
