import { countries, townships } from './data-townships'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import FormHelperText from '@mui/material/FormHelperText'

export default function TWZipCode({
  errortext1,
  errortext2,
  handleFieldChange,
  value1,
  value2,
  disabled,
}) {
  return (
    <>
      <FormControl sx={{ minWidth: 120, marginBottom: '16px' }}>
        <InputLabel id="demo-select-small-label1">選擇縣市</InputLabel>
        <Select
          labelId="demo-select-small-label1"
          value={value1}
          label="選擇縣市"
          name="country"
          onChange={handleFieldChange}
          disabled={disabled}
        >
          <MenuItem value="-1" disabled>
            選擇縣市
          </MenuItem>
          {countries.map((value, index) => (
            <MenuItem key={index} value={index + 1}>
              {value}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText error>{errortext1}</FormHelperText>
      </FormControl>
      <FormControl sx={{ minWidth: 120, marginBottom: '16px' }}>
        <InputLabel id="demo-select-small-label2">選擇區域</InputLabel>
        <Select
          labelId="demo-select-small-label2"
          value={value2}
          name="town"
          label="選擇區域"
          onChange={handleFieldChange}
          disabled={disabled}
        >
          <MenuItem value="-1" disabled>
            選擇區域
          </MenuItem>
          {value1 &&
            townships[value1 - 1].map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
        </Select>
        <FormHelperText error>{errortext2}</FormHelperText>
      </FormControl>
    </>
  )
}
