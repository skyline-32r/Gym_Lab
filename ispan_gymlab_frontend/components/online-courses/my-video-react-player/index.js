import React from 'react'
import {
  Player,
  PosterImage,
  ControlBar,
  ClosedCaptionButton,
} from 'video-react'
import 'video-react/dist/video-react.css' // Import the CSS for styling
const MyVideoReactPlayer = ({ courseId }) => {
  return (
    <div>
      <Player
        src={courseId ? `/videos/online-course-${courseId}.mp4` : ''}
        poster={
          courseId
            ? `/images/online-courses/course-video/course-video-${courseId}.PNG`
            : ''
        }
      >
        <ControlBar autoHide={true} className="my-class"></ControlBar>
      </Player>
    </div>
  )
}

export default MyVideoReactPlayer
