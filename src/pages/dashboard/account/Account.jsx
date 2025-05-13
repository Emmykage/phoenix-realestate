import React from 'react'
import { Banknote, Building, PieChart, Wallet } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import DashboardInfo from '../../../components/dashboard-info/DashboardInfo';

const DashboardHomeAccount = () => {
  const {user} = useSelector(state => state.auth)

  const activeLink = "active text-gray-600 text-theme-alt px-5 py-1 text-sm font-medium"
  const inactiveLink = "text-gray-600 px-5 py-1 text-sm font-medium"
  return (
    <div className='max-w-7x mx-0 sm:m-auto  px-2 account'>
      <div className='flex justify-between'>
      <h2 className='text-left text-gray-900 text-2xl font-semibold my-3'><NavLink to={'dashboard/account/'} className={'hover:text-gray-500'}> My Account </NavLink> </h2>
  

      </div>

      <DashboardInfo user={user}/>
      <ul className='flex mt-8 overflow-x-auto'>
        <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/account/identity">ACCOUNT</NavLink> </li>
        <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/account/withdrawal">WITHDRAW</NavLink> </li>
        <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/account/deposit">DEPOSIT</NavLink> </li>
      </ul>
      <div className='min-h-96 shadow my-4 p-4 bg-white rounded-md'>
        <Outlet/>


      </div>
    </div>
  )
}



const stats = [
  {
    title: 'Total Investments',
    value: '₦5,200,000',
    icon: <PieChart className="h-6 w-6 text-white" />,
    bg: 'bg-blue-600',
  },
  {
    title: 'Earnings',
    value: '₦830,000',
    icon: <Banknote className="h-6 w-6 text-white" />,
    bg: 'bg-green-600',
  },
  {
    title: 'Properties',
    value: '12',
    icon: <Building className="h-6 w-6 text-white" />,
    bg: 'bg-yellow-600',
  },
  {
    title: 'Wallet Balance',
    value: '₦210,000',
    icon: <Wallet className="h-6 w-6 text-white" />,
    bg: 'bg-purple-600',
  },
];



export default DashboardHomeAccount