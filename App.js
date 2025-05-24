import React from 'react'
import Navbar from './components/navbar'
import NoticeCarousel from './components/noticeCarousel'
import AboutUs from './components/aboutUs'
import ActionSection from './components/actionSection'

import CoCurricular from './components/coCurricular'
import Management from './components/management'
import Footer from './components/footer'
import HeroSection from './components/heroSection'

function App () {
  return (
    <>
      <Navbar />
      <HeroSection />
      <NoticeCarousel />
          <AboutUs />
      <ActionSection />
      <CoCurricular />
      <Management />
      <Footer />

      {/* Other routes or components */}
    </>
  )
}

export default App
