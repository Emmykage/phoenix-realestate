import React from 'react'
import './slider.scss'
import serviceImg from '../../assets/images/services//service-banner.png'

const Banner = ({header}) => {

    const bannerTitle = (title) => {
        switch (title) {
            case "service":
                return "Our Services"                
            case "contact":
                return "Contact Us"
            case "about": 
                return "About Us"    
            case "appointment": 
                return "Book APpointment" 
            case "bookkeeping":
                return "Bookkeeping & Payroll"
            case "business-consultancy":
                return "Business Consultancy"
            case "financial-report":
                return "Financial Reporting"
            case "tax-planning":
            return "Tax Planning"
            case "blog":
                return "ABF Accounting Blog"
            default:
                return title
        }
    }
  return (
    <div className={`${header} h-72 flex items-center justify-center  service-banner w-screen`}>
        <div className='border-[3px] border-gray-400 px-10 py-3'>
            <h3 className='text-lg md:text-3xl text-white'>{bannerTitle(header)}</h3>
        </div>
    </div>
  )
}

export default Banner