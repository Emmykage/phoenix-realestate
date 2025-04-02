import React from 'react'
import Nav from '../../components/Nav'
import aboutImg from "../../assets/images/pictures/breno-assis-r3WAWU5Fi5Q-unsplash.jpg"
const About = () => {
  return (
    <div>
      <Nav/>
       <section className="subheader">
        <div className="container">
          <h1>About Us</h1>
          <div className="breadcrumb right">Home <i className="fa fa-angle-right"></i> 
          <a href="#" className="current">About Us</a>
          </div>
          <div className="clear"></div>
        </div>
      </section>
  <section className="module content bg-white px-4 ">
    <div className="max-w-7xl m-auto bg-white">
      <div className="flex md:flex-row flex-col items- gap-10 bg--300">

        <div className="flex-1 font-medium leading-8">
            <h3>Proven Property Specialists Celebrating 20 Years in Property Investment</h3>
            <img src="images/divider-half.png" alt="" /><br/><br/>
            <p><strong>PHEONIX PRECAST LTD (11231705) is a Manchester & London-based, proven property investment specialist with a 12-year history in the property investment business. We specialise in identifying and sourcing high-yield property investments for clients across the UK and overseas. Our purpose is to help investors navigate the property investment market by providing expert advice and access to exclusive opportunities, allowing our clients to build their wealth.
            </strong></p>
            <p>At Phoenix Precast LTD, we are committed to providing a transparent, professional, and client-centric approach to property investment, prioritising the delivery of exceptional guidance, maintaining strong relationships with developers and partners, and ensuring our clients have access to thoroughly researched and well-managed investment opportunities.
            </p> 
            <p>Established in 2013, our extensive market knowledge, established relationships within the industry, and the ability to identify emerging investment hotspots allow us to offer a comprehensive end-to-end service in property investment. We focus on conducting thorough due diligence to select high-yield properties, providing a trusted and reliable investment solution for our clients.
            </p>

            <p>Our mission is to serve as a reliable and consistent partner for real estate investors seeking flexible financing solutions. We aim to facilitate the realisation of their property investment goals by offering accessible, transparent, and innovative investment opportunities.  </p>

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

  <section className='pattern px-4'>
    <h3 className='text-gray-100 mb-6 font-medium max-w-7xl m-auto'>Frequently Asked Questions</h3>

    <div className='grid md:grid-cols-2 m-auto gap-6 max-w-7xl'>
      <div>


    <div  className='mt-5'>

<p className='text-alt'>Who can invest with Phoenix Precast?        </p>
<p className='mt-4'>Phoenix Precast is open to a wide range of investors who are looking for an easily accessible option to put their funds into.</p>
<p className='mt-4'>The following entities can make an investment: Individuals, joint names, on behalf of children, partnerships, trusts (including self managed superannuation funds) and companies.
</p>
</div>


<div  className='mt-5'>

<p className='text-alt'>How is your property portfolio sourced?</p>
<p className='mt-4'>Phoenix Precast Develops and Buys industrial, residential,retail and office premises in London, United Kingdom and United Arab Emirates.
 <br /> In particular, the Phoenix targets multi-tenant flexible industrial properties that provide diversification in tenant base and use.
<br /><br />
Every project is carefully vetted by our expert team before being invested , ensuring that our investment is as safe and secure as possible.
</p>
</div>
      <div className='mt-5'>

        <p className='text-alt'>What are the Advantages of Passive Real Estate Investment? 
        </p>
        <p className='mt-4'>1. We provide an investment with a lower risk profile, and one that is likely to provide more stable returns over time with regular payouts.        </p>
        <p className='mt-4'>2. Investing at a lower capital amount / barrier to entry (and “owning a piece” of the real estate project).         </p>
        <p className='mt-4'>3. Less involvement in the day-to-day management of the asset (perhaps none) Removing personal liability.</p>
        <p className='mt-4'>4. Being able to access assets across the country, not just in your own back yard. </p>
      </div>
      
<div  className='mt-5'>

<p className='text-alt'>How is my investment managed?</p>
<p className='mt-4'>Your portfolio is completely managed by our team of investment experts. We’ll keep in close contact with you throughout your entire journey with us, ensuring that you’re completely comfortable with how your investment capital is being spent.

</p>
</div>

     

</div>

<div>
  


<div className='mt-5'>

<p className='text-alt'>Can I Top up on my investment? </p>
<p className='mt-4'>Yes, but the minimum top up amount is £1,000. 

</p>
</div>



<div  className='mt-5'>

<p className='text-alt'>Can i reinvest my Quarterly Return? </p>
<p className='mt-4'>Yes, Distributions can be reinvested and at zero fees.</p>
</div>

<div>

<p className='text-alt'>What information will I receive to help me Manage my investments? 
</p>
<p className='mt-4'>Upon investing you will receive a receipt confirming your investment sum. 
Every time you are issued with profit at the end of the month you will receive an email, alternatively you can follow your investment progress monthly on your interactive dashboard.
You will also be provided with an annual investment statement that summarises the movements in your investment account and confirms the balance at year end.</p>
</div>


<div  className='mt-5'>

<p className='text-alt'>What is the quickest way to deposit my money</p>
<p className='mt-4'>While you are welcome to send us a cheque within the UK, the quickest way to remit your investment sum is to transfer the fund electronically (Bank Wire/Transfer or Cryptocurrency. 
Be sure to retain a receipt evidencing your EFT or deposit! 
</p>
</div>

<div>

<p className='text-alt'>What if I have more Questions or Need Help? </p>
<p className='mt-4'>You can send your unanswered questions to admin@phoenixprecast.com (expect a reply within one business day).
</p>
</div>

<div  className='mt-5'>

<p className='text-alt'>How much can I start investing from?</p>
<p className='mt-4'>For investors interested in our Capital Growth product , you can get started from as little as £30,000, with typical investment terms of 3-5years. 
For our Fixed Income product, you can get started from as little as £5,000 .we’d also recommend starting no lower than £20,000 for larger income. 




</p>
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