import React from 'react';
import { BsFillGrid1X2Fill } from 'react-icons/bs';
import { AiOutlineClose, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { MdOutlineInventory, MdOutlineReport } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { IoAnalyticsSharp, IoAddSharp } from 'react-icons/io5';
import { RiMessageLine } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';
import LOGO from '../../assets/image/logo.png';

const Aside = () => {
  const activeLink = 'active';
  const normalLink = '';
  return (
    <aside>
      <div className="top">
        <div className="logo">
          <img src={LOGO} alt="logo" />
          <h2>
            {' '}
            <span className="danger">Edge</span>
            {' '}
          </h2>
        </div>
        <div className="close" id="close-btn">
          <span>
            <AiOutlineClose />
          </span>
        </div>
      </div>
      <div className="side-bar">
        <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span><BsFillGrid1X2Fill /></span>
          <h3>Dashboard</h3>
        </NavLink>
        <NavLink to="/admin/clients" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span><AiOutlineUser /></span>
          <h3>Customer</h3>
        </NavLink>
        <NavLink to="/admin/orders" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span><GiReceiveMoney /></span>
          <h3>Orders</h3>
        </NavLink>
        <NavLink to="/admin/analytics" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span><IoAnalyticsSharp /></span>
          <h3>Analytics</h3>
        </NavLink>
        <NavLink to="/admin/messages" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span><RiMessageLine /></span>
          <h3>Messages</h3>
          <span className="message-count">0</span>
        </NavLink>
        <NavLink to="/admin/assets" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span><MdOutlineInventory /></span>
          <h3>Assets</h3>
        </NavLink>
        <NavLink to="/admin/reports" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span><MdOutlineReport /></span>
          <h3>Reports</h3>
        </NavLink>
        <NavLink to="/admin/settings" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span><FiSettings /></span>
          <h3>Settings</h3>
        </NavLink>
        <NavLink to="/admin/add_asset" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span><AiOutlinePlus /></span>
          <h3>Add Products</h3>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span><BiLogOut /></span>
          <h3>Logout</h3>
        </NavLink>
      </div>

    </aside>
  );
};

export default Aside;
