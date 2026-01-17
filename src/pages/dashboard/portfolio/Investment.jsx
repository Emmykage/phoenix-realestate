import React from 'react'
import { NavLink } from 'react-router-dom'

const AccountInvestment = () => {
  return (
    <div className='py'>
      <div className='flex flex-col flex-wrap gap-4'>
    

        <div className='my-4 border rounded-md p-4 flex flex-col md:flex-row gap-4 shadow hover:shadow-lg'>
              <div className='flex-1 bg-blue-40 h-60'>
                  <img src={"photo1"} alt="" className='w-full h-full object-cover'/>
              </div>
              <div className='flex-1 px-1 w-full md:max-w-lg py-7 text-left '>
                <h3 className='text-xl font-medium text-gray-700'>TcoinTech</h3> 
                <p className='text-gray-500'>Custom  Investment</p>
                <p className='text-xs text-gray-500 my-3'>We can custom-tailor an investment for you.</p>
                <span className='text-green-600 text-2xl font-medium'>$500</span> <span className='text-sm text-gray-500'>or More </span>

                <NavLink to={'#'} className={'bg-gray-200 text-sm py-3 rounded my-5 text-gray-600 font-medium text-center block'}> LEARN MORE</NavLink>

              </div>

           </div>

        {/* <div className='basis-[20%] border border-gray-300 rounded-md py-10 h-60'>
          <h3 className='text-gray-600 font-semibold'>Farm Funds</h3>
          <h2 className='text-green-700 font-medium'>NGN30000</h2>
        </div> */}

      </div>
      </div>
  )
}

export default AccountInvestment