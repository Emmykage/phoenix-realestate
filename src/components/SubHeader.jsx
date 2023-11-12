import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import TopAssets from './TopAssets';

const SubHeader = () => {

  return (
    <div>
      <section class="subheader simple-search">
        <div class="container">
          <h1>Find your new home today.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec risus egestas, vestibulum arcu.</p>

          <form class="simple-search-form">
            <div class="tabs">
              <ul>
                <li><a href="#tabs-1">All</a></li>
                <li><a href="#tabs-2">For Sale</a></li>
                <li><a href="#tabs-3">For Rent</a></li>
              </ul>
              <div id="tabs-1" class="ui-tabs-hide">
                <input type="text" placeholder="Enter an address or city..." />
                <input type="submit" value="GO" />
              </div>
              <div id="tabs-2" class="ui-tabs-hide">
                <input type="text" placeholder="Enter an address or city..." />
                <input type="submit" value="GO" />
              </div>
              <div id="tabs-3" class="ui-tabs-hide">
                <input type="text" placeholder="Enter an address or city..." />
                <input type="submit" value="GO" />
              </div>
            </div>
          </form>

        </div>
      </section>

      <section class="module services">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div class="service-item shadow-hover">
                <i class="fa fa-home"></i>
                <h4>Sell Property</h4>
                <p>Morbi accumsan ipsum velit Nam nec tellus 
                a odio tincidunt auctor a ornare odio sedlon 
                maurisvitae erat consequat auctor</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="service-item shadow-hover">
                <i class="fa fa-group"></i>
                <h4>Expert Agents</h4>
                <p>Morbi accumsan ipsum velit Nam nec tellus 
                a odio tincidunt auctor a ornare odio sedlon 
                maurisvitae erat consequat auctor</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="service-item shadow-hover">
                <i class="fa fa-file-text"></i>
                <h4>Daily Listings</h4>
                <p>Morbi accumsan ipsum velit Nam nec tellus 
                a odio tincidunt auctor a ornare odio sedlon 
                maurisvitae erat consequat auctor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* =============================================================== */}

<section class="module no-padding properties featured">

  <div class="container">
    <div class="module-header">
      <h2>Featured <strong>Properties</strong></h2>
      <img src="images/divider.png" alt="" />
      <p>Morbi accumsan ipsum velit nam nec tellus a odiose tincidunt auctor a ornare odio sed non mauris vitae erat consequat auctor</p>
    </div>
  </div>

  <div class="slider-nav slider-nav-properties-featured">
    <span class="slider-prev"><i class="fa fa-angle-left"></i></span>
    <span class="slider-next"><i class="fa fa-angle-right"></i></span>
  </div>
  
  <div class="slider-wrap">
    <div class="slider slider-featured">
    
    <div class="property property-hidden-content slide">
      <a href="#" class="property-content">
        <div class="property-title">
          <h4>Modern Family Home</h4>
          <p class="property-address"><i class="fa fa-map-marker icon"></i>123 Smith Dr, Annapolis, MD</p>
        </div>
        <table class="property-details">
          <tr>
            <td><i class="fa fa-bed"></i> 3 Beds</td>
            <td><i class="fa fa-tint"></i> 2 Baths</td>
            <td><i class="fa fa-expand"></i> 25,000 Sq Ft</td>
          </tr>
        </table>
      </a>
      <a href="#" class="property-img">
          <div class="img-fade"></div>
          <div class="property-tag button alt featured">Featured</div>
          <div class="property-tag button status">For Rent</div>
          <div class="property-price">$150,000</div>
          <div class="property-color-bar"></div>
          <img src="images/1837x1206.png" alt="" />
      </a>
    </div>

    <div class="property property-hidden-content slide">
      <a href="#" class="property-content">
        <div class="property-title">
          <h4>Modern Family Home</h4>
          <p class="property-address"><i class="fa fa-map-marker icon"></i>123 Smith Dr, Annapolis, MD</p>
        </div>
        <table class="property-details">
          <tr>
            <td><i class="fa fa-bed"></i> 3 Beds</td>
            <td><i class="fa fa-tint"></i> 2 Baths</td>
            <td><i class="fa fa-expand"></i> 25,000 Sq Ft</td>
          </tr>
        </table>
      </a>
      <a href="#" class="property-img">
          <div class="img-fade"></div>
          <div class="property-tag button alt featured">Featured</div>
          <div class="property-tag button status">For Rent</div>
          <div class="property-price">$150,000</div>
          <div class="property-color-bar"></div>
          <img src="images/1837x1206.png" alt="" />
      </a>
    </div>

    <div class="property property-hidden-content slide">
      <a href="#" class="property-content">
        <div class="property-title">
          <h4>Modern Family Home</h4>
          <p class="property-address"><i class="fa fa-map-marker icon"></i>123 Smith Dr, Annapolis, MD</p>
        </div>
        <table class="property-details">
          <tr>
            <td><i class="fa fa-bed"></i> 3 Beds</td>
            <td><i class="fa fa-tint"></i> 2 Baths</td>
            <td><i class="fa fa-expand"></i> 25,000 Sq Ft</td>
          </tr>
        </table>
      </a>
      <a href="#" class="property-img">
          <div class="img-fade"></div>
          <div class="property-tag button alt featured">Featured</div>
          <div class="property-tag button status">For Rent</div>
          <div class="property-price">$150,000</div>
          <div class="property-color-bar"></div>
          <img src="images/1837x1206.png" alt="" />
      </a>
    </div>

    <div class="property property-hidden-content slide">
      <a href="#" class="property-content">
        <div class="property-title">
          <h4>Modern Family Home</h4>
          <p class="property-address"><i class="fa fa-map-marker icon"></i>123 Smith Dr, Annapolis, MD</p>
        </div>
        <table class="property-details">
          <tr>
            <td><i class="fa fa-bed"></i> 3 Beds</td>
            <td><i class="fa fa-tint"></i> 2 Baths</td>
            <td><i class="fa fa-expand"></i> 25,000 Sq Ft</td>
          </tr>
        </table>
      </a>
      <a href="#" class="property-img">
          <div class="img-fade"></div>
          <div class="property-tag button alt featured">Featured</div>
          <div class="property-tag button status">For Rent</div>
          <div class="property-price">$150,000</div>
          <div class="property-color-bar"></div>
          <img src="images/1837x1206.png" alt="" />
      </a>
    </div>
  
    <div class="property property-hidden-content slide">
      <a href="#" class="property-content">
        <div class="property-title">
          <h4>Modern Family Home</h4>
          <p class="property-address"><i class="fa fa-map-marker icon"></i>123 Smith Dr, Annapolis, MD</p>
        </div>
        <table class="property-details">
          <tr>
            <td><i class="fa fa-bed"></i> 3 Beds</td>
            <td><i class="fa fa-tint"></i> 2 Baths</td>
            <td><i class="fa fa-expand"></i> 25,000 Sq Ft</td>
          </tr>
        </table>
      </a>
      <a href="#" class="property-img">
          <div class="img-fade"></div>
          <div class="property-tag button alt featured">Featured</div>
          <div class="property-tag button status">For Rent</div>
          <div class="property-price">$150,000</div>
          <div class="property-color-bar"></div>
          <img src="images/1837x1206.png" alt="" />
      </a>
    </div>
  
    </div>
  </div>
</section>

<section class="module property-categories">
  <div class="container">

    <div class="module-header">
      <h2>Browse Our Most <strong>Popular Categories</strong></h2>
      <img src="images/divider.png" alt="" />
      <p>Morbi accumsan ipsum velit nam nec tellus a odiose tincidunt auctor a ornare odio sed non mauris vitae erat consequat auctor</p>
    </div>

    <div class="row">
      <div class="col-lg-8 col-md-8">
        <NavLink to="/studio_homes" className="property-cat property-cat-apartments">
          <h3>Studio Apartments</h3>
          <div class="color-bar"></div>
          <span class="button small">234 Properties</span>
        </NavLink>
      </div>
      <div class="col-lg-4 col-md-4">
        <NavLink to="/family_homes" className="property-cat property-cat-houses">
          <h3>Family Homes</h3>
          <div class="color-bar"></div>
          <span class="button small">234 Properties</span>
        </NavLink>
      </div>
    </div>

    <div class="row">
      {/* <div class="col-lg-4 col-md-4">
        <a href="#" class="property-cat property-cat-condos">
          <h3>Condos & Villas</h3>
          <div class="color-bar"></div>
          <span class="button small">234 Properties</span>
        </a>
      </div> */}
      {/* <div class="col-lg-4 col-md-4">
        <a href="#" class="property-cat property-cat-waterfront">
          <h3>Waterfront Homes</h3>
          <div class="color-bar"></div>
          <span class="button small">234 Properties</span>
        </a>
      </div> */}
      {/* <div class="col-lg-4 col-md-4">
        <a href="#" class="property-cat property-cat-cozy">
          <h3>Cozy Houses</h3>
          <div class="color-bar"></div>
          <span class="button small">234 Properties</span>
        </a>
      </div> */}
    </div>

  </div>
</section>



<section class="module testimonials">

  <div class="container">
    <div class="module-header">
      <h2>Our <strong>Testimonials</strong></h2>
      <img src="images/divider-white.png" alt="" />
      <p>Morbi accumsan ipsum velit nam nec tellus a odiose tincidunt auctor a ornare odio sed non mauris vitae erat consequat auctor</p>
    </div>
  </div>

  <div class="slider-nav slider-nav-testimonials">
    <span class="slider-prev"><i class="fa fa-angle-left"></i></span>
    <span class="slider-next"><i class="fa fa-angle-right"></i></span>
  </div>

  <div class="container">
    <div class="slider slider-testimonials">
      <div class="testimonial slide">
        <h3>"Homely helped us sell our house with minimal effort. Their team was efficient and always there to help!"</h3>
        <div class="testimonial-details">
          <img class="testimonial-img" src="images/70x70.png" alt="" />
          <p class="testimonial-name"><strong>John Doe</strong></p>
          <span class="testiomnial-title"><em>CEO at <a href="#">Rype Creative</a></em></span>
        </div>
      </div>
      <div class="testimonial slide">
        <h3>"Homely helped us sell our house with minimal effort. Their team was efficient and always there to help! Homely helped us sell our house with minimal effort. Their team was efficient and always there to help!"</h3>
        <div class="testimonial-details">
          <img class="testimonial-img" src="images/70x70.png" alt="" />
          <p class="testimonial-name"><strong>John Doe</strong></p>
          <span class="testiomnial-title"><em>CEO at <a href="#">Rype Creative</a></em></span>
        </div>
      </div>
    </div>
  </div>
</section>

<TopAssets/>







{/* ======================================================================= */}


    </div>
  )
}

export default SubHeader