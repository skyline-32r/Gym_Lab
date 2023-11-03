import React from 'react'
import { Popper } from '@mui/material'
export default function ScheduleBtn() {
  return (
    <>
      <Popper
        placement="bottom"
        disablePortal={false}
        modifiers={[
          {
            name: 'flip',
            enabled: true,
            options: {
              altBoundary: true,
              rootBoundary: 'document',
              padding: 8,
            },
          },
          {
            name: 'preventOverflow',
            enabled: true,
            options: {
              altAxis: true,
              altBoundary: true,
              tether: true,
              rootBoundary: 'viewport',
              padding: 8,
            },
          },
          {
            name: 'arrow',
            enabled: true,
            options: {
              element: 'arrowRef',
            },
          },
        ]}
      >我要報名</Popper>
    </>
  )
}
