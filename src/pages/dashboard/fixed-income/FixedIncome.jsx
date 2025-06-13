import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import UserButton from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { getInvestments } from "../../../redux/actions/investment";
import { moneyFormat } from "../../../utils/moneyFormat";
import { getInvestmentPortfolio, updatePortfolio, userReinvest } from "../../../redux/actions/portfolio";
import { getAccountProfile } from "../../../redux/actions/accountProfile";
import { SET_LOADER } from "../../../redux/app/app";
import { toast } from "react-toastify";

const FixedIncomeDashboard = () => {
  const {investments} = useSelector(state => state.investment)
    const {portfolio} = useSelector(state => state.portfolios)
        const {wallet, loading} = useSelector(state => state.wallet)
    console.log(portfolio)
  const dispatch = useDispatch()
  const data = {
    investmentValue: 25000,
    roi: 0.03, // 12%
    earnings: 3000,
    duration: "3 Months",
    lastUpdated: "2025-05-08",
  };

  const handleReinvest = () => {
    console.log("first")

    dispatch(SET_LOADER(true))
    dispatch(userReinvest(portfolio.id)).then(result => {
      if(userReinvest.fulfilled.match(result)){
        dispatch(SET_LOADER(false))
        console.log("re-invest suceess=>", result.payload.message)
                toast(result.payload.message, {type: "success"})

      }
      else{
        toast(result.payload.message, {type: "error"})
                dispatch(SET_LOADER(false))

      }
    })
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

           { portfolio?.maturity && 
            <button  disabled={!portfolio?.maturity}
                onClick={()=> handleReinvest()}
                
                className={`${portfolio?.maturity ? "bg-blue-500" : "bg-gray-400"}  group relative text-white px-4 py-2 rounded-lg`}>
                  Re-Invest
              </button>
           }  

       <ul className='flex mt-8 overflow-x-auto'>
              <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/fixed-income/transactions">TRANSACTIONS</NavLink> </li>
              {/* <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/account/profile">PROFILE</NavLink> </li> */}
              {/* <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/fixed-income/withdrawal">WITHDRAW</NavLink> </li> */}
              <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/fixed-income/deposit">DEPOSIT</NavLink> </li>
            </ul>

           <div className='min-h-96 shadow my-4 p-1 bg-white rounded-md'>
                         <Outlet/>
           
           
                 </div>
    </div>
  );
};

export default FixedIncomeDashboard;
