import React from 'react'
import courses from '../Data/Courses'
import CourseCard from './CourseCard'
import { motion } from 'framer-motion'

const Courses = () => {
    return (
        <motion.section className='py-20 px-4 md:px-10 lg:px-20 bg-gray-50'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className='max-w-screen-xl mx-auto text-center mb-12'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>Explore Our Top Courses</h2>
                <p className='mt-4 text-gray-600 text-base max-w-2xl mx-auto'>Unlock your potential with our diverse range of courses, designed to cater to all skill levels.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto'>
                {
                    courses.map((course) => (
                        <CourseCard
                            key={course.id}
                            title={course.title}
                            image={course.image}
                            instructor={course.instructor}
                            duration={course.duration}
                            level={course.level}
                            isPopular={course.isPopular}
                        />
                    ))
                }
            </div>

        </motion.section>
    )
}

export default Courses
