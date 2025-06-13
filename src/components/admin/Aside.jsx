import React from 'react';
import { BsArrowBarDown, BsFillGrid1X2Fill } from 'react-icons/bs';
import { AiOutlineClose, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai';
import { NavLink, useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { MdAccountBalance, MdOutlineInventory } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';

import { useDispatch } from 'react-redux';
import { userProfile } from '../../redux/actions/auth';
import { Drawer } from '@mui/material';

const Aside = ({isOpen, 
  setIsOpen,  
    onClose
}) => {


 

  return (
    <>
    
    <aside 
    className={`bg-white hidden md:flex flex-col border shrink-0 absolute md:relative z-10 shadow h-full bg-whit border-t md:pl-2 pt-10 overflow-hidden`}
    >
    <div className='bg-r mb-10'>
        <img src={"/logos/12.png"} alt="" className='w-20  block m-auto'/>
    </div>
      <List/>

    </aside>
    <div className='block px-5  md:hidden'>      
            <React.Fragment>
              <Drawer
                open={isOpen}

                onClose={onClose}
                onClick={() => setIsOpen(false)}
              >
                    

    
                 <aside id='aside' className={`w-60  flex flex-col border shrink-0 relative z-10 shadow bg-whit border-t md:pl-2 py-0 overflow-auto h-screen`}>

                  <div className="top">
                    <span className='block mt-2 ml-auto w-max' onClick={()=> setIsOpen(prev => !prev)}>
                          <AiOutlineClose className='text-2xl md:hidden ' />
                    </span>
                    <NavLink to={"/admin/dashboard"} className="logo">
                      <img src={"/logos/12.png"} alt="logo" className='max-w-32 h-18 mx-auto'/>
                    
                    </NavLink>
                  
                    </div>
    
                 <List/>
                    
                   
                  
                  
                </aside> 
              </Drawer>
            </React.Fragment>
            
        </div>

    </>
  );
};


const List = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch()
  const activeLink = 'active';
  const normalLink = 'pl-3';
   const handleLogOut = () => {
    localStorage.removeItem("phoenix_auth")
    dispatch(userProfile())
    navigate("/auth/admin_login")
  }

  
  const navItems = [
    {
      id: 1,
      link: "/admin/dashboard",
      icon: <BsFillGrid1X2Fill />,
      label: "Dashboard"
    },
     {
      id: 2,
      link: "/admin/clients",
      icon: <BsFillGrid1X2Fill />,
      label: "Clients"
    },
     {
      id: 3,
      link: "/admin/deposit",
      icon: <GiReceiveMoney />,
      label: "Deposits"
    },
    {
      id: 4,
      link: "/admin/withdrawal",
      icon: <MdOutlineInventory />,
      label: "withdrawals"
    },
    {
      id: 6,
      link: "/admin/assets",
      icon: <MdOutlineInventory />,
      label: "Assets"
    },
    {
      id: 5,
      link: "/admin/posts",
      icon: <AiOutlinePlus />,
      label: "Blog"
    },
    {
      id: 7,
      link:   "/admin/account-profile",
      icon: <MdAccountBalance />,
      label: "Account"
    }
    
  
  ]
  return(
    <>
    
      <div className="side-bar overflow-auto flex-1">
        {navItems.map(item => (
          <NavLink
            key={item.id}
d              to={item.link}
               className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                <span>{item.icon}</span>
                <p>{item.label}</p>
          </NavLink>
        ))}
       
       
        <a onClick={handleLogOut} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span><BiLogOut /></span>
          <p>Logout</p>
        </a>
      </div>
    </>
  )
}

export default Aside;
