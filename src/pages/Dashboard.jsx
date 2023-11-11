import React from 'react'
import { Outlet } from 'react-router-dom'
import Aside from '../components/dashboard/Aside'
import Main from '../components/dashboard/Main'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const {user} = useSelector(state => state.users)
  console.log(user)
  return (
    <div className='dashboard '>
      <Aside/>
      <div className='main-content'>
          <div className='top-details box-shadow'>
            <div className=''>
              <div className='text-left'>
                <h2>welcome, {user.first_name}</h2>
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