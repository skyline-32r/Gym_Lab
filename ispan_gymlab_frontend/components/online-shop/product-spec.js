import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import styles from '@/styles/online-shop/product-detail.module.css'
import { useState } from 'react'
import { styled } from '@mui/material'

export default function ProductSpec({
  error,
  children,
  setError,
  setSelectCapacity,
  uniqueCapacity,
}) {
  const [age, setAge] = useState(-1)

  //取出選取的容量傳送給父元件
  const handleChange = (event) => {
    setAge(event.target.value)
    const selectedCapacity = event.target.value
    console.log('Selected Capacity:', selectedCapacity)
    setSelectCapacity(selectedCapacity)
    console.log(error.capacity)
  }

  const SelectFieldStyles = styled(Select)({
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: error.capacity ? '#ff00b8' : '#f9f9f9',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00f0ff',
      borderWidth: 'thin',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00f0ff',
      borderWidth: 'thin',
    },
    '.MuiSelect-icon': {
      fill: '#f9f9f9',
    },
    '&:hover .MuiSelect-icon': {
      fill: '#00f0ff',
    },
    '&.Mui-focused .MuiSelect-icon': {
      fill: '#00f0ff',
    },
  })
  return (
    <FormControl
      sx={{ m: 0, mb: 1.5, minWidth: 120 }}
      size="small"
      className={styles.select}
    >
      <SelectFieldStyles
        id="demo-select-small"
        value={age}
        onChange={handleChange}
        sx={{
          backgroundColor: 'lightgray',
          color: error.capacity ? '#ff00b8' : 'black',
        }}
        // error={error}
        setError={setError}
      >
        {error.capacity ? (
          <MenuItem value="-1" disabled>
            {error.capacity}
          </MenuItem>
        ) : (
          <MenuItem value="-1" disabled>
            {children}
          </MenuItem>
        )}
        {uniqueCapacity.map(({ capacity_id, capacity_name, price }) => {
          return (
            <MenuItem key={capacity_id} value={capacity_name}>
              {capacity_name}
            </MenuItem>
          )
        })}
      </SelectFieldStyles>
    </FormControl>
  )
}
