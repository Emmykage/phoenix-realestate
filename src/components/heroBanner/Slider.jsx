import React from 'react'
import './slider.scss'
import { NavLink } from 'react-router-dom'

const Slider = () => {
  return (
    <div className=' h-screen  hero-banner w-full'>
      <div className='slider flex'>

      <div className='slide slide-1 w-full flex justify-center items-center'>
        <div className='bg-black/20 px-3 py-2 rounded text-center text-white'>
            <p className='text-4xl text-white font-medium'>We Provide Real </p>
            <h3 className='text-3xl md:text-7xl font-semibold'>WORLD SOLUTION</h3>
            <NavLink 
              to="/contact-us#contact-us" 
              className="hover:bg-purple-100/80 hover:text-gray-900 border-[3px] w-max m-auto border-alt block px-6 py-3 text-lg font-semibold"
              aria-label="Navigate to the contact us section">
              Get Started
          </NavLink>
        </div>


      </div>

      <div className='slide slide-2 w-full flex justify-center items-center'>
        <div className='bg-black/20 px-3 py-2 rounded text-center text-white'>
            <p className='text-4xl text-white font-medium'>Accounting Made Simple </p>
            <h3 className='text-3xl md:text-7xl font-semibold'>Growth Made Possible</h3>
        </div>


      </div>

      <div className='slide slide-3 w-full flex justify-center items-center'>
        <div className='bg-black/20 px-3 py-2 rounded text-center text-white'>
            <p className='text-4xl text-white font-medium'>Your Financial Success</p>
            <h3 className='text-3xl md:text-7xl font-semibold'>Our Real-World Expertise!!</h3>
        </div>


      </div>
      <div className='slide slide-4 w-full flex justify-center items-center'>
        <div className='bg-black/20 px-3 py-2 rounded text-center text-white'>
            <p className='text-4xl text-white font-medium'>Mastering Finances </p>
            <h3 className='text-3xl md:text-7xl font-semibold'>Fueling Success</h3>
        </div>


      </div>
      <div className='slide slide-5 w-full flex justify-center items-center'>
        <div className='bg-black/20 px-3 py-2 rounded text-center text-white'>
            <p className='text-4xl text-white font-medium'>Simplifying Accounting </p>
            <h3 className='text-7xl font-semibold'>Delivering Real Results</h3>
        </div>


      </div>

      </div>

    </div>
  )
}

export default Slider