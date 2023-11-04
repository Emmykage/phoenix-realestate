import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { userLog } from '../redux/auth/user_authentication'

const UserLayout = ({children}) => {
  const dispatch = useDispatch()
  const navigation = useNavigate()

  const {user} = useSelector(state => state.user)
  useEffect(()=> {
    dispatch(userLog())
  }, [])
  if(user == null){(navigation('/auth/login'))}else{
  return (
    <div>
      {children}
      
    </div>
  )
}
}

export default UserLayout