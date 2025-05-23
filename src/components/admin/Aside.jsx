import React from 'react';
import { BsFillGrid1X2Fill } from 'react-icons/bs';
import { AiOutlineClose, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai';
import { NavLink, useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { MdAccountBalance, MdOutlineInventory } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';

import { useDispatch } from 'react-redux';
import { userProfile } from '../../redux/actions/auth';
import { PiHandWithdraw } from "react-icons/pi";

const Aside = ({isOpen, setIsOpen}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const activeLink = 'active';
  const normalLink = 'pl-3';

  const handleLogOut = () => {
    localStorage.removeItem("phoenix_auth")
    dispatch(userProfile())
    navigate("/auth/admin_login")
  }
  return (
    <aside className={isOpen ? 'open' : "close"}>
      <div className="top">
      <span className='block mt-5 ml-auto w-max' onClick={()=> setIsOpen(prev => !prev)}>
            <AiOutlineClose className='text-2xl md:hidden ' />
          </span>
        <NavLink to={"/admin/dashboard"} className="logo p-5">
          <img src={"/logos/12.png"} alt="logo" className='max-w-32 m-auto'/>
        
        </NavLink>
        <div className="close" id="close-btn">
          
        </div>
      </div>
      <div className="side-bar">
        <NavLink
        onClick={() => setIsOpen(prev => !prev)}
        to="/admin/dashboard" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span><BsFillGrid1X2Fill /></span>
          <h3>Dashboard</h3>
        </NavLink>
        <NavLink
         onClick={() => setIsOpen(prev => !prev)}
          to="/admin/clients" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span><AiOutlineUser /></span>
          <h3>Clients</h3>
        </NavLink>
        
        <NavLink 
         onClick={() => setIsOpen(prev => !prev)}
         to="/admin/deposit" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span><GiReceiveMoney /></span>
          <h3>Deposits</h3>
        </NavLink>

         <NavLink 
         onClick={() => setIsOpen(prev => !prev)}
         to="/admin/withdrawal" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span><PiHandWithdraw /></span>
          <h3>withdrawals</h3>
        </NavLink>
       
        <NavLink 
         onClick={() => setIsOpen(prev => !prev)}
          to="/admin/assets" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span><MdOutlineInventory /></span>
          <h3>Assets</h3>
        </NavLink>
        
     
        <NavLink 
         onClick={()=>setIsOpen(prev => !prev)}
         to="/admin/posts" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span><AiOutlinePlus /></span>
          <h3>Post</h3>
        </NavLink>
        <NavLink 
         onClick={()=>setIsOpen(prev => !prev)}
         to="/admin/account-profile" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span><MdAccountBalance  /></span>
          <h3>Account</h3>
        </NavLink>
        <a onClick={handleLogOut} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span><BiLogOut /></span>
          <h3>Logout</h3>
        </a>
      </div>

    </aside>
  );
};

export default Aside;
