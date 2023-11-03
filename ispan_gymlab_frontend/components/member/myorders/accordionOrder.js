import React, { useEffect, useState } from 'react'
import style from '@/styles/member/myorders.module.css'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionOrderDetails from './accordionOrderDetails'
import { Box } from '@mui/material'

export default function AccordionOrder({
  id,
  order_date,
  price,
  order_status,
  customer_name,
  customer_phone,
  address,
  payment_method,
  data1,
  data2,
  data3,
  data4,
  handleChange2,
  expanded,
  user_id,
}) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let tot = 0
    data3 &&
      data3.map((v) => {
        if (v.order_id == id) {
          tot += parseInt(v.p)
        }
      })
    data4 &&
      data4.map((v) => {
        if (v.order_id == id) {
          tot += parseInt(v.v)
        }
      })
    setTotal(tot)
  }, [])
  return (
    <>
      <Accordion
        expanded={expanded === id}
        onChange={handleChange2(id)}
        sx={{ backgroundColor: '#F9F9F9' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'space-between',
                margin: '8px auto',
                width: '90%',
                '@media (max-width: 600px)': {
                  flexWarp: 'warp',
                  padding: 0,
                },
              }}
            >
              <Box style={{ display: 'flex' }}>
                <Box style={{ marginRight: '16px' }}>訂單編號</Box>
                <Box>{id}</Box>
              </Box>
              <Box style={{ display: 'flex' }}>
                <Box style={{ marginRight: '16px' }}>購買日期</Box>
                <Box>{`${order_date}`.slice(0, 10)}</Box>
              </Box>
              <Box>
                <Box>共{total}件商品</Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    '@media (max-width: 600px)': {
                      flexWrap: 'wrap',
                      padding: 0,
                    },
                  }}
                >
                  <Box sx={{ marginRight: '16px' }}>總計</Box>
                  <Box
                    sx={{
                      width: '120px',
                      '@media (max-width: 600px)': {
                        width: 'auto',
                      },
                    }}
                  >
                    {'NTD$ ' + parseInt(price).toLocaleString('us-EN')}
                  </Box>
                </Box>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  style={{
                    marginRight: '16px',
                    height: '16px',
                    width: '16px',
                    borderRadius: '50%',
                    backgroundColor:
                      order_status == 1
                        ? '#ff00b8'
                        : order_status == 2
                        ? '#9400D3'
                        : order_status == 3
                        ? '#00f0ff'
                        : '#140f2a',
                  }}
                ></Box>
                <Box>
                  {order_status == 1
                    ? '已下單'
                    : order_status == 2
                    ? '已出貨'
                    : order_status == 3
                    ? '已送達'
                    : '已完成'}
                </Box>
              </Box>
            </Box>
          </>
        </AccordionSummary>
        <AccordionDetails>
          <Box style={{ display: 'flex', marginLeft: '40px' }}>
            <Box
              // 照片家
              style={{
                width: '60px',
                margin: '16px',
              }}
            >
              圖片
            </Box>
            <Box
              style={{
                width: '90%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '16px',
              }}
            >
              <Box style={{ width: '60%' }}>商品名稱</Box>
              <Box style={{ width: '120px' }}>單價</Box>
              <Box style={{ width: '60px' }}>數量</Box>
              <Box style={{ width: '120px' }}>總價</Box>
              {order_status == 4 ? (
                <Box style={{ width: '120px' }}>評論商品</Box>
              ) : (
                ''
              )}
            </Box>
          </Box>
          {data1 &&
            data1.map(
              ({ order_id, product_name, amount, price, product_id }, i) => {
                if (order_id == id) {
                  return (
                    <AccordionOrderDetails
                      key={i}
                      product_name={product_name}
                      amount={amount}
                      price={price}
                      product_id={product_id}
                      order_status={order_status}
                    />
                  )
                }
              }
            )}
          {data2 &&
            data2.map(
              (
                { order_id, course_name, course_price, course_thumbnail },
                i
              ) => {
                if (order_id == id) {
                  return (
                    <AccordionOrderDetails
                      key={i}
                      course_name={course_name}
                      course_price={course_price}
                      course_thumbnail={course_thumbnail}
                      user_id={user_id}
                      order_status={order_status}
                    />
                  )
                }
              }
            )}

          <Box //線
            style={{
              height: ' 2px',
              borderBottom: '2px #140f2a solid',
              width: '100%',
              margin: '16px 0',
              display: 'flex',
              alignItems: 'center',
            }}
          ></Box>
          <Box className={style.orderdata}>
            <Box className={style.orderdatalist}>
              <Box className={style.orderdatatext}>收件人姓名</Box>
              <Box className={style.orderdatatext2}>{customer_name}</Box>
            </Box>
            <Box className={style.orderdatalist}>
              <Box className={style.orderdatatext}>收件人電話</Box>
              <Box className={style.orderdatatext2}>
                {`${customer_phone}`.replace(
                  /(\d{4})(\d{3})(\d{3})/,
                  '$1-$2-$3'
                )}
              </Box>
            </Box>
            <Box className={style.orderdatalist}>
              <Box className={style.orderdatatext}>收件地址</Box>
              <Box className={style.orderdatatext2}>{address}</Box>
            </Box>
            <Box className={style.orderdatalist}>
              <Box className={style.orderdatatext}>付款方式</Box>
              <Box className={style.orderdatatext2}>{payment_method}</Box>
            </Box>

            <Box className={style.orderdatalist}>
              <Box className={style.orderdatatext}>優惠券使用</Box>
              <Box className={style.orderdatatext2}>未使用</Box>
            </Box>
            <Box className={style.orderdatalist}>
              <Box className={style.orderdatatext}>運費</Box>
              <Box className={style.orderdatatext2}>VVIP 會員免運</Box>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
