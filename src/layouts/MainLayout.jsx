import React, { useEffect } from 'react'
import Nav from '../components/nav/Nav'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'

const MainLayout = ({children}) => {
  const dispatch = useDispatch()
 
  return (
    <>
        {children}
        <Footer/>

    </>
  )
}

export default MainLayout