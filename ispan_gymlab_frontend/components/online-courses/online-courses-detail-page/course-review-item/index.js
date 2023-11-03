import { Box, Stack, Card, CardContent, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import FaceIcon from '@mui/icons-material/Face'
import ShowCourseRating from '../show-course-rating'
export default function CourseReviewItem({
  name,
  comment,
  userPhoto,
  courseRating,
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
        width: '100%',
        padding: '16px',
        color: 'white',
        borderTop: '1px solid #525282',
        // borderBottom: '1px solid white',
        borderRadius: '0px',
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          sx={{
            display: 'flex',
            marginBottom: '24px',
          }}
        >
          <Box
            sx={{
              width: '56px',
              height: '56px',
              backgroundImage:
                'linear-gradient(to right bottom, #29a4ac, #26b7c0, #21c9d5, #17ddea, #00f0ff)',
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 'unset !important',
              marginRight: '16px !important',
            }}
          >
            {userPhoto ? (
              <img src={`images/member/photos/${userPhoto}`} />
            ) : (
              <FaceIcon
                sx={{
                  color: 'black',
                  width: '40px',
                  height: '40px',
                }}
              />
            )}
          </Box>
          <Stack direction="column">
            <Typography
              sx={{
                paddingLeft: '2px',
                fontSize: '23px',
                lineHeight: '1.8rem',
                letterSpacing: '0.1rem',
              }}
            >
              {name}
            </Typography>
            <Stack
              direction="row"
              sx={{
                alignItems: 'center',
              }}
            >
              <ShowCourseRating courseRating={courseRating} fontSize="23px" />
              <Typography
                component="span"
                sx={{
                  marginLeft: '8px',
                  lineHeight: 'unset',
                  fontSize: '23px',
                  lineHeight: '1.8rem',
                  letterSpacing: '0.1rem',
                }}
              >
                {newDate || 'wot'}
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
          {comment}
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
