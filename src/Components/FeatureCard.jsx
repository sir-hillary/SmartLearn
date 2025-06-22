import React from 'react'

const FeatureCard = ({icon, title, description}) => {
  return (
    <div className='bg-white backdrop-blur-md text-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center'>
      <div className='mb-4 flex text-4xl text-blue-600 justify-center'>{icon}</div>
      <h3 className='text-xl text-gray-800  font-semibold mb-2'>{title}</h3>
      <p className='text-sm text-gray-600'>{description}</p>
    </div>
  )
}

export default FeatureCard
