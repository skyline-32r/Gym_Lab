import React from 'react'
import Thanks from '@/components/testing/thanks'
import Navbar from '@/components/testing/MuiNavbar'
import Footer from '@/components/testing/footer'
export default function ThanksPage() {
  return (
    <>
      <Navbar />
      <Thanks style={{ overflow: 'hidden' }} />
      <Footer />
    </>
  )
}
