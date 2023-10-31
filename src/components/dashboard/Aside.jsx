import React from 'react'
import { NavLink } from 'react-router-dom'

const Aside = () => {
  return (
        <aside className='pt-8  text-left'>
          <div className='logo'>
            <h3>PhoenixHomes</h3>
          </div>
          <ul className='nav-list border border-success d-none'>
            <li className='text-primary pt-10'><NavLink to={'/dashboard/wallet'}>Wallet</NavLink></li>
            <li className='mt-6 visible'><NavLink to={'/dashboard/account'}>Investors Account</NavLink></li>
            <li><NavLink to={"/dashboard/reference"}>Investment Prefernces</NavLink></li>
          </ul>
          
        </aside>
  )
}

export default Aside