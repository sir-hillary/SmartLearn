import React from 'react'

const TestimonialCard = ({ name, course, rating, photo, quote}) => {
  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden p-6 text-center hover:shadow-xl transition duration-300'>
      <img src={photo} alt={name} className='w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-600' />
      <h3 className='text-lg font-semibold text-gray-800'>{name}</h3>
      <p className='text-sm text-gray-500 mb-4'>{course}</p>
      <p className='text-base text-gray-600 mb-4'>{`"${quote}"`}</p>
      <div className='flex justify-center items-center text-yellow-500 mb-4'>
           {Array.from({length: rating}).map((_,idx)=>(
            <span key={idx} className='text-xl'>⭐</span>
           ))}
      </div>
    </div>
  )
}

export default TestimonialCard
