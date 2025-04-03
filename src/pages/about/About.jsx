import React from 'react'
import Nav from '../../components/nav/Nav'
import aboutImg from "../../assets/images/pictures/breno-assis-r3WAWU5Fi5Q-unsplash.jpg"
import SubHeader from '../../components/subHeader/SubHeader'
const About = () => {
  return (
    <div>
      <Nav/>
       <SubHeader tittle={"About US"}/>
  <section className="module content bg-white px-4 ">
    <div className="max-w-7xl m-auto bg-white">
      <div className="flex md:flex-row flex-col items- gap-10 bg--300">

        <div className="flex-1 font-medium leading-8">
            <h3>Proven Property Specialists Celebrating 12 Years in Property Investment</h3>
            <img src="images/divider-half.png" alt="" /><br/><br/>
            <p><strong>PHEONIX PRECAST LTD (11231705) is a Manchester & London-based, proven property investment specialist with a 12-year history in the property investment business. We specialise in identifying and sourcing high-yield property investments for clients across the UK and overseas. Our purpose is to help investors navigate the property investment market by providing expert advice and access to exclusive opportunities, allowing our clients to build their wealth.
            </strong></p>
            <p>At Phoenix Precast LTD, we are committed to providing a transparent, professional, and client-centric approach to property investment, prioritising the delivery of exceptional guidance, maintaining strong relationships with developers and partners, and ensuring our clients have access to thoroughly researched and well-managed investment opportunities.
            </p> 
            <p>Established in 2013, our extensive market knowledge, established relationships within the industry, and the ability to identify emerging investment hotspots allow us to offer a comprehensive end-to-end service in property investment. We focus on conducting thorough due diligence to select high-yield properties, providing a trusted and reliable investment solution for our clients.
            </p>

            <p>Our mission is to serve as a reliable and consistent partner for real estate investors seeking flexible financing solutions. We aim to facilitate the realisation of their property investment goals by offering accessible, transparent, and innovative investment opportunities. </p>

            <p>
            Our commitment to fostering long-term relationships extends beyond the closing of a deal. We strive to be a trusted advisor and reliable partner, supporting our clients throughout their real estate investment journey..

            </p>

          </div>
    
          <div className="flex-1 bg-red-">
           <img className="about-video-thumb rounded-xl object-cover h-full backdrop-grayscale-0" src={aboutImg} alt="about" />
            <div className="clear"></div>
          </div>
          </div>
        </div>
  </section>
  
  <section className="module cta hexs">
    <div className="container">

      <div className="module-header">
        <h2>What We've <strong>Been Up To</strong></h2>
        <img src="images/divider-white.png" alt="" className="block m-auto" />
        <p>We're actively acquiring high-potential properties, optimizing assets, and expanding into new markets. With a focus on strong returns and sustainable growth, we're shaping the future of real estate investment. Stay tuned!</p>
      </div>

      <div className="flex overflow-x-auto flex-nowrap no-scroll">
        <div className="md:flex-1 w-full shrink-0">
          <div className="hex">
            <img src="images/hexagon-dark.png" alt="" />
            <p><span>1,200</span> Satisfied Customers</p>
          </div>
        </div>
        <div className="md:flex-1 w-full  shrink-0">
          <div className="hex">
            <img src="images/hexagon-dark.png" alt="" />
            <p><span>3,000</span> Properties Listed</p>
          </div>
        </div>
        <div className="md:flex-1 w-full shrink-0">
          <div className="hex">
            <img src="images/hexagon-dark.png" alt="" />
            <p><span>2,220</span> Properties Sold</p>
          </div>
        </div>
        <div className="md:flex-1 w-full  shrink-0">
          <div className="hex">
            <img src="images/hexagon-dark.png" alt="" />
            <p><span>140</span> Happy Agents</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  
  {/* <section className="module team">
    <div className="container">

      <div className="module-header">
        <h2>Meet Our <strong>Leaders</strong></h2>
        <img src="images/divider.png" alt="" className="block m-auto" />
        <p>Morbi accumsan ipsum velit nam nec tellus a odiose tincidunt auctor a ornare odio sed non mauris vitae erat consequat auctor</p>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-4">
          <div className="team-member shadow-hover">
            <div className="team-member-img">
              <p><strong>Real estate is my passion.</strong><br/> Nec tellus a odiose tincidunt auctor a ornare odio sed non mauris vitae erat consequat auctor lorem ipsum.</p>
              <div className="img-overlay"></div>
              <div className="img-fade"></div>
              <img src="images/1197x1350.png" alt="" />
            </div>
            <div className="team-member-content">
              <img className="hex" src="images/hexagon.png" alt="" />
              <h4>Kelly Parker</h4>
              <p>Founder & CEO</p>
              <ul className="social-icons circle">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4">
          <div className="team-member shadow-hover">
            <div className="team-member-img">
              <p><strong>I've been selling homes for 12 years.</strong><br/> Nec tellus a odiose tincidunt auctor a ornare odio sed non mauris vitae erat consequat auctor lorem ipsum.</p>
              <div className="img-overlay"></div>
              <div className="img-fade"></div>
              <img src="images/1197x1350.png" alt="" />
            </div>
            <div className="team-member-content">
              <img className="hex" src="images/hexagon.png" alt="" />
              <h4>Tim Allen</h4>
              <p>Head of Sales</p>
              <ul className="social-icons circle">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4">
          <div className="team-member shadow-hover">
            <div className="team-member-img">
              <p><strong>I've been selling homes for 12 years.</strong><br/> Nec tellus a odiose tincidunt auctor a ornare odio sed non mauris vitae erat consequat auctor lorem ipsum.</p>
              <div className="img-overlay"></div>
              <div className="img-fade"></div>
              <img src="images/1197x1350.png" alt="" />
            </div>
            <div className="team-member-content">
              <img className="hex" src="images/hexagon.png" alt="" />
              <h4>John Doe</h4>
              <p>Senior Agent</p>
              <ul className="social-icons circle">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section> */}
    </div>
  )
}

export default About