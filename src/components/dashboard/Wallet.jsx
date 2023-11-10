import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { NavLink, Outlet } from 'react-router-dom'
import { usd_format } from '../misc/USD'
import { getUser } from '../../redux/actions/users'

const Wallet = () => {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.users)

  console.log(user)
  useEffect(() => {
      dispatch(getUser())
  }, [])
if(Object.keys(user).length === 0){
  return(
    <h2>Loading</h2>
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
              <h2>$00.0</h2>
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