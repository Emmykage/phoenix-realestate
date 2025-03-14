import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Aside from '../components/dashboard/Aside'


const UserLayouts = ({children}) => {
  const dispatch = useDispatch()
  const navigation = useNavigate()

  const {user} = useSelector(state => state.auth)

  if(user == null){(navigation('/auth/login'))}else{
  return (
    <div className='user dashboard bg-space'>
       <Aside/>
       <div className='main-content'>
        <div className='box-shadow p-2 bg-white box-shadow mx-1'> <h3 className='text-dark font-bold px-3'>Dashboard</h3> </div>
        <div className='w-max-1450'>

      
       
        {children}
        </div>

      </div>
      
    </div>
  )
}
}

export default UserLayouts