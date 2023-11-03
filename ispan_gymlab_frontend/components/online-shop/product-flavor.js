import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import styles from '@/styles/online-shop/product-detail.module.css'
import { useState } from 'react'
import { styled } from '@mui/material'

export default function ProductFlavor({
  error,
  children,
  setError,
  uniqueFlavors,
  setSelectFlavor,
}) {
  const [age, setAge] = useState(-1)

  const handleChange = (event) => {
    setAge(event.target.value)
    const selectFlavor = event.target.value
    setSelectFlavor(selectFlavor)
  }

  const SelectFieldStyles = styled(Select)({
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: error.flavor ? '#ff00b8' : '#f9f9f9',
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
    '.MuiMenuItem-root.Mui-error': {
      color: 'red',
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
          color: error.flavor ? '#ff00b8' : 'black',
        }}
        // selectFlavor2={flavor}
      >
        {error.flavor ? (
          <MenuItem value="-1" disabled>
            {error.flavor}
          </MenuItem>
        ) : (
          <MenuItem value="-1" disabled>
            {children}
          </MenuItem>
        )}
        {uniqueFlavors.map(({ flavor_id, flavor }) => {
          return (
            <MenuItem key={flavor_id} value={flavor}>
              {/* //HOOK 4:取到要傳入setSelectFlavor的selectFlavor2={flavor} */}
              {flavor}
            </MenuItem>
          )
        })}
      </SelectFieldStyles>
      {/* {error && <div className={styles.error}>{error}</div>} */}
    </FormControl>
  )
}
