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
}) {
  console.log(value1)
  console.log(value2)
  return (
    <>
      <FormControl sx={{ minWidth: 120, 
      // marginBottom: '16px', 
      width: '100%' }}>
        {/* <InputLabel id="demo-select-small-label1">選擇縣市</InputLabel> */}
        <Select
          labelId="demo-select-small-label1"
          value={value1}
          label="選擇縣市"
          name="country"
          sx={{
            width: '100%',
            backgroundColor: '#EFEDED',
            // height: '36px',
            padding: '0px',
            // color: 'white',
            borderRadius: '5px',
            '.MuiInputBase-input': {
              // paddingLeft: '0px',
            },

            '.MuiOutlinedInput-notchedOutline': {
              // borderColor: 'white',
              border: 'none',
              borderBottom: '1px solid black',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              // borderColor: 'white',
              border: 'none',
              borderBottom: '2px solid black',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
              border: 'none',
              borderBottom: '1px solid white',
            },
            '.MuiPaper-root.MuiPopover-paaper.MuiMenu.paper': {
              borderRadius: 'unset',
            },
            '.MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input': {
              // padding: '16.5px 14px 4px 0px',
            },
          }}
          onChange={handleFieldChange}
          displayEmpty
        >
          <MenuItem value="" disabled>
            選擇縣市
          </MenuItem>
          {countries.map((value, index) => (
            <MenuItem key={index} value={index }>
              {value}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText error>{errortext1}</FormHelperText>
      </FormControl>
      <FormControl sx={{ minWidth: 120,
      //  marginBottom: '16px', 
       width: '100%' }}>
        {/* <InputLabel id="demo-select-small-label2">選擇區域</InputLabel> */}
        <Select
          labelId="demo-select-small-label2"
          value={value2}
          name="town"
          label="選擇區域"
          sx={{
            width: '100%',
            backgroundColor: '#EFEDED',
            // height: '36px',
            padding: '0px',

            // color: 'white',
            borderRadius: '5px',
            '.MuiInputBase-input': {
              // paddingLeft: '0px',
            },

            '.MuiOutlinedInput-notchedOutline': {
              // borderColor: 'white',
              border: 'none',
              borderBottom: '1px solid black',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              // borderColor: 'white',
              border: 'none',
              borderBottom: '2px solid black',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
              border: 'none',
              borderBottom: '1px solid white',
            },
            '.MuiPaper-root.MuiPopover-paaper.MuiMenu.paper': {
              borderRadius: 'unset',
            },
            '.MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input': {
              // padding: '16.5px 14px 4px 0px',
            },
          }}
          onChange={handleFieldChange}
          displayEmpty
        >
          <MenuItem value="" disabled>
            選擇區域
          </MenuItem>
          {value1 &&
            townships[value1 ].map((value, index) => (
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
