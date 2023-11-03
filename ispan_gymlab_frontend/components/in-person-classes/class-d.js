import React from 'react'
import Btn from '@/components/in-person-classes/btn'
//! 懸吊
export default function ClassD() {
  return (
    <>
      <div
        id="d"
        style={{
          display: 'flex',
          marginTop: '100px',
        }}
      >
        <div
          style={{
            color: '#ffff',
            fontSize: '32px',
            padding: '100px 100px',
          }}
        >
          <div style={{ borderBottom: '1px #FF00B8 solid' }}>
            <div style={{ marginTop: '15px', marginBottom: '10px' }}>懸吊</div>
          </div>

          <div
            style={{
              color: '#ffff',
              fontSize: '16px',
              marginTop: '30px',
            }}
          >
            TRX是懸吊式阻抗訓練（Total Body Resistance
            Exercise）的簡稱，最早為美國海豹突擊隊受訓時所用的一套運動，是一種全身性的肌力訓練，利用體重作為阻力來進行，因此運動的強度也能夠透過傾斜角度和姿勢來做調整，靈活度相當高。
            <br />
            <br />
            除了可以鍛練到全身肌群外，TRX的繩索也會幫助核心穩定以及培養絕佳平衡感。本篇整理TRX的三大優點特色以及幾項必做的基本動作，帶你一起認識這項讓超模、明星們都風靡的TRX懸吊運動！
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
              <Btn>本月課表</Btn>
            </div>
            <div>
              <Btn>教練介紹</Btn>
            </div>
          </div>
        </div>
        <img
          src="/images/in-person-classes/classes/classD.png"
          alt=""
          style={{ height: '634px' }}
        />
      </div>
    </>
  )
}
