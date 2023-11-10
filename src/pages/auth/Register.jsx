import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { registerUser } from '../../redux/actions/auth'
import { userLog } from '../../redux/auth/user_authentication'

const Register = () => {
  const navigation = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.user)
  const [formInput, setFormInput] = useState({first_name: "", last_name: "", email: "", password: "", role: "client", confirm_password: "", completed: false})
  useEffect(()=> {
    dispatch(userLog())
},[])
  const handleInputChange = (e) => {
    if (e.target.name === "completed"){
      setFormInput({
        ...formInput,
        [e.target.name]: e.target.checked
      })
    }else{
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    })
  }
 
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    dispatch(registerUser({user: formInput}))    
    
  }
  if(user == null || user == undefined){

  return (
    <div>
        
<section class="subheader">
  <div class="container">
    <h1>Register</h1>
    <div class="breadcrumb right">Home <i class="fa fa-angle-right"></i> <NavLink to="#" class="current">Register</NavLink></div>
    <div class="clear"></div>
  </div>
</section>

<section class="module login">
  <div class="container">

    <div class="row">
      <div class="col-lg-4 col-lg-offset-4"> 
        <p>Already have an account? <strong><NavLink to="/auth/login">Login here.</NavLink></strong></p> 
            <form onSubmit={handleFormSubmit} class="login-form">
            <div class="form-block">
                <label>First Name</label>
                <input class="border" type="text" name="first_name" onChange={handleInputChange} />
            </div>
            <div class="form-block">
                <label>Last Name</label>
                <input class="border" type="text" name="last_name" onChange={handleInputChange}/>
            </div>
            <div class="form-block">
                <label>Email</label>
                <input class="border" type="text" name="email" onChange={handleInputChange}/>
            </div>
            <div class="form-block">
                <label>Password</label>
                <input class="border" type="password" name="password" onChange={handleInputChange}/>
            </div>
            <div class="form-block">
                <label>Confirm Password</label>
                <input class="border" type="password" name="confirm_password" onChange={handleInputChange} />
            </div>
            <div class="form-block">
                <label>check</label>
                <input class="border" type="checkbox" name="completed"  checked={formInput.completed} onChange={handleInputChange} />
            </div>
            
            <div class="form-block">
                <button class="button button-icon" type="submit"><i class="fa fa-angle-right"></i>Register</button>
            </div>
            <div class="divider"></div>
            <p class="note">By clicking the "Register" button you agree with our <a href="#">Terms and conditions</a></p>    
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
  navigation('/dashboard/wallet/wallet')
}

}

export default Register