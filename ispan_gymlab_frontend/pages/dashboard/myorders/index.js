import { useState, useEffect } from 'react'
import { Box, Tabs, Tab, Typography } from '@mui/material'
import MuiNavbar from '@/components/testing/MuiNavbar'
import AccordionOrder from '@/components/member/myorders/accordionOrder'
import SidebarTemplate from '@/components/member/sidebar-template'
import { useActiveLink } from '@/context/active-link-context'

function CustomTabPanel(props) {
  const { setActiveLink } = useActiveLink()
  useEffect(() => {
    setActiveLink('myorders')
  }, [])
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

export default function Tabs2() {
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])
  const [data4, setData4] = useState([])
  useEffect(() => {
    fetch('http://localhost:3002/cart/orders')
      .then((r) => r.json())
      .then((data) => {
        setData(data[0])
        setData1(data[1])
        setData2(data[2])
        setData3(data[3])
        setData4(data[4])
      })
  }, [])
  // console.log(data)

  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const [expanded, setExpanded] = useState(false)

  const handleChange2 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <>
      <MuiNavbar />
      <SidebarTemplate
        sx={{
          '@media (max-width: 600px)': {
            // display: 'none',
            width: '100%',
            padding: 0,
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
          }}
        >
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              '@media (max-width: 600px)': {
                width: '100%',
              },
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="inherit"
              indicatorColor="secondary"
            >
              <Tab label="進行中訂單" />
              <Tab label="已完成訂單" />
            </Tabs>
            <CustomTabPanel value={value} index={0}>
              {data &&
                data.map(
                  (
                    {
                      order_id,
                      order_date,
                      price,
                      order_status,
                      customer_name,
                      customer_phone,
                      address,
                      payment_method,
                    },
                    i
                  ) => {
                    if (order_status != 4) {
                      return (
                        <AccordionOrder
                          key={order_id}
                          id={order_id}
                          order_date={order_date}
                          price={price}
                          order_status={order_status}
                          customer_name={customer_name}
                          customer_phone={customer_phone}
                          address={address}
                          payment_method={payment_method}
                          data1={data1}
                          data2={data2}
                          data3={data3}
                          data4={data4}
                          handleChange2={handleChange2}
                          expanded={expanded}
                        />
                      )
                    }
                  }
                )}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              {data &&
                data.map(
                  (
                    {
                      order_id,
                      order_date,
                      price,
                      order_status,
                      customer_name,
                      customer_phone,
                      address,
                      payment_method,
                    },
                    i
                  ) => {
                    if (order_status == 4) {
                      return (
                        <AccordionOrder
                          key={order_id}
                          id={order_id}
                          order_date={order_date}
                          price={price}
                          order_status={order_status}
                          customer_name={customer_name}
                          customer_phone={customer_phone}
                          address={address}
                          payment_method={payment_method}
                          data1={data1}
                          data2={data2}
                          data3={data3}
                          data4={data4}
                          handleChange2={handleChange2}
                          expanded={expanded}
                        />
                      )
                    }
                  }
                )}
            </CustomTabPanel>
          </Box>
        </Box>
      </SidebarTemplate>
    </>
  )
}
