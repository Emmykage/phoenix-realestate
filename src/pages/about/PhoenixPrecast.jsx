import React from 'react'
import Nav from '../../components/Nav'
import AboutCarousel from '../../components/carousel/AboutCarousel'
import realIcon from '../../assets/icons/real-estate-market.png'
import investmentIcon from '../../assets/icons/investment.png'
import globalIcon from '../../assets/icons/international.png'
import recuitment from '../../assets/icons/recruitment.png'
import propInvestment from "../../assets/images/pictures/Understanding-Property-Taxes-And-Their-Impact-On-Your-Real-Estate-Investment-1024x679.webp"
import aboutImage from "../../assets/images/about/why-phoenix.jpg"
import img1 from "../../assets/images/pictures/r-architecture-0tKCSyLXqQM-unsplash.jpg"
import img2 from "../../assets/images/pictures/r-architecture-JvQ0Q5IkeMM-unsplash.jpg"
import img3 from "../../assets/images/pictures/r-architecture-KQgrVfR3r74-unsplash.jpg"
import img4 from "../../assets/images/pictures/r-architecture-wJAOeXvxudM-unsplash.jpg"
import img5 from "../../assets/images/pictures/daria-nepriakhina-LZkbXfzJK4M-unsplash.jpg"
const AboutPhoenixPrecast = () => {

 const  items = [{
  image: img1,
  title: "Attractive Returns on Investment",
  text: "Energy infrastructure projects can offer attractive returns to investors, in both income and growth plans, due to high yield earnings of operational projects.",
  id: 1
  },
  {
    image: img2,

    title: "Economic Stability",
    text: "  Dubai Real estate market has a favourable financing terms due to their essential government support, contributing to economic stability",
    id: 2
    },{
      image: img3,

      title: " Long-term earning potential",
      text: " With UK & Dubai demand for Real Estate projects ever increasing, investors can benefit from building a long-term plan for investment growth.",
      id: 3
      },{
        image: img4,

        title: "Industry Experts",
        text: "  Invest with an established Real estate development company, Our Team have an average of 30years of investment experience",
        id: 4
        },{
          image: img5,

          title: "Increased Demand",
          text: " The need for reliable and conducive real estate , especially during peak demand times and unexpected outages, has driven the value of R.E.",
          id: 5
          }]


      
  return (
    <div>
      <Nav/>
       <section className="subheader">
    <div className="">
      <h1 className=' px-4 py-1 rounded-lg'>Why Phoenix PRECAST?</h1>
      <div className="breadcrumb right bg-red-300">Home<i className="fa fa-angle-right"></i> 
       <a href="#" className="current">About Us</a>
      </div>
      <div className="clear"></div>
    </div>
  </section>
  <section className="module content ">
    <div className="container px-4 bg-green-60 m-auto">

      <div className="flex md:flex-row flex-col md:gap-10 gap-5 max-w-7xl m-auto pb-10">

        <div className="flex-1 font-medium leading-8">

            <h3>Why Phoenix PRECAST?         </h3>
            <img src="images/divider-half.png" alt="" /><br/><br/>
            <p><strong>Launched in mid-2013,our platform was created to enable investors to diversify their portfolio into the vibrant UK and International property market, in a way that provides the security of a fixed-term investment, with capital growth. </strong></p>
            <p>Our strict investment criteria ensure we maximise investor returns.
            Since inception, we have provided 91 investment offerings with a total Gross Development Value of £416,793,318   </p> 
            <p>Established in 2013, our extensive market knowledge, established relationships within the industry, and the ability to identify emerging investment hotspots allow us to offer a comprehensive end-to-end service in property investment. We focus on conducting thorough due diligence to select high-yield properties, providing a trusted and reliable investment solution for our clients. </p>

            

       

          

          </div>

          <div className='flex-1 bg-gray-200'>
            <img src={aboutImage} alt=""  className='rounded-xl h-full w-full object-cover' />

          </div>

          
        
      </div> 

      <div  className=' overflow-auto  max-w-7xl m-auto my-10'>
          <p className='te text-center font-semibold text-2xl md:text-4xlv my-10'>Benefits of Investing into Phoenix Infrastructure Projects. 
            </p>

              <AboutCarousel items={items}/>

            


            </div>
    </div>
  </section>

  <section className='py-20 px-4'>

    <div className='max-w-7xl m-auto'>
      <h3 className='text-center font-semibold mb-20'>How It Works</h3>
      <div  className='grid grid-cols-1 md:grid-cols-2 gap-10 '>
        <div>
            <div className='bg-theme-dark flex md:gap-10 items-center flex-col md:flex-row rounded-lg p-4'>
              <img src={globalIcon} alt="" className='w-32 h-32 md:w-40 md:h-40 p-10 ' />
              <p className='text-gray-100 text-center md:text-left'>We Study the Global real estate market and it’s demand & assure a Fixed- Returns of Up To 50-70% Per Annum </p>
            </div>
        </div>

        <div>
            <div className='bg-theme-dark flex md:gap-10 items-center flex-col md:flex-row rounded-lg p-4'>
              <img src={recuitment} alt="" className='w-32 h-32 md:w-40 md:h-40 p-10 ' />
              <p className='text-gray-100'>Looking for accessible, straight-forward, and hands-free profitable UK & UAE property investment? <br /><br />
              We provide a simple and secure pathway to grow your wealth - and you can start today from as little as £5,000</p>
            </div>
        </div> <div>
            <div className='bg-theme-dark flex md:gap-10 items-center flex-col md:flex-row rounded-lg p-4'>
              <img src={realIcon} alt="" className='w-32 h-32 md:w-40 md:h-40 p-10 ' />
              <p className='text-gray-100 text-center md:text-left'>Looking for accessible, straight-forward, and hands-free profitable UK & UAE property investment? <br /><br />
              We provide a simple and secure pathway to grow your wealth - and you can start today from as little as £5,000</p>
            </div>
        </div> 
        <div>
            <div className='bg-theme-dark flex md:gap-10 items-center flex-col md:flex-row rounded-lg p-4'>
              <img src={investmentIcon} alt="" className='w-32 h-32 md:w-40 md:h-40 p-10 ' />
              <p className='text-gray-100 text-center md:text-left'>Looking for accessible, straight-forward, and hands-free profitable UK & UAE property investment? <br />
                PHEONIX PRECAST acquires and manages real estate properties with a focus on both near-term income generation and long-term value creation
                {/* ; to provide everyday investors access to the institutional-grade real estate deals that are normally reserved for only the largest investors.  */}
              </p>
            </div>
        </div>

      </div>
    </div>

  </section>

  <section className='px-4 pattern bg-blue-950'>
    <div className='m-auto max-w-7xl'>
      <div>
        <div className='grid md:grid-cols-2 my-10 gap-10'>
          <div className='rounded-lg overflow-hidden shadow-lg'>
            <img src={propInvestment} alt="" className='w-full h-full' />
          </div>

          <div className='px-4'>
          <h3 className='text-white text-3xl mb-10'>Simple And Structured Property Investments       </h3>

          <p className='font-medium text-gray-100'>
            At PHEONIX PRECACT , we offer access to two types of investment products under the development finance umbrella – fixed income and capital growth. While your investment will always be made into property development projects, this choice of two routes depends on how you wish to receive your returns, as well as your investment goals.

          </p>
          <p className='mt-6'>
            1. <span className='text-alt'> Fixed Income: </span>
             Best for those who wish to receive a regular income from their investment. Funds are invested across a portfolio of developments at different stages of completion with fixed rates of return. This also boasts one for the lowest entry points on the market with a minimum investment of only £5k.
          <br /><br />
            Returns of up to 5% monthly,
            Investment terms are typically 3-4 months.( Returns are paid quarterly).
            *We generally advise a minimum investment of £20,000.


          </p>

          <p>
            2. <span className='text-alt'> Capital Growth: </span>
            This suits investors who wish to invest directly into individual development projects. Returns are provided by way of a fixed return on capital, as well as a share of the profits upon completion of the development. Investment terms are typically 3-5 years with a minimum investment of £30,000.          <br /><br />
           
           
           <br /><br />
           We understand that having multiple investment options can be daunting, especially if you haven’t established what your goals are yet. Explore our investment options now to discover the property investments that best fit your goals and requirements.



          </p>
        </div>
        </div>
       
      </div>
    </div>
  </section>

  <section className='py-20'>
    <div className='max-w-7xl m-auto '>

    <h3 className='text-center'>Your Investment Journey Explained
    </h3>
    <p className='text-center my-4 font-medium text-gray-600'>
    At Devete Financials, we don't rush any of our clients into making any investment decisions that they’re not completely comfortable with. We stick by our signature, step-by-step process to ensure that all of our clients are happy with their experience with us, and are set up for their next successful investment.
    </p>

    <div className=' gap-10 grid grid-cols-2 '>
    <div className='flex bg-white shadow rounded-lg p-4 items-center gap-5 flex-row'>

        <div className='w-20 h-20 flex justify-center items-center text-3xl font-semibold  shrink-0 bg-gray-200'>
          1

        </div>
        <div>

          <h4 className='text-theme-alt'>Get Started Online</h4>
          <p className='text-sm text-justify font-normal text-gray-700'>
            Get started online now by sharing your current circumstances and investment goals with our expert team. Whether you know already exactly what you’re after or are just getting started, our team will assess your answers carefully to provide you with opportunities that best fit your profile. 
          </p>
            
        </div>
    </div>

    <div className='flex bg-white shadow rounded-lg p-4 items-center gap-5 flex-row'>

<div className='w-20 h-20 flex justify-center items-center text-3xl font-semibold  shrink-0 bg-gray-200'>
  2

</div>
<div>

  <h4 className='text-theme-alt'>Full Analysis and Assessment</h4>
  <p className='text-sm text-justify font-normal text-gray-700'>
  Connect with one of our expert investment consultants  for an in-depth analysis of your needs, requirements, and goals (both short and long-term). This is the perfect opportunity to ask any questions you might have for us, and also for us to explain how Pheonix works in more detail.  </p>
    
</div>
</div>

<div className='flex bg-white shadow rounded-lg p-4 items-center gap-5 flex-row'>

<div className='w-20 h-20 flex justify-center items-center text-3xl font-semibold  shrink-0 bg-gray-200'>
  3

</div>
<div>

  <h4 className='text-theme-alt'>Research and Recommendations:</h4>
  <p className='text-sm text-justify font-normal text-gray-700'>
    Our team comes together to assess the best investment solutions for you from our current product portfolio and compile a list of recommendations based on your unique requirements and goals.  </p>
    
</div>
</div>

<div className='flex bg-white shadow rounded-lg p-4 items-center gap-5 flex-row'>

<div className='w-20 h-20 flex justify-center items-center text-3xl font-semibold  shrink-0 bg-gray-200'>
  4

</div>
<div>

  <h4 className='text-theme-alt'>Presentation and Selection: </h4>
  <p className='text-sm text-justify font-normal text-gray-700'>
    We Then meet with you again to share our bespoke investment plan, and you then select your preferred investment options.  </p>
    
</div>
</div>

    <div>      

    </div>
    </div>

    </div>
  </section>

  <section className="module cta pattern hexs">
    <div className="container">

      <div className="module-header">
        <h2 className='text-gray-200'>Passive Investment         <strong>Facts and Figures</strong></h2>
        <img src="images/divider-white.png" alt="" className="block m-auto" />
        <p>Morbi accumsan ipsum velit nam nec tellus a odiose tincidunt auctor a ornare odio sed non mauris vitae erat consequat auctor</p>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-3">
          <div className="hex">
            <img src="images/hexagon-dark.png" alt="" />
            <p><span>£166M</span> Investor Distributions
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3">
          <div className="hex">
            <img src="images/hexagon-dark.png" alt="" />
            <p><span>£478.9M
            </span> Total Funds Raised
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3">
          <div className="hex">
            <img src="images/hexagon-dark.png" alt="" />
            <p><span>6,262</span> Total Investors            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-3">
          <div className="hex">
            <img src="images/hexagon-dark.png" alt="" />
            <p><span>£678.8M            </span> Total AUM</p>
          </div>
        </div>
      </div>

    </div>
  </section>
  
    </div>
  )
}

export default AboutPhoenixPrecast