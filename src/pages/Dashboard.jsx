import React from 'react'
import { NavLink } from 'react-router-dom'
import Aside from '../components/dashboard/Aside'
import Main from '../components/dashboard/Main'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Aside/>
      <Main/>
    </div>
  )
}

export default Dashboard