import { Container, InputAdornment, TextField, styled } from '@mui/material'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'

const WhiteTextField = styled(TextField)({
  paddingTop: '0px',
  paddingBottom: '0px',
  border: '1px solid #525282',
  input: {
    color: 'white',
  },
  '.MuiOutlinedInput-notchedOutline': {
    border: '1px solid #525282',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#525282 !important',
  },
  '.MuiOutlinedInput-root.Mui-hovered .MuiOutlinedInput-notchedOutline': {
    borderColor: '#525282',
  },

  '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#525282',
  },
  '.MuiSelect-icon': {
    fill: 'white',
  },
  '.MuiInputBase-root.MuiOutlinedInput-root': {
    borderRadius: 'unset',
    height: '52px',
    padding: '0px',
  },
  '.MuiInputBase-input.MuiOutlinedInput-input': {
    boxSizing: 'border-box',
    height: '36px',
  },
})

export default function SearchBar({
  searchCourse,
  setSearchCourse,
  searchTerm1,
  setSearchTerm1,
  searchTerm,
  setSearchTerm,
  setPage,
}) {
  // const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <WhiteTextField
      id="search"
      // type="search"
      // label="Search"
      value={searchTerm}
      onChange={handleChange}
      sx={{ width: '240px' }}
      InputProps={{
        endAdornment: (
          <InputAdornment
            position="end"
            sx={{
              height: '100%',
              width: '52px',
              maxHeight: 'unset',
              backgroundColor: '#525282',
              display: 'flex',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            onClick={() => {
              setSearchCourse(searchTerm)
              setPage(1)
            }}
          >
            <SearchIcon
              sx={{
                color: 'white',
                height: '32px',
                width: '32px',
              }}
            />
          </InputAdornment>
        ),
      }}
    />
  )
}
