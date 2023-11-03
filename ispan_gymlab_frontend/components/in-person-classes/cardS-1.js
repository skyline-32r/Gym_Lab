import React from 'react'

export default function CardS1({ children, imageSrc }) {
  return (
    <>
      {/* src="/public/images/in-person-classes/04.png" */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '20px',
        }}
      >
        <div
          style={{
            width: 226,
            height: 195,
          }}
        >
          <img
            src={imageSrc}
            alt=""
            border="5px"
            style={{
              borderColor: '#000',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div
          style={{
            textAlign: 'center',
            fontSize: '20px',
            color: '#000',
            margin: '10px',
            fontWeight: 'bold ',
          }}
        >
          {children}
        </div>
      </div>
    </>
  )
}
