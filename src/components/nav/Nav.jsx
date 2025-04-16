import React, { useEffect, useState } from 'react'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import "./nav.scss"
import { Button, Menu, MenuItem } from '@mui/material'
import { userlogOut } from '../../redux/actions/auth'

const Nav = () => {
  const {user} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const [show, setShow] = useState("")
  const [toggleNav, setToggleNav] = useState(false)
  const [stickyNav, setStickyNav] = useState("nav")


  const navigation = useNavigate()
  const handleLogout = () => {
    dispatch(userlogOut()).then(result => {
      if(userlogOut.fulfilled.match(result)){
        navigation('/auth/login')

      }
    })
  }
  const handleStickNav = (e) => {

    setStickyNav('fix-header')

    if(window.scrollY >= 10){

      setStickyNav('fix-header')
      setToggleNav(false)


    }else{
      setStickyNav("")

    }
  }
  useEffect(()=> {
    window.addEventListener('scroll', handleStickNav)


    return () => {
      window.addEventListener('scroll', handleStickNav)

    }

  }, [])





  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className="header-default bg-white z-50 relative ">

    <div className="container m-auto ">
  
      <div className="navbar-header item-center flex justify-center">
  
        
        
        <div className='flex px-4 justify-between items-center'>
        <NavLink to="/" className="inline-block w-24 h-24 p-4 logo-icon" >
        <img src="/logos/12.png" alt="Homely" className='py-2 w-full h-full' /></NavLink>
        <div className=" ">
          
        <div className="bg-white hidden lg:block">
       
          <div className="header-item header-phone left">
            <table>
              <tr>
                <td><i className="fa fa-phone"></i></td>
                <td className="header-item-text">
                  Call us anytime<br/>
                  <span>(+200) 123 456 5665</span>
                </td>
              </tr>
            </table>
          </div>
          <div className="header-item header-phone left">
            <table>
              <tr>
                <td><i className="fa fa-envelope"></i></td>
                <td className="header-item-text">
                  Drop us a line<br/>
                  <span>info@phoenix-homes.com</span>
                </td>
              </tr>
            </table>
          </div>
          <div className="clear"></div>
        </div>
        </div>
        <button className="md:hidden block" type="button" onClick={() => {}}>
          <span className="text-3xl" onClick={()=> setToggleNav(prev => !prev)}>
          <AiOutlineMenuFold />

          </span>
        </button>
        

        </div>
  

  
      </div>
  
      {/* <!-- main menu --> */}
      <nav className={`${stickyNav} flex flex-nowrap justify-start navbar-expand-lg navbar-light p-0`}>
      
      <div className="relative w-screen navbar-collaps flex-1 ">
        <div className="h-[60px] bg-theme-black w-full top-0  absolute bottom-0 right-0">
          <div className="bg-red-">
  
          <div className="member-actions  right">
            <p  className="button small block w-full alt button-icon bg-blue-400">


            <span>
      
        <i 
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="fa fa-plus"></i>   
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            PaperProps={{
              sx: {
                backgroundColor: '#21252f',
                color: 'white', // optional
              },
            }}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={()=>{
              navigation("/dashboard/home")
              handleClose()
            }
            }>Dashboard</MenuItem>
            <MenuItem 
             onClick={()=>{
              navigation("/auth/register")
              handleClose()
            }
            }
            > Get Started</MenuItem>
            {user ? <MenuItem onClick={handleLogout}>Logout</MenuItem> : <MenuItem ><NavLink to="/auth/login"> Login</NavLink></MenuItem>}
            
          </Menu>
          </span>
          <button
            className={" block w-full h-full "}>

                        Dashboard
                        <p 
                         onClick={handleClick}
                         className='absolute top-0 left-0 w-full h-full'>

                        </p>
                        </button>



          {/* {user ? 
                        <NavLink className={"bg-re block w-full"} to="/dashboard/home">
                        Dashboard
                        </NavLink> : 
                        
                        <NavLink className={"bg-re block w-full"} to="/auth/register">
                        Get Started
                        </NavLink> } */}
              
              

            </p>
          </div>


          <div className={`${show} ${toggleNav ? "left-0" : "-left-full"} top-0 md:left-0 transition-all duration-200 ease-linear  md:top-0 bg-theme-black py-0 z-50 absolute h-screen md:h-full md:bg-none w-full md:w-[80%]  flex nav-contain`} id="navbarSupportedContent">
            <ul className="nav navbar-nav px-2  flex-1 items-center justify-between md:flex-row  mr-auto md:flex block bg-blue-">
              <li className="nav-item active text-white">
                <NavLink className="nav-link text-white" to="/" >Home <span className="sr-only"></span></NavLink>
              </li>
              <li className="relative menu-item-has-childre nav-item text-white">
                <NavLink to="/about-us" className={"nav-link active text-white"}>About Us</NavLink>
                <ul className="sub-menu relative max-w-xl w-full ">
                  <li><NavLink to="/about-us">About Phoenix Precast</NavLink></li>
                      <li><NavLink to="/why-phoenix" >Why Phoenix</NavLink></li>
                      <li><NavLink to="/our-team">Our Team</NavLink></li>
                  
                    </ul>
                </li>

                <li><NavLink to="/properties" >Property Listing</NavLink></li>


                <li className="relative menu-item-has-childre nav-item text-white">
                <NavLink to="#" className={"nav-link active text-white"}>Investment Opportunity</NavLink>
                <ul className="sub-menu relative">
                <li><NavLink to="/passive-income" >Passive Income</NavLink></li>
                <li><NavLink to="/how-it-work" >How It Works</NavLink></li>
                  
                    </ul>
                    </li>
                    <li><NavLink to="/press-release" className={"nav-link text-white"} >News </NavLink></li>
                    {/* <li><NavLink to="/dashboard/home"className={"nav-link text-white"} onClick={() => show == "collapse" ?  setShow("null") : setShow('collapse')}>Passive Income</NavLink></li> */}
                    <li><NavLink to="/contact-us" className={"nav-link text-white"} >Contacts Us</NavLink></li>
                    <li><NavLink to="/faq" className={"nav-link text-white"}>FAQ</NavLink></li>

           
            </ul>
            
          </div>


          <div className="clear"></div>
  
        </div>
  
        </div>
      </div>
      </nav>
    </div>
  </header>
  )
}

export default Nav