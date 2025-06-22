import React from 'react'
import { FaAward, FaBookOpen, FaChalkboardTeacher, FaUser } from 'react-icons/fa'
import stats from '../Data/Stats'
import StatsCard from './StatsCard'
import { motion } from 'framer-motion'

const iconMap = {
    FaUsers: <FaUser className='text-4xl text-blue-600' />,
    FaBookOpen: <FaBookOpen className='text-4xl text-blue-600' />,
    FaAward: <FaAward className='text-4xl text-blue-600' />,
    FaChalkboardTeacher: <FaChalkboardTeacher className='text-4xl text-blue-600' />
}

const Stats = () => {
    return (
        <motion.section className='py-20 px-4 md:px-10 lg:px-20 bg-gray-50'

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className='max-w-screen-xl mx-auto text-center mb-16'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>SmartLearn By The Numbers.</h2>
                <p className='text-base mt-4 text-gray-600 max-w-2xl mx-auto'>See the impact we've made with over 1,000+ happy learners and educators worldwide!</p>

                <motion.div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                    {
                        stats.map((stat) => (
                            <StatsCard
                                key={stat.id}
                                icon={iconMap[stat.icon]}
                                label={stat.label}
                                value={stat.value}
                            />
                        ))
                    }
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Stats
