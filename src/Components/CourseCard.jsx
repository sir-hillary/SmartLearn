import React from 'react'

const CourseCard = ({ title,image,instructor, duration, level, isPopular }) => {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300'>
        <img src={image} alt={title} className='w-full h-48 object-fit' />


        <div className='p-6'>
            <h3 className='text-xl font-semibold text-gray-800'>{title}.</h3>
            <p className='text-sm text-gray-600 mt-2'>Instructor: {instructor}.</p>
            <p className='text-sm text-gray-600 mt-2'> Duration: {duration}</p>
            <p className='text-sm text-gray-600 mt-2'>Level: {level}.</p>
        {
            isPopular && (
                <span className='mt-4 inline-block text-sm px-4 py-2 bg-blue-600 text-white rounded-full'>Popular</span>
            )
        }

      
      </div>
    </div>
  )
}

export default CourseCard
