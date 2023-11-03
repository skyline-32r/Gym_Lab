import { Box, Tabs, Tab } from '@mui/material'
// import MuiNavbar from '@/components/testing/MuiNavbar'
import MuiNavbar from '@/components/testing/MuiNavbar'
import SidebarTemplate from '@/components/member/sidebar-template'
import AccordionClass from '@/components/member/my-inperson-classes-page/accordionClass'
import { useState, useEffect, useContext } from 'react'
import { useActiveLink } from '@/context/active-link-context'
import Accordion from '@mui/material'
import AccordionSummary from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AuthContext from '@/context/auth-context'
import { useRouter } from 'next/router'

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

export default function Test() {
  const { setActiveLink } = useActiveLink()
  const { auth } = useContext(AuthContext)
  const router = useRouter()
  useEffect(() => {
    setActiveLink('my-inperson-classes')
  }, [])

  const [expanded, setExpanded] = useState(false)

  const [value, setValue] = useState(0)
  const [data, setData] = useState([])
  const [filteredData1, setFilteredData1] = useState([])
  const [filteredData2, setFilteredData2] = useState([])
  //! 顯示資料的路由
  useEffect(() => {
    fetch('http://localhost:3002/dashboard/class')
      .then((r) => r.json())
      .then((data) => {
        const filteredData1 = data.filter((item, i) => {
          return parseInt(item.class_date.slice(8, 10)) >= 25
        })
        setFilteredData1(filteredData1)

        setData(data)
        const filteredData2 = data.filter((item, i) => {
          return parseInt(item.class_date.slice(8, 10)) < 25
        })
        setFilteredData2(filteredData2)
      })
  }, [])
  // console.log('Looking for this')
  // console.log(data)

  //! 顯示資料的路由給刪除修改用的
  const reloadEnroll = () => {
    fetch('http://localhost:3002/dashboard/class')
      .then((r) => r.json())
      .then((data) => {
        setData(data)
        const filteredData1 = data.filter((item, i) => {
          return parseInt(item.class_date.slice(8, 10)) >= 25
        })
        setFilteredData1(filteredData1)

        setData(data)
        const filteredData2 = data.filter((item, i) => {
          return parseInt(item.class_date.slice(8, 10)) < 25
        })
        setFilteredData2(filteredData2)
      })
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  // console.log(data)
  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false)
  // }
  // console.log(class_date)

  return (
    <>
      <MuiNavbar />
      <SidebarTemplate>
        <Box
          sx={{
            width: '100%',
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          <Tabs
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
            }}
            onChange={handleChange}
            value={value}
            aria-label="Tabs where each tab needs to be selected manually"
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="已報名課程" />
            <Tab label="歷史課程" />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <Box>
              {filteredData1.map((v, i) => {
                {
                  console.log('Looking for this: ', v.branch_name)
                }

                return v ? (
                  <AccordionClass
                    key={i}
                    class_name={v.class_name}
                    instructor_name={v.instructor_name}
                    class_date={v.class_date}
                    time={v.time}
                    enroll_id={v.enroll_id}
                    reloadEnroll={reloadEnroll}
                    class_id={v.class_id}
                    data={data}
                    class_schedule_id={v.class_schedule_id}
                    branch_id={v.branch_id}
                    branch_name={v.branch_name}
                  />
                ) : (
                  ''
                )
              })}
              {/* {console.log(class_date)} */}
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Box>
              {filteredData2.map((v, i) => {
                {
                  console.log('Looking for this: ', v.branch_name)
                }

                return v ? (
                  <AccordionClass
                    key={i}
                    class_name={v.class_name}
                    instructor_name={v.instructor_name}
                    class_date={v.class_date}
                    time={v.time}
                    enroll_id={v.enroll_id}
                    reloadEnroll={reloadEnroll}
                    class_id={v.class_id}
                    data={data}
                    class_schedule_id={v.class_schedule_id}
                    branch_id={v.branch_id}
                    branch_name={v.branch_name}
                  />
                ) : (
                  ''
                )
              })}
            </Box>
          </CustomTabPanel>
        </Box>
      </SidebarTemplate>
    </>
  )
}
