import { Box, Typography, IconButton } from '@mui/material'
export default function HeaderSection() {
  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          height: '400px',
          overflow: 'hidden',
          color: 'white',
        }}
      >
        <img
          src="images/online-courses/header-section/headerBackground23.jpg"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'fill' }}
        ></img>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: '200px',
          top: '150px',
          width: '544px',
        }}
      >
        <Typography
          sx={{ fontSize: '67px', letterSpacing: '4px', color: 'white' }}
        >
          學習無極限
        </Typography>
        <Typography
          sx={{ fontSize: '33px', letterSpacing: '4px', color: 'white' }}
        >
          各種課程可供探索並找到適合您的課程
        </Typography>
      </Box>
    </Box>
  )
}
