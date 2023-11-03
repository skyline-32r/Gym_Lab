import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import FormHelperText from '@mui/material/FormHelperText'
export default function SelectSmall({
  text,
  name,
  handleFieldChange,
  value,
  errortext,
  disabled,
}) {
  const [age, setAge] = React.useState('請選擇')
  return (
    <FormControl sx={{ minWidth: 120, marginBottom: '16px' }} fullWidth>
      <InputLabel id="demo-select-small-label">{text}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        name={name}
        value={value}
        label={text}
        onChange={handleFieldChange}
        disabled={disabled}
      >
        <MenuItem value="請選擇" disabled>
          請選擇
        </MenuItem>
        <MenuItem value={'大安資展旗艦店'}>大安資展旗艦店</MenuItem>
        <MenuItem value={'內湖摩天輪分店'}>內湖摩天輪分店</MenuItem>
        <MenuItem value={'淡水美美分店'}>淡水美美分店</MenuItem>
        <MenuItem value={'信義101分店'}>信義101分店</MenuItem>
        <MenuItem value={'新店新的分店'}>新店新的分店</MenuItem>
        <MenuItem value={'板橋耶誕城分店'}>板橋耶誕城分店</MenuItem>
      </Select>
      <FormHelperText error>{errortext}</FormHelperText>
    </FormControl>
  )
}
