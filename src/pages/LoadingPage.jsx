import React from 'react'
import Loader from '../components/loader/Loader'

const LoadingPage = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <Loader/>
    </div>
  )
}

export default LoadingPage