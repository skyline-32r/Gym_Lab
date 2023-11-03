import {
  Box,
  Stack,
  Typography,
  Card,
  CardContent,
  Button,
  CardActions,
  CardMedia,
  styled,
  TextField,
} from '@mui/material'
import { useState, useEffect, useRef } from 'react'
import styles from '@/styles/online-courses/home-page.module.css'
import CourseCard from '../course-card'
import RatingFilterOption from './rating-filter-option'
import DurationFilterOption from './duration-filter-option'
import CourseCategoryFilterOption from './course-category-filter-option'
import PriceFilterTextField from './price-filter-textfield'
import SearchBar from '@/pages/online-courses/my-online-courses/main-content/search-bar'
import Link from 'next/link'
import StarIcon from '@mui/icons-material/Star'
// import { StarIcon, KeyboardArrowDownIcon } from '@mui/icons-material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

import MinDistSlider from './min-dist-Slider'
import CourseSortMenu from './course-sort-menu'
import { set } from 'lodash'
import BasicPagination from '../../pagination'

const FilterButton = styled(Button)({
  width: '122px',
  height: '76px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#2F2F45',
  color: 'white',
  borderRadius: 'unset',
  '&:hover': {
    color: 'white',
    backgroundColor: '#3E3E5C',
  },
})

const PaginationButton = styled(Button)({
  width: '64px',
  height: '64px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#33334C',
  color: 'white',
  borderRadius: '2px',
  '&:hover': {
    backgroundColor: '#33334C',
    color: '#FF00B8',
    textShadow:
      '4px 0px 12px #FF00B8, -4px 0px 12px #FF00B8, 0px 4px 12px #FF00B8, 0px -4px 12px #FF00B8',
  },
})

