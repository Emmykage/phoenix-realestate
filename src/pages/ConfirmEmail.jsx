import React from 'react'
import { useNavigate } from 'react-router-dom'

const ConfirmEmail = () => {
  const navigation = useNavigate()
  const logout = () => {
    localStorage.setItem('phoenix_auth', null)
    navigation('/auth/login')
  }
  return (
    <div>
        <h1 className='center my-4 py-4'>Email Confirmed </h1>
        <h2><a onClick={logout}>Login</a> </h2>
    </div>
  )
}

export default ConfirmEmail