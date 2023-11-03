import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export default function CourseSortMenu({ sortSetting, setSortSetting }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const translation = {
    mostPopular: '最熱門',
    highestRated: '最高評分',
    new: '最新',
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: 'white',
          width: '100%',
          padding: 'unset',
          borderRadius: 'unset',
          border: '1px solid #525282',
        }}
      >
        <Stack
          direction="row"
          sx={{
            display: 'flex',
            width: '200px',
            height: '52px',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#2F2F45',
            padding: '16px',
            '&:hover': {
              color: 'white',
              backgroundColor: '#3E3E5C',
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
            }}
          >
            排序依據:
          </Typography>
          <Typography
            sx={{
              marginLeft: '8px',
            }}
          >
            {translation[sortSetting]}
          </Typography>
          <KeyboardArrowDownIcon />
        </Stack>
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          '.MuiMenu-paper': {
            marginTop: '2px',
            borderRadius: 'unset',
            width: '200px',
          },
          '.MuiMenu-list': {
            backgroundColor: '#2F2F45',
            color: 'white',
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose()
            setSortSetting('mostPopular')
          }}
        >
          最熱門
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose()
            setSortSetting('highestRated')
          }}
        >
          最高評分
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose()
            setSortSetting('new')
          }}
        >
          最新
        </MenuItem>
      </Menu>
    </div>
  )
}
