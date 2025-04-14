import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import TopAssets from './TopAssets';
import { useSelector } from 'react-redux';
import defaultImage from "../assets/images/pictures/daria-nepriakhina-LZkbXfzJK4M-unsplash.jpg"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useScrollEffect from '../hooks/useScrllEffect';
import { GrFormPreviousLink, GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

const testimonials = [
  {
    name: "John Rudcluff",
    title: "CEO atRype Creative",
    testimonial: "Phoenix Homes helped us sell our house with minimal effort. Their team was efficient and always there to help!"
  },
  {
    name: "Linda  Romanof",
    title: "Entrepreneur",
    testimonial: "As a first-time homebuyer, I had a lot of questions. Phoenix Homes was patient, professional, and extremely knowledgeable. I highly recommend them to anyone looking for a reliable real estate partner."

  }
  ,
  {
    name: "David Mensah ",
    title: "Software Engineer",
    testimonial: "Phoenix Homes truly stands out for their attention to detail and customer service. They understood exactly what I was looking for and delivered beyond expectations"
  }
  ,
  {
    name: "Sarah Thompson",
    title: "Marketing Manager",
    testimonial: "Working with Phoenix Homes was a game-changer. Their team made the home-buying process smooth and stress-free. I found my dream home in no time, and I couldn’t be happier!"
  }
]
const FeaturedProperty = () => {
  const {offers} = useSelector(state => state.assets)
  const [isMobileView, setIsMobileView] = useState(false)

useScrollEffect()


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (

    <GrLinkNext className={"block absolute translate-y-1/2 right-0 top-1/2 text-3xl opacity-20 hover:opacity-100"} onClick={onClick} />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrLinkPrevious  className={"block absolute translate-y-1/2 left-0 top-1/2 text-3xl opacity-20 hover:opacity-100"} onClick={onClick} />

  );
}


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobileView ? 1 : 2,
    slidesToScroll: 3
  };
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    swipeToSlide: true,
    // fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
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
    <div data-aos="fade-up" className="module-header">
      <h2>Featured <strong>Properties</strong></h2>
      <img src="images/divider.png" alt="" className='block m-auto'/>
      <p>Discover excellence with our featured product – where innovation meets elegance for a standout online experience</p>
    </div>
  </div>

 
  <div data-aos="fade-up"
     data-aos-duration="3000"
      className=''>
    <div className='container px-7 m-auto'>
    <Slider {...settings}>
      {offers.map((offer) => (
        <div className="bg-white md:mr-0 w-3 h- px-2  mt-2">
          <div className='h-96 bg-green-50 p-4'>
            <img src={offer.image_url ?? defaultImage} alt="" className='w-full h-full  rounded-lg' />
          </div>
          <div className='flex flex-col justify-center items-center gap-4'>
            <p className='font-bold mt-1'> {offer.name}</p>
            <p className='m-0'>{offer.address}</p>
            <p className='m-0'>{offer.city}</p>
            <button className='text-gray-700 border p-2 px-4 rounded-md phoenix-blue mb-2'>Explore</button>
           
          </div>
        </div>
      ))}
        </Slider>
    </div>

  </div>
  

</section>

  <section>
  
  </section>


<section className=" pattern">

  <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
      className="container m-auto">
    <div className="module-header border-b pb-5 border-gray-500/60">
      <h2 className='text-white'>Our <strong>Testimonials</strong></h2>
      <img src="images/divider-white.png" alt="" className='block m-auto' />
      <p>See what our customers are saying! From improved engagement to smarter feedback workflows, businesses of all sizes trust us to help them understand and elevate their customer experience. Here's how we've made a difference.</p>
    </div>
  </div>



  <div   data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
      className="container">
  <div className=" slider-testimonials">
  <Slider {...testimonialSettings}>

    {
      testimonials.map(item => (
        <div className="testimonial slide">
          <h3 className='text-center max-w-5xl m-auto text-gray-200 md:text-3xl text-2xl'>"{item.testimonial}"</h3>
          <div className="testimonial-details block py-5  ">
            <img className="testimonial-img block m-auto mb-2.5 w-16 h-16 rounded-full  " src="images/70x70.png" alt="" />
            <p className="testimonial-name font-medium text-lg text-center mt-4"><strong>{item.name}</strong></p>
            <span className="testiomnial-title block text-center">{item.title}</span>
          </div>
        </div>

      ))
    }
  </Slider>

      </div>
 
  
  </div>
</section>









{/* ======================================================================= */}


    </div>
  )
}

export default FeaturedProperty