import React, { useRef, useState, useEffect } from 'react'
import logo_light from '../assets/logo-light.png'
import { Link } from 'react-router-dom'
import { RiLoginCircleFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const links = ['Home', 'About Smartlearn', 'Our Courses', 'Your Teachers', 'FAQS', 'Contact us'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <nav className='w-full fixed top-0 border-t-4 border-blue-500 p-4 md:px-8 lg:px-16 z-50 bg-white/70 backdrop-blur-lg shadow-sm'>
      <div className='flex justify-between items-center px-4 md:px-8 lg:px-16 py-4'>
        <img className='w-36 md:40' src={logo_light} alt='smartlearn logo' />



        {/*-------------------------- Desktop Links----------------------- */}
        <div className=' hidden md:flex items-center space-x-6 text-base font-medium text-gray-700'>
          {links.map((link) => (
            <Link key={link} to={`/${link}`} className='hover:text-blue-600 transition-colors duration-200'>{link}</Link>
          ))}
        </div>


        {/*-------------------------- Desktop login button----------------------- */}

        <button className='hidden md:flex items-center gap-2 px-4 py-2 shadow-md bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'>
          <RiLoginCircleFill className='text-lg' />
          <span className='text-sm font-semibold'>Login</span>
        </button>

        {/*-------------------- this is the hamburger menu icon for mobile screens----------- */}

        <button className='md:hidden text-3xl text-gray-700' onClick={() => setIsOpen(true)} aria-label='Open menu'>
          <GiHamburgerMenu />
        </button>

        {/*-------------------- This is the mobile menu overlay view of the links------------------------ */}

        {isOpen && (
          <div className='md:hidden fixed inset-0 bg-black/40 z-40'>
            <div ref={menuRef} className='absolute top-0 right-0 w-64 h-full bg-white px-6 py-6 space-y-6 shadow-lg'>
              <button
                onClick={() => setIsOpen(false)}
                className='absolute top-4 right-4 text-xl text-gray-500 hover:text-red-600'
              >
                <FaTimes />
              </button>

              <ul className='pt-10 space-y-4 text-gray-700 font-medium'>
                {links.map((link) => (
                  <li key={link}><Link to={`/${link}`} className='block hover:text-blue-600 transition'>{link}</Link></li>
                ))}
              </ul>

              <button
              className='w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition'
              >
                <div className='flex items-center justify-center gap-2'>
                  <RiLoginCircleFill />
                  <span className='text-sm font-semibold'>Login</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
