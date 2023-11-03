import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material'

export default function NextVideoCard() {
  return (
    <Card
      sx={{
        width: '256px',
        height: '260px',
        backgroundColor: '#2F2F45',
        marginBottom: '16px',
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
          src="/images/online-courses/course-video/_2.png"
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
            課程名稱
          </Typography>
          <Typography
            sx={{
              color: 'white',
              fontSize: '18px',
            }}
          >
            教練姓名
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
