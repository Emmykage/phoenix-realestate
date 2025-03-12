import React, { createContext, useContext, useEffect, useState } from 'react'
import { BiCustomize } from 'react-icons/bi';
import { BsBriefcase } from 'react-icons/bs';
import { FaQuestionCircle, FaRegUser } from "react-icons/fa";
import { GrDocumentDownload } from 'react-icons/gr';
import { IoMdMenu, IoMdNotificationsOutline } from "react-icons/io";
import { MdSupervisorAccount } from 'react-icons/md';
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const DashboardLayout = ({children}) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [toggle, setToggle] = useState(false)
    const {user} = useSelector(state => state.auth)
    const {isLogged, loading} = useSelector(state => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    console.log(user, isLogged)

  return (
    <div className='h-screen flex  bg-gray-200 overflow-y-auto'>
       
       <aside className={`${toggle ? "w-0 " : "w-20 px-2"} h-scre bg-white shrink-0 absolute md:relative z-10 shadow h-full bg-whit border-t md:pl-2 py-32 overflow-hidden`}>
                {/* <a href="/account">Accounts</a> */}
                <ul>
                    <li className='my-3'>
                    <NavLink to={'/dashboard/account/'} className="block m-auto w-max">
                        <MdSupervisorAccount className='text-xl' />
                        </NavLink>
                            </li>
                            <li className='my-3'>
                            <NavLink to={'/dashboard/offering/'}  className="block m-auto w-max">
                        <BiCustomize  className='text-xl' />
                        </NavLink>

                            </li>
                            <li className='my-3 text-center'>
                            <NavLink to={'/dashboard/portfolio/'}  className="block m-auto w-max -300">
                        <BsBriefcase className='text-xl' />
                        </NavLink>
                            </li>
                            <li className='flex justify-center items-center '>
                            <NavLink to={'/dashboard/document/'}  className="block m-auto w-max" >
                        <GrDocumentDownload  className='text-xl' />
                        </NavLink>
                    </li>
                 
                </ul>

                {/* <span className='block my-24 text-gray-700 text-gray-600 font-medium cursor-pointer'
                 onClick={()=> {dispatch(logOut()); navigate('/auth/login');  }}
                 >log out</span> */}

            
                
               
              
              
            </aside>
        <div className='bg-green-20 flex-1 overflow-y-auto relative'>
         
            <header className='bg-white shadow py-6 border-b'>
                <div className='max-w-[1500px] m-auto flex justify-between py-3  px-2 md:px-10 items-center'>

                    <NavLink to={'/'} className={'px-2 w-52 text-3xl text-green-700 font-semibold'}>
                        <img src={"images/logo1.jpg"} alt="" />
                    </NavLink>

                    <nav className='flex-1 md:block hidden'>
                        <ul className='flex gap-6 text-sm font-medium text-gray-600'>
                        <li><NavLink to={'/dashboard/account'}>My Account</NavLink></li>

                            <li><NavLink to={'/dashboard/offering'}>Offerings</NavLink></li>
                            <li><NavLink to={'/dashboard/portfolio'}>Portfolio</NavLink></li>
                            <li><NavLink to={'/dashboard/document'}>My Document</NavLink></li>
                        </ul>
                    </nav>
                <ul className=' gap-8 items-center md:flex hidden'>
                <li><NavLink><FaQuestionCircle /></NavLink></li>
                <li><NavLink to={''}><IoMdNotificationsOutline /></NavLink></li>
                <li><NavLink to={''}><FaRegUser /></NavLink></li>
                <li><NavLink to={''}>{user?.email}</NavLink></li>
                </ul>
                <a onClick={()=> setToggle(prev => !prev)} target="_blank" rel="noopener noreferrer" className='flex sm:hidden'><IoMdMenu className='text-4xl'/></a>
                </div>

        </header>

            <div className='flex-1 pr-6 m-auto max-w-[1500px]'>
                <Outlet/>

            </div>
        </div>
       

    </div>
  )
}

export default DashboardLayout