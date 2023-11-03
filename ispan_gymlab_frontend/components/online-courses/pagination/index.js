import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

export default function BasicPagination({ page, setPage, totalPages }) {
  const handleChange = (event, value) => {
    setPage(value)
  }
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        color="primary"
        sx={{
          '.MuiPaginationItem-root': {
            color: 'white',
            backgroundColor: '#2F2F45',
            border: '1px solid #525282',
            width: '48px',
            height: '48px',
            borderRadius: '50% 50%',
            '&:hover': {
              textShadow:
                '4px 0px 12px #FF00B8, -4px 0px 12px #FF00B8, 0px 4px 12px #FF00B8, 0px -4px 12px #FF00B8',
            },
          },

          '.MuiButtonBase-root.MuiPaginationItem-root.Mui-selected': {
            backgroundColor: '#525282',
            textShadow:
              '4px 0px 12px #FF00B8, -4px 0px 12px #FF00B8, 0px 4px 12px #FF00B8, 0px -4px 12px #FF00B8',
          },
        }}
      />
    </Stack>
  )
}
