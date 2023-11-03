import React from 'react'
import Btn from '@/components/in-person-classes/btn'
//! 有氧
export default function ClassA() {
  return (
    <>
      <div
        id="a"
        style={{
          display: 'flex',
        }}
      >
        <img
          src="/images/in-person-classes/classes/01.png"
          alt=""
          style={{ height: '634px' }}
        />
        <div
          style={{
            color: '#ffff',
            fontSize: '32px',
            padding: '100px 80px',
          }}
        >
          <div style={{ borderBottom: '1px #FF00B8 solid' }}>
            <div style={{ marginTop: '15px', marginBottom: '10px' }}>有氧</div>
          </div>
          <div
            style={{
              color: '#ffff',
              fontSize: '16px',
              marginTop: '30px',
            }}
          >
            實施有氧運動心肺運動訓練，出汗是人體調節體溫散熱方式。體溫升高時候、掌控調控體溫的下丘腦就會傳遞排汗的訊息給皮膚的汗腺，藉由排汗將熱量從皮膚蒸散並加速新陳代謝。在有氧運動中產生的熱能不大、散熱又快，所以不太會出汗。近年來「肌無力」的健康問題越來越被重視，人隨著年齡漸長，身體的心肺功能、肌肉量、骨質密度，生理機能會逐漸退化。
            <br />
            <br />
            現代人生活模式的改變，生理機能退化，並不是只會發生在老年人身上，反而現今更多的年輕人，因為運動量的不足，導致肌肉量的不足，引起許多的慢性疾病，適當的有氧運動除了可以增加心肺訓練功能，增加肌力，還可讓關節液潤滑關節，提供軟骨所需的營養，保護關節，因此在團體有氧運動課程中，有各式各樣的有氧運動課程，讓身體藉由規律的訓練，達到身體心肺、肌力、體能的改善。
          </div>
          <div
            style={{
              display: 'flex',
              color: '#ffff',
              fontSize: '18px',
              marginTop: '30px',
            }}
          >
            <div style={{ marginLeft: 'auto' }}>
              <Btn>
                <a
                  href="../in-person-classes/class-page"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  本月課表
                </a>
              </Btn>
            </div>
            <div>
              <Btn>教練介紹</Btn>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
