import React from 'react';
import SubHeader from '../components/subHeader/SubHeader';
import Nav from '../components/nav/Nav';
import realtor from "../assets/images/pictures/andrew-kayani-7wEy-0AHgeQ-unsplash.jpg"

const BuyProperty = () => {
  return (
    <div>
        <Nav/>
        <SubHeader tittle={"Buy Property"} />
        
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-12 text-gray-800">
      
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Sell Your Property in Dubai & United Kingdom</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Sell your property in Dubai and the UK with <strong>Phoenix Precast</strong>. When you exclusively sell with us,
          you gain access to our world-class services, dedicated marketing team, large network of returning customers, and more.
        </p>
        <p className="font-semibold text-blue-700">
          Contact us to list your Luxury UK & Dubai property today!
        </p>
      </section>

      {/* Placeholder for Image */}
      <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
        <img src={realtor} alt="realto sell" className='object-cover  h-full w-full' />
      </div>

      {/* Exclusive Listing Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Exclusively List Your Property with Phoenix Precast</h2>
        <p>
          Phoenix Precast, a founding member of the prestigious Forbes Global Properties, has an excellent standing in the UAE’s real estate sector. 
          We have the highest number of property transactions in the UAE and are the best-performing agency in the UAE’s secondary market.
        </p>
      </section>

      {/* Placeholder for Image */}
      <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
        <span className="text-gray-500">[Insert Image of Office or Team]</span>
      </div>

      {/* Services Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Strictly Qualified Buyers", icon: "/icons/buy.png", desc: "Get only the highest-quality buyers through Phoenix Precast’s strict qualifying process." },
            { title: "Top Notch Marketing", desc: "Elevate your listing with high-quality professional photography." },
            { title: "Maximum Exposure", desc: "Get visibility and swift buyer engagement on top property portals." },
            { title: "Ultra-Streamlined Process", desc: "Navigate legal hurdles with our expert conveyance team." },
            { title: "Expert Guidance", desc: "Receive consistent, insightful feedback from experienced brokers." },
            { title: "Mortgage Advisory", desc: "Experience smooth transactions with our expert mortgage advisors." },
            { title: "Complete Privacy", desc: "Maintain full privacy throughout the sales process for all parties." }
          ].map((service, idx) => (
            <div key={idx} className="p-4 border rounded-xl shadow-sm bg-white">
              <img src={service.icon}  alt={service.title} className='h-20' />
              <h3 className="font-semibold text-xl mt-3 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholder for Image */}
      <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
        <span className="text-gray-500">[Insert Services Illustration]</span>
      </div>

      {/* Why Choose Us */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Why Choose Phoenix Precast?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Proven track record of pricing units accurately while maintaining client ROI.</li>
          <li>A dedicated marketing team ensuring maximum exposure.</li>
          <li>60% of our buyers are returning customers — a strong, trusted network.</li>
          <li>We manage tenant relations to ensure minimal disruption during the sale.</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">FAQs</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">1. Can I sell my property?</h3>
            <p>Yes, simply list your property with Phoenix Precast and we handle everything from buyers to final paperwork.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">2. How can I view my property valuation online?</h3>
            <p>After filling in your details and consulting with us, we conduct a Comparative Market Analysis (CMA) and provide a detailed report.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">3. How can I sell my property quickly online?</h3>
            <p>Register your property with us, and we’ll help with minor maintenance and fast-track the sale process.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">4. What is the process for selling my property?</h3>
            <p>List your property, and we’ll manage every aspect — from legal compliance to closing — for a smooth, successful transaction.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center mt-12 bg-blue-50 p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Ready to Sell?</h2>
        <p className="text-lg mb-2">To sell your real estate or luxury apartment, contact our sales team:</p>
        <a
          href="mailto:Sales@phoenixprecastltd.com"
          className="text-blue-700 font-medium underline"
        >
          Sales@phoenixprecastltd.com
        </a>
      </section>
    </div>
    
    </div>
  );
};

export default BuyProperty;
