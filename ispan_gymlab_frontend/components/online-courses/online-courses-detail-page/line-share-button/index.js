import React from 'react'
import { Button } from '@mui/material'
import OCBtn from '@/components/online-course-btn'
const LineShareButton = () => {
  const handleShare = () => {
    const lineShareURL = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
      window.location.href
    )}`

    window.open(lineShareURL, '_blank')
  }

  return (
    // <Button
    //   sx={{
    //     // textDecoration: 'underline',
    //     border: '1px solid white',
    //     padding: '8px',
    //     fontSize: '20px',
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     display: 'inline-block',
    //     width: '100%',
    //     color: 'white',
    //     borderRadius: 'unset',
    //   }}
    //   onClick={handleShare}
    // >
    <OCBtn onClickCallback={handleShare}>Line 分享</OCBtn>
    // </Button>
  )
}

export default LineShareButton
