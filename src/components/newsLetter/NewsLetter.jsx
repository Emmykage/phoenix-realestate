import React from 'react'

const NewsLetter = () => {
  return (

<section className="module cta newsletter px-4">
  <div className="container m-auto">
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
</section>  )
}

export default NewsLetter