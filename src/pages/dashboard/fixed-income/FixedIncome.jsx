import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import UserButton from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { getInvestments } from "../../../redux/actions/investment";
import { moneyFormat } from "../../../utils/moneyFormat";
import { getInvestmentPortfolio, updatePortfolio } from "../../../redux/actions/portfolio";
import { getAccountProfile } from "../../../redux/actions/accountProfile";
import { SET_LOADER } from "../../../redux/app/app";

const FixedIncomeDashboard = () => {
  const {investments} = useSelector(state => state.investment)
    const {portfolio} = useSelector(state => state.portfolios)
        const {wallet, loading} = useSelector(state => state.wallet)
    
  const dispatch = useDispatch()
  const data = {
    investmentValue: 25000,
    roi: 0.03, // 12%
    earnings: 3000,
    duration: "3 Months",
    lastUpdated: "2025-05-08",
  };

  console.log(portfolio)

  const handleReinvest = () => {
    console.log("first")

  }


  useEffect(()=>{
    dispatch(getInvestmentPortfolio("fixed income"))
  },[])

     useEffect(()=>{
            dispatch(getAccountProfile())
      },[])



  useEffect(() => {
    dispatch(getInvestments())
  }, [])

  const handleInvestment = () => {
    dispatch(SET_LOADER(true))
     dispatch(updatePortfolio({
      id: portfolio?.id,
      portfolio: {
        amount: portfolio?.portfolio_investment

      }
    })).then(result => {
      if(updatePortfolio.fulfilled.match(result)){
        dispatch(SET_LOADER(false))
        dispatch(getInvestmentPortfolio("fixed income"))

      }
    })

  }

  const [formInput, setFormInput] = useState({amount: "", name: ""})
  const activeLink = "active text-gray-600 text-theme-alt px-5 py-1 text-sm font-medium"
  const inactiveLink = "text-gray-600 px-5 py-1 text-sm font-medium"



  return (
    <div className="min-h-screen bg-gray00 text-black py-6">
      <h1 className="text-2xl font-bold mb-6">Fixed Income</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-5 shadow-md">
                <h2 className="text-sm text-gray-400 mb-1">Withdrawable</h2>
                <p className="text-2xl font-semibold">{moneyFormat(portfolio?.total_investment ?? 0)}</p>
                <p className="text-xs text-gray-600 font-medium">{moneyFormat(portfolio?.virtual_total_investment ?? 0)}</p>
                
              </div>
               <div className="bg-white rounded-2xl p-5 shadow-md">
                <h2 className="text-sm text-gray-400 mb-1">Investment Value</h2>
                <p className="text-2xl font-semibold">{moneyFormat(portfolio?.amount ?? 0)}</p>
              </div>
              <div className="bg-white -gray-200 rounded-2xl p-5 shadow-md">
                <h2 className="text-sm text-gray-400 mb-1">ROI</h2>
                <p className="text-2xl font-semibold">{(data.roi * 100).toFixed(2)}%</p>
              </div>
              <div className="bg-white -gray-200 rounded-2xl p-5 shadow-md">
                <h2 className="text-sm text-gray-400 mb-1">Total Earnings</h2>
                <p className="text-2xl font-semibold">{moneyFormat(portfolio?.investment_interest ?? 0)}</p>
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

       

           { portfolio?.maturity && 
            <button  disabled={!portfolio?.maturity}
                    onClick={()=> handleReinvest()}
                    
                    className={`${portfolio?.maturity ? "bg-blue-500" : "bg-gray-400"}  group relative text-white px-4 py-2 rounded-lg`}>
                      <p className={`absolute w-max to-black left-0  text-xs -top-0 py-2 opacity-0 group-hover:opacity-100 bg-gray-400  group-hover:-top-10 transition-all ease-linear duration-200 text-gray-700 rounded text-left px-3`}> Re invest after maturity (3 months)</p>
                      Re-Invest
                      </button>
           }
           
           
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
