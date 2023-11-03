import { Box, Stack, Card, CardContent, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import FaceIcon from '@mui/icons-material/Face'
import ShowCourseRating from '../show-course-rating'
export default function CourseReviewCard({
  name,
  comment,
  courseRating,
  userPhoto,
  date,
}) {
  let newDate
  if (date) {
    newDate = date.substr(0, 10).split('-')
    const timeUnit = ['年', '月', '日']
    const combined = timeUnit.map((unit, idx) => {
      return newDate[idx] + timeUnit[idx]
    })
    newDate = combined.join(' ')
  }
  return (
    <Card
      sx={{
        backgroundColor: '#2F2F45',
        width: '373px',
        padding: '16px',
        color: 'white',
      }}
    >
      <CardContent>
        <Stack
          direction="column"
          spacing={1}
          sx={{
            display: 'flex',
            alignItems: 'start',
            marginBottom: '20px',
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: '64px',
                height: '64px',
                backgroundImage:
                  'linear-gradient(to right bottom, #29a4ac, #26b7c0, #21c9d5, #17ddea, #00f0ff)',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* <img src=""></img> */}

              {userPhoto ? (
                <img src={`images/member/photos/${userPhoto}`} />
              ) : (
                <FaceIcon
                  sx={{
                    color: 'black',
                    width: '32px',
                    height: '32px',
                  }}
                />
              )}
            </Box>
            {/* <Typography sx={{ fontSize: '30px' }}>{name}</Typography> */}
            <Stack direction="column">
              <Typography
                sx={{
                  fontSize: '23px',
                  lineHeight: '1.8rem',
                  letterSpacing: '0.1rem',
                }}
              >
                {name}
              </Typography>
              <ShowCourseRating courseRating={courseRating} fontSize="23px" />
              <Typography
                sx={{
                  fontSize: '18px',
                  lineHeight: '1.8rem',
                  letterSpacing: '0.1rem',
                }}
              >
                {newDate}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Typography
          sx={{
            marginBottom: '16px',
            fontSize: '23px',
            lineHeight: '1.8rem',
            letterSpacing: '0.1rem',
          }}
        >
          {comment ||
            '憑藉在健身領域十多年的經驗，我持有健美操、個人訓練和營養方面的認證，為您提供所需的知識和技能...'}
        </Typography>
        {/* <Typography
          sx={{
            fontWeight: 'bold',
            textDecoration: 'underline',
          }}
        >
          Show More
        </Typography> */}
      </CardContent>
    </Card>
  )
}
