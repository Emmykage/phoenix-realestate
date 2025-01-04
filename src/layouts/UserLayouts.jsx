import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { userLog } from '../redux/auth/user_authentication'
import Aside from '../components/dashboard/Aside'
import { getUser } from '../redux/actions/users'

const UserLayouts = ({children}) => {
  const dispatch = useDispatch()
  const navigation = useNavigate()

  const {user} = useSelector(state => state.auth)
  useEffect(()=> {
    dispatch(userLog())
  }, [])
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