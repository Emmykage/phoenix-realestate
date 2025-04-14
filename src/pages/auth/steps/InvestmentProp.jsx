import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import AppButton from '../../../components/buttons/Buttons'
import "./style.scss"
const InvestmentProp = ({handleNext, handlePrev}) => {
    const dipatch = useDispatch()
    const [selectedOption, setSelectedOption] = useState()
    const handleSelection = (e) => {
        setSelectedOption(e.target.value)
    }

  return (
    <div className='h-screen get-started w-full bg-primary px-4 text-white flex justify-center items-center'>
        <div data-aos="zoom-in-down">
            <div>
                <h2 className='text-white my-6 '></h2>
                <p className='my-6 font-medium  text-3xl font-med'> Which type of property investment are you most interested in?</p>

                <div className='interest-form'>
                    <form action="">
                        <div>
                          
                            <div className='my-5'>
                                <label htmlFor="fixed_income" className='flex items-center gap-4'>
                                    <input type="radio" id='fixed_income' value={"fixed income"} name={"investment_property"}  onChange={handleSelection} />
                                  A.  Fixed Income: <br /> Best for those who wish to receive a regular income from their investment every 3-4 months.



                                </label>

                            </div>
                            <div className='mb-4'>
                                <label htmlFor="capital_growth" className='flex items-center gap-4'>
                                    <input type="radio" id='capital_growth' value={"capital growth"} name={"investment_property"} onChange={handleSelection}/>
                                    B. Capital Growth: <br />
                                     This suits investors who wish to invest in long-term development projects.


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

export default InvestmentProp