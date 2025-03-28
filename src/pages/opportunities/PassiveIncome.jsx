import React from 'react'
import returnsImg from "../../assets/images/services/greyphin-transparent-pricing.webp"
import Nav from '../../components/Nav'
import SubHeader from '../../components/subHeader/SubHeader'
import AppButton from '../../components/buttons/Buttons'
import { PlanningIcon } from '../../assets/svgs/icons'
import { FaCheck } from 'react-icons/fa'

const PassiveIncome = () => {
  return (
    <div>
        <Nav/>
        <SubHeader tittle={"Passive Income"}/>
        <section className='px-4 py-20 bg-gray-100'>

            <h3 className='text-center'>
            Passive income 


            </h3>
            <p className='text-center font-medium text-base my-5'>Invest in one of Our platform </p>
            <div className='grid items-cente  gap-4 md:gap-10 md:grid-cols-2 m-auto max-w-5xl'>
                <div className='px-4 border bg-white p-6 shadow  font-medium text-gray-600 tracking-widest leading-9'>
                        <h3 className='text-xl text-center mb-10 '>FIXED INCOME</h3>
                        <p className='border-b border-gray-300'>Short-term high yield investment</p>

                        <p className='border-b border-gray-300 flex items-center gap-5'>
                            <FaCheck className='text-xs'/>
                            <span> <strong  className='text-primary'> £5000</strong> MINIMUM INVESTMENT </span>
                        </p>
                        <p className='border-b border-gray-300 flex gap-4 items-center'>
                        <FaCheck className='text-xs'/>

                        UPTO 5% MONTHLY ROI 


                        </p>
                        <p className='border-b  border-gray-300 flex gap-4 items-center border-gray-300'>
                        <FaCheck className='text-xs'/>
                        RETURNS PAID QUARTERLY

                        </p>
                        <p className='border-b border-gray-300 flex gap-4 items-center'>
                        <FaCheck className='text-xs'/>
                        RETURN STATEMENT YEARLY

                        </p>
                        <div className='max-w- mr-auto my-6'>
                        <AppButton className='py-4 px-4 bg-primary rounded-xl ml-auto  text-white hover:text-primary hover:bg-alt transition-all ease-linear duration-300'>Get Started</AppButton>

                        </div>
                    </div>
                <div className='px-4 border bg-white p-6 shadow  font-medium text-gray-600 tracking-widest leading-9'>
                    <h3 className='text-xl text-center mb-10 '>CAPITAL GROWTH  </h3>
                    <p className='border-b border-gray-300'>Short-term high yield investment</p>

                    <p className='border-b border-gray-300 flex items-center gap-5'>
                        <FaCheck className='text-xs'/>
                        <span> <strong  className='text-primary'> £30,000 </strong> MINIMUM INVESTMENT                        </span>
                    </p>
                   
                    <p className='border-b  border-gray-300 flex gap-4 items-center border-gray-300'>
                    <FaCheck className='text-xs'/>
                    UPTO 6.5% MONTHLY ROI


                    </p>
                    <p className='border-b border-gray-300 flex gap-4 items-center'>
                    <FaCheck className='text-xs'/>
                    COMPOUNDING INTEREST FOR 3-5 YRS

                    </p>
                    <p className='border-b border-gray-300 flex gap-4 items-center'>
                    <FaCheck className='text-xs'/>
                    RETURN STATEMENT YEARLY

                    </p>


                    <div className='max-w- mr-auto my-6'>
                    <AppButton className='py-4 px-4 bg-primary rounded-xl ml-auto  text-white hover:text-primary hover:bg-alt transition-all ease-linear duration-300'>Get Started</AppButton>

                    </div>
                </div>
               
              
            </div>

            
        </section>
    </div>
  )
}

export default PassiveIncome