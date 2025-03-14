import React from 'react'
import Loader from '../loader/Loader'

const LoadingComponent = () => {
  return (
    <div className='h-screen w-full bg-gray-900/60 fixed z-[1000] flex justify-center pt-20 items-center'>
        <Loader/>
    </div>
  )
}

export default LoadingComponent