import React from 'react'
import Btn from '@/components/in-person-classes/btn'
//! 飛輪
export default function ClassB() {
  return (
    <>
      <div
        id="b"
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
            <div style={{ marginTop: '15px', marginBottom: '10px' }}>飛輪</div>
          </div>

          <div
            style={{
              color: '#ffff',
              fontSize: '16px',
              marginTop: '30px',
            }}
          >
            學習正確的騎乘姿勢，聽音樂做踩踏由音樂節奏與姿勢變換來達到心肺.肌力.肌耐力的提升，強度初階適合各年齡層參與。
            <br />
            <br />
            室內飛輪車騎乘是在虛擬實境上，透過剎車片來控制阻力，模擬戶外單車爬坡路段，下坡路段，充分激發身體的運動細胞後，在消耗能量的同時達到減脂的目的，透過音樂訓練，雕塑大腿肌耐力及心肺功能的加強，並且使精力更加旺盛，將負面不好的情緒完全釋放出來，徹底的舒壓，是一項節奏性的運動，進而達到減脂、塑身的效果。
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
          src="/images/in-person-classes/classes/classB.png"
          alt=""
          style={{ height: '634px' }}
        />
      </div>
    </>
  )
}
