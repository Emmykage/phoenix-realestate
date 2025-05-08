import React from 'react'
import user from "../../../assets/images/icons/avatar-1299805_1280.png"
import { NavLink, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import userImage from "../../../assets/images/pictures/user.png"

const DashboardHome = () => {
  const {user} = useSelector(state => state.auth)

  const activeLink = "active text-gray-600 text-theme-alt px-5 py-1 text-sm font-medium"
  const inactiveLink = "text-gray-600 px-5 py-1 text-sm font-medium"
  return (
    <div className='max-w-7x mx-0 sm:m-auto  px-2 account'>
      <div className='flex justify-between'>
      <h2 className='text-left text-gray-900 text-2xl font-semibold my-8'><NavLink to={'dashboard/account/'} className={'hover:text-gray-500'}> My Account </NavLink> </h2>
  

      </div>

      <div className='w-full bg-white shadow-md p-8 flex flex-col md:flex-row items-center gap-4 rounded-md'>
        <div className='h-28 w-28 shadow-md rounded-full border'>
          <img src={userImage} alt="user icon" className='w-full h-full p-5 text-gray-500' />
        </div>
        <div className='flex gap-2 justify-between flex-col md:flex-row flex-1' >
          <div className=' flex-1  text-center '>

            <h3 className='text-gray-700  md:text-left font-semibold text-base md:text-xl'>{user?.email ?? "Unknown"}</h3>
            <p className='text-sm text-gray-500 font-semibold md:text-left'>4263410275</p>

          </div>
          <div className='flex-1 text-center md:text-left'>
            <p className=' text-lg md:text-2xl font-semibold'>Balance </p>
            <span className='md:text-xl text-base text-gray-600 font-semibold'>$00.00</span>
          </div>

        </div>
      
      </div>
      <ul className='flex mt-8 overflow-x-auto'>
        <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/account/identity">ACCOUNT</NavLink> </li>
        {/* <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/account/profile">PROFILE</NavLink> </li> */}
        <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/account/withdrawal">WITHDRAW</NavLink> </li>
        <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/account/deposit">DEPOSIT</NavLink> </li>
      </ul>
      <div className='min-h-96 shadow my-4 p-4 bg-white rounded-md'>
              <Outlet/>


      </div>
    </div>
  )
}

export default DashboardHome