import React, { useState } from 'react'
import Withdraw from '../transaction/Withdraw'
import Deposit from '../transaction/Deposite'
import { NavLink } from 'react-router-dom'

const Wallet = ({toggleModal, setToggleModal}) => {

  return (
    <>
    <div className='grid grid-3 cards text-left p-3'>
            <div className='pt-6 card'>
              <p>Wallet</p>
              <h2>$119.0</h2>
              <NavLink to={'/dashboard/wallet/'}>Wallet</NavLink>
            </div>
            <div className='card'><p>Portfolios</p>
              <h2>$119.0</h2>
              <NavLink to={'/dashboard/portfolios'}>View</NavLink></div>
            <div className='card'><p>Bonus</p>
              <h2>$119.0</h2>
              <NavLink to={'/dashboard/bonuses'} className='text-bold'>View</NavLink></div>

        </div>
    <div className='grid grid-2 gap-2'>
        <Withdraw toggleModal={toggleModal} setToggleModal={setToggleModal}/>
        <Deposit toggleModal={toggleModal} setToggleModal={setToggleModal}/>

          
    </div>
    </>

  )
}

export default Wallet