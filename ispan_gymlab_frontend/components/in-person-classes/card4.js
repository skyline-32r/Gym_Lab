import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import styles from '@/styles/class.module.css'

export default function ActionAreaCard() {
  return (
    <Card
      className={styles.classesCard}
      sx={{ bgcolor: 'none', maxWidth: 345, height: 527 }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ m: 2, width: '310px', height: '280px' }}
          component="img"
          // height="280"
          // width="100"
          image="/images/in-person-classes/001.jpg"
          alt=""
        />
        <CardContent sx={{ height: 100, mt: 0 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: '#FFFFFF', height: 20 }}
          >
            懸吊
          </Typography>
          <Typography variant="body2" sx={{ color: '#FFFFFF', mt: 5 }}>
            除了可以鍛練到全身肌群外，TRX的繩索也會幫助核心穩定以及培養絕佳平衡感。
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#FFFFFF', mt: '30px', textAlign: 'right' }}
          >
            了解更多...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
// color="text.secondary"
// marginTop: '-15px',
