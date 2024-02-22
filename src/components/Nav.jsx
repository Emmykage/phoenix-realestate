import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Nav = ({user}) => {
  const [show, setShow] = useState("collapse")
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


    }else{
      setStickyNav("")

    }
  }
  useEffect(()=> {
    window.addEventListener('scroll', handleStickNav)

  }, [])

  return (
    <header className="header-default bg-white">

    <div classNameName="top-bar">
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
  
      {/* <!-- navbar header --> */}
      <div className="navbar-header">
  
        <div className="header-details bg-white">
          <div className="header-item header-search left">
           
          </div>
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
        
        <div className='bg-'>
        <NavLink to="/" className="navbar-brand logo-icon" ><img src="images/logo1.jpg" alt="Homely" /></NavLink>


        </div>
  

  
      </div>
  
      {/* <!-- main menu --> */}
      <nav class={`${stickyNav} bg-white navbar navbar-expand-lg navbar-light  bg- p-0`}>
      <button class="navbar-toggler" type="button" onClick={() => show == "collapse" ?  setShow("null") : setShow('collapse')}>
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="relative navbar-collapse">
        <div className="main-menu-wrap">
          <div className="container-fixed md-bg-gray-dark">
  
          <div className="member-actions right">
            <a href="user-submit-property.html" className="button small alt button-icon"><i className="fa fa-plus"></i>Submit Property</a>
          </div>


  <div className={`${show} navbar-collapse `} id="navbarSupportedContent">
    <ul class="nav navbar-nav mr-auto">
      <li class="nav-item active text-white">
        <NavLink className="nav-link text-white" to="/" onClick={() => show == "collapse" ?  setShow("null") : setShow('collapse')}>Home <span class="sr-only"></span></NavLink>
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
            <li><NavLink to="/press" className={"nav-link text-white"} onClick={() => show == "collapse" ?  setShow("null") : setShow('collapse')}>Press Release</NavLink></li>
            <li><NavLink to="/dashboard/wallet"className={"nav-link text-white"} onClick={() => show == "collapse" ?  setShow("null") : setShow('collapse')}>Passive Income</NavLink></li>
            <li><NavLink to="/contact" className={"nav-link text-white"} onClick={() => show == "collapse" ?  setShow("null") : setShow('collapse')}>Contacts</NavLink></li>

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