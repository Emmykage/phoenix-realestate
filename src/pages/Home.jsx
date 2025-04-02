import React from 'react'
import SubHeader from '../components/SubHeader'
import { useSelector } from 'react-redux'
import Nav from '../components/Nav'
import NewsLetter from '../components/newsLetter/NewsLetter'

const Home = () => {
    const {user} = useSelector(state => state.auth)
  
  return (
    <div>
       <Nav user={user}/>

        <SubHeader/>
        <NewsLetter/>
    </div>
  )
}

export default Home