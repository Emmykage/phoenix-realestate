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
console.log(user)
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
              <NavLink to={'/dashboard/wallet/wallet'}>Wallet</NavLink>
            </div>
            <div className='card'><p>Portfolios</p>
              <h2>{usd_format(user.total_asset)}</h2>
              <NavLink to={'/dashboard/wallet/portfolios'}>View</NavLink></div>
            <div className='card'><p>Bonus</p>
              <h2>$00.0</h2>
              <NavLink to={'/dashboard/wallet/bonuses'} className='text-bold'>View</NavLink></div>

        </div>
    <>
        <Outlet/>

          
    </>
    </>

  )
}
}

export default Wallet