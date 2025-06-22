import React from 'react'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import Courses from '../Components/Courses'
import Testimonials from '../Components/Testimonials'
import Stats from '../Components/Stats'
import CTASection from '../Components/CTASection'
import Footer from '../Components/Footer'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Courses />
      <Testimonials />
      <Stats />
      <CTASection />
      <Footer />
    </div>
  )
}

export default Home
