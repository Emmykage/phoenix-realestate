import React from 'react'
import Nav from '../components/Nav'

const MainLayout = ({children}) => {
  return (
    <>
        <Nav/>
        {children}
    </>
  )
}

export default MainLayout