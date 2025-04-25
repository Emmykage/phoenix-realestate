import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import AppButton from '../../../components/buttons/Buttons'
import "./style.scss"
const InitialInvestment = ({handleNext,  handlePrev}) => {
    const dipatch = useDispatch()
    const [selectedOption, setSelectedOption] = useState()
    const handleSelection = (e) => {

        setSelectedOption(e.target.value)
    }


  return (
        <div className='h-screen get-started w-full bg-primary px-4 text-white flex justify-center items-center'>
            <div data-aos="zoom-in-down">
                {/* <h2 className='text-white my-6 '>Get Started</h2> */}
                <p  className='my-6 font-medium text-center text-3xl font-med'>How much are you looking to invest initially?</p>
                <p className='text-center'>(We have opportunities available from just £5,000)</p>

                <div className='interest-form'>
                    <form action="">
                        <div>
                            <div className='flex items-cente gap-4 my-5'>
                                <input type="radio" id='5000' value={"5000"} name={"initial_investment"} onChange={handleSelection}/>
                                <label htmlFor="5000"> £5000+                                </label>


                            </div>
                            <div className='my-5'>
                                <label htmlFor="30000" className='flex items-center gap-4'>
                                    <input type="radio" id='30000' value={30000} name={"initial_investment"}  onChange={handleSelection} />
                                    £30,000+

                                </label>

                            </div>
                            <div>
                                <label htmlFor="100000" className='flex items-center gap-4'>
                                    <input type="radio" id='100000' value={100000} name={"initial_investment"} onChange={handleSelection}/>
                                    £100,000+ 


                                </label>

                            </div>
                            <div className='my-4'>
                                <label htmlFor="1000000" className='flex items-center gap-4'>
                                <input type="radio" id='1000000' value={1000000} name={"initial_investment"} onChange={handleSelection}/>
                                £1,000,000+

                                </label>

                            </div>
                            <div className='my-4'>
                                <label htmlFor="additional_income" className='flex items-center gap-4'>
                                <input type="radio" id='additional_income' value={null} name={"initial_investment"} onChange={handleSelection}/>
                                l'm not sure yet
 

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
        
  )
}

export default InitialInvestment