export default function AllCourseSection() {
  const [coursesData, setCoursesData] = useState([])
  // const coursesDataSlice = coursesData?.slice(0, 15)
  const [ratingFilter, setRatingFilter] = useState(0)
  const [durationLowerBound, setDurationLoweBoundFilter] = useState(0)
  const [durationUpperBound, setDurationUpperBoundFilter] = useState(0)
  const [filterSettings, setFilterSettings] = useState({
    minRatingFilter: '',
    durationLowerBounds: [],
    durationUpperBounds: [],
    courseCategoriesId: [],
    priceLowerBound: '',
    priceUpperBound: '',
  })
  const [sortSetting, setSortSetting] = useState('mostPopular')
  const [searchCourse, setSearchCourse] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [priceLBInput, setPriceLBInput] = useState('')
  const [priceUBInput, setPriceUBInput] = useState('')
  const courseRatingsArr = [4, 3, 2, 1]
  const courseDurationsArr = [0, 5, 10, 15, 20, 999]
  const [page, setPage] = useState(1)
  // Course categories: 1. 街頭健身, 2. 重量訓練, 3. 瑜伽, 4. 高强度健歇訓練
  const courseCategoriesArr = ['街頭健身', '重量訓練', '瑜伽', '高强度健歇訓練']

  useEffect(() => {
    const queryString =
      '?' +
      new URLSearchParams(filterSettings).toString() +
      `&sortSetting=${sortSetting}` +
      `&searchCourse=${searchCourse}` +
      `&page=${page}`
    console.log(queryString)
    fetch(`http://localhost:3002/online-courses${queryString}`)
      .then((res) => res.json())
      .then((data) => setCoursesData(data))
    console.log('useeffect')
  }, [filterSettings, sortSetting, searchCourse, page])

  console.log(filterSettings)
  console.log(coursesData)
  return (
    <Box sx={{ paddingY: '80px', paddingX: '156px', color: 'white' }}>
      <Typography
        sx={{
          fontSize: '67px',
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        所有課程
      </Typography>
      <Box sx={{ marginBottom: '32px' }}>
        <Stack>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              marginBottom: '16px',
              alignItems: 'center',
              marginLeft: 'auto',
            }}
          >
            {/* <FilterButton>
              <Typography>篩選</Typography>
            </FilterButton> */}
            <Button
              id="basic-button"
              sx={{
                color: 'white',
                width: '100%',
                padding: 'unset',
                display: 'flex',
                width: '134px',
                height: '52px',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#2F2F45',
                padding: '16px',
                borderRadius: 'unset',
                border: '1px solid #525282',

                '&:hover': {
                  color: 'white',
                  backgroundColor: '#3E3E5C',
                },
              }}
              onClick={() => {
                setFilterSettings({
                  minRatingFilter: '',
                  durationLowerBounds: [],
                  durationUpperBounds: [],
                  courseCategoriesId: [],
                  priceLowerBound: '',
                  priceUpperBound: '',
                })
                setSortSetting('mostPopular')
                setSearchCourse('')
                setSearchTerm('')
                setPriceLBInput('')
                setPriceUBInput('')
              }}
            >
              <Typography
                sx={{
                  fontWeight: 'bold',
                }}
              >
                清除篩選條件
              </Typography>
            </Button>
            <CourseSortMenu
              sortSetting={sortSetting}
              setSortSetting={setSortSetting}
            />

            <SearchBar
              searchCourse={searchCourse}
              setSearchCourse={setSearchCourse}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setPage={setPage}
            ></SearchBar>
          </Stack>
        </Stack>
        <Stack direction="row">
          <Stack sx={{ width: '336px', marginRight: '32px' }}>
            <Stack>
              <Box
                sx={{
                  width: '100%',
                  backgroundColor: '#2F2F45',
                  padding: '16px',
                  border: '1px solid #525282',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '23px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                  }}
                >
                  星星評分
                </Typography>
                <Stack>
                  {courseRatingsArr.map((minRating, idx) => (
                    <RatingFilterOption
                      key={idx}
                      minRating={minRating}
                      minRatingFilter={filterSettings.minRatingFilter}
                      setFilterSettings={setFilterSettings}
                      setPage={setPage}
                    ></RatingFilterOption>
                  ))}
                </Stack>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  backgroundColor: '#2F2F45',
                  padding: '16px',
                  border: '1px solid #525282',
                }}
              >
                <Stack>
                  <Typography
                    sx={{
                      fontSize: '23px',
                      fontWeight: 'bold',
                    }}
                  >
                    價格
                  </Typography>
                  {/* <MinDistSlider /> */}
                  <Stack
                    direction="row"
                    justifyContent="space-around"
                    spacing={3}
                    sx={{
                      marginY: '16px',
                    }}
                  >
                    {/* <Box
                      sx={{
                        border: '1px solid #999',
                        padding: '8px',
                        width: '112px',
                      }}
                    > */}
                    <PriceFilterTextField
                      label="下限"
                      priceFilter="priceLowerBound"
                      price={filterSettings.priceLowerBound}
                      setFilterSettings={setFilterSettings}
                      inputText={priceLBInput}
                      setInputText={setPriceLBInput}
                      setPage={setPage}
                    />
                    {/* <Typography>$下限：</Typography> */}
                    {/* </Box> */}
                    {/* <Box
                      sx={{
                        border: '1px solid #999',
                        padding: '8px',
                        width: '112px',
                      }}
                    > */}
                    <PriceFilterTextField
                      label="上限"
                      priceFilter="priceUpperBound"
                      price={filterSettings.priceUpperBound}
                      setFilterSettings={setFilterSettings}
                      inputText={priceUBInput}
                      setInputText={setPriceUBInput}
                    />
                    {/* <Typography>$上限：</Typography> */}
                    {/* </Box> */}
                  </Stack>
                </Stack>
              </Box>
            </Stack>
            <Box
              sx={{
                width: '100%',
                backgroundColor: '#2F2F45',
                padding: '16px',
                border: '1px solid #525282',
              }}
            >
              <Typography
                sx={{
                  fontSize: '23px',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                }}
              >
                影片長度
              </Typography>
              <Stack>
                {courseDurationsArr.map((duration, idx) => {
                  if (idx < courseDurationsArr.length - 1) {
                    const durationLowerBound = duration
                    const durationUpperBound = courseDurationsArr[idx + 1]

                    return (
                      <DurationFilterOption
                        key={idx}
                        durationLowerBound={durationLowerBound}
                        durationUpperBound={durationUpperBound}
                        filterSettings={filterSettings}
                        setFilterSettings={setFilterSettings}
                        setPage={setPage}
                      />
                    )
                  }
                  return
                })}
              </Stack>
            </Box>
            <Box
              sx={{
                width: '100%',
                backgroundColor: '#2F2F45',
                padding: '16px',
                border: '1px solid #525282',
              }}
            >
              <Typography
                sx={{
                  fontSize: '23px',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                }}
              >
                課程類別
              </Typography>
              <Stack>
                {courseCategoriesArr.map((courseCategory, idx) => {
                  return (
                    <CourseCategoryFilterOption
                      key={idx}
                      courseCategory={courseCategory}
                      courseCategoryId={idx + 1}
                      filterSettings={filterSettings}
                      setFilterSettings={setFilterSettings}
                      setPage={setPage}
                    />
                  )
                })}
              </Stack>
            </Box>
          </Stack>
          <Box className={styles.courseListContainer}>
            <Stack
              direction="row"
              sx={{
                width: '100%',
                // justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '40px',
              }}
            >
              {coursesData?.rows?.map((course, idx) => {
                return (
                  <Link
                    key={course['course_id']}
                    href={`/online-courses/${course.course_id}`}
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <CourseCard
                      courseName={course['course_name']}
                      courseThumbnail={course['course_thumbnail']}
                      coursePrice={course['course_price']}
                      courseInstructor={course['instructor_name']}
                      avgCourseRating={course['avg_course_rating']}
                    />
                  </Link>
                )
              })}
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <BasicPagination
          page={page}
          setPage={setPage}
          totalPages={coursesData.totalPages}
        />
      </Box>
      <Box
        sx={{
          height: '20px',
          marginBottom: '10px',
        }}
      ></Box>
    </Box>
  )
}
