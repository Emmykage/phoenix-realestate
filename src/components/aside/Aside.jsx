import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { CiLogout } from "react-icons/ci";

import { IoAnalyticsOutline } from "react-icons/io5";
import { RiLuggageDepositLine } from "react-icons/ri";
import { MdSupervisorAccount } from 'react-icons/md';
import { BiCustomize } from 'react-icons/bi';
import { BsBriefcase } from 'react-icons/bs';
import { userlogOut } from '../../redux/actions/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { GrFolderCycle, GrTransaction } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
export default function Aside({
    open,
    onClose
}) {
    const dispatch = useDispatch()
    console.log(open)

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

      const navigate = useNavigate()
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  
    
  const items = [
    {
        link: '/dashboard/home/',
        label: "Home",
        icon: <IoMdHome  className='text-2xl'/>
    },
     {
        link: '/dashboard/account/identity',
        label: "Bio Data",
        icon: <MdSupervisorAccount className='text-2xl'/>
    },
    // {
    //     link: '/dashboard/offering/',
    //     label: "Offering",
    //     icon: <BiCustomize className='text-2xl'/>
    // },
    // {
    //     link: '/dashboard/portfolio/',
    //     label: "Portfolio",
    //     icon: < BsBriefcase className='text-2xl'/>
    // },
    {
        link: '/dashboard/fixed-income/transactions',
        label: "Fixed Income",
        icon: < GrTransaction  className='text-2xl'/>
    }, {
        link: '/dashboard/capital-growth/transactions',
        label: "Capital Growth",
        icon: < IoAnalyticsOutline  className='text-2xl'/>
    },
   
]

const itemFunding = [
    {
        link: '/dashboard/account/withdrawal',
        label: "Withdrawal",
        icon: <GrFolderCycle   className='text-2xl'/>
    },
    // {
    //     link: '/dashboard/account/deposit',
    //     label: "Deposit",
    //     icon: <RiLuggageDepositLine className='text-2xl'/>
    // }
]
const active = "bg-gray-200 flex items-center  px-2 py-4 m-auto w-full h-full hover:bg-gray-300"
const inactive = " flex items-center py-4 px-2 m-auto w-full h-full hover:bg-gray-300"

// const active = ""
// const inactive = ""

const list = () => {
return(
    <Box
    
    onClick={onClose}
    sx={{width: 250}}>
       <div className='bg-r mb-10'>
                    <img src={"/logos/12.png"} alt="" className='w-20  block m-auto'/>
                </div>
                <List className=' flex-1 flex flex-col h-full'>
                    {items.map(item => (
                        <ListItem  className='my-2 h-10 '>
                        <NavLink to={item.link} className={({isActive}) => isActive ? active: inactive }>
                        <ListItemIcon>
                             {item.icon}
                         </ListItemIcon> 
                        <span className='text-base font-medium'>{item.label}</span>
                        </NavLink>
                        </ListItem >
                    ))}
                     <li className="mt-4 text-sm text-gray-400 px-6">Funding</li>

                    
                    {itemFunding.map(item => (
                        <ListItem className='my-2 h-10'>
                        <NavLink to={item.link} className={({isActive}) => isActive ? active: inactive }>
                        <ListItemIcon>
                             {item.icon}
                         </ListItemIcon> 
                        <span className='text-base font-medium'>{item.label}</span>
                        </NavLink>
                        </ListItem>
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

           
          
          </List>

             

            
    </Box>
)
}




  return (
    <div>
     <aside id='aside' className={`px-2 bg-white hidden md:flex flex-col border shrink-0 absolute md:relative z-10 shadow h-full bg-whit border-t md:pl-2 py-10 overflow-hidden`}>
        
        {list()}                 
    </aside> 
    <div className='block md:hidden'>
        
      
        <React.Fragment>
          <Drawer
            open={open}
            onClose={onClose}
          >

             <aside id='aside' className={`bg-white flex flex-col border shrink-0 relative z-10 shadow h-full bg-whit border-t md:pl-2 py-10 overflow-hidden`}>

             {list()}
                
               
              
              
            </aside> 
          </Drawer>
        </React.Fragment>
        
    </div>
    </div>
  );
}
