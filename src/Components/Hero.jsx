import React from 'react'
import photo_6 from '../assets/photo-2.jpg'
import { motion } from 'framer-motion'

const Hero = () => {
  return (

    <motion.section className='w-full bg-white pt-20 md:pt-28 pb-16 md:pb-24 px-4 md:px-10 lg:px-20'

      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto'>

        {/*------------------Text Content-------------------- */}
        <motion.div className='w-full md:w-1/2 space-y-6 text-center md:text-left'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 leading-light'>SmartLearn – Where Young Minds Shine and Teachers Thrive</h1>
          <p className='text-base md:text-lg text-gray-600 mt-2'>Interactive lessons, fun activities, and teaching tools that spark curiosity and make learning joyful — for both students and educators.</p>
          <div className='flex justify-center md:justify-start'>
            <motion.button className='mt-6 w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-md transition-all duration-300'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >Get Started</motion.button>
          </div>
        </motion.div>

        {/*------------------Hero image section-------------------- */}
        <motion.div className='w-full md:w-1/2 overflow-hidden flex justify-center mt-5'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img src='https://dawati.co.ke/wp-content/uploads/2020/04/Boy-Header.png' alt="photo-6" className='w-full h-auto max-w-md md:max-w-full object-contain rounded-xl' />
        </motion.div>
      </div>
    </motion.section>

  )
}

export default Hero
