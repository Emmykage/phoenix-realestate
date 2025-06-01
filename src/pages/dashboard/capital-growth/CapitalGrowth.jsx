import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { getInvestmentPortfolio } from "../../../redux/actions/portfolio";
import { getAccountProfile } from "../../../redux/actions/accountProfile";
import { moneyFormat } from "../../../utils/moneyFormat";

const CapitalGrowth = () => {
  const data = {
    investmentValue: 25000,
    roi: 0.12, // 12%
    earnings: 3000,
    duration: "Monthly",
    lastUpdated: "2025-05-08",
  };

  
    const dispatch = useDispatch()
    const {portfolio} = useSelector(state => state.portfolios)
    const {wallet} = useSelector(state => state.wallet)
  
  useEffect(()=>{
    dispatch(getInvestmentPortfolio("capital growth"))
  },[])




  useEffect(()=>{
    dispatch(getAccountProfile())
  },[])

  const activeLink = "active text-gray-600 text-theme-alt px-5 py-1 text-sm font-medium"
  const inactiveLink = "text-gray-600 px-5 py-1 text-sm font-medium"
 

  return (
    <div className="min-h-screen bg-gray00 text-black py-6">
      <h1 className="text-2xl font-bold text-green-700 mb-6">Capital Growth</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-5 shadow-md">
          <h2 className="text-sm text-gray-400 mb-1">Investment Value</h2>
          <p className="text-2xl font-semibold">{moneyFormat(portfolio?.portfolio_investment?.toLocaleString())}</p>
        </div>
        <div className="bg-white -gray-200 rounded-2xl p-5 shadow-md">
          <h2 className="text-sm text-gray-400 mb-1">ROI</h2>
          <p className="text-2xl font-semibold">{(data.roi * 100).toFixed(2)}%</p>
        </div>
        <div className="bg-white -gray-200 rounded-2xl p-5 shadow-md">
          <h2 className="text-sm text-gray-400 mb-1">Total Earnings</h2>
          <p className="text-2xl font-semibold">{moneyFormat(portfolio?.investment_interest?.toLocaleString())}</p>
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
               Your investment of <span className="font-semibold">{moneyFormat(wallet?.capital_growth)}</span> has yielded a return of <span className="font-semibold">{moneyFormat(portfolio?.investment_interest?.toLocaleString())}</span> over a period of <span className="font-semibold">{data.duration}</span>. This is a ROI of <span className="font-semibold">{(data.roi * 100).toFixed(2)}%</span>.
             </p>
             <p className="text-sm text-gray-500">Last updated: {data.lastUpdated}</p>
        </div>

       <ul className='flex mt-8 overflow-x-auto'>
              <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/capital-growth/transactions">TRANSACTIONS</NavLink> </li>
              {/* <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/account/profile">PROFILE</NavLink> </li> */}
              <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/capital-growth/withdrawal">WITHDRAW</NavLink> </li>
              <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/capital-growth/deposit">DEPOSIT</NavLink> </li>
            </ul>

           <div className='min-h-96 shadow my-4 p-1 bg-white rounded-md'>
                         <Outlet/>
           
           
                 </div>
    </div>
  );
};

export default CapitalGrowth;
