import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import AppButton from '../../../components/buttons/Buttons'
import "./style.scss"
const InvestorType = ({handleNext, handlePrev}) => {
    const dipatch = useDispatch()
    const [selectedOption, setSelectedOption] = useState()
    const handleSelection = (e) => {

        setSelectedOption(e.target.value)
    }


  return (
    <div className='h-screen get-started w-full bg-primary px-4 text-white flex justify-center items-center'>
        <div>
            <div>
                {/* <h2 className='text-white my-6 '>Get Started</h2> */}
                <p className='my-6 font-medium  text-2xl font-med'> To invest in this offer, we must
                    ascertain what type of investor
                    you are
                    </p>

                <div className='interest-form'>
                    <form action="">
                        <div>
                           
                            <div className='my-5'>
                                <label htmlFor="company" className='flex items-center gap-4'>
                                    <input type="radio" id='company' value={"company"} name={"investor_type"}  onChange={handleSelection} />
                                    Company

                                </label>

                            </div>
                            <div>
                                <label htmlFor="high_net_worth" className='flex items-center gap-4'>
                                    <input type="radio" id='high_net_worth' value={"High Net Worth"} name={"investor_type"} onChange={handleSelection}/>
                                    High Net Worth Investor

                                </label>

                            </div>
                            <div className='my-4'>
                                <label htmlFor="self_certified" className='flex items-center gap-4'>
                                <input type="radio" id='self_certified' value={"self_certified"} name={"investor_type"} onChange={handleSelection}/>
                                Self-Certified Sophisticated Investor


                                </label>

                            </div>
                            <div className='my-4'>
                                <label htmlFor="individual" className='flex items-center gap-4'>
                                <input type="radio" id='individual' value={"individual"} name={"investor_type"} onChange={handleSelection}/>
                                Individual. 

                                </label>
                            </div>
                            <div className='my-4'>
                                <label htmlFor="partnership" className='flex items-center gap-4'>
                                <input type="radio" id='partnership' value={"partnership"} name={"investor_type"} onChange={handleSelection}/>
                                Partnership Investors
                                </label>
                            </div>
                        </div>
                        <div className='flex gap-5 mt-10 bg-blue- justify-center'>

                            <AppButton onClick={()=> {
                                handlePrev()
                            }}>Prev</AppButton>  
                            <AppButton onClick={()=> {
                                selectedOption && handleNext({value: selectedOption, name: "initial_investment"})
                            }}>Next</AppButton>
                                                    </div>
                      
                    </form>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default InvestorType