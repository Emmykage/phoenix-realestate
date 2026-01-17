import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { registerUser } from '../../redux/actions/auth'

const AdminRegister = () => {
  const navigation = useNavigate()
  const dispatch = useDispatch()
  const {user, loading, error, message} = useSelector(state => state.auth)
  const [formInput, setFormInput] = useState({first_name: "", last_name: "", email: "", password: "", role: "admin"})

  
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
  if(!user){

  return (
    <div className=''>
        
<section className="subheader register">
  <div className="container">
    <h1>Admin Register</h1>
    <div className="breadcrumb right"><NavLink to={'/'}>Home</NavLink>  <i className="fa fa-angle-right"></i> <NavLink to="#" className="current">Register</NavLink></div>
    <div className="clear"></div>
  </div>
</section>

<section className="module login">
  <div className="container fit">

    <div className="row">
      <div className="col-lg-4 col-lg-offset-4"> 
        <p>Already have an account? <strong><NavLink to="/auth/admin/login">Login here.</NavLink></strong></p> 
            <form onSubmit={handleFormSubmit} className="login-form">
            <div className="form-block">
                <label>First Name</label>
                <input className="border" type="text" name="first_name" onChange={handleInputChange} />
            </div>
            <div className="form-block">
                <label>Last Name</label>
                <input className="border" type="text" name="last_name" onChange={handleInputChange}/>
            </div>
            <div className="form-block">
                <label>Email</label>
                <input className="border" type="text" name="email" onChange={handleInputChange}/>
            </div>
            <div className="form-block">
                <label>Password</label>
                <input className="border" type="password" name="password" onChange={handleInputChange}/>
            </div>
            <div className="form-block">
                <label>Confirm Password</label>
                <input className="border" type="password" name="confirm_password" onChange={handleInputChange} />
            </div>
            <div className="form-block">
                <label>check</label>
                <input className="border" type="checkbox" name="completed"  checked={formInput.completed} onChange={handleInputChange} />
            </div>
            <p>{loading && "Loading..." }</p>
            <p className='text-red'>{error && message}</p>
            
            
            <div className="form-block">
                <button className="button button-icon" type="submit"><i className="fa fa-angle-right"></i>Register</button>
            </div>
            <div className="divider"></div>
            <p className="note">By clicking the "Register" button you agree with our <a href="#">Terms and conditions</a></p>    
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
}else{
  navigation('/auth/admin/login')
}
}

export default AdminRegister