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
import NextVideoCard from './next-video-card'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
// import Sidebar from './sidebar'
import Sidebar from '@/components/member/sidebar'
// import Sidebar from '@/pages/online-courses/my-online-courses/sidebar'
// import MainContent from './main-content'
import styles from '@/styles/member/profile.module.css'
import Btn1 from '@/components/btn1/index'
import EditIcon from '@/public/images/member/editIcon'
import InputAdornment from '@mui/material/InputAdornment'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
// import Editstyle from '@/styles/member/edit.module.css'
import dayjs from 'dayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Glass from '@/components/member/glass'
import { useActiveLink } from '@/context/active-link-context'
import AuthContext from '@/context/auth-context'
import HomeArea from '@/components/member/homearea-profile-edit/TWZipCode'
import Swal from 'sweetalert2'
import router from 'next/router'

export default function EditInfo() {
  const { auth, setAuth } = useContext(AuthContext)
  const { setActiveLink } = useActiveLink()
  const [userData, setUserData] = useState([])
  const [town, setTown] = useState('')
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
          setFormData(data)
        })
      setFormData(Datauser)
    }
  }, [auth])
  useEffect(() => {
    if (typeof localStorage != undefined && !localStorage.getItem('auth')) {
      router.push('/member/login')
    }
  }, [])
  console.log('userData ', userData)
  console.log(auth)
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

  const handlevalues = (e) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value }
    if (e.target.name == 'town') {
      setFormData({
        ...newFormData,
        home_area: country0[newFormData.country] + e.target.value,
      })
    } else {
      setFormData(newFormData)
    }
    // setFormData({...formData, home_area: country0[e.target.value] + town})
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
    // '.MuiSelect-icon': {
    //   fill: 'white',
    // },
  })

  const [open, setOpen] = useState(false)
  const [defaultVal, setDefaultVal] = useState('')

  const [formData, setFormData] = useState({})
  const Datauser = {
    name: userData.name,
    gender: userData.gender,
    birthday: userData.birthday,
    email: userData.email,

    password: userData.password,
    address: userData.address,
    phone: userData.phone,
  }
  const [date, setDate] = useState(dayjs(formData.birthday))
  // console.log(userData.name)
  // console.log(formData.name)
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }
  console.log(formData.country)
  console.log(formData.town)
  const [selectedDate, setSelectedDate] = useState('1970/01/01')

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }
  const handleChanges = (e) => {
    console.log('handle change')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleChangeDate = (e) => {
    // setDate(dayjs(e.target.value))
    console.log('E', e)
    setFormData({ ...formData, birthday: `${e.$y}-${e.$M + 1}-${e.$D}` })
  }
  console.log('formData ', formData)

  const handleSubmit = () => {
    console.log('handle submit formdata: ', formData)
    console.log(formData)
    fetch('http://localhost:3002/dashboard/profile/edit', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((result) => {
        localStorage.setItem('auth', result.accessToken)
        setAuth({ ...auth, token: result.accessToken })
        if (result.msg === '修改成功') {
          Swal.fire({ icon: 'success', text: result.msg })
          router.push('/dashboard/profile')
        } else {
          Swal.fire({ icon: 'error', text: result.msg })
        }
      })
  }
  return (
    <>
      <MuiNavbar />

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
                  name="name"
                  sx={{
                    width: '100%',
                    backgroundColor: '#EFEDED',
                    borderRadius: '5px',
                  }}
                  // defaultValue={'姓名'}
                  value={formData.name}
                  onChange={handleChanges}
                  // placeholder='姓名'
                  // label="姓名"

                  // InputProps={{ readOnly: true }}
                ></TextField>
                {/* <Glass> */}
                <Stack
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: '20px',
                  }}
                >
                  <UDMSelect
                    value={formData.gender}
                    onChange={handleChanges}
                    displayEmpty
                    name="gender"
                  >
                    <MenuItem value="" disabled>
                      <em>性別</em>
                    </MenuItem>
                    <MenuItem value="male">男</MenuItem>
                    <MenuItem value="female">女</MenuItem>
                    <MenuItem value="private">不公開</MenuItem>
                  </UDMSelect>

                  {/* <TextField
                      sx={{
                        width: '100%',
                        backgroundColor: '#EFEDED',
                        borderRadius: '5px',
                      }}
                      defaultValue={'生日'}
                      // label="Read Only"
                      InputProps={{ readOnly: true }}
                    ></TextField> */}

                  <DatePicker
                    label="生日"
                    name="birthday"
                    value={dayjs(formData.birthday)}
                    onChange={handleChangeDate}
                    format="YYYY/MM/DD"
                    open={open}
                    onOpen={() => {
                      setOpen(true)
                      // setDefaultVal(dayjs('1970-01-01'))
                    }}
                    onClose={() => setOpen(false)}
                    sx={{
                      width: '100%',
                      borderRadius: '5px',
                      backgroundColor: 'white',
                      '.MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                      },
                    }}
                    // slotProps={{
                    //     textField:{
                    //       helperText: 'MM/DD/YYYY',
                    //     },
                    //   }}
                    // value={dayjs(selectedDate)}
                    // value={defaultVal}
                    // defaultValue={defaultVal}
                  />
                </Stack>
                {/* </Glass> */}
                <TextField
                  sx={{
                    width: '100%',
                    backgroundColor: '#EFEDED',
                    borderRadius: '5px',
                  }}
                  // defaultValue={'電子信箱'}
                  value={formData.email}
                  name="email"
                  // label="Read Only"
                  // onChange={handleChanges}
                  InputProps={{
                    readOnly: true,
                    // endAdornment: (
                    //   <InputAdornment position="end">
                    //     <Link href="./email-verify">
                    //       <EditIcon />
                    //     </Link>
                    //   </InputAdornment>
                    // ),
                  }}
                ></TextField>

                <TextField
                  sx={{
                    width: '100%',
                    backgroundColor: '#EFEDED',
                    borderRadius: '5px',
                  }}
                  // defaultValue={'密碼'}
                  value={formData.password}
                  name="password"
                  type="password"
                  // label="Read Only"
                  InputProps={{
                    readOnly: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Link href="../password-edit">
                          <EditIcon />
                        </Link>
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                {formData.town && (
                  <HomeArea
                    // errortext1={errors.country}
                    // errortext2={errors.town}
                    handleFieldChange={handlevalues}
                    value1={formData.country}
                    value2={formData.town}
                  />
                )}
                <TextField
                  sx={{
                    width: '100%',
                    backgroundColor: '#EFEDED',
                    borderRadius: '5px',
                  }}
                  // defaultValue={'地址'}
                  value={formData.address}
                  onChange={handleChanges}
                  name="address"
                  // label="Read Only"
                  // InputProps={{ readOnly: true }}
                ></TextField>
                {/* <TextField
                  sx={{
                    width: '100%',
                    backgroundColor: '#EFEDED',
                    borderRadius: '5px',
                  }}
                  // defaultValue={'手機'}
                  value={formData.phone}
                  // label="Read Only"
                  InputProps={{
                    readOnly: true,
                    // endAdornment: (
                    //   <InputAdornment position="end">
                    //     <Link href="#">
                    //       <EditIcon />
                    //     </Link>
                    //   </InputAdornment>
                    // ),
                  }}
                ></TextField> */}
                <Stack
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    gap: '40px',
                  }}
                >
                  <Btn1
                    // style={{ type: 'button' }}
                    width="50%"
                    margin="0"
                    fonzSize="24px"
                  >
                    <Link
                      href="/dashboard/profile"
                      style={{
                        width: '100%',
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      取消
                    </Link>
                  </Btn1>
                  <Btn1
                    // style={{ type: 'button' }}
                    width="50%"
                    margin="0"
                    fonzSize="24px"
                    onClick={handleSubmit}
                  >
                    {/* <Link
                      href="../profile"
                      style={{
                        width: '100%',
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    > */}
                    確定
                    {/* </Link> */}
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
