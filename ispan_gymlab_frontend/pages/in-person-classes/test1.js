import MuiNavbar from '@/components/testing/MuiNavbar'
// import styles from '@/styles/class.module.css'
import AccessibleTabs2 from '@/components/member/my-inperson-classes-page'
import Footer from '@/components/footer/footer'
import SidebarTemplate from '@/components/member/sidebar-template'
// import { Box } from '@mui/material'
// import styles from '@/styles/member/my-inperson-classes.module.css'

export default function Test() {
  return (
    <>
      <MuiNavbar />
      <SidebarTemplate>
        {/* <div
          // className={styles.bgc}
          style={{
            height: '1000px',
            width: '100%',
          }}
        >
          <div style={{ height: '100%' }}>
            <div
              style={{
                paddingTop: '200px',
              }}
            >
              <div> */}
        <AccessibleTabs2></AccessibleTabs2>
        {/* </div>
            </div>
          </div>
        </div> */}
      </SidebarTemplate>
      {/* <Footer></Footer> */}
    </>
  )
}
