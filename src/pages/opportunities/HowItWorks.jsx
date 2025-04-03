import React from 'react'
import Nav from '../../components/nav/Nav'
import SubHeader from '../../components/subHeader/SubHeader'

import propInvestment from "../../assets/images/pictures/Understanding-Property-Taxes-And-Their-Impact-On-Your-Real-Estate-Investment-1024x679.webp"
import HowItWorksComp from '../components/HowItWorks'

const HowItWorks = () => {
  return (
    <div>
        <Nav/>
        <SubHeader tittle="How it works"/>
        <HowItWorksComp/>


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

    </div>
  )
}

export default HowItWorks