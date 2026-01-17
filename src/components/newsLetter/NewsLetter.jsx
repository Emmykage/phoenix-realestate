import React from 'react'

const NewsLetter = () => {
  return (

<section className="py-20 cta newsletter px-4">
  <div className="container m-auto">
	<div className="row">
		<div className="col-lg-7 col-md-7">
			<h3  className='text-3xl font-semibold my-2'>Sign up for our <strong>newsletter.</strong></h3>
			<p>Just drop your email below and join our newsletter for exclusive updates, tips, and a little something extra in your inbox. We promise—no spam, just the good stuff!</p>
		</div>
		<div className="col-lg-5 col-md-5">
			<form method="post" id="newsletter-form" className="newsletter-form">
				<input type="email" placeholder="Your email..." />
				<button type="submit" form="newsletter-form"><i className="fa fa-send"></i></button>
			</form>
		</div>
	</div>
  </div>
</section>  )
}

export default NewsLetter