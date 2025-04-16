import React, { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import SubHeader from '../../components/subHeader/SubHeader'

import propInvestment from "../../assets/images/pictures/Understanding-Property-Taxes-And-Their-Impact-On-Your-Real-Estate-Investment-1024x679.webp"
import HowItWorksComp from '../components/HowItWorks'
import StatInfo from '../../components/stat-info/StatInfo'
import howImage from "../../assets/images/pictures/how-it-works.jpg"
import Aos from 'aos'
const HowItWorks = () => {
      useEffect(()=> {
        Aos.init()
        Aos.refresh()
      },[])


  return (
    <div>
      <Nav/>
      <SubHeader tittle="How it works"/>
      {/* <HowItWorksComp/> */}

      <section className='px-4 pattern bg-blue-950'>
      <div className='m-auto max-w-7xl'>
      <div>
        <div className='grid md:grid-cols-2 my-10 gap-10'>
        

          <div data-aos="zoom-in-down" className=' leading-7'>
          <h3 className='text-alt text-3xl mb-10'>How It Works     </h3>

          <p className='mt-6 font-semibold'>
           We Study the Global real estate market and it’s demand & assure a Fixed- Returns of Up To 50-70% Per Annum 
          </p>
          <p className='mt-5 '>
           Looking for accessible, straight-forward, and hands-free profitable UK & UAE property investment?
            We provide a simple and secure pathway to grow your wealth - and you can start today from as little as £5,000.
        
          </p>

          <p className='mt-4'>
           PHEONIX PRECAST acquires and manages real estate properties with a focus on both near-term income generation and long-term value creation; to provide everyday investors access to the institutional-grade real estate deals that are normally reserved for only the largest investors. 
      
          </p>
          <p className='mt-4'>
           Our carefully chosen investment solutions are designed to cater to every individual investor, from those seeking fixed income streams to those interested in portfolio diversification and/or long-term growth.
      
          </p>
        </div>
        <div data-aos="flip-right" className='rounded-lg overflow-hidden shadow-lg'>
            <img src={howImage} alt="" className='w-full h-full' />
          </div>
        </div>

      </div>
      </div>
      </section>


      <section className='px-4 pattern bg-blue-950'>
      <div className='m-auto max-w-7xl'>
      <div>
        <div className='grid md:grid-cols-2 my-10 gap-10'>
          <div data-aos="fade-up" className='rounded-lg order-2 md:order-1 overflow-hidden shadow-lg'>
            <img src={propInvestment} alt="investment image" className='w-full h-full' />
          </div>

          <div data-aos="fade-right" className='order-1 md:order-2'>
          <h3 className='text-white font-semibold text-2xl mb-10'>Simple And Structured Property Investments       </h3>

          <p className='font-medium text-gray-100'>
            At PHEONIX PRECACT, we offer access to two types of investment products under the development finance umbrella – fixed income and capital growth. While your investment will always be made into property development projects, this choice of two routes depends on how you wish to receive your returns, as well as your investment goals.

          </p>
          <p className='mt-6'>
            1. <span className='text-alt'> Fixed Income: </span>
            Best for those who wish to receive a regular income from their investment. Funds are invested across a portfolio of developments at different stages of completion with fixed rates of return. This also boasts one for the lowest entry points on the market with a minimum investment of only £5k.
          <br /><br />
            Returns of up to 5% monthly,
            Investment terms are typically 3-4 months.( Returns are paid quarterly).
            *We generally advise a minimum investment of £20,000

          </p>

          <p className='mt-4'>
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

      <section className='py-20 px-4'>
        <div className='max-w-7xl m-auto '>
          <h3 className='text-center'>Your Investment Journey Explained</h3>
          <p className='text-center my-4 font-medium text-gray-600'>
            At Phoenix Precast, we don't rush any of our clients into making any investment decisions that they’re not completely comfortable with. We stick by our signature, step-by-step process to ensure that all of our clients are happy with their experience with us, and are set up for their next successful investment.
          </p>

          <div className=' gap-10 grid md:grid-cols-2 '>
            <div data-aos="fade-up"
               data-aos-duration="3000"
            className='flex bg-white md:flex-row flex-col shadow rounded-lg p-4 items-center gap-5 '>

              <div className='w-20 h-20 flex justify-center items-center text-3xl font-semibold  shrink-0 bg-gray-200'>
                  1

              </div>
              <div>
                <h4 className='text-theme-alt text-center md:text-left'>Get Started Online</h4>
                <p className='text-sm text-justify font-normal text-gray-700'> Get started online now by sharing your current circumstances and investment goals with our expert team. Whether you know already exactly what you’re after or are just getting started, our team will assess your answers carefully to provide you with opportunities that best fit your profile.</p>
                    
              </div>
            </div>

            <div 
            data-aos="fade-up"
            data-aos-duration="3000"
             className='flex bg-white shadow rounded-lg p-4 items-center gap-5 flex-  md:flex-row flex-col'>
              <div className='w-20 h-20 flex justify-center items-center text-3xl font-semibold  shrink-0 bg-gray-200'> 2 </div>
              <div>

                <h4 className='text-theme-alt text-center md:text-left'>Full Analysis and Assessment</h4>
                <p className='text-sm text-justify font-normal text-gray-700'>
                  Connect with one of our expert investment consultants  for an in-depth analysis of your needs, requirements, and goals (both short and long-term). This is the perfect opportunity to ask any questions you might have for us, and also for us to explain how Pheonix works in more detail. 
                </p>

              </div>
            </div>

            <div 
            data-aos="fade-up"
            data-aos-duration="3000"
             className='flex bg-white shadow rounded-lg p-4 items-center gap-5 flex-  md:flex-row flex-col'>

              <div className='w-20 h-20 flex justify-center items-center text-3xl font-semibold  shrink-0 bg-gray-200'>
                  3

              </div>
              <div>

                <h4 className='text-theme-alt text-center md:text-left'>Research and Recommendations:</h4>
                <p className='text-sm text-justify font-normal text-gray-700'>
                      Our team comes together to assess the best investment solutions for you from our current product portfolio and compile a list of recommendations based on your unique requirements and goals.  
                </p>
              </div>
            </div>

            <div data-aos="fade-up"
            data-aos-duration="3000"
            className='flex bg-white shadow rounded-lg p-4 items-center gap-5 flex-  md:flex-row flex-col'>

              <div className='w-20 h-20 flex justify-center items-center text-3xl font-semibold  shrink-0 bg-gray-200'>
                4
              </div>
              <div>

                <h4 className='text-theme-alt text-center md:text-left'>Presentation and Selection: </h4>
                <p className='text-sm text-justify font-normal text-gray-700'>
                    We Then meet with you again to share our bespoke investment plan, and you then select your preferred investment options.  
                </p>

              </div>
            </div>
            <div data-aos="fade-up"
            data-aos-duration="3000"
            className='flex bg-white shadow rounded-lg p-4 items-center gap-5 flex-  md:flex-row flex-col'>

              <div className='w-20 h-20 flex justify-center items-center text-3xl font-semibold  shrink-0 bg-gray-200'>
                5
              </div>
              <div>

                <h4 className='text-theme-alt text-center md:text-left'>Action and Liaison: </h4>
                <p className='text-sm text-justify font-normal text-gray-700'>
                Once agreed, we then implement your chosen investment plan. Your designated investment consultant will then keep you updated on its performance and any relevant market activity or opportunities in line with your evolving needs and to complement your existing portfolio.                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
      <StatInfo/>
    </div>
  )
}

export default HowItWorks