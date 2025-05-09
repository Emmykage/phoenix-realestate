import React, { createContext, useContext, useEffect, useState } from 'react'
import { BiCustomize } from 'react-icons/bi';
import { BsBriefcase } from 'react-icons/bs';
import { FaQuestionCircle, FaRegUser } from "react-icons/fa";
import { GrDocumentDownload, GrFolderCycle, GrTransaction } from 'react-icons/gr';
import { IoMdHome, IoMdMenu, IoMdNotificationsOutline } from "react-icons/io";
import { MdSupervisorAccount } from 'react-icons/md';
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { CiLogout } from "react-icons/ci";
import { userlogOut } from '../redux/actions/auth';
import { IoAnalyticsOutline } from "react-icons/io5";
import { RiLuggageDepositLine } from "react-icons/ri";
import Aside from '../components/aside/Aside';


const DashboardLayout = ({children}) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [toggle, setToggle] = useState(false)
    const {user} = useSelector(state => state.auth)
    const {isLogged, loading} = useSelector(state => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(() => {

        if(!user && !loading) {
            navigate("/auth/login")

        }

    },[user])
    return (
    <div className='h-screen flex  bg-gray-200 overflow-y-auto'>
       
        {/* <aside id='aside' className={`${toggle ? "w-0 " : "w-60 px-2"} bg-white flex flex-col border shrink-0 absolute md:relative z-10 shadow h-full bg-whit border-t md:pl-2 py-10 overflow-hidden`}>

                <div className='bg-r mb-10'>
                    <img src={"/logo.png"} alt="" className='w-20  block m-auto'/>
                </div>
                <ul className=' flex-1 flex flex-col h-full'>
                    {items.map(item => (
                        <li className='my-2 h-10 '>
                        <NavLink to={item.link} className={({isActive}) => isActive ? active: inactive }>
                        {item.icon}
                        <span className='text-base font-medium'>{item.label}</span>
                        </NavLink>
                        </li>
                    ))}
                     <li className="mt-4 text-sm text-gray-400 px-6">Funding</li>

                    
                    {itemFunding.map(item => (
                        <li className='my-2 h-10 '>
                        <NavLink to={item.link} className={({isActive}) => isActive ? active: inactive }>
                        {item.icon}
                        <span className='text-base font-medium'>{item.label}</span>
                        </NavLink>
                        </li>
                    ))}
                    <li className='my-2 h-10 mt-auto bg-gray-100'>
                        <a onClick={()=> {
                            dispatch(userlogOut()).then(result => {
                                if(userlogOut.fulfilled.match(result)){
                                    navigate('/auth/login');
                                }
                            }); 
                             }} className={inactive}>
                        <CiLogout/>

                        <span className='text-base font-medium'>Log Out</span>
                        </a>
                        </li>

           
          
          </ul>

             

            
                
               
              
              
            </aside>  */}

            <Aside open={toggle} onClose={()=> {setToggle(false)}}/>
        
        <div className='bg-green-20 flex-1 overflow-y-auto relative'>
         
            <header className='bg-white sticky top-0 left-0 shadow py-6 border-b'>
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
                <li><NavLink to={'/dashboard/profile'}><FaRegUser /></NavLink></li>
                <li><NavLink to={''}>{user?.email}</NavLink></li>
                </ul>
                <a onClick={()=> setToggle(prev => !prev)} target="_blank" rel="noopener noreferrer" className='flex sm:hidden'><IoMdMenu className='text-4xl'/></a>
                </div>

        </header>

            <div className='flex-1 pr-6 m-auto max-w-[1500px] p-4'>
                <Outlet/>

            </div>
        </div>
       

    </div>
  )
}

export default DashboardLayout