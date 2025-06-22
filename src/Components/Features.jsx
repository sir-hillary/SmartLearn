import React from 'react'
import features from '../Data/Features'
import FeatureCard from './FeatureCard'
import { FaChalkboardTeacher, FaLaptopCode, FaClipboardCheck, FaCertificate } from "react-icons/fa";
import { motion } from 'framer-motion'

const iconMap = {
  FaChalkboardTeacher: <FaChalkboardTeacher />,
  FaLaptopCode: <FaLaptopCode />,
  FaClipboardCheck: <FaClipboardCheck />,
  FaCertificate: <FaCertificate />,
}

const Features = () => {
  return (
    <motion.section className='py-20 px-4 md:px-10 lg:px-20 bg-gray-50'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='max-w-screen-xl mx-auto text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>Why Choose <span className='text-blue-600'>SmartLearn</span>?</h2>
        <p className='mt-4 text-gray-600 text-base max-w-2xl mx-auto'>Discover the features that make SmartLearn the perfect companion fot both learners and educators.</p>
      </div>

      <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}

      >
        {
          features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={iconMap[feature.icon]}
              title={feature.title}
              description={feature.description}
            />
          ))
        }
      </motion.div>
    </motion.section>
  )
}

export default Features
