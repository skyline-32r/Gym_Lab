import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material'
import MembershipPlanBenefit from './membership-plan-benefit'

export default function MembershipPlanCard({ type, children }) {
  const color = ['#f9f9f9', '#E9E9E945']
  return (
    <>
      <Box
        sx={{
          width: '350px',
          backgroundImage:
            'url(/images/landing_page/membershipPlanCardBackground.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          padding: '32px 16px',
          borderRadius: '5px',
          transition: '0.5s',
          '&:hover': {
            boxShadow: '-8px -8px 0px 0px #00f0ff, 8px 8px 0px 0px #ff00b8',
          },
          '@media (max-width: 600px)': {
            width: '90%',
            margin: '8px 0',
            padding: '8px',
            backgroundPosition: 'center',
          },
        }}
      >
        <Card
          sx={{
            backgroundColor: 'unset',
          }}
        >
          <CardContent
            sx={{
              backgroundColor: 'unset',
            }}
          >
            <Typography
              variant="body2"
              component="div"
              sx={{
                fontSize: '67px',
                color: '#f9f9f9',
                textAlign: 'center',
                borderBottom: '1px solid aqua',
                paddingY: '8px',
                fontFamily: 'Black ops one,微軟正黑體',
                backgroundColor: 'unset',
                '@media (max-width: 600px)': {
                  fontSize: '48px',
                },
              }}
            >
              {children}
            </Typography>
            <MembershipPlanBenefit color={color[0]}>
              生日專屬優惠券
            </MembershipPlanBenefit>
            <MembershipPlanBenefit color={color[0]}>
              會員專屬入會禮
            </MembershipPlanBenefit>
            <MembershipPlanBenefit color={type != 'free' ? color[0] : color[1]}>
              不限次數進出健身房
            </MembershipPlanBenefit>
            <MembershipPlanBenefit color={type != 'free' ? color[0] : color[1]}>
              每月9折購物禮券1張
            </MembershipPlanBenefit>
            <MembershipPlanBenefit color={type == '2499' ? color[0] : color[1]}>
              線上商城購物免運費
            </MembershipPlanBenefit>
            <MembershipPlanBenefit color={type == '2499' ? color[0] : color[1]}>
              不限次數參加團體課程
            </MembershipPlanBenefit>
          </CardContent>
          <CardActions
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Button
              sx={{
                color: '#F9F9F9',
                textAlign: 'center',
                border: '1px solid #F9F9F9',
                backgroundColor: '#140f2a',
                transition: '0.5s',
                width: '250px',
                '&:hover': {
                  backgroundColor: '#F9F9F9',
                  color: '#140f2a',
                  border: '1px solid #000',
                },
              }}
            >
              {type == 'free' ? '加入會員' : '立即購買'}
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  )
}
