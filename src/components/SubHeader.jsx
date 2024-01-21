import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import TopAssets from './TopAssets';
import { useSelector } from 'react-redux';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const SubHeader = () => {
  const {offers} = useSelector(state => state.assets)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3
  };
  return (
    <div>
      <section class="subheader simple-search">
        <div class="container bg-gray-light-trans p-3">
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
                <p>Every property is unique, and so is our approach. We craft personalized selling strategies to meet your specific needs, ensuring a stress-free and rewarding experience.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="service-item shadow-hover">
                <i class="fa fa-group"></i>
                <h4>Expert Agents</h4>
                <p>Trust our team of expert agents at to navigate your property journey with market mastery, negotiation prowess, and personalized solutions, ensuring you receive unparalleled guidance every step of the way.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="service-item shadow-hover">
                <i class="fa fa-file-text"></i>
                <h4>Daily Listings</h4>
                <p>we pride ourselves on delivering a dynamic and constantly updated portfolio of properties. With our daily listings, you gain exclusive access to the latest and most exciting real estate opportunities in the market.!"</p>
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
      <img src="images/divider.png" alt=""/>
      <p>Discover excellence with our featured product – where innovation meets elegance for a standout online experience</p>
    </div>
  </div>

 
  <div className=''>
    <div className='container'>
    <Slider {...settings}>
      {offers.map((offer) => (
        <div className="bg-white mr-2 w-350 bg-red mt-2">
          <div className='h-350'>
            <img src={offer.image_url} alt="" className='w-full h-full' />
          </div>
          <div className='flex flex-col justify-center items-center gap-4'>
            <p className='font-bold mt-1'> {offer.name}</p>
            <p className='m-0'>{offer.address}</p>
            <p className='m-0'>{offer.city}</p>
            <button className='text-white border p-2 px-4 rounded-md phoenix-blue mb-2'>View</button>
           
          </div>
        </div>
      ))}
        </Slider>
    </div>

  </div>
  

</section>

  <section>
  
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
        <h3>"Phoenix Homes helped us sell our house with minimal effort. Their team was efficient and always there to help!"</h3>
        <div class="testimonial-details">
          <img class="testimonial-img" src="images/70x70.png" alt="" />
          <p class="testimonial-name"><strong>John Doe</strong></p>
          <span class="testiomnial-title"><em>CEO at <a href="#">Rype Creative</a></em></span>
        </div>
      </div>
      <div class="testimonial slide">
        <h3>"Phoenx Homes helped us sell our house with minimal effort. Their team was efficient and always there to help! Homely helped us sell our house with minimal effort. Their team was efficient and always there to help!"</h3>
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