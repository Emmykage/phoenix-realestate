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
import { userlogOut, userProfile } from '../redux/actions/auth';
import { IoAnalyticsOutline } from "react-icons/io5";
import { RiLuggageDepositLine } from "react-icons/ri";
import Aside from '../components/aside/Aside';
import { getPortfolios, getUserPortfolios } from '../redux/actions/portfolio';
import { getUserTransactions, getWallet } from '../redux/actions/wallet';


const DashboardLayout = ({children}) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [toggle, setToggle] = useState(false)
    const {user, loading} = useSelector(state => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userProfile())

    },[])

    useEffect(() => {

        if(!user && !loading) {
            navigate("/auth/login")

        }

    },[user])


    useEffect(() => {
        dispatch(getUserPortfolios())
        dispatch(getUserTransactions())
        dispatch(getWallet())

    },[])

    return (
    <div className='h-screen flex  bg-gray-200 overflow-y-auto'>
       
        <Aside isOpen={toggle} onClose={()=> {setToggle(false)}}/>
        
        <div className='bg-green-20 flex-1 overflow-y-auto relative'>
         
            <header className='bg-white sticky top-0 left-0 shadow py-2 md:py-6 border-b z-10'>
                <div className='max-w-[1500px] m-auto flex justify-between py-3  px-2 md:px-10 items-center'>

                    <NavLink to={'/'} className={'px-2 w-52 text-3xl text-green-700 font-semibold'}>
                        <img src={"images/logo1.jpg"} alt="" />
                    </NavLink>

                    {/* <nav className='flex-1 md:block hidden'>
                        <ul className='flex gap-6 text-sm font-medium text-gray-600'>
                            <li><NavLink to={'/dashboard/account'}>My Account</NavLink></li>

                            <li><NavLink to={'/dashboard/offering'}>Offerings</NavLink></li>
                            <li><NavLink to={'/dashboard/portfolio'}>Portfolio</NavLink></li>
                            <li><NavLink to={'/dashboard/document'}>My Document</NavLink></li>
                        </ul>
                    </nav> */}
                <ul className=' gap-8 items-center md:flex hidden'>
                    <li><NavLink><FaQuestionCircle /></NavLink></li>
                    <li><NavLink to={''}><IoMdNotificationsOutline /></NavLink></li>
                    <li><NavLink to={'/dashboard/profile'}><FaRegUser /></NavLink></li>
                    <li><NavLink to={''}>{user?.email}</NavLink></li>
                </ul>
                <a onClick={()=> setToggle(prev => !prev)} target="_blank" rel="noopener noreferrer" className='flex sm:hidden'><IoMdMenu className='text-4xl'/></a>
                </div>

        </header>

            <div className='flex-1 m-auto max-w-[1500px] py-4 px-4'>
                <Outlet/>

            </div>
        </div>
       

    </div>
  )
}

export default DashboardLayout