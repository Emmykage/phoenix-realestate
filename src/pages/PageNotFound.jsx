import React from 'react'
import notFound from '../assets/images/not-found.jpg'

const PageNotFound = () => {
  return (
    <div className='bg-[#363676] h-screen flex justify-center items-center'>
      <div className='max-w-7xl m-auto border border-gray-800/70 overflow-hidden rounded-3xl w-full'>
               
      <img src={notFound} alt="" className='block w-full h-full'/>
      
      </div>
        
    </div>
  )
}

export default PageNotFound