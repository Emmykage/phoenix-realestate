import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Aside from '../components/dashboard/Aside'
import Main from '../components/dashboard/Main'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Aside/>
      <div className='main-content'>
          <div className='top-details'>
            <div className=''>
              <div className='text-left'>
                <h2>welcome, Yankee</h2>
                <p >Individual Account</p>
              </div>

            </div>
            
              
          </div>
          <Outlet/>

          </div>

    
    </div>
  )
}

export default Dashboard