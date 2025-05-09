import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const FixedIncomeDashboard = () => {
  const data = {
    investmentValue: 25000,
    roi: 0.12, // 12%
    earnings: 3000,
    duration: "12 Months",
    lastUpdated: "2025-05-08",
  };
  const activeLink = "active text-gray-600 text-theme-alt px-5 py-1 text-sm font-medium"
  const inactiveLink = "text-gray-600 px-5 py-1 text-sm font-medium"
 

  return (
    <div className="min-h-screen bg-gray00 text-black py-6">
      <h1 className="text-2xl font-bold mb-6">Fixed Income Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-5 shadow-md">
          <h2 className="text-sm text-gray-400 mb-1">Investment Value</h2>
          <p className="text-2xl font-semibold">${data.investmentValue.toLocaleString()}</p>
        </div>
        <div className="bg-white -gray-200 rounded-2xl p-5 shadow-md">
          <h2 className="text-sm text-gray-400 mb-1">Return on Investment</h2>
          <p className="text-2xl font-semibold">{(data.roi * 100).toFixed(2)}%</p>
        </div>
        <div className="bg-white -gray-200 rounded-2xl p-5 shadow-md">
          <h2 className="text-sm text-gray-400 mb-1">Total Earnings</h2>
          <p className="text-2xl font-semibold">${data.earnings.toLocaleString()}</p>
        </div>
        <div className="bg-white -gray-200 rounded-2xl p-5 shadow-md">
          <h2 className="text-sm text-gray-400 mb-1">Duration</h2>
          <p className="text-2xl font-semibold">{data.duration}</p>
        </div>
      </div>

      {/* Detailed Section */}
      <div className="bg-gray-100 rounded-2xl p-6 shadow-md space-y-4">
        <h2 className="text-xl font-semibold">Investment Overview</h2>
        <p className="text-gray-600">
          Your investment of <span className="font-semibold">${data.investmentValue}</span> has yielded a return of <span className="font-semibold">${data.earnings}</span> over a period of <span className="font-semibold">{data.duration}</span>. This is a ROI of <span className="font-semibold">{(data.roi * 100).toFixed(2)}%</span>.
        </p>
        <p className="text-sm text-gray-500">Last updated: {data.lastUpdated}</p>
      </div>

       <ul className='flex mt-8 overflow-x-auto'>
              <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/fixed-income/transactions">TRANSACTIONS</NavLink> </li>
              {/* <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/account/profile">PROFILE</NavLink> </li> */}
              <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/fixed-income/withdrawal">WITHDRAW</NavLink> </li>
              <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/fixed-income/deposit">DEPOSIT</NavLink> </li>
            </ul>

           <div className='min-h-96 shadow my-4 p-1 bg-white rounded-md'>
                         <Outlet/>
           
           
                 </div>
    </div>
  );
};

export default FixedIncomeDashboard;
