import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { userSession } from '../../redux/actions/auth'

const Login = () => {
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.user)
    const [formInput, setFormInput] = useState({email: "", password: ""})

    const handleInputChange = ()=> {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = () => {
        e.preventDefault()
        dispatch(userSession())
    }
    if(user ==  null || user == undefined){


  return (
    <div>
        <section class="subheader">
            <div class="container">
            <h1>Login</h1>
            <div class="breadcrumb right"><NavLink to={'/'}>Home</NavLink>  <i class="fa fa-angle-right"></i> <a href="#" class="current">Login</a></div>
            <div class="clear"></div>
            </div>
        </section>
        
        <section class="module login">
            <div class="container">
        
            <div class="row">
                <div class="col-lg-4 col-lg-offset-4"> 
                <p>Don't have an account? <strong><NavLink to="/auth/register">Register here.</NavLink></strong></p> 
                <form onSubmit={handleFormSubmit} class="login-form">
                    <div class="form-block">
                    <label>Email</label>
                    <input class="border" type="text" name="email" onChange={handleInputChange} />
                    </div>
                    <div class="form-block">
                    <label>Password</label>
                    <input class="border" type="password" name="password" onChange={handleInputChange}/>
                    </div>
                    <div class="form-block">
                    <label><input type="checkbox" name="remember" />Remember Me</label><br/>
                    </div>
                    <div class="form-block">
                    <button class="button button-icon" type="submit"><i class="fa fa-angle-right"></i>Login</button>
                    </div>
                    <div class="divider"></div>
                    <p class="note"><a href="#">I don't remember my password.</a> </p>    
                </form>
                </div>
            </div>
        
            </div>
        </section>
        
        <section class="module cta newsletter">
            <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-7">
                    <h3>Sign up for our <strong>newsletter.</strong></h3>
                    <p>Lorem molestie odio. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
                <div class="col-lg-5 col-md-5">
                    <form method="post" id="newsletter-form" class="newsletter-form">
                        <input type="email" placeholder="Your email..." />
                        <button type="submit" form="newsletter-form"><i class="fa fa-send"></i></button>
                    </form>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}else{
    navigation("/dashboard/wallet/wallet")
}
}

export default Login