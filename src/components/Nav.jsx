import React, { useEffect, useState } from 'react'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

const Nav = () => {
  const {user} = useSelector(state => state.auth)

  const [show, setShow] = useState("")
  const [toggleNav, setToggleNav] = useState(false)
  const [stickyNav, setStickyNav] = useState("nav")

  const navigation = useNavigate()
  const logout = () => {
    localStorage.setItem('phoenix_auth', null);
    navigation('/auth/login')
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

  }, [])

  return (
    <header className="header-default bg-white z-50 relative ">

    <div classNameName="top-bar hidden md:block ">
      <div className="container">
          <div className="top-bar-left left">
            <ul className="top-bar-item right social-icons">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
            </ul>
            <div className="clear"></div>
          </div>
          <div className="top-bar-right right">
            {user ? <span  onClick={logout} className="cursor-pointer top-bar-item"><i className="fa fa-sign-out icon"></i>Logout</span> : (<>
         

            <NavLink to="/auth/login" className="top-bar-item"><i className="fa fa-sign-in icon"></i>Login</NavLink>
            <NavLink to="/auth/register" className="top-bar-item"><i className="fa fa-user-plus icon"></i>Register</NavLink>
            </>
          )}
            <div className="clear"></div>
          </div>
          <div className="clear"></div>
      </div>
    </div>
  
    <div className="container">
  
      <div className="navbar-header item-center flex justify-center">
  
        
        
        <div className='flex justify-between items-center'>
        <NavLink to="/" className="inline-block w-36 h-24 logo-icon" ><img src="images/logo1.jpg" alt="Homely" /></NavLink>
        <div className=" bg-red-300">
          
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
      <nav class={`${stickyNav} flex flex-nowrap justify-start navbar-expand-lg navbar-light p-0`}>
      
      <div className="relative w-screen navbar-collaps flex-1 ">
        <div className="h-[60px] bg-theme-black w-full top-0  absolute bottom-0 right-0">
          <div className="">
  
          <div className="member-actions right">
            <a href="user-submit-property.html" className="button small alt button-icon">
              <i className="fa fa-plus"></i>
            Submit Property</a>
          </div>


          <div className={`${show} ${toggleNav ? "top-0" : "-top-[1000%]"} transition-all duration-200 ease-linear absolute  md:top-0 bg-theme-black md:bg-none w-full md:w-[80%]  flex items-center`} id="navbarSupportedContent">
            <ul class="nav navbar-nav px-2  flex-1 items-center justify-between md:flex-row flex mr-auto">
              <li class="nav-item active text-white">
                <NavLink className="nav-link text-white p-2.5" to="/" onClick={() => show == "collapse" ?  setShow("null") : setShow('collapse')}>Home <span class="sr-only"></span></NavLink>
              </li>
                <li className="relative menu-item-has-childre nav-item text-white">
                <NavLink to="/properties" className={"nav-link active text-white"}>Property Investments</NavLink>
                <ul className="sub-menu relative">
                  <li><NavLink to="/united_kingdom" onClick={() => show == "collapse" ?  setShow("null") : setShow('collapse')}>UNITED KIGDOM</NavLink></li>
                      <li><NavLink to="/dubai" onClick={() => show == "collapse" ?  setShow("null") : setShow('collapse')}>DUBAI</NavLink></li>
                      <li><NavLink to="/spain" onClick={() => show == "collapse" ?  setShow("null") : setShow('collapse')}>SPAIN</NavLink></li>
                      <li><NavLink to="/berlin" onClick={() => show == "collapse" ?  setShow("null") : setShow('collapse')}>BERLIN</NavLink></li>
                      <li><NavLink to="/tokyo" onClick={() => show == "collapse" ?  setShow("null") : setShow('collapse')}>TOKYO</NavLink></li>
                      <li><NavLink to="/shangai" onClick={() => show == "collapse" ?  setShow("null") : setShow('collapse')}>SHANGAI</NavLink></li>
                  
                    </ul>
                    </li>
                    <li><NavLink to="/press-release" className={"nav-link text-white"} onClick={() => {}}>Press</NavLink></li>
                    {/* <li><NavLink to="/dashboard/home"className={"nav-link text-white"} onClick={() => show == "collapse" ?  setShow("null") : setShow('collapse')}>Passive Income</NavLink></li> */}
                    <li><NavLink to="/contact-us" className={"nav-link text-white"} onClick={() => show == "collapse" ?  setShow("null") : setShow('collapse')}>Contacts</NavLink></li>

                    <li><NavLink to="/about" className={"nav-link text-white"} onClick={() => show == "collapse" ?  setShow("null") : setShow('collapse')}>Careers</NavLink></li>
                    
                    <li>
                    {user ? <a onClick={logout} className={"nav-link text-white"} >Logout</a> : (<>
                

                <NavLink to="/auth/login" className={"nav-link text-white"}>Login</NavLink>
                </>
              )}
                  </li>
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