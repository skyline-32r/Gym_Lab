import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function NextVideoCard({
  courseName,
  courseInstructor,
  courseThumbnail,
  courseId,
  setCourseId,
}) {
  // const [ocid, setOcid] = useState('2')
  // const router = useRouter()
  // useEffect(() => {
  //   if (router.isReady) {
  //     setOcid(router.query.ocid)
  //   }
  // }, [router.isReady])
  console.log('course_id: ', courseId)
  return (
    <Link
      href={`/online-courses/${courseId}/course-video`}
      style={{
        textDecoration: 'none',
        color: 'white',
      }}
      onClick={() => setCourseId(courseId)}
    >
      <Card
        sx={{
          width: '256px',
          height: '260px',
          backgroundColor: '#2F2F45',
          marginBottom: '16px',
          marginX: '16px',
        }}
      >
        <CardActionArea
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <CardMedia
            component="img"
            src={courseThumbnail}
            sx={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          ></CardMedia>
          <CardContent>
            <Typography
              sx={{
                color: 'white',
                fontSize: '20px',
                marginBottom: '8px',
              }}
            >
              {courseName}
            </Typography>
            <Typography
              sx={{
                color: 'white',
                fontSize: '18px',
              }}
            >
              {courseInstructor}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}
