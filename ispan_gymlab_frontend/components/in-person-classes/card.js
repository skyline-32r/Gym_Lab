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
          image="/images/in-person-classes/05.webp"
          alt=""
        />
        <CardContent sx={{ height: 100, mt: 0 }}>
          <a
            href="../in-person-classes/categories"
            style={{ textDecoration: 'none' }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: '#FFFFFF', height: 20 }}
            >
              有氧
            </Typography>
            <Typography variant="body2" sx={{ color: '#FFFFFF', mt: 5 }}>
              實施有氧運動心肺運動訓練，出汗是人體調節體溫散熱方式。
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: '#FFFFFF', mt: '30px', textAlign: 'right' }}
            >
              了解更多...
            </Typography>
          </a>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
