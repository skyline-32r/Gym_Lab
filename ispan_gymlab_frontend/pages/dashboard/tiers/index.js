import {
  Box,
  Stack,
  TextField,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  styled,
} from '@mui/material'
import { useEffect } from 'react'
//   import MuiNavbar from '@/components/testing/MuiNavbar'
import MuiNavbar from '@/components/testing/MuiNavbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import Sidebar from '@/components/member/sidebar'
//   import styles from '@/styles/member/profile.module.css'
import Btn1 from '@/components/btn1'
import Link from 'next/link'

import SidebarTemplate from '@/components/member/sidebar-template'
//   import Footer from '@/components/footer/footer'
import MembershipPlanCard from '@/components/landing-page/membership-plans-section/membership-plan-card'
import styles from '@/styles/member/tiers.module.css'
import { useActiveLink } from '@/context/active-link-context'

export default function Tiers() {
  const { setActiveLink } = useActiveLink()
  useEffect(() => {
    setActiveLink('tiers')
  }, [])
  return (
    <>
      <MuiNavbar />
      <SidebarTemplate>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
          }}
        >
          <Box p={5} className={styles.typesetting}>
            <Typography variant="h4">
              您目前方案為XXXXXXXXXXX,最終服務到期日為1970-01-01 00:00:00
            </Typography>
            <Box className={styles.CardsContainer}>
              <MembershipPlanCard type="free">Free</MembershipPlanCard>
              <MembershipPlanCard type="1699">1699</MembershipPlanCard>
              <MembershipPlanCard type="2499">2499</MembershipPlanCard>
            </Box>
          </Box>
        </Box>
      </SidebarTemplate>
      {/* <Footer/> */}
    </>
  )
}
