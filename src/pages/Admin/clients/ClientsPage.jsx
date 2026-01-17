import React, { useEffect, useState } from 'react';
import './client.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getClient } from '../../../redux/actions/users';

import { moneyFormat } from '../../../utils/moneyFormat';
import { FaArrowLeft } from "react-icons/fa";
import { compoundInterest, createInterest } from '../../../redux/actions/interest';
import AppModal from '../../../components/modals/AppModal';
import { toast } from 'react-toastify';
import { SET_LOADER } from '../../../redux/app/app';
import { updatePortfolio } from '../../../redux/actions/portfolio';


const UserProfileDashboard = () => {

  const { id } = useParams();
  const [selectedPortfolio, setSelectedPortfolio] = useState(null)
  const [toggleModal, setToggleModal] = useState(false)
  const [toggleCompoundModal, setToggleCompoundModal] = useState(false)
  const [toggleMaturedModal, setToggleMaturedModal] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.users);
  const [interest, setInterest] = useState(null)
  useEffect(() => {
  dispatch(getClient(id))
  }, [])

  const user_ = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    role: "Investor",
    availableBalance: 5000,
    totalEarnings: 2400,
    portfolios: [
      { name: "Real Estate Fund", value: 15000 },
      { name: "Tech Startup Equity", value: 12000 },
      { name: "Agriculture Investment", value: 8000 },
    ],
  };


  const handlePortfolioInterest = (id_) => {
    dispatch(SET_LOADER(true))


  dispatch(createInterest({portfolio_interest : {
    portfolio_id: id_,
    interest
  }
})).then(result => {
  if(createInterest.fulfilled.match(result)) {
    setToggleModal(false)
    toast(result.payload.message)
        dispatch(SET_LOADER(false))

    dispatch(getClient(id))
  }else{
        dispatch(SET_LOADER(false))

    toast(result.payload.message)

  }
})
}

const handleCompondInterest = (id_) => {
    dispatch(SET_LOADER(true))

  dispatch(compoundInterest(id_)).then(result => {
  if(compoundInterest.fulfilled.match(result)) {
    setToggleCompoundModal(false)
    toast(result.payload.message, {type: "success"})
        dispatch(SET_LOADER(false))

    dispatch(getClient(id))
  }else{
    toast(result.payload.message)
        dispatch(SET_LOADER(false))


  }
})
}

const handlePortfolioMaturity =(id_) => {
    dispatch(SET_LOADER(true))
  dispatch(updatePortfolio({id: id_, portfolio: {
    matured: true
  }})).then(result => {
  if(updatePortfolio.fulfilled.match(result)) {
    setToggleMaturedModal(false)
    toast(result.payload?.message || "maturity activated", {type: "success"})
        dispatch(SET_LOADER(false))

    dispatch(getClient(id))
  }else{
    toast(result.payload?.message || "failed to activate")
        dispatch(SET_LOADER(false))


  }
})
}


const handleSelectedPortfolio = (portfolio) => {
  setSelectedPortfolio(portfolio)
  setToggleModal(true)
}

  return (
    <>
    <div className='mt-10'>
    <button onClick={() => navigate(-1)}><FaArrowLeft /> </button>
    </div>
    
    <div className="mt-5 mx-auto p-6 bg-white shadow-md rounded-2xl space-y-2 md:space-y-6">
      <div className="flex md:flex-row flex-col justify-between items-center border-b pb-4">
       
        <div className='bg-red- text-center  md:text-left'>
          <h2 className="text-xl font-bold">User Profile</h2>
          <p className="text-sm font-semibold text-gray-500">{user?.role}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">{user?.profile?.last_name}</p>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
      </div>

      <div className='flex gap-4'>
        <span className='block py-2 border border-gray-200 flex-1 px-4 rounded'>
          {user?.first_name}
        </span>
         <span  className='block py-2 border border-gray-200 flex-1 px-4 rounded'>
          {user?.last_name}
        </span>
      </div>
         <div className='space-y-3'>
          
      <div className='flex justify-between'></div>
      <div className='flex flex-col md:flex-row gap-4'>

        <div className='flex-1'>
          <p>Purpose</p>
          <span className='block py-2 border border-gray-200 flex-1 px-4 rounded'>
          {user?.profile?.investment_purpose ?? "N/A"}
        </span>

        </div>

        <div className='flex-1'>
          <p>Type</p>               
        
          <span  className='block py-2 border border-gray-200 flex-1 px-4 rounded'>
            {user?.profile?.investment_property ?? "N/A"}
          </span>
        </div>

      </div>
      <div className='flex flex-col md:flex-row gap-4 justify-between'>

        <div className='flex-1 gap-4'>
          <p>Initial Capital</p>
          <span className='block py-2 border border-gray-200 flex-1 px-4 rounded'>
            {user?.profile?.initial_investment ?? "N/A"}
          </span>
        </div>

        <div className='flex-1'>
          


        <p>Account Type</p>
         <span  className='block py-2 border border-gray-200 flex-1 px-4 rounded'>
          {user?.profile?.investor_type ?? "N/A"}
        </span>
        
        </div>
      </div>

      </div>  

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Available Balance</p>
            <p className="text-lg font-semibold text-green-600">
              {moneyFormat(user?.wallet?.wallet_balance ?? 0)}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Total Earnings</p>
            <p className="text-lg font-semibold text-blue-600">
            {moneyFormat(user?.total_earnings ?? 0)}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg col-span-2">
            <p className="text-gray-500">Total Investment</p>
            <p className="text-lg font-semibold text-indigo-600">
            {moneyFormat(user?.total_investment ?? 0)}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-md font-medium mb-2">Investment Portfolio</h3>
          <ul className="space-y-2">
            {user?.portfolios?.map((portfolio, idx) => (
              <li
                key={idx}
                className="flex justify-between relative items-center p-3 gap-1 bg-gray-100 rounded-md"
              >
                {(portfolio?.status === "inactive" || portfolio?.status ===  "withdrawn") && (
                <div className='absolute flex text-center justify-center items-center top-0 left-0 w-full h-full bg-gray-600/30'>
                  <span className='text- font-semibold text-lg text-red-600 rounded-lg bg-gray-900/60 px-4 py-2'>
                    {portfolio?.status}

                  </span>
                </div>
                )
                }
                <p>
                   <span className='block'>{portfolio?.name}</span>
                    <span className='block font-semibold text-green-900'>{
                      moneyFormat(portfolio?.amount)}</span>
                      <span>
                         {portfolio?.status}
                      </span>
                  
                </p>
                <div className='gap-4 flex-1 flex justify-center items-center'>
                  <button 
                    onClick={()=> {handleSelectedPortfolio(portfolio)}} className='text-green-700 bg-green-200 md:px-3 py-1 rounded text-xs md:text-base px-2'>Generate Interest</button>
                 <button 
                onClick={()=> {
                  setToggleCompoundModal(true)
                  setSelectedPortfolio(portfolio)}} 
                className='text-blue-700 bg-blue-200 md:px-3 py-1 rounded text-xs md:text-base'>
                  Compound Interest
                
                </button>
               
                </div>
                <div>
                  <button
                  onClick={() => {
                    setSelectedPortfolio(portfolio);
                    setToggleMaturedModal(true);
                  }}
                   className={`${portfolio?.matured ? "text-purple-500" : "text-gray-500"} font-semibold text-xs block text-center"`}>{portfolio?.matured ? "matured" : "not matured"}</button>
                   <span className="font-semibold block text-center text-gray-800">
                    {moneyFormat(portfolio.investment_interest)}
                  </span>

                </div>
               
               
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <AppModal open={toggleMaturedModal} onClose={() => {setToggleMaturedModal(false)}} title="User Portfolio">
      <div>
         <h2 className="text-2xl  font-bold text-center text-purple-600">Active Maturity</h2>
      <h2 className="text-lg font-bold">Portfolio Details</h2>
      <p className="text-sm text-gray-500 uppercase">{selectedPortfolio?.portfolio_name}</p>
      <p className="text-sm text-gray-500 uppercase"><span className='text-green font-semibold'>Mature:</span>  <span className={`${selectedPortfolio?.matured ? "text-green-600" : "text-gray-600"}`}> {selectedPortfolio?.matured ? "True" : "false"} </span> </p>
  


     
      <div className='gap-4 flex my-6'>
        <button
        onClick={()=> setToggleMaturedModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</button>
        <button
        onClick={()=> handlePortfolioMaturity(selectedPortfolio.id)}
        className=" bg-purple-500 md:px-3  text-white px-4 py-2 rounded-md">Activate</button>
      </div>
    </div>
    </AppModal>

    <AppModal open={toggleCompoundModal} onClose={() => {}} title="User Portfolio">
      <div>
         <h2 className="text-2xl  font-bold text-center text-blue-600">Compound Portfolio Interest</h2>
      <h2 className="text-lg font-bold">Portfolio Details</h2>
      <p className="text-sm text-gray-500 uppercase">{selectedPortfolio?.portfolio_name}</p>
      <div className="mt-4">
        <p className="text-md font-semibold">Portfolio Name: Real Estate Fund</p>
        <p className="text-sm text-gray-500">Investment Value: {moneyFormat(selectedPortfolio?.portfolio_investment ?? 0)}</p>
        <p className="text-sm text-gray-500">Investment Interest: {moneyFormat(selectedPortfolio?.investment_interest ?? 0)}</p>
      </div>


     
      <div className='gap-4 flex my-6'>
        <button
        onClick={()=> setToggleCompoundModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</button>
        <button
        onClick={()=> handleCompondInterest(selectedPortfolio.id)}
        className=" bg-blue-500 md:px-3  text-white px-4 py-2 rounded-md">Compond Interest</button>
      </div>
    </div>
    </AppModal>


    <AppModal open={toggleModal} onClose={() => {}} title="User Portfolio">
      <div>
         <h2 className="text-2xl  font-bold text-center">Generate Portfolio Interest</h2>
      <h2 className="text-lg font-bold">Portfolio Details</h2>
      <p className="text-sm text-gray-500 uppercase">{selectedPortfolio?.portfolio_name}</p>
      <div className="mt-4">
        <p className="text-md font-semibold">Portfolio Name: Real Estate Fund</p>
        <p className="text-sm text-gray-500">Investment Value: {moneyFormat(selectedPortfolio?.portfolio_investment)}</p>
        <p className="text-sm text-gray-500">Investment Interest: {moneyFormat(selectedPortfolio?.investment_interest)}</p>
      </div>


      <div>
        <p className='my-5 font-semibold text-green-600'>Generate {selectedPortfolio?.portfolio_name === "fixed income" ? "3%" : "5%" } Interest</p>
            <label htmlFor="interest" className='font-medium text-gray-600'>Enter Interest Rate(%) </label>
        <input id='interst' type="number" value={interest} onChange={(e) => setInterest(e.target.value)} placeholder='Specify interest' className='border'/>
      </div>
      <div className='gap-4 flex my-6'>
        <button
        onClick={()=> setToggleModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</button>
        <button
        onClick={()=> handlePortfolioInterest(selectedPortfolio.id)}
        className="bg-green-500 text-white px-4 py-2 rounded-md">Generate Interest</button>
      </div>
    </div>
    </AppModal>
    </>
  );
};

export default UserProfileDashboard;
