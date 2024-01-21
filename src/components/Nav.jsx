import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Nav = ({user}) => {
  const navigation = useNavigate()
  const logout = () => {
    localStorage.setItem('phoenix_auth', null);
    navigation('/auth/login')
  }

  return (
    <header className="header-default">

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
  
        <div className="header-details">
          <div className="header-item header-search left">
            {/* <table>
                <tr>
                <td><i class="fa fa-search"></i></td>
                <td class="header-item-text">
                  <form class="search-form">
                    <input type="text" placeholder="Search..." />
                    <button type="submit"><i class="fa fa-search"></i></button>
                  </form>
                </td>
              </tr>
            </table> */}
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
        
  
        <NavLink to="/" className="navbar-brand logo-icon" ><img src="images/logo1.jpg" alt="Homely" /></NavLink>

  
      </div>
  
      {/* <!-- main menu --> */}
      <nav class="navbar navbar-expand-lg navbar-light  bg- p-0">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
      <div className="relative navbar-collapse">
        <div className="main-menu-wrap">
          <div className="container-fixed md-bg-gray-dark">
  
          <div className="member-actions right">
            <a href="user-submit-property.html" className="button small alt button-icon"><i className="fa fa-plus"></i>Submit Property</a>
          </div>


  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="nav navbar-nav mr-auto">
      <li class="nav-item active text-white">
        <NavLink className="nav-link text-white" to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
        <li className="menu-item-has-childre nav-item text-white">
        <NavLink to="/properties" className={"nav-link active text-white"}>Property Investments</NavLink>
        <ul className="sub-menu">
          <li><NavLink to="/united_kingdom">UNITED KIGDOM</NavLink></li>
              <li><NavLink to="/dubai">DUBAI</NavLink></li>
              <li><NavLink to="/spain">SPAIN</NavLink></li>
              <li><NavLink to="/berlin">BERLIN</NavLink></li>
              <li><NavLink to="/tokyo">TOKYO</NavLink></li>
              <li><NavLink to="/shangai">SHANGAI</NavLink></li>
           
            </ul>
            </li>
            <li><NavLink to="/press" className={"nav-link text-white"}>Press Release</NavLink></li>
            <li><NavLink to="/dashboard/wallet"className={"nav-link text-white"}>Passive Income</NavLink></li>
            <li><NavLink to="/contact" className={"nav-link text-white"}>Contacts</NavLink></li>

            <li><NavLink to="/about" className={"nav-link text-white"}>Careers</NavLink></li>
            
            <li>
            {user ? <a onClick={logout} className={"nav-link text-white"}>Logout</a> : (<>
         

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