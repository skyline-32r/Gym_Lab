import {
  Box,
  Stack,
  TextField,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  styled,
} from '@mui/material'
import MuiNavbar from '@/components/testing/MuiNavbar'
// import NextVideoCard from './next-video-card'
// import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
// import Sidebar from './sidebar'
import Sidebar from '@/components/member/sidebar'
// import Sidebar from '@/pages/online-courses/my-online-courses/sidebar'
// import MainContent from './main-content'
import styles from '@/styles/member/profile.module.css'
import Btn1 from '@/components/btn1/index'
import { useState, useEffect, useContext } from 'react'
import dayjs from 'dayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Link from 'next/link'
import { useActiveLink } from '@/context/active-link-context'
import AuthContext from '@/context/auth-context'
import HomeArea from '@/components/member/homearea-profile/TWZipCode'
import { parseActionCodeURL } from 'firebase/auth'
import { useRouter } from 'next/router'
// import router from 'next/router'

export default function Info() {
  // const storageData =
  //   typeof window !== 'undefined' ? localStorage.getItem(localKey) : null
 const router = useRouter()
  const { auth, setAuth } = useContext(AuthContext)

  const [gender, setGender] = useState('')
  const [userData, setUserData] = useState([])
  const { setActiveLink } = useActiveLink()

  const [formData, setFormData] = useState({
    ...userData,
  })
  const country0 = [
    '基隆市',
    '臺北市',
    '新北市',
    '宜蘭縣',
    '新竹市',
    '新竹縣',
    '桃園市',
    '苗栗縣',
    '臺中市',
    '彰化縣',
    '南投縣',
    '嘉義市',
    '嘉義縣',
    '雲林縣',
    '臺南市',
    '高雄市',
    '屏東縣',
    '臺東縣',
    '花蓮縣',
    '金門縣',
    '連江縣',
    '澎湖縣',
  ]
  useEffect(() => {
    if (typeof localStorage != undefined && !localStorage.getItem('auth')) {
      router.push('/member/login')
    }
    // if (auth.token == '') {
    //   router.push('/member/login')
    // }
    if (userData.home_area) {
      // console.log(userData.home_area)
      const findCountry = userData.home_area
      const findCountryVal = findCountry.slice(0, 3)
      const countryIndex = country0.findIndex((area) =>
        area.endsWith(findCountryVal)
      )
      console.log(findCountryVal)
      console.log(countryIndex)
      const town = findCountry.slice(3)
      setFormData({ ...userData, country: countryIndex, town: town })
    }
  }, [userData])
  console.log('formData:', formData)
  // useEffect(() => {
  //   setActiveLink('info')
  //   setAuth({
  //     id: '',
  //     email: '',
  //     nickname: 'John',
  //     token: localStorage.getItem('auth'),
  //   })

  //   // fetch('http://localhost:3002/dashboard/profile', {
  //   //   headers: { Authorization: 'Bearer ' + auth },
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((data) => setUserData(data))
  // }, [])
  // console.log('auth2: ' ,auth)
  console.log('userData: ', userData)

  useEffect(() => {
    setActiveLink('info')
    if (auth.token) {
      console.log(auth.token)
      console.log(auth)
      fetch('http://localhost:3002/dashboard/profile', {
        headers: { Authorization: 'Bearer ' + auth.token },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserData(data)
        })
    }
  }, [auth])
  // console.log(auth)
  // useEffect(() => {
  //   fetch('http://localhost:3002/dashboard/profileData', {
  //     method: 'POST',
  //     body: '',
  //     headers: { Authorization: 'Bearer ' + auth.token },
  //     })
  //     .then(r=>r.json())
  //     .then(output=> {
  //       console.log("output.data ",output.data)
  //       setFormData(output.data)
  //     })
  // }, [])

  const country = formData?.home_area?.slice(0, 3)
  const town = formData?.home_area?.slice(3)
  console.log('town: ', town)
  const handleChange = (event) => {
    setGender(event.target.value)
  }

  const UDMSelect = styled(Select)({
    width: '100%',
    backgroundColor: '#EFEDED',
    // height: '36px',
    padding: '0px',
    color: 'black',
    borderRadius: '5px',
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '.MuiPaper-root.MuiPopover-paaper.MuiMenu.paper': {
      borderRadius: 'unset',
    },
    'MuiSelect-icon': {
      fill: 'white',
    },
  })

  const handlevalues = (e) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value }
    setFormData(newFormData)
  }

  return (
    <>
      <MuiNavbar />
      {/* <Box
        sx={{
          position: 'fixed',
          height: '100vh',
          right: '0',
          left: '0',
          backgroundColor: '#0F172A',
          zIndex: '-3',
        }}
      /> */}
      <Box
        sx={{
          backgroundColor: '#0F172A',
          color: 'white',
          // marginTop: '64px',
          // paddingTop: '60px',
          paddingRight: '156px',
          minHeight: '100vh',
          // backgroundColor: 'pink',
          // justifyContent: 'space-between',
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          sx={{
            height: '100%',
          }}
        >
          <Sidebar />
          {/* <Box component='form' p={0} sx={{width:'100%'}}><TextField></TextField></Box> */}
          {/* <MainContent /> */}
          <Box
            flex={1}
            p={2}
            // bgcolor="lightcoral"
            sx={{
              color: 'white',
              minHeight: 'calc(100vh - 60px)',
            }}
          >
            <Box className={styles.listContainer}>
              {/* <Stack
                direction="row"
                sx={{ width: '100%', flexWrap: 'wrap', gap: '32px' }}
              > */}
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '25px',
                }}
                component="form"
                onSubmit={(e) => e.preventDefault()}
              >
                <TextField
                  sx={{
                    width: '100%',
                    backgroundColor: '#EFEDED',
                    borderRadius: '5px',
                  }}
                  defaultValue={'姓名'}
                  // placeholder='姓名'
                  // label="Read Only"
                  // label="姓名"
                  InputProps={{ readOnly: true }}
                  value={userData.name}
                ></TextField>
                <Stack
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: '20px',
                    border: 'none',
                  }}
                >
                  <UDMSelect
                    defaultValue={'性別'}
                    value={userData.gender}
                    onChange={handleChange}
                    displayEmpty
                    readOnly
                  >
                    <MenuItem value="">
                      <em>性別</em>
                    </MenuItem>
                    <MenuItem value="male">男</MenuItem>
                    <MenuItem value="female">女</MenuItem>
                    <MenuItem value="private">不公開</MenuItem>
                  </UDMSelect>
                  <DatePicker
                    readOnly
                    label="生日"
                    format="YYYY/MM/DD"
                    value={dayjs(userData.birthday)}
                    sx={{
                      width: '100%',
                      borderRadius: '5px',
                      backgroundColor: 'white',
                      '.MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                      },
                    }}
                    defaultValue={dayjs('1970-01-01')}
                  />
                </Stack>
                <TextField
                  sx={{
                    width: '100%',
                    backgroundColor: '#EFEDED',
                    borderRadius: '5px',
                  }}
                  defaultValue={'電子信箱'}
                  // label='電子信箱'
                  value={userData.email}
                  // label="Read Only"
                  InputProps={{ readOnly: true }}
                ></TextField>
                <TextField
                  sx={{
                    width: '100%',
                    backgroundColor: '#EFEDED',
                    borderRadius: '5px',
                  }}
                  type="password"
                  defaultValue={'密碼'}
                  // label='密碼'
                  value={userData.password}
                  // label="Read Only"
                  InputProps={{ readOnly: true }}
                  // InputLabelProps={{color:'red'}}
                ></TextField>
                {console.log(formData.country)}
                {console.log(formData.town)}
                {formData?.home_area && country && town && (
                  <HomeArea
                    // errortext1={errors.country}
                    // errortext2={errors.town}
                    handleFieldChange={handlevalues}
                    // value1={formData.country}
                    // value2={formData.town}
                    value1={country}
                    value2={town}
                  />
                )}
                <TextField
                  sx={{
                    width: '100%',
                    backgroundColor: '#EFEDED',
                    borderRadius: '5px',
                  }}
                  defaultValue={'地址'}
                  // label="地址"
                  value={userData.address}
                  // label="Read Only"
                  InputProps={{ readOnly: true }}
                ></TextField>
                {/* <TextField
                  sx={{
                    width: '100%',
                    backgroundColor: '#EFEDED',
                    borderRadius: '5px',
                  }}
                  defaultValue={'手機'}
                  // label='手機'
                  value={userData.phone}
                  // label="Read Only"
                  InputProps={{ readOnly: true }}
                ></TextField> */}
                <Stack
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Btn1
                    // style={{ type: 'button' }}
                    width="50%"
                    margin="0"
                    fonzSize="24px"
                  >
                    <Link
                      href="./profile/edit"
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        width: '100%',
                      }}
                    >
                      修改
                    </Link>
                  </Btn1>
                </Stack>
              </Box>
              {/* </Stack> */}
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  )
}
