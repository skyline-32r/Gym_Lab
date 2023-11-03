import React, { useEffect, useState } from 'react'
import HeaderSection from './header-section'
import RecommendSection from './recommend-section'
import AllCoursesSection from './all-courses-section'
import { Box } from '@mui/material'

export default function OnlineCoursesHomePage() {
  return (
    <Box sx={{ backgroundColor: '#0F172A' }}>
      <HeaderSection></HeaderSection>
      {/* {coursesData && (
        <>
          <RecommendSection coursesData={coursesData}></RecommendSection>
          <AllCoursesSection coursesData={coursesData}></AllCoursesSection>
        </>
      )} */}
      <RecommendSection></RecommendSection>
      <AllCoursesSection></AllCoursesSection>
    </Box>
  )
}
