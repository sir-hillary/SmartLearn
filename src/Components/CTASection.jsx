import React from 'react'
import { motion } from 'framer-motion'

const CTASection = () => {
  return (
    <motion.section className='py-20 px-4 md:px-10 lg:px-20 text-center bg-blue-600'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='max-w-screen-xl mx-auto'>
        <motion.h2 initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }} 
          className='text-3xl md:text-4xl font-bold text-white mb-4'>Ready to start Learning?</motion.h2>
        <p className='text-base text-gray-200 md:text-lg mb-8'>Join 1,000+ learners and boost your skills with SmartLearn.</p>

        <form className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <motion.input
            type="email"
            placeholder='Enter Your Email'
            className='px-6 py-3 rounded-md text-black w-full sm:w-80'
            whileFocus={{scale:1.05}}
            transition={{duration:0.3}}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type='submit'
            className='bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-all duration-300' >
            Join Now
          </motion.button>
        </form>
      </div>
    </motion.section>
  )
}

export default CTASection
