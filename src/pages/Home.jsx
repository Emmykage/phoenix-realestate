import React, { useEffect } from 'react'
import SubHeader from '../components/FeaturedProperty'
import { useSelector } from 'react-redux'
import Nav from '../components/nav/Nav'
import NewsLetter from '../components/newsLetter/NewsLetter'
import { NavLink } from 'react-router-dom'
import TopAssets from '../components/TopAssets'
import Aos from 'aos'
import "aos/dist/aos.css";
const Home = () => {
    const {user} = useSelector(state => state.auth)

    useEffect(()=> {
      Aos.init()
      Aos.refresh()
    },[])
  
  return (
    <div>
       <Nav user={user}/>

       <section className="subheader simple-search">
        <div className="container bg-gray-light-trans p-3 m-auto">
          <div className='bg-gray-900/70 m-auto rounded-lg max-w-7xl p-4 pt-10'>
          <h1 className='text-3xl mb-3 leading-9 text-center md:text-5xl text-white font-bold'>Find your new home today.</h1>
          <p className='text-alt leading-8 font-medium mt-5 text-xl'>Explore a wide range of properties tailored to your needs. Whether you're looking for a cozy apartment or a spacious family home, we’ll help you find the perfect place. Start your journey today!</p>

          </div>
        
          <form className="simple-search-form">
            <div className="tabs">
              <ul>
                <li><a href="#tabs-1">All</a></li>
                <li><a href="#tabs-2">For Sale</a></li>
                <li><a href="#tabs-3">For Rent</a></li>
              </ul>
              <div id="tabs-1" className="ui-tabs-hide">
                <input type="text" placeholder="Enter an address or city..." />
                <input type="submit" value="GO" />
              </div>
              <div id="tabs-2" className="ui-tabs-hide">
                <input type="text" placeholder="Enter an address or city..." />
                <input type="submit" value="GO" />
              </div>
              <div id="tabs-3" className="ui-tabs-hide">
                <input type="text" placeholder="Enter an address or city..." />
                <input type="submit" value="GO" />
              </div>
            </div>
          </form>

        </div>
      </section>
      <section className="module services z-10">
        <div className="container m-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <div data-aos="fade-up" className="">
              <div className="service-item shadow-hover">
                <i className="fa fa-home"></i>
                <h4>Sell Property</h4>
                <p>Every property is unique, and so is our approach. We craft personalized selling strategies to meet your specific needs, ensuring a stress-free and rewarding experience.</p>
              </div>
            </div>
            <div data-aos="fade-up" className="col-lg-4 col-md-4">
              <div className="service-item shadow-hover">
                <i className="fa fa-group"></i>
                <h4>Expert Agents</h4>
                <p>Trust our team of expert agents at to navigate your property journey with market mastery, negotiation prowess, and personalized solutions, ensuring you receive unparalleled guidance every step of the way.</p>
              </div>
            </div>
            <div data-aos="fade-up" className="col-lg-4 col-md-4">
              <div className="service-item shadow-hover">
                <i className="fa fa-file-text"></i>
                <h4>Daily Listings</h4>
                <p>we pride ourselves on delivering a dynamic and constantly updated portfolio of properties. With our daily listings, you gain exclusive access to the latest and most exciting real estate opportunities in the market.!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>


        {/* <SubHeader/> */}
        
{/* <section className="module property-categories">
  <div
  data-aos="fade-up"
  data-aos-duration="3000"
   className="container m-auto">

    <div className="module-header">
      <h2>Browse Our Most <strong>Popular Categories</strong></h2>
      <img src="images/divider.png" alt="" className='block m-auto'  />
      <p>Morbi accumsan ipsum velit nam nec tellus a odiose tincidunt auctor a ornare odio sed non mauris vitae erat consequat auctor</p>
    </div>

    <div className="flex flex-col md:flex-row gap-3">
      <div className=" md:w-2/3">
        <NavLink to="#" className="property-cat property-cat-apartments">
          <h3>Studio Apartments</h3>
          <div className="color-bar"></div>
          <span className="button small">234 Properties</span>
        </NavLink>
      </div>
      <div className="md:w-1/3">
        <NavLink to="#" className="property-cat property-cat-houses">
          <h3>Family Homes</h3>
          <div className="color-bar"></div>
          <span className="button small">234 Properties</span>
        </NavLink>
      </div>
    </div>

  

  </div>
</section> */}
<TopAssets/>

        {/* <NewsLetter/> */}
    </div>
  )
}

export default Home