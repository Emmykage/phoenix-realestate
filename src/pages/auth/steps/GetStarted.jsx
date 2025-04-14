import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import AppButton from '../../../components/buttons/Buttons'
import "./style.scss"
import AppDrawer from '../../../components/drawer/Drawer'
const GetStarted = ({handleNext}) => {
    const dipatch = useDispatch()
    const [selectedOption, setSelectedOption] = useState()
    const handleSelection = (e) => {

        setSelectedOption(e.target.value)
    }


  return (
    <div className='h-screen get-started  w-full bg-primary px-4 text-white flex justify-center items-center'>
        <div>
            <div data-aos="zoom-in-up">
                <h2 className='text-white my-6 '>Lets Get You Started</h2>
                <p htmlFor="investment_purpose" className='my-6 font-medium  text-3xl font-med'> Why are you interested in property investment?</p>

                <div className='interest-form'>
                    <form action="">
                        <div>
                         
                            <div className='my-5'>
                                <label htmlFor="retirement_saving" className='flex items-center gap-4'>
                                    <input type="radio" id='retirement_saving' value={"retirement saving"} name={"investment_purpose"}  onChange={handleSelection} />
                                    l'm saving for retirement

                                </label>

                            </div>
                            <div>
                                <label htmlFor="edge_against_inflation" className='flex items-center gap-4'>
                                    <input type="radio" id='edge_against_inflation' value={"edge against inflation"} name={"investment_purpose"} onChange={handleSelection}/>
                                    I want to hedge against inflation

                                </label>

                            </div>
                            <div className='my-4'>
                                <label htmlFor="diversify_portfolio" className='flex items-center gap-4'>
                                <input type="radio" id='diversify_portfolio' value={"diversify portfolio"} name={"investment_purpose"} onChange={handleSelection}/>
                                I want to Diversify my Portolio. 

                                </label>

                            </div>
                            <div className='my-4'>
                                <label htmlFor="additional_income" className='flex items-center gap-4'>
                                <input type="radio" id='additional_income' value={"additional income"} name={"investment_purpose"} onChange={handleSelection}/>
                                I want Additional income. 

                                </label>
                            </div>
                            <div className='my-4'>
                                <label htmlFor="others" className='flex items-center gap-4'>
                                <input type="radio" id='others' value={"others"} name={"investment_purpose"} onChange={handleSelection}/>
                                        others
                                </label>
                            </div>
                        </div>
                        <AppButton onClick={()=> {
                            selectedOption && handleNext({value: selectedOption, name: "investment_purpose" })
                        }}>Proceed</AppButton>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default GetStarted