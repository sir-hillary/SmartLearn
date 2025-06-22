import React from 'react'
import logo_dark from '../assets/logo-dark.png'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { GrLinkTop } from "react-icons/gr";
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer className='bg-gray-900 text-gray-300 py-12 px-4 md:px-10 lg:px-20'
    initial={{opacity:0}}
    animate={{opacity: 1}}
    transition={{duration: 1, ease:'easeOut'}}
    >
      <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left'>
        <div>
          <img src={logo_dark} alt="SmartLearn logo" className='w-40 mx-auto md:mx-0 mb-4' />
          <p className='text-sm text-gray-400'>Empoweing learners across the world through flexible online education.</p>
        </div>

        <div>
          <h4 className='text-lg font-semibold text-white mb-4'>Quick Links</h4>
          <ul className='space-y-2 text-sm'>
            <li><Link to='/' className='hover:underline'>Home</Link></li>
            <li><Link to='/courses' className='hover:underline'>Courses</Link></li>
            <li><Link to='/about' className='hover:underline'>About</Link></li>
            <li><Link to='/contact' className='hover:underline'>Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className='text-lg font-semibold text-white mb-4'>Follow us</h4>
          <div className='flex justify-center md:justify-start gap-6 text-xl text-gray-400'>
            <a href="#" className='hover:text-blue-500 transiton-colors duration-200'><FaFacebook /></a>
            <a href="#" className='hover:text-blue-500 transiton-colors duration-200'><FaXTwitter /></a>
            <a href="#" className='hover:text-blue-500 transiton-colors duration-200'><FaLinkedin /></a>
            <a href="#" className='hover:text-blue-500 transiton-colors duration-200'><FaInstagram /></a>
            <a href="#" className='hover:text-blue-500 transiton-colors duration-200'><FaGithub /></a>
            <a href="#" className='hover:text-blue-500 transiton-colors duration-200'><FaTiktok /></a>
          </div>
        </div>
      </div>

      {/*-------------------------Back to top link-------------- */}
      <div className='flex justify-center mt-6'>
        <a href="#" className='text-gray-400 hover:text-white'>
          <GrLinkTop className='text-2xl'/>
          <span className='mt-2'>Back to Top</span>
        </a>
      </div>

      <p className='text-center text-sm text-gray-500 mt-8'>&copy;{new Date().getFullYear()} Smartlearn. All Rights Reserved.</p>
    </motion.footer>
  )
}

export default Footer
