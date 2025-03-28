import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { userSession } from '../../redux/actions/auth'
import { SET_LOADER } from '../../redux/app/app'

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {user, error, loading, message} = useSelector(state => state.auth)
    const [formInput, setFormInput] = useState({email: "", password: ""})
   
    const handleInputChange = (e)=> {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
       e.preventDefault();
       
               dispatch(SET_LOADER(true))
               dispatch(userSession({ user: formInput })).then(result => {
                   if(userSession.fulfilled.match(result)){
                       navigate("/dashboard/home");
                       dispatch(SET_LOADER(false))
       
       
                   }else
                   {
                       dispatch(SET_LOADER(false))
       
                   }
               });
    }


  return (
    <div>
        <section className="subheader">
            <div className="container">
            <h1>Login</h1>
            <div className="breadcrumb right"><NavLink to={'/'}>Home</NavLink>  <i className="fa fa-angle-right"></i> <a href="#" className="current">Login</a></div>
            <div className="clear"></div>
            </div>
        </section>
        
        <section className="module login">
            <div className="container">
        
            <div className="row">
                <div className="col-lg-4 col-lg-offset-4"> 
                <p>Don't have an account? <strong><NavLink to="/auth/register">Register here.</NavLink></strong></p> 
                <form onSubmit={handleFormSubmit} className="login-form">
                    <div className="form-block">
                    <label>Email</label>
                    <input className="border" type="text" name="email" onChange={handleInputChange} />
                    </div>
                    <div className="form-block">
                    <label>Password</label>
                    <input className="border" type="password" name="password" onChange={handleInputChange}/>
                    </div>
                    <div className="form-block">
                    <label><input type="checkbox" name="remember" />Remember Me</label><br/>
                    </div>
                    <p>{loading && "Loading..." }</p>
                    <p className='text-red'>{error && message}</p>
            
                    <div className="form-block">
                    <button className="button button-icon" type="submit"><i className="fa fa-angle-right"></i>Login</button>
                    </div>
                    <div className="divider"></div>
                    <p className="note"><a href="#">I don't remember my password.</a> </p>    
                </form>
                </div>
            </div>
        
            </div>
        </section>
        
        <section className="module cta newsletter">
            <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-7">
                    <h3>Sign up for our <strong>newsletter.</strong></h3>
                    <p>Lorem molestie odio. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
                <div className="col-lg-5 col-md-5">
                    <form method="post" id="newsletter-form" className="newsletter-form">
                        <input type="email" placeholder="Your email..." />
                        <button type="submit" form="newsletter-form"><i className="fa fa-send"></i></button>
                    </form>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Login