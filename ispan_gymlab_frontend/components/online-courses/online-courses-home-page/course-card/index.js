import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import styles from '@/styles/online-courses/home-page.module.css'

export default function CourseCard({
  courseThumbnail,
  coursePrice,
  courseInstructor,
  courseName,
  avgCourseRating,
}) {
  return (
    <Card
      sx={{
        width: '196px',
        height: '282px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#232334',
        color: 'white',
        cursor: 'pointer',
        transition: 'scale 0.2s ease-in-out',
        '&:hover': {
          scale: '1.1',
        },
        '.MuiCardContent-root': {
          backgroundColor: 'unset',
          paddingX: '0',
          paddingTop: '16px',
          paddingBottom: '4px !important',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          // flex: '1',
        },
      }}
    >
      <CardMedia
        component="img"
        width="100%"
        height="109"
        image={courseThumbnail}
        sx={{
          objectFit: 'fill',
        }}
      ></CardMedia>
      <CardContent
      // sx={{
      //   backgroundColor: 'unset',
      //   paddingX: '0',
      //   paddingTop: '16px',
      // }}
      >
        <Box className={styles.coursePriceContainer}>
          <Typography sx={{ color: 'black', fontWeight: 'bolder' }}>
            ${coursePrice}
          </Typography>
        </Box>
        <Box
          sx={{
            paddingX: '8px',
            paddingTop: '16px',
            flex: '1',
          }}
        >
          <Typography
            sx={{
              fontSize: '17px',
              letterSpacing: '0.01rem',
              width: '100%',
              // height: '50px',
              // textOverflow: 'ellipsis',
              // whiteSpace: 'nowrap',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '2',
            }}
          >
            {courseName}
          </Typography>
        </Box>
        <Box>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ paddingX: '8px' }}
          >
            <Typography sx={{ fontSize: '16px' }}>
              {courseInstructor}
            </Typography>
            <Stack
              direction="row"
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <StarIcon sx={{ color: 'aqua', fontSize: '18px' }} />
              <Typography sx={{ fontSize: '16px' }}>
                {avgCourseRating ? (+avgCourseRating).toFixed(1) : 0}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  )
}
