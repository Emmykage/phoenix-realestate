import React from 'react';
import SubHeader from '../components/subHeader/SubHeader';
import Nav from '../components/nav/Nav';
import sellImage from "../assets/images/pictures/istockphoto-1470006282-612x612.jpg"
import housingImage from "../assets/images/pictures/r-architecture-JvQ0Q5IkeMM-unsplash.jpg"
import CTA from '../components/CTA/CTA';

const SellProperty = () => {
  return (
    <div>
        <Nav/>
        <SubHeader tittle={"Sell Property"} />
        
    <div className="py-0 space-y-12 text-gray-800">
      
      {/* Hero Section */}
      <section className="text-center py-10 bg-white space-y-4">
        <div className='max-w-7xl mx-auto'>

          <h1 className="text-4xl font-bold">Sell Your Property in Dubai & United Kingdom</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Sell your property in Dubai and the UK with <strong>Phoenix Precast</strong>. When you exclusively sell with us,
            you gain access to our world-class services, dedicated marketing team, large network of returning customers, and more.
          </p>
        
        </div>
        <div className="w-full mx-auto max-w-7xl h-64 bg-gray-900 rounded-xl flex items-center justify-center">
          <div>

          </div>
          <h3 className='text-gray-300 px-4'>Contact us to list your Luxury UK & Dubai property today!</h3>

          <div className="text-gray-500 block h-full w-full"><img src={housingImage} className='h-full w-full object-cover'/></div>
        </div>

      </section>

      {/* Exclusive Listing Section */}

      <section className="space-y-4">
        <div className='grid max-w-7xl mx-auto grid-cols-2 gap-10 items-center'>
          <div>
            <h2 className="text-3xl font-bold">Exclusively List Your Property with Phoenix Precast</h2>
          <p>
            Phoenix Precast, a founding member of the prestigious Forbes Global Properties, has an excellent standing in the UAE’s real estate sector. 
            We have the highest number of property transactions in the UAE and are the best-performing agency in the UAE’s secondary market.
          </p>

          </div>
          <div>
            <img src={sellImage} alt="" className='h-full rounded-2xl'/>

          </div>
        </div>
       
      </section>
     

      {/* Services Section */}
      <section>
        <div className='mx-auto max-w-7xl'>

        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Strictly Qualified Buyers", icon: "/icons/buy.png", desc: "Get only the highest-quality buyers through Phoenix Precast’s strict qualifying process." },
            { title: "Top Notch Marketing", icon: "/icons/marketing.png", desc: "Elevate your listing with high-quality professional photography." },
            { title: "Maximum Exposure", icon: "/icons/exposure.png", desc: "Get visibility and swift buyer engagement on top property portals." },
            { title: "Ultra-Streamlined Process", icon: "/icons/flow.png", desc: "Navigate legal hurdles with our expert conveyance team." },
            { title: "Expert Guidance", icon: "/icons/professional-success.png", desc: "Receive consistent, insightful feedback from experienced brokers." },
            { title: "Mortgage Advisory", icon: "/icons/mortgage.png", desc: "Experience smooth transactions with our expert mortgage advisors." },
            { title: "Complete Privacy", icon: "/icons/privacy.png", desc: "Maintain full privacy throughout the sales process for all parties." }
          ].map((service, idx) => (
            <div key={idx} className="p-4 border rounded-xl shadow-sm bg-white">
              <img src={service.icon} alt="" className='h-10 ' />
              <h3 className="font-semibold text-xl text-primary mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
        </div>

      </section>

   

      {/* Why Choose Us */}
      <section className="space-y-4 ">
        <div className='max-w-7xl mx-auto'>

        <h2 className="text-3xl font-bold">Why Choose Phoenix Precast?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Proven track record of pricing units accurately while maintaining client ROI.</li>
          <li>A dedicated marketing team ensuring maximum exposure.</li>
          <li>60% of our buyers are returning customers — a strong, trusted network.</li>
          <li>We manage tenant relations to ensure minimal disruption during the sale.</li>
        </ul>
        </div>

      </section>

      {/* FAQ Section */}
      <section  className='bg-gray-900 px-4 py-10'>

        <div className='max-w-7xl m-auto text-gray-300'> 

        <h2 className="text-3xl text-white font-bold mb-6">FAQs</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-100 text-lg">1. Can I sell my property?</h3>
            <p>Yes, simply list your property with Phoenix Precast and we handle everything from buyers to final paperwork.</p>
          </div>
          <div>
            <h3 className="font-semibold  text-gray-100 text-lg">2. How can I view my property valuation online?</h3>
            <p>After filling in your details and consulting with us, we conduct a Comparative Market Analysis (CMA) and provide a detailed report.</p>
          </div>
          <div>
            <h3 className="font-semibold  text-gray-100 text-lg">3. How can I sell my property quickly online?</h3>
            <p>Register your property with us, and we’ll help with minor maintenance and fast-track the sale process.</p>
          </div>
          <div>
            <h3 className="font-semibold  text-gray-100 text-lg">4. What is the process for selling my property?</h3>
            <p>List your property, and we’ll manage every aspect — from legal compliance to closing — for a smooth, successful transaction.</p>
          </div>
        </div>
        </div>

      </section>

      {/* Contact CTA */}
      

      <section>
        <CTA body={""} title={"Ready to Sell?"}>
          To sell your real estate or luxury apartment, contact our sales team <br/>
          <a href="mailto:Sales@phoenixprecastltd.com"  className='text-blue-500'>Sales@phoenixprecastltd.com</a>
        </CTA>      
        </section>

      <div class="bg-white">
  
</div>
    </div>
    
    </div>
  );
};

export default SellProperty;
