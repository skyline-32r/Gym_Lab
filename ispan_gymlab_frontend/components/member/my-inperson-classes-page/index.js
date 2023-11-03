import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
// import { useState, useEffect } from 'react'

export default function AccessibleTabs2() {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('http://localhost:3002/dashboard/class')
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setData(data)
  //     })
  // }, [])
  // console.log(data)

  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      {/* {} */}
      <Tabs
        sx={{
          paddingLeft: '10%',
        }}
        onChange={handleChange}
        value={value}
        aria-label="Tabs where each tab needs to be selected manually"
      >
        <Tab sx={{ color: 'white' }} label="已報名課程" />
        <Tab sx={{ color: 'white' }} label="歷史課程" />
      </Tabs>
      <div
        style={{
          // width: '1000px',
          // marginTop: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          //線
          style={{
            height: ' 2px',
            borderBottom: '2px #00f0ff solid',
            // width: '1000px',
            width: '100%',
            marginTop: '10px',
            display: 'flex',
            // justifyContent: 'center',
            alignItems: 'center',
          }}
        ></div>
        <div
          //白底
          style={{
            marginTop: '10px',
            // width: '835px',
            width: '80%',
            height: '120px',
            backgroundColor: '#F9F9F9',
            borderRadius: '5px',
          }}
        >
          <div style={{ padding: '20px' }}>
            <div
              style={{
                color: 'black',
                display: 'flex',
                justifyContent: 'space-between',
                justifyContent: 'flex-start',
              }}
            >
              <div
                // 照片家
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src="/images/in-person-classes/classes/05.webp"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div style={{ margin: 'auto' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <div style={{ marginRight: '200px' }}>20230125</div>
                  <div>10:00-12:00</div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <div style={{ marginRight: '200px' }}>有氧入門</div>
                  <div>戴資穎</div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ExpandMoreRoundedIcon
                  style={{ color: 'black', fontSize: '30px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}
