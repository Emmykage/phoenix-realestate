import React from 'react'
import { NavLink } from 'react-router-dom'

const PressPage = () => {
  return (
    <div className='container blog py-6 bg-white'>
      <div className='grid grid-blog gap-2'>

     
      <div className='box-shadow p-2 m-1'>
        <div className='flex items-center '>
         
        <h3 className='mr-5'>Post title</h3> 
        <h4>Secondary Text</h4>
         
        </div>
        <div><p>written by John Doe, 30 04 2016</p></div>
        <div className='blog-image'>
          <img src="./images/530x345.png" alt="" className='w-full' />

        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aut esse debitis obcaecati deserunt, ipsa exercitationem dolore ut, inventore cupiditate ullam eveniet nam doloribus aliquam dolorum fugit illum modi assumenda voluptatum ratione perspiciatis dolores quaerat. Est harum molestias sunt eveniet!</p>
          
        </div>
      </div>
      <div className='aside box-shadow p-2'>
        <h3>Categories</h3>
        <ul className='my-3'>
        <li>
            <NavLink to={"#"} >Resent Posts</NavLink>
          </li>  
          <li>
            <NavLink to={"#"} >Investment</NavLink>
          </li>  
       
        </ul>

      </div>
      
       </div>
    </div>
  )
}

export default PressPage