import React from 'react'
import testimonials from '../Data/Testimonials'
import TestimonialCard from './TestimonialCard'
import { motion } from 'framer-motion'

const Testimonials = () => {
    return (
        <motion.section className='py-20 px-4 md:px-10 lg:px-20 bg-gray-50'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className='max-w-screen-xl mx-auto text-center mb-12'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>What Our Learners <span className='text-blue-600'>Say</span>.</h2>
                <p className='mt-4 text-base text-gray-600 max-w-2xl mx-auto'>See Why learners love SmartLearn and how it has helped them reach their full potential.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto'>
                {
                    testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            name={testimonial.name}
                            course={testimonial.course}
                            quote={testimonial.quote}
                            photo={testimonial.photo}
                            rating={testimonial.rating}
                        />
                    ))
                }
            </div>

        </motion.section>
    )
}

export default Testimonials
