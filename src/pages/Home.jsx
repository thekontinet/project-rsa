import React from 'react'
import Apply from '../components/Apply'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Offer from '../components/Offer'
import Testimonial from '../components/Testimonial'

function Home() {
  return (
    <div className='h-screen w-screen overflow-x-hidden scroll-smooth'>
        <Hero/>
        <Offer/>
        <Testimonial/>
        <Apply/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home