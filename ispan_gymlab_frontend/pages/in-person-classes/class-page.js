import MuiNavbar from '@/components/testing/MuiNavbar'
import styles from '@/styles/class.module.css'
import Footer from '@/components/footer/footer'
import ClassImg from '@/components/in-person-classes/classImg'
import Schedule from '@/components/in-person-classes/schedule'

export default function InPersonClasses() {
  return (
    <>
      <MuiNavbar />
      <div className={styles.body}>
        <div className={styles.bgc} style={{ height: '100%' }}>
          <div
            style={{
              backgroundImage: 'URL(/Images/in-person-classes/22.png)',
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
              paddingBottom: '50px',
            }}
          >
            <div
              className={styles.classesTitle}
              style={{ padding: '100px 0px', marginTop: '0' }}
            >
              課程介紹
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                // filter: 'drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.30))',
              }}
            >
              <div
                className={styles.glassContainer}
                style={{
                  display: 'inline-block',
                  paddingTop: '156px',
                  paddingBottom: '156px',
                  backgroundColor: 'rgba(200,200,200,0.1)',
                  boxShadow: '0px 0px 20px rgba(255,255,255,0.3)',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '0px 156px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      width: '1000px',
                    }}
                  >
                    <div style={{ width: '100%' }}>
                      <ClassImg imageSrc="/images/in-person-classes/05.webp"></ClassImg>
                    </div>

                    <div style={{ marginTop: '40px', fontSize: '32px' }}>
                      有氧
                    </div>
                    <div style={{ marginTop: '10px', fontSize: '20px' }}>
                      實施有氧運動心肺運動訓練，出汗是人體調節體溫散熱方式。體溫升高時候、掌控調控體溫的下丘腦就會傳遞排汗的訊息給皮膚的汗腺，藉由排汗將熱量從皮膚蒸散並加速新陳代謝。在有氧運動中產生的熱能不大、散熱又快，所以不太會出汗。
                      <br />
                      <br />
                      近年來「肌無力」的健康問題越來越被重視，人隨著年齡漸長，身體的心肺功能、肌肉量、骨質密度，生理機能會逐漸退化。
                      現代人生活模式的改變，生理機能退化，並不是只會發生在老年人身上，反而現今更多的年輕人，因為運動量的不足，導致肌肉量的不足，引起許多的慢性疾病，適當的有氧運動除了可以增加心肺訓練功能，增加肌力，還可讓關節液潤滑關節，提供軟骨所需的營養，保護關節，因此在團體有氧運動課程中，有各式各樣的有氧運動課程，讓身體藉由規律的訓練，達到身體心肺、肌力、體能的改善。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className={styles.classesTitle}
              style={{ padding: '100px 0px', marginTop: '0' }}
            >
              本月有氧課表
            </div>
            <div>
              <Schedule />
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}
