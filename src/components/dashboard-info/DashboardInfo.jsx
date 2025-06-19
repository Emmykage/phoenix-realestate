import React from 'react'
import userImage from "../../assets/images/pictures/user.png"

const DashboardInfo = ({
    user 
}) => {

  return (
    <div className='w-full bg-white shadow-md p-4 md:p-8 flex flex-col md:flex-row items-center gap-4 rounded-md'>
    <div className='md:h-28 md:w-28 h-20 w-20 shadow-md rounded-full border'>
      <img src={userImage} alt="user icon" className='w-full h-full p-5 text-gray-500' />
    </div>
    <div className='flex gap-2 justify-between flex-col md:flex-row flex-1' >
    <div className=' flex-1  text-center '>

      <h3 className='text-gray-700  md:text-left font-semibold text-base md:text-xl'>{user?.last_name ?? "Unknown"}, {user?.first_name ?? "Unknown"} </h3>
      <h3 className='text-gray-700  md:text-left font-semibold text-base md:text-xl'>{user?.email ?? "Loading..."}</h3>
      <p className='text-sm text-gray-500 font-semibold md:text-left'>4263410275</p>

    </div>

      {/* <div className='flex-1 text-center md:text-left'>
        <p className=' text-lg md:text-2xl font-semibold'>Balance </p>
        <span className='md:text-xl text-base text-gray-600 font-semibold'>$00.00</span>
      </div> */}

    </div>
  
  </div>  )
}

export default DashboardInfo