import Aos from 'aos'
import React, { useEffect } from 'react'

const StatInfo = () => {
        useEffect(()=> {
          Aos.init()
          Aos.refresh()
        },[])
  
  

  return (
   
  <section
  data-aos="fade-up"
     data-aos-duration="3000"
      className="module cta hexs">
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
  )
}

export default StatInfo