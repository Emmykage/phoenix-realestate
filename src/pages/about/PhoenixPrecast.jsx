import React from 'react'
import Nav from '../../components/nav/Nav'
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
import SubHeader from '../../components/subHeader/SubHeader'
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
      <SubHeader tittle={"Why Phoenix PRECAST?"}/>
   
        <section className="module content ">
          <div className="container px-4 bg-green-60 m-auto">

            <div className="flex md:flex-row flex-col md:gap-10 gap-5 max-w-7xl m-auto pb-10">

              <div className="flex-1 font-medium leading-8">

                  <h3>Why Phoenix PRECAST?         </h3>
                  <img src="images/divider-half.png" alt="" /><br/><br/>
                  <p><strong>Launched in mid-2013,our platform was created to enable investors to diversify their portfolio into the vibrant UK and International property market, in a way that provides the security of a fixed-term investment, with capital growth. </strong></p>
                  <p className='mt-4'>Our strict investment criteria ensure we maximise investor returns.
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

  

     
  
    </div>
  )
}

export default AboutPhoenixPrecast