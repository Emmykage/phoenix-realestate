import React from 'react'
import Withdraw from '../transaction/Withdraw'

const Main = () => {
  return (
    <>
         <div className='main-content'>
          <div className='top-details'>
            <div className=''>
              <div className='text-left'>
                <h2>welcome, Yankee</h2>
                <p >Individual Account</p>
              </div>

            </div>
            
              
          </div>
          <div className='grid grid-3 cards text-left p-3'>
            <div className='pt-6 card'>
              <p>Wallet</p>
              <h2>$119.0</h2>
              <a>Wallet</a>
            </div>
            <div className='card'><p>Portfolios</p>
              <h2>$119.0</h2>
              <a>View</a></div>
            <div className='card'><p>Portfolio</p>
              <h2>$119.0</h2>
              <a className='text-bold'>Wallet</a></div>

          </div>
          <div className='grid grid-2 gap-2'>
          <Withdraw/>
          <Withdraw/>

          </div>
        </div>
    </>
  )
}

export default Main