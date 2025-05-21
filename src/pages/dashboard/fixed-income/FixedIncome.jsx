import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import UserButton from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { getInvestments } from "../../../redux/actions/investment";
import { moneyFormat } from "../../../utils/moneyFormat";
import { getInvestmentPortfolio } from "../../../redux/actions/portfolio";
import { getAccountProfile } from "../../../redux/actions/accountProfile";

const FixedIncomeDashboard = () => {
  const {investments} = useSelector(state => state.investment)
    const {portfolio} = useSelector(state => state.portfolios)
        const {wallet, loading} = useSelector(state => state.wallet)
    
  const dispatch = useDispatch()
  const data = {
    investmentValue: 25000,
    roi: 0.12, // 12%
    earnings: 3000,
    duration: "12 Months",
    lastUpdated: "2025-05-08",
  };


  useEffect(()=>{
    dispatch(getInvestmentPortfolio("fixed income"))
  },[])

     useEffect(()=>{
            dispatch(getAccountProfile())
      },[])



  useEffect(() => {
    dispatch(getInvestments())
  }, [])

  const [formInput, setFormInput] = useState({amount: "", name: ""})
  const activeLink = "active text-gray-600 text-theme-alt px-5 py-1 text-sm font-medium"
  const inactiveLink = "text-gray-600 px-5 py-1 text-sm font-medium"



  return (
    <div className="min-h-screen bg-gray00 text-black py-6">
      <h1 className="text-2xl font-bold mb-6">Fixed Income</h1>

      {/* <div className="m-auto border my-10 bg-white p-4 rounded-lg max-w-3xl">
        <h3 className="mb-4">Initiate a deposit</h3>


      <form action=" ">
      <div className="flex  flex-col gap-x-8 md:gap-y- text-gray-500 text-left">
        <div className='flex-1'>
            <label for="first-name" className="text-left block text-sm font-semibold">Amount</label>
            <div className="mt-2.5">
                <input type="number" name="amount" id="amount" value={formInput?.amount}  autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
            </div>
        </div>
    
        <div className='flex-1'>
            <label for="name" className="block text-sm font-semibold">Last name</label>
            <div className="mt-2.5">
                <input type="text" name="name" id="name" value={formInput?.name} disabled  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
            </div>
        </div>
        </div>

        <UserButton />     </form>
        </div> */}

      {/* Summary Cards */}



       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-5 shadow-md">
                <h2 className="text-sm text-gray-400 mb-1">Investment Value</h2>
                <p className="text-2xl font-semibold">{moneyFormat(portfolio?.portfolio_investment)}</p>
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
          Your investment of <span className="font-semibold">{moneyFormat(wallet?.fixed_income)}</span> has yielded a return of <span className="font-semibold">{moneyFormat(portfolio?.investment_interest?.toLocaleString())}</span> over a period of <span className="font-semibold">{data.duration}</span>. This is a ROI of <span className="font-semibold">{(data.roi * 100).toFixed(2)}%</span>.
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
