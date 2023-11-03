import React from 'react'

const AdminRegister = () => {
  const [formInput, setFormInput] = useState({first_name: "", last_name: "", email: "", password: "", role: "admin"})
  const handleInput = () => {

  }
  return (
    <div>
        
<section class="subheader">
  <div class="container">
    <h1>Register</h1>
    <div class="breadcrumb right">Home <i class="fa fa-angle-right"></i> <a href="#" class="current">Register</a></div>
    <div class="clear"></div>
  </div>
</section>

<section class="module login">
  <div class="container">

    <div class="row">
      <div class="col-lg-4 col-lg-offset-4"> 
        <p>Already have an account? <strong><a href="login.html">Login here.</a></strong></p> 
            <form onSubmit={handleInput} class="login-form">
            <div class="form-block">
                <label>First Name</label>
                <input class="border" type="text" name="first_name" />
            </div>
            <div class="form-block">
                <label>Last Name</label>
                <input class="border" type="text" name="last_name" />
            </div>
            <div class="form-block">
                <label>Email</label>
                <input class="border" type="text" name="email" value={formInput.email} />
            </div>
            <div class="form-block">
                <label>Password</label>
                <input class="border" type="password" name="password" value={formInput.password} />
            </div>
            <div class="form-block">
                <label>Confirm Password</label>
                <input class="border" type="password" name="pass-confirm" />
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
}

export default AdminRegister