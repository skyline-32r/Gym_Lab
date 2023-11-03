import { Typography } from '@mui/material'

export default function MembershipPlanBenefit({
  variant = 'body2',
  color = 'white',
  fontSize = '20px',
  borderBottom = '1px solid #FF00B8',
  children,
}) {
  return (
    <Typography
      variant={variant}
      component="div"
      sx={{
        fontSize: { fontSize },
        color: { color },
        textAlign: 'center',
        borderBottom: { borderBottom },
        paddingY: '8px',
        fontFamily: 'Black ops one,微軟正黑體',
        backgroundColor: 'unset',
        '@media (max-width: 600px)': {
          display: 'none',
        },
      }}
    >
      {children}
    </Typography>
  )
}
