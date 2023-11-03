import React from 'react'

export default function ClassImg({ imageSrc }) {
  return (
    <>
      <div>
        <div>
          <img src={imageSrc} alt="" style={{ width: '100%' }} />
        </div>
      </div>
    </>
  )
}
