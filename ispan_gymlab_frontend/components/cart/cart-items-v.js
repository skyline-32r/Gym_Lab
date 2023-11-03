import React from 'react'
import style from '@/styles/cart.module.css'
import { Checkbox, IconButton, ButtonGroup, Button, Box } from '@mui/material'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import DeleteIcon from '@mui/icons-material/Delete'
export default function CartItemsV({
  course_thumbnail,
  course_name = '街頭健身',
  course_price = 1450,
  course_cart_id,
  addlist2,
  removeitem2,
}) {
  return (
    <>
      <div className={style.item}>
        <Checkbox
          sx={{
            color: 'action',
            '&.Mui-checked': {
              color: '#00F0FF',
            },
          }}
          value={course_cart_id}
          onChange={addlist2}
        />
        <div style={{ position: 'relative' }}>
          <div className={style.itemimg}>
            <img
              className={style.itemimg}
              src={course_thumbnail}
              style={{ filter: 'grayscale(80%) ' }}
              alt="商品圖片"
            />
          </div>
          <Box
            sx={{
              position: 'absolute',
              top: '50px',
              left: '50px',
              '@media (max-width: 600px)': {
                top: '20px',
                left: '20px',
              },
            }}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="16.5"
                cy="16.5"
                r="16"
                fill="#140F2A"
                stroke="#F9F9F9"
              />
              <path
                d="M12 23.1887V10.6995C12 9.93703 12.8191 9.45506 13.4856 9.82536L24.0234 15.6796C24.6878 16.0488 24.7138 16.995 24.0705 17.4L13.5328 24.0349C12.8669 24.4542 12 23.9756 12 23.1887Z"
                fill="#F9F9F9"
              />
            </svg>
          </Box>
        </div>
        <div className={style.itemitem}>
          <div className={style.itemname}>{course_name}</div>
          <div className={style.price}>
            <div style={{ padding: '12px' }}>
              {'NTD$ ' + parseInt(course_price).toLocaleString('us-EN')}
            </div>
            <div>
              <Checkbox
                icon={
                  <StarBorderRoundedIcon
                    sx={{ color: '#FF00B8', fontSize: '2rem' }}
                  />
                }
                checkedIcon={
                  <StarRoundedIcon
                    sx={{ color: '#FF00B8', fontSize: '2rem' }}
                  />
                }
              />
              <IconButton
                sx={{ color: '#FF00B8' }}
                aria-label="delete"
                size="large"
                onClick={() => {
                  removeitem2(course_cart_id)
                }}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
