import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Nav = ({user}) => {
  const navigation = useNavigate()
  const logout = () => {
    localStorage.setItem('phoenix_auth', null);
    navigation('/auth/login')
  }

  return (
    <header class="header-default">

    <div class="top-bar">
      <div class="container">
          <div class="top-bar-left left">
            <ul class="top-bar-item right social-icons">
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            </ul>
            <div class="clear"></div>
          </div>
          <div class="top-bar-right right">
            {user ? <span  onClick={logout} class="cursor-pointer top-bar-item"><i class="fa fa-sign-out icon"></i>Logout</span> : (<>
         

            <NavLink to="/auth/login" class="top-bar-item"><i class="fa fa-sign-in icon"></i>Login</NavLink>
            <NavLink to="/auth/register" class="top-bar-item"><i class="fa fa-user-plus icon"></i>Register</NavLink>
            </>
          )}
            <div class="clear"></div>
          </div>
          <div class="clear"></div>
      </div>
    </div>
  
    <div class="container">
  
      {/* <!-- navbar header --> */}
      <div class="navbar-header">
  
        <div class="header-details">
          <div class="header-item header-search left">
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
          <div class="header-item header-phone left">
            <table>
              <tr>
                <td><i class="fa fa-phone"></i></td>
                <td class="header-item-text">
                  Call us anytime<br/>
                  <span>(+200) 123 456 5665</span>
                </td>
              </tr>
            </table>
          </div>
          <div class="header-item header-phone left">
            <table>
              <tr>
                <td><i class="fa fa-envelope"></i></td>
                <td class="header-item-text">
                  Drop us a line<br/>
                  <span>hello@homely.com</span>
                </td>
              </tr>
            </table>
          </div>
          <div class="clear"></div>
        </div>
  
        <NavLink to="/" className="navbar-brand logo-icon" ><img src="images/logo1.jpg" alt="Homely" /></NavLink>
  
        {/* <!-- nav toggle --> */}
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
  
      </div>
  
      {/* <!-- main menu --> */}
      <div class="navbar-collapse collapse">
        <div class="main-menu-wrap">
          <div class="container-fixed md-bg-gray-dark">
  
          <div class="member-actions right">
            <a href="user-submit-property.html" class="button small alt button-icon"><i class="fa fa-plus"></i>Submit Property</a>
          </div>
          <ul class="nav navbar-nav right">
            <li class="current-menu-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li class="menu-item-has-childre">
              <NavLink to="/properties">Property Investments</NavLink>
              <ul class="sub-menu">
              <li><NavLink to="/united_kingdom">UNITED KIGDOM</NavLink></li>
              <li><NavLink to="/dubai">DUBAI</NavLink></li>
              <li><NavLink to="/spain">SPAIN</NavLink></li>
              <li><NavLink to="/berlin">BERLIN</NavLink></li>
              <li><NavLink to="/tokyo">TOKYO</NavLink></li>
              <li><NavLink to="/shangai">SHANGAI</NavLink></li>
              {/* <li class="menu-item-has-children">
                <a href="property-single.html">Property Single</a>
                <ul class="sub-menu">
                  <li><a href="property-single.html">Property Single Classic</a></li>
                  <li><a href="property-single-full.html">Property Single Full Width</a></li>
                </ul>
              </li> */}
            </ul>
            </li>
            <li><NavLink to="/press">Press Release Income</NavLink></li>
            <li><NavLink to="/dashboard/wallet">Passive Income</NavLink></li>
            <li><NavLink to="/contact">Contacts</NavLink></li>

            <li><NavLink to="/about">Careers</NavLink></li>
            
            <li>
            {user ? <a onClick={logout}>Logout</a> : (<>
         

         <NavLink to="/auth/login">Login</NavLink>
         </>
       )}
          </li>
          </ul>
          <div class="clear"></div>
  
        </div>
  
        </div>
      </div>
  
    </div>
  </header>
  )
}

export default Nav