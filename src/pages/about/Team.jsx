import React from 'react'
import Nav from '../../components/nav/Nav'
import teamPhoto from "../../assets/images/about/team.jpg"
import AppButton from '../../components/buttons/Buttons'
import { useNavigate } from 'react-router-dom'
import SubHeader from '../../components/subHeader/SubHeader'

const OurTeam = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Nav/>

      <SubHeader tittle={"Our Team"}/>
    
  <section className="module content px-4">
    <div className="container">
      <div className="flex md:flex-row gap-10 flex-col">

        <div className="flex-1 font-medium text-justify leading-7">
            <h3>Our Team</h3>
            <img src="images/divider-half.png" alt="" /><br/><br/>

            <p>We are comprised of a dedicated team of finance professionals, each with extensive experience in real estate and investment. With a deep understanding of market dynamics and a commitment to excellence, we leverage our expertise to deliver personalised financial solutions that meet the unique needs of our clients.           </p> 
            <p>At Phoenix Precast, we specialise in making property investment accessible and straightforward, with over 12 years of experience in the field.</p>

            <p>Our mission is to serve as a reliable and consistent partner for real estate investors seeking flexible financing solutions. We aim to facilitate the realisation of their property investment goals by offering accessible, transparent, and innovative investment opportunities. </p>

            <p>
                Since our establishment in 2013, we have provided expertly packaged buy-to-let opportunities tailored for both first-time investors and those seeking to expand their portfolios. Our solutions are designed for clients with limited time, ensuring a seamless experience from start to finish.
                <br /><br />
                Our dedicated team comprises specialists in sales, after-sales, marketing, IT, and finance, all bringing a wealth of expertise to the table. This diverse skill set allows us to deliver exceptional service and support throughout your investment journey.

            </p>



          </div>
    
          <div className="flex-1">
           {/* <img className="about-video-thumb rounded-lg " src={teamPhoto} alt="about" /> */}
            <div className="clear"></div>
          </div>
          </div>
        </div>
  </section>
  <section className='py-20 px-4 bg-white shadow-sm '>


  <div className='text-center max-w-5xl m-auto '>
  <h5 className='font-semibold mt-6 text-4xl text-gray-800'>    
                   Join our Team. </h5>
            <p className='leading-8'>

Ever considered a career in property? Whether your skills lie in sales, customer care or marketing, you’ll be able to build a successful career within our company and in turn, enjoy a number of employee benefits, as well as being surrounded by a friendly and welcoming team. 

            </p>
            <div className='max-w-sm m-auto mt-10'>
            <AppButton onClick={() => navigate("/contact-us")}>Join </AppButton>

            </div>

  </div>
  </section>

  

{/*   
  <section className="module team">
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

export default OurTeam