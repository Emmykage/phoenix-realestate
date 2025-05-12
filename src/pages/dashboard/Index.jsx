import React from 'react'
import { Banknote, Building, PieChart, Wallet } from 'lucide-react';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import userImage from "../../assets/images/pictures/user.png"
import { moneyFormat } from '../../utils/moneyFormat';

const DashboardHome = () => {
  const {user} = useSelector(state => state.auth)

  const activeLink = "active text-gray-600 text-theme-alt px-5 py-1 text-sm font-medium"
  const inactiveLink = "text-gray-600 px-5 py-1 text-sm font-medium"
  return (
    <div className='max-w-7x mx-0 sm:m-auto  px-2 account'>
      <div className='flex justify-between'>
      <h2 className='text-left text-gray-900 text-2xl font-semibold my-3'><NavLink to={'dashboard/account/'} className={'hover:text-gray-500'}> My Account </NavLink> </h2>
  

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
          {/* <div className='flex-1 text-center md:text-left'>
            <p className=' text-lg md:text-2xl font-semibold'>Balance </p>
            <span className='md:text-xl text-base text-gray-600 font-semibold'>$00.00</span>
          </div> */}

        </div>
      
      </div>
     
      <div className='min-h-96 shadow my-4 p-4 bg-white rounded-md'>
        <DashboardSummary/>


      </div>
    </div>
  )
}


const DashboardSummary = () => {
    const {wallet} = useSelector(state => state.wallet)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
         <div
          className="bg-white rounded-2xl shadow p-4 flex items-center gap-4"
        >
          <div className={`rounded-full p-3 bg-blue-600`}>
          <Wallet className="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 className="text-gray-500 text-sm">Wallet Balance</h4>
            <p className="text-xl font-semibold">{moneyFormat(wallet?.wallet_balance)}</p>
          </div>
        </div>

        <div
          className="bg-white rounded-2xl shadow p-4 flex items-center gap-4"
        >
          <div className={`rounded-full p-3 bg-green-600`}>
          <Banknote className="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 className="text-gray-500 text-sm">Earnings</h4>
            <p className="text-xl font-semibold">{moneyFormat(wallet?.wallet_balance)}</p>
          </div>
        </div>


        <div
          className="bg-white rounded-2xl shadow p-4 flex items-center gap-4"
        >
          <div className={`rounded-full p-3 bg-yellow-600`}>
          <Building  className="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 className="text-gray-500 text-sm">Properties</h4>
            <p className="text-xl font-semibold">{12}</p>
          </div>
        </div>

        <div
          className="bg-white rounded-2xl shadow p-4 flex items-center gap-4"
        >
          <div className={`rounded-full p-3 bg-purple-600`}>
          <PieChart className="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 className="text-gray-500 text-sm">Total Investment</h4>
            <p className="text-xl font-semibold">{moneyFormat(wallet?.wallet_balance)}</p>
          </div>
        </div>
      
    </div>
  );
};


export default DashboardHome