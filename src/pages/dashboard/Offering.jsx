import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAssets } from '../../redux/actions/assets'
import { usd_format } from '../../components/misc/USD'
const Offering = () => {
  const dispatch = useDispatch()
  const {offers} = useSelector(state => state.assets)

  useEffect(()=> {
    dispatch(getAssets())
  },[])
  console.log(offers)
  return (
    <div className='max-w-7xl w-full m-auto bg--400 py-8 bg-white my-3 rounded-md px-4 md:px-10'>
        <h2 className='text-left text-2xl font-semibold text-gray-700'>
        Phoenix Investment Offerings

        </h2>
            <p className='flex text-gray-500 text-sm'>
             is a real estate investment platform dedicated to providing access to diverse property portfolios. We're committed to making real estate investment accessible, transparent, and profitable for everyone.           </p>

           {offers.map(item => (
              <div className='my-4 border rounded-md p-1 md:p-4 flex flex-col md:flex-row gap-4 shadow hover:shadow-lg'>
                <div className='md:flex-1 h-52 md:h-80'>
                    <img src={item.images} alt="" className='w-full h-full object-contain'/>
                </div>
                <div className='flex-1 px-1 w-full md:max-w-lg md:py-7 text-left '>
                  <h3 className='text-xl font-semibold text-gray-700'>{item.name}</h3> 
                  <p className='text-gray-500'>Custom  Investment</p>
                  <p className='text-xs text-gray-500 my-3'>We can custom-tailor an investment for you.</p>
                  <span className='text-green-600 text-2xl font-medium'>{usd_format(item?.price)}</span> <span className='text-sm text-gray-500'>or More </span>

                  <NavLink to={'#'} className={'bg-gray-200 text-sm py-3 rounded my-5 text-gray-600 font-medium text-center block'}> LEARN MORE</NavLink>

                </div>

              </div>
           ))}
       

           {/* <div className='my-4 border rounded-md p-4 flex flex-col md:flex-row gap-4 shadow hover:shadow-lg'>
              <div className='flex-1 bg-blue-40 h-60'>
                  <img src={photo2} alt="" className='w-full h-full object-cover'/>
              </div>
              <div className='flex-1 px-1 w-full md:max-w-lg py-7 text-left '>
                <h3 className='text-xl font-medium text-purple-900'>TcoinTech Platinum</h3> 
                <p className='text-gray-500'>Platinum Offer</p>
                <p className='text-xs text-gray-500 my-3'>Our Platinum Offer Starts with  $1000.</p>
                <span className='text-green-600 text-2xl font-medium'>$1K</span> <span className='text-sm text-gray-500'>or More </span>

                <NavLink to={'#'} className={'bg-gray-200 text-sm py-3 rounded my-5 text-gray-600 font-medium text-center block'}> LEARN MORE</NavLink>

              </div>

           </div>

           <div className='my-4 border rounded-md p-4 flex flex-col md:flex-row gap-4 shadow hover:shadow-lg'>
              <div className='flex-1 bg-blue-40 h-60'>
                  <img src={photo} alt="" className='w-full h-full object-cover'/>
              </div>
              <div className='flex-1 px-1 w-full md:max-w-lg py-7 text-left '>
                <h3 className='text-xl font-medium text-orange-900'>TcoinTech Gold</h3> 
                <p className='text-gray-500'>Gold Investment</p>
                <p className='text-xs text-gray-500 my-3'>Ultimate investment for you.</p>
                <span className='text-green-600 text-2xl font-medium'>$10K</span> <span className='text-sm text-gray-500'>or More </span>

                <NavLink to={'#'} className={'bg-gray-200 text-sm py-3 rounded my-5 text-gray-600 font-medium text-center block'}> LEARN MORE</NavLink>

              </div>

           </div> */}

           
        
    </div>
  )
}

export default Offering