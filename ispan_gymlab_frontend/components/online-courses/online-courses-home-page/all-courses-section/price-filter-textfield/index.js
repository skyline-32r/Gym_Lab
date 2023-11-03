import {
  Container,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from '@mui/material'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'

const WhiteTextField = styled(TextField)({
  paddingTop: '8px',
  paddingBottom: '8px',
  input: {
    color: 'white',
  },
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white !important',
  },
  '.MuiOutlinedInput-root.Mui-hovered .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '.MuiSelect-icon': {
    fill: 'white',
  },
  '.MuiInputBase-root.MuiOutlinedInput-root': {
    borderRadius: 'unset',
  },
  '.MuiInputBase-input.MuiOutlinedInput-input': {
    boxSizing: 'border-box',
    height: '36px',
  },
})

export default function PriceFilterTextField({
  label,
  price,
  priceFilter,
  setFilterSettings,
  inputText,
  setInputText,
  setPage,
}) {
  // const [inputText, setInputText] = useState('')
  const handleChange = (event) => {
    setFilterSettings((oldValue) => ({
      ...oldValue,
      [priceFilter]: event.target.value,
    }))
    setPage(1)
  }

  return (
    <WhiteTextField
      id="priceFilter"
      // type="search"
      // label="Search"
      value={inputText}
      onChange={(event) => {
        if (event.target.value) {
          const isNumber = /^[0-9]+$/i.test(event.target.value)
          if (isNumber) {
            setInputText(event.target.value)
          }
        } else {
          setInputText(event.target.value)
        }
        // In the case user is deleting input
      }}
      onBlur={handleChange}
      sx={{ width: '112px' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Typography sx={{ color: 'white' }}>{label}: </Typography>
          </InputAdornment>
        ),
      }}
    />
  )
}
