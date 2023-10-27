import React from 'react'

const Properties = () => {
  return (
    <div>
        <section class="subheader">
  <div class="container">
    <h1>Property Listing Grid</h1>
    <div class="breadcrumb right">Home <i class="fa fa-angle-right"></i> <a href="#" class="current">Properties</a></div>
    <div class="clear"></div>
  </div>
</section>

<section class="module">
  <div class="container">
  
	<div class="property-listing-header">
    <span class="property-count left">8 properties found</span>
      <form action="#" method="get" class="right">
        <select name="sort_by" onchange="this.form.submit();">
          <option value="date_desc">New to Old</option>
          <option value="date_asc">Old to New</option>
          <option value="price_desc">Price (High to Low)</option>
          <option value="price_asc">Price (Low to High)</option>
        </select>
      </form>
      <div class="property-layout-toggle right">
        <a href="property-listing-grid.html" class="property-layout-toggle-item active"><i class="fa fa-th-large"></i></a>
        <a href="property-listing-row.html" class="property-layout-toggle-item"><i class="fa fa-bars"></i></a>
      </div>
      <div class="clear"></div>
	  </div>
    
    <div class="row">
        <div class="col-lg-4 col-md-4">
          <div class="property shadow-hover">
            <a href="#" class="property-img">
              <div class="img-fade"></div>
              <div class="property-tag button status">For Sale</div>
              <div class="property-price">$150,000</div>
              <div class="property-color-bar"></div>
              <img src="images/1837x1206.png" alt="" />
            </a>
            <div class="property-content">
              <div class="property-title">
              <h4><a href="#">Modern Family Home</a></h4>
                <p class="property-address"><i class="fa fa-map-marker icon"></i>123 Smith Dr, Annapolis, MD</p>
              </div>
              <table class="property-details">
                <tr>
                  <td><i class="fa fa-bed"></i> 3 Beds</td>
                  <td><i class="fa fa-tint"></i> 2 Baths</td>
                  <td><i class="fa fa-expand"></i> 25,000 Sq Ft</td>
                </tr>
              </table>
            </div>
            <div class="property-footer">
              <span class="left"><i class="fa fa-calendar-o icon"></i> 5 days ago</span>
              <span class="right">
                <a href="#"><i class="fa fa-heart-o icon"></i></a>
                <a href="#"><i class="fa fa-share-alt"></i></a>
              </span>
              <div class="clear"></div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-4">
          <div class="property shadow-hover">
            <a href="#" class="property-img">
              <div class="img-fade"></div>
              <div class="property-tag button alt featured">Featured</div>
              <div class="property-tag button status">For Rent</div>
              <div class="property-price">$6,500 <span>Per Month</span></div>
              <div class="property-color-bar"></div>
              <img src="images/1837x1206.png" alt="" />
            </a>
            <div class="property-content">
              <div class="property-title">
              <h4><a href="#">Beautiful Waterfront Condo</a></h4>
                <p class="property-address"><i class="fa fa-map-marker icon"></i>123 Smith Dr, Annapolis, MD</p>
              </div>
              <table class="property-details">
                <tr>
                  <td><i class="fa fa-bed"></i> 3 Beds</td>
                  <td><i class="fa fa-tint"></i> 2 Baths</td>
                  <td><i class="fa fa-expand"></i> 25,000 Sq Ft</td>
                </tr>
              </table>
            </div>
            <div class="property-footer">
              <span class="left"><i class="fa fa-calendar-o icon"></i> 1 week ago</span>
              <span class="right">
                <a href="#"><i class="fa fa-heart-o icon"></i></a>
                <a href="#"><i class="fa fa-share-alt"></i></a>
              </span>
              <div class="clear"></div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-4">
          <div class="property shadow-hover">
            <a href="#" class="property-img">
              <div class="img-fade"></div>
              <div class="property-tag button alt featured">Featured</div>
              <div class="property-tag button status">For Rent</div>
              <div class="property-price">$150,000</div>
              <div class="property-color-bar"></div>
              <img src="images/1837x1206.png" alt="" />
            </a>
            <div class="property-content">
              <div class="property-title">
              <h4><a href="#">Modern Family Home</a></h4>
                <p class="property-address"><i class="fa fa-map-marker icon"></i>123 Smith Dr, Annapolis, MD</p>
              </div>
              <table class="property-details">
                <tr>
                  <td><i class="fa fa-bed"></i> 3 Beds</td>
                  <td><i class="fa fa-tint"></i> 2 Baths</td>
                  <td><i class="fa fa-expand"></i> 25,000 Sq Ft</td>
                </tr>
              </table>
            </div>
            <div class="property-footer">
              <span class="left"><i class="fa fa-calendar-o icon"></i> 2 weeks ago</span>
              <span class="right">
                <a href="#"><i class="fa fa-heart-o icon"></i></a>
                <a href="#"><i class="fa fa-share-alt"></i></a>
              </span>
              <div class="clear"></div>
            </div>
          </div>
        </div>
		
	</div>
	<div class="row">
		
		<div class="col-lg-4 col-md-4">
          <div class="property shadow-hover">
            <a href="#" class="property-img">
              <div class="img-fade"></div>
              <div class="property-tag button alt featured">Featured</div>
              <div class="property-tag button status">For Rent</div>
              <div class="property-price">$150,000</div>
              <div class="property-color-bar"></div>
              <img src="images/1837x1206.png" alt="" />
            </a>
            <div class="property-content">
              <div class="property-title">
              <h4><a href="#">Modern Family Home</a></h4>
                <p class="property-address"><i class="fa fa-map-marker icon"></i>123 Smith Dr, Annapolis, MD</p>
              </div>
              <table class="property-details">
                <tr>
                  <td><i class="fa fa-bed"></i> 3 Beds</td>
                  <td><i class="fa fa-tint"></i> 2 Baths</td>
                  <td><i class="fa fa-expand"></i> 25,000 Sq Ft</td>
                </tr>
              </table>
            </div>
            <div class="property-footer">
              <span class="left"><i class="fa fa-calendar-o icon"></i> 2 weeks ago</span>
              <span class="right">
                <a href="#"><i class="fa fa-heart-o icon"></i></a>
                <a href="#"><i class="fa fa-share-alt"></i></a>
              </span>
              <div class="clear"></div>
            </div>
          </div>
        </div>
		
		<div class="col-lg-4 col-md-4">
          <div class="property shadow-hover">
            <a href="#" class="property-img">
              <div class="img-fade"></div>
              <div class="property-tag button alt featured">Featured</div>
              <div class="property-tag button status">For Rent</div>
              <div class="property-price">$150,000</div>
              <div class="property-color-bar"></div>
              <img src="images/1837x1206.png" alt="" />
            </a>
            <div class="property-content">
              <div class="property-title">
              <h4><a href="#">Modern Family Home</a></h4>
                <p class="property-address"><i class="fa fa-map-marker icon"></i>123 Smith Dr, Annapolis, MD</p>
              </div>
              <table class="property-details">
                <tr>
                  <td><i class="fa fa-bed"></i> 3 Beds</td>
                  <td><i class="fa fa-tint"></i> 2 Baths</td>
                  <td><i class="fa fa-expand"></i> 25,000 Sq Ft</td>
                </tr>
              </table>
            </div>
            <div class="property-footer">
              <span class="left"><i class="fa fa-calendar-o icon"></i> 2 weeks ago</span>
              <span class="right">
                <a href="#"><i class="fa fa-heart-o icon"></i></a>
                <a href="#"><i class="fa fa-share-alt"></i></a>
              </span>
              <div class="clear"></div>
            </div>
          </div>
        </div>
		
		<div class="col-lg-4 col-md-4">
          <div class="property shadow-hover">
            <a href="#" class="property-img">
              <div class="img-fade"></div>
              <div class="property-tag button alt featured">Featured</div>
              <div class="property-tag button status">For Rent</div>
              <div class="property-price">$150,000</div>
              <div class="property-color-bar"></div>
              <img src="images/1837x1206.png" alt="" />
            </a>
            <div class="property-content">
              <div class="property-title">
              <h4><a href="#">Modern Family Home</a></h4>
                <p class="property-address"><i class="fa fa-map-marker icon"></i>123 Smith Dr, Annapolis, MD</p>
              </div>
              <table class="property-details">
                <tr>
                  <td><i class="fa fa-bed"></i> 3 Beds</td>
                  <td><i class="fa fa-tint"></i> 2 Baths</td>
                  <td><i class="fa fa-expand"></i> 25,000 Sq Ft</td>
                </tr>
              </table>
            </div>
            <div class="property-footer">
              <span class="left"><i class="fa fa-calendar-o icon"></i> 2 weeks ago</span>
              <span class="right">
                <a href="#"><i class="fa fa-heart-o icon"></i></a>
                <a href="#"><i class="fa fa-share-alt"></i></a>
              </span>
              <div class="clear"></div>
            </div>
          </div>
        </div>
		
	</div>
	<div class="row">
		
		<div class="col-lg-4 col-md-4">
          <div class="property shadow-hover">
            <a href="#" class="property-img">
              <div class="img-fade"></div>
              <div class="property-tag button status">For Rent</div>
              <div class="property-price">$150,000</div>
              <div class="property-color-bar"></div>
              <img src="images/1837x1206.png" alt="" />
            </a>
            <div class="property-content">
              <div class="property-title">
              <h4><a href="#">Modern Family Home</a></h4>
                <p class="property-address"><i class="fa fa-map-marker icon"></i>123 Smith Dr, Annapolis, MD</p>
              </div>
              <table class="property-details">
                <tr>
                  <td><i class="fa fa-bed"></i> 3 Beds</td>
                  <td><i class="fa fa-tint"></i> 2 Baths</td>
                  <td><i class="fa fa-expand"></i> 25,000 Sq Ft</td>
                </tr>
              </table>
            </div>
            <div class="property-footer">
              <span class="left"><i class="fa fa-calendar-o icon"></i> 2 weeks ago</span>
              <span class="right">
                <a href="#"><i class="fa fa-heart-o icon"></i></a>
                <a href="#"><i class="fa fa-share-alt"></i></a>
              </span>
              <div class="clear"></div>
            </div>
          </div>
        </div>
		
		<div class="col-lg-4 col-md-4">
          <div class="property shadow-hover">
            <a href="#" class="property-img">
              <div class="img-fade"></div>
              <div class="property-tag button alt featured">Featured</div>
              <div class="property-tag button status">For Rent</div>
              <div class="property-price">$150,000</div>
              <div class="property-color-bar"></div>
              <img src="images/1837x1206.png" alt="" />
            </a>
            <div class="property-content">
              <div class="property-title">
              <h4><a href="#">Modern Family Home</a></h4>
                <p class="property-address"><i class="fa fa-map-marker icon"></i>123 Smith Dr, Annapolis, MD</p>
              </div>
              <table class="property-details">
                <tr>
                  <td><i class="fa fa-bed"></i> 3 Beds</td>
                  <td><i class="fa fa-tint"></i> 2 Baths</td>
                  <td><i class="fa fa-expand"></i> 25,000 Sq Ft</td>
                </tr>
              </table>
            </div>
            <div class="property-footer">
              <span class="left"><i class="fa fa-calendar-o icon"></i> 2 weeks ago</span>
              <span class="right">
                <a href="#"><i class="fa fa-heart-o icon"></i></a>
                <a href="#"><i class="fa fa-share-alt"></i></a>
              </span>
              <div class="clear"></div>
            </div>
          </div>
        </div>
		
		<div class="col-lg-4 col-md-4">
          <div class="property shadow-hover">
            <a href="#" class="property-img">
              <div class="img-fade"></div>
              <div class="property-tag button alt featured">Featured</div>
              <div class="property-tag button status">For Rent</div>
              <div class="property-price">$150,000</div>
              <div class="property-color-bar"></div>
              <img src="images/1837x1206.png" alt="" />
            </a>
            <div class="property-content">
              <div class="property-title">
              <h4><a href="#">Modern Family Home</a></h4>
                <p class="property-address"><i class="fa fa-map-marker icon"></i>123 Smith Dr, Annapolis, MD</p>
              </div>
              <table class="property-details">
                <tr>
                  <td><i class="fa fa-bed"></i> 3 Beds</td>
                  <td><i class="fa fa-tint"></i> 2 Baths</td>
                  <td><i class="fa fa-expand"></i> 25,000 Sq Ft</td>
                </tr>
              </table>
            </div>
            <div class="property-footer">
              <span class="left"><i class="fa fa-calendar-o icon"></i> 2 weeks ago</span>
              <span class="right">
                <a href="#"><i class="fa fa-heart-o icon"></i></a>
                <a href="#"><i class="fa fa-share-alt"></i></a>
              </span>
              <div class="clear"></div>
            </div>
          </div>
        </div>
		
    </div>
	
	<div class="pagination">
        <div class="center">
            <ul>
              <li><a href="#" class="button small grey"><i class="fa fa-angle-left"></i></a></li>
              <li class="current"><a href="#" class="button small grey">1</a></li>
              <li><a href="#" class="button small grey">2</a></li>
              <li><a href="#" class="button small grey">3</a></li>
              <li><a href="#" class="button small grey"><i class="fa fa-angle-right"></i></a></li>
            </ul>
        </div>
        <div class="clear"></div>
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

export default Properties