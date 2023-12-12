import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { usd_format } from '../misc/USD'
import { getUser } from '../../redux/actions/users'
import Loader from '../loader/Loader'
import { IoWalletOutline } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const Wallet = () => {
  const dispatch = useDispatch()
  const {user, error, message, loading} = useSelector(state => state.users)
  const pendingTransaction = useSelector(state => state.transactions.loading)
  const mes = useSelector(state => state.earnings.loading)


  useEffect(() => {
      dispatch(getUser())
  }, [pendingTransaction, mes])
if(error){
  return (
    <h3 className='text-center'>{message}</h3>
  )
}

  if(loading){
    return(
    <h2><Loader/></h2>
  )
}else{


  return (
    <>
    <div className='grid gap-2 grid-3 cards text-left p-3'>
            <div className='pt-6 card'>
              <p><IoWalletOutline className='icon'/></p>

              <h2>{usd_format(user.wallet.wallet_balance)}</h2>
              <NavLink to={'/dashboard/wallet/wallet'} className={'items-center flex gap-2'}>Wallet <FaArrowRight/>
              </NavLink>
            </div>
            <div className='card'><p><FaFolderOpen className='icon'/></p>
              <h2>{usd_format(user.total_asset)}</h2>
              <NavLink to={'/dashboard/wallet/portfolios'} className={'items-center flex gap-2 text-gray'}>
              Portfolios
              <FaArrowRight/>
                </NavLink></div>
            <div className='card'><p><MdAttachMoney className='icon'/></p>
              <h2>{usd_format(user.net_earnings)}</h2>
              <NavLink to={'/dashboard/wallet/bonuses'} className='items-center flex gap-2'>
                Earnings 
                <FaArrowRight/>
              </NavLink></div>

        </div>
    <>
        <Outlet/>

          
    </>
    </>

  )
}
}

export default Wallet