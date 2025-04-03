import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import TopAssets from './TopAssets';
import { useSelector } from 'react-redux';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const FeaturedProperty = () => {
  const {offers} = useSelector(state => state.assets)
  const [isMobileView, setIsMobileView] = useState(false)



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobileView ? 1 : 2,
    slidesToScroll: 3
  };

  const handleResize = () => {
    window.innerWidth  < 680 && setIsMobileView(true)

  }


  useEffect(()=> {
    window.addEventListener("resize", handleResize)
    return ()=> window.removeEventListener("resize", handleResize)
  })

  return (
    <div>
      
      

{/* =============================================================== */}

<section className="module no-padding properties featured">

  <div className="container m-auto">
    <div className="module-header">
      <h2>Featured <strong>Properties</strong></h2>
      <img src="images/divider.png" alt="" className='block m-auto'/>
      <p>Discover excellence with our featured product – where innovation meets elegance for a standout online experience</p>
    </div>
  </div>

 
  <div className=''>
    <div className='container px-7 m-auto'>
    <Slider {...settings}>
      {offers.map((offer) => (
        <div className="bg-white md:mr-0 w-350 bg-red mt-2">
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


<section className="module testimonials">

  <div className="container m-auto">
    <div className="module-header">
      <h2>Our <strong>Testimonials</strong></h2>
      <img src="images/divider-white.png" alt="" className='block m-auto' />
      <p>Morbi accumsan ipsum velit nam nec tellus a odiose tincidunt auctor a ornare odio sed non mauris vitae erat consequat auctor</p>
    </div>
  </div>

  <div className="slider-nav slider-nav-testimonials">
    <span className="slider-prev"><i className="fa fa-angle-left"></i></span>
    <span className="slider-next"><i className="fa fa-angle-right"></i></span>
  </div>

  <div className="container">
    <div className="slider slider-testimonials">
      <div className="testimonial slide">
        <h3>"Phoenix Homes helped us sell our house with minimal effort. Their team was efficient and always there to help!"</h3>
        <div className="testimonial-details">
          <img className="testimonial-img" src="images/70x70.png" alt="" />
          <p className="testimonial-name"><strong>John Doe</strong></p>
          <span className="testiomnial-title"><em>CEO at <a href="#">Rype Creative</a></em></span>
        </div>
      </div>
      <div className="testimonial slide">
        <h3>"Phoenx Homes helped us sell our house with minimal effort. Their team was efficient and always there to help! Homely helped us sell our house with minimal effort. Their team was efficient and always there to help!"</h3>
        <div className="testimonial-details">
          <img className="testimonial-img" src="images/70x70.png" alt="" />
          <p className="testimonial-name"><strong>John Doe</strong></p>
          <span className="testiomnial-title"><em>CEO at <a href="#">Rype Creative</a></em></span>
        </div>
      </div>
    </div>
  </div>
</section>









{/* ======================================================================= */}


    </div>
  )
}

export default FeaturedProperty