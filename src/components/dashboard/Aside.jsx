import React from 'react'

const Aside = () => {
  return (
        <aside className='pt-8  text-left'>
          <div className='logo'>
            <h3>PhoenixHomes</h3>
          </div>
          <ul className='nav-list border border-success d-none'>
            <li className='text-primary pt-10'>Wallet</li>
            <li className='mt-6 visible'>Investors Account</li>
            <li>Investment Prefernces</li>
          </ul>
          
        </aside>
  )
}

export default Aside