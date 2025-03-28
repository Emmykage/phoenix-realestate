import React from 'react'
import realIcon from '../../assets/icons/real-estate-market.png'
import investmentIcon from '../../assets/icons/investment.png'
import globalIcon from '../../assets/icons/international.png'
import recuitment from '../../assets/icons/recruitment.png'

const HowItWorksComp = () => {
  return (
    <div>
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
    </div>
  )
}

export default HowItWorksComp