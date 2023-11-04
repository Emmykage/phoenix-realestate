import React, { useState } from 'react'

import { NavLink, Outlet } from 'react-router-dom'

const Wallet = () => {

  return (
    <>
    <div className='grid gap-2 grid-3 cards text-left p-3'>
            <div className='pt-6 card'>
              <p>Wallet</p>
              <h2>$119.0</h2>
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

export default Wallet