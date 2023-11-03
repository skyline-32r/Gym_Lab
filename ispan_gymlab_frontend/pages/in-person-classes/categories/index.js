import MuiNavbar from '@/components/testing/MuiNavbar'
import Btn from '@/components/in-person-classes/btn'
import styles from '@/styles/class.module.css'

import ClassA from '@/components/in-person-classes/class-a'
import ClassB from '@/components/in-person-classes/class-b'
import ClassC from '@/components/in-person-classes/class-c'
import ClassD from '@/components/in-person-classes/class-d'
import Bar from '@/components/in-person-classes/bar'
import Footer from '@/components/footer/footer'

export default function InPersonClasses() {
  return (
    <>
      <MuiNavbar />

      <div className={styles.body}>
        <div className={styles.bgc} style={{ height: '3300px' }}>
          <div
            style={{
              paddingTop: '0px',
              width: '100%',
              backgroundColor: 'rgba(20, 15, 42, 0.65)',
              position: 'fixed',
              display: 'flex',
            }}
          >
            <Bar />
          </div>
          <div style={{ height: '50px' }}></div>
          <div
            className={styles.classesTitle}
            style={{ paddingTop: '50px', marginTop: '0' }}
          >
            課程介紹
          </div>
          <div style={{ height: '50px' }}></div>
          <div
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '0px 156px',
              scrollBehavior: 'smooth',
              scrollPadding: '128px 0 0 0',
            }}
          >
            {/*//! 有氧 */}
            <ClassA />
            {/*//! 飛輪 */}
            <ClassB />
            {/*//! 綜合格鬥 */}
            <ClassC />
            {/*//! 懸吊 */}
            <ClassD />
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}
