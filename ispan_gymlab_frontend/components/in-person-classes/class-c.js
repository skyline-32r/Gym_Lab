import React from 'react'
import Btn from '@/components/in-person-classes/btn'
//! 綜合格鬥
export default function ClassC() {
  return (
    <>
      <div
        id="c"
        style={{
          display: 'flex',
          marginTop: '100px',
        }}
      >
        <img
          src="/images/in-person-classes/classes/classC.png"
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
            <div style={{ marginTop: '15px', marginBottom: '10px' }}>
              綜合格鬥
            </div>
          </div>

          <div
            style={{
              color: '#ffff',
              fontSize: '18px',
              marginTop: '30px',
            }}
          >
            專注於手部動作與步伐運用的拳擊，和其他武術運動比起來相對單純，但仍舊是一種高度消耗體力的運動，因此後來也衍生出各種拳擊形式的高強度間歇運動，以及一般健身房常見的「拳擊有氧」課程。
            在方形的擂台空間內進行的拳擊比賽，以量級作為區分進行，男、女量級有著不同標準，除此之外拳擊比賽又可分為「職業拳擊」與「業餘拳擊」，兩者的比賽規則也有所不同。
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
      </div>
    </>
  )
}
