import MuiNavbar from '@/components/testing/MuiNavbar'
import styles from '@/styles/class.module.css'
import AccessibleTabs2 from '@/components/in-person-classes/testt'
import Footer from '@/components/footer/footer'

export default function Test() {
  return (
    <>
      <MuiNavbar />
      <div className={styles.bgc} style={{ height: '1000px', width: '100%' }}>
        <div style={{ height: '100%' }}>
          <div
            style={{
              paddingTop: '200px',
            }}
          >
            <div>
              <AccessibleTabs2></AccessibleTabs2>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
