import React from 'react'

const StatsCard = ({ icon, label, value }) => {
  return (
    <div className='bg-white rounded-xl shadow-md hover:shadow-lg p-6 text-center transition duration-300'>
      <div className=' mb-3'>{icon}</div>
      <h3 className='text-3xl font-semibold text-gray-800'>{value}</h3>
      <p className='text-sm text-gray-600'>{label}</p>
    </div>
  )
}

export default StatsCard
