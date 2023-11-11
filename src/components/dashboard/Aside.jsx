import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo1.jpg'

const Aside = () => {
  return (
        <aside className='box-shadow pt-8  text-left'>
          <div className='dash-logo'>
            
            <><NavLink to="/" className="block"> <img src={logo} /> </NavLink></>
          </div>
          <ul className='nav-list  d-none'>
            <li className='primary-text pt-10'><NavLink to={'/dashboard/wallet/wallet'}>Wallet</NavLink></li>
            <li className=' primary-text mt-6 visible'><NavLink to={'/dashboard/account'}>Investors Account</NavLink></li>
            <li className='primary-text'><NavLink to={"/dashboard/reference"}>Investment Prefernces</NavLink></li>
          </ul>
          
        </aside>
  )
}

export default Aside