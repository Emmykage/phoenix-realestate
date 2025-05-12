import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const DashboardPortfolio = () => {


  const activeLink = "active text-[#68b4e8] text-gray-600 py-1 text-sm font-medium"
  const inactiveLink = "text-gray-600 py-1 text-sm font-medium"
  return (
    <div className='portfolio px-4 sm:px-16'>
      <h2 className='text-left 7 text-2xl text-gray-600 my-4 font-medium'>My Portfolio</h2>

      <ul className='flex mt-8 justify-between max-w-lg'>
      <li className='relative border-b text-center py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/portfolio/investments">INVESTMENTS</NavLink> </li>
      <li className='relative border-b  text-center text-nowrap py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/portfolio/pending">PENDING TRANSACTIONS</NavLink> </li>
      <li className='relative border-b text-center text-nowrap py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/portfolio/history">TRANSACTION HISTORY</NavLink> </li>
      </ul>
      <div className='min-h-96 shadow my-4 p-4 bg-white rounded-md'>
              <Outlet/>


      </div>
    </div>
  )
}

export default DashboardPortfolio