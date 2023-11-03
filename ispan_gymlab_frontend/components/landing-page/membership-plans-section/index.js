import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import MembershipPlanCard from './membership-plan-card'

export default function MembershipPlansSection() {
  return (
    <Box
      sx={{
        paddingY: '80px',
        paddingX: '156px',
        minHeight: '950px',
        background:
          'linear-gradient(358deg, #bcadff 8.87%, rgba(250, 249, 250, 0.97) 91.40%, rgba(255, 255, 255, 0.45) 91.54%, rgba(250, 240, 255, 0.65) 119.85%)',
        backdropFilter: 'blur(3px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '@media (max-width: 600px)': {
          minHeight: '667px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '32px 16px',
        },
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '67px',
          marginBottom: '48px',
          color: '#140f2a',
          '@media (max-width: 600px)': {
            fontSize: '32px',
            margin: '64px 0  32px 0',
          },
        }}
      >
        精選會員方案
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          '@media (max-width: 600px)': {
            // display: 'none',
            flexWrap: 'wrap',
          },
        }}
      >
        <MembershipPlanCard type="free">FREE</MembershipPlanCard>
        <MembershipPlanCard type="2499">$2499</MembershipPlanCard>
        <MembershipPlanCard type="1699">$1699</MembershipPlanCard>
      </Stack>
    </Box>
  )
}
