import { IconButton } from '@mui/material'
import PinDropRoundedIcon from '@mui/icons-material/PinDropRounded'

export default function Map({ children, map_position, map_address }) {
  return (
    <>
      <div
        style={{
          maxWidth: '372px',
          backgroundColor: '#3E3E3E',
          color: '#F9F9F9',
          padding: '36px',
          borderRadius: '3px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: ' 16px',
          boxShadow: ' -6px -6px 0px 0px #00F0FF, 6px 6px 0px 0px #FF00B8',
        }}
      >
        {/* <div> */}
        {children}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <h3 style={{ fontWeight: 'normal' }}>
            {map_position}
            <IconButton sx={{ color: '#FF00B8' }} aria-label="delete">
              <PinDropRoundedIcon fontSize="inherit" />
            </IconButton>
          </h3>
          <p style={{ padding: '0', margin: '0' }}>{map_address}</p>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}
