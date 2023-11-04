import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo3.jpg'

const Aside = () => {
  return (
        <aside className='box-shadow pt-8  text-left'>
          <div className='dash-logo'>
            
            <><NavLink to="/"> <img src={logo} /> </NavLink></>
          </div>
          <ul className='nav-list  d-none'>
            <li className='text-primary pt-10'><NavLink to={'/dashboard/wallet/wallet'}>Wallet</NavLink></li>
            <li className='mt-6 visible'><NavLink to={'/dashboard/account'}>Investors Account</NavLink></li>
            <li><NavLink to={"/dashboard/reference"}>Investment Prefernces</NavLink></li>
          </ul>
          
        </aside>
  )
}

export default Aside