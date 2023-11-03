import React from 'react'
import MuiNavbar from '@/components/testing/MuiNavbar'
import { Box } from '@mui/material'
import HeroSection from './hero-section'
import MembershipPlansSection from './membership-plans-section'
import InPersonClassesSection from './in-person-classes-section'
import OnlineCoursesSection from './online-courses-section'
import OnlineShopSection from './online-shop-section'
import ForumSection from './forum-section'
import GoogleMaps from './google-map'
import ContactUs from './contact-us-section'
import Footer from '@/components/testing/footer'
import BranchMap from './google-map'
export default function LandingPage() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url(images/landing_page/hero4.jpg)',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: '0px -50px',
          '@media (max-width: 600px)': {
            backgroundPosition: 'left 20px',
          },
        }}
      >
        <MuiNavbar />
        <HeroSection />
        <MembershipPlansSection />
        <InPersonClassesSection />
        <OnlineCoursesSection />
        <OnlineShopSection />
        <ForumSection />
        <BranchMap />
        {/* <ContactUs /> */}
        <Footer />
      </Box>
    </>
  )
}
