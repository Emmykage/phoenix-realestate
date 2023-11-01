import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const MainLayout = ({children}) => {
  return (
    <>
        <Nav/>
        {children}
        <Footer/>

    </>
  )
}

export default MainLayout