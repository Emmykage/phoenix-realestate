import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Loader
import { NavLink, Outlet } from 'react-router-dom'
import { usd_format } from '../misc/USD'
import { getUser } from '../../redux/actions/users'
import Loader from '../loader/Loader'

const Wallet = () => {
  const dispatch = useDispatch()
  const {user, error, message, loading} = useSelector(state => state.users)
  const pendingTransaction = useSelector(state => state.transactions.loading)
  useEffect(() => {
      dispatch(getUser())
  }, [pendingTransaction])
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
              <p>Wallet</p>
              <h2>{usd_format(user.wallet.wallet_balance)}</h2>
              <NavLink to={'/dashboard/wallet/wallet'} className={'items-center flex gap-2'}>Wallet 
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
              </NavLink>
            </div>
            <div className='card'><p>Portfolios</p>
              <h2>{usd_format(user.total_asset)}</h2>
              <NavLink to={'/dashboard/wallet/portfolios'} className={'items-center flex gap-2'}>
                View
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>

                </NavLink></div>
            <div className='card'><p>Bonus</p>
              <h2>$00.0</h2>
              <NavLink to={'/dashboard/wallet/bonuses'} className='items-center flex gap-2'>
                View 
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>

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