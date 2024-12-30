import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { userLog } from '../redux/auth/user_authentication'

const MainLayout = ({children}) => {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(userLog())
  },[])
  return (
    <>
        {children}
        <Footer/>

    </>
  )
}

export default MainLayout