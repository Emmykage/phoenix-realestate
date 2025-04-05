import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
import SubHeader from '../../components/subHeader/SubHeader'
import AppButton from '../../components/buttons/Buttons'

import "./contact.scss"
const Contact = () => {
   
  return (
    <div>
        <Nav/>
        <SubHeader tittle={"Contact Us"}/>
        
            <section className="mb-4 bg-white py-20 px-4 ">
                <div className='grid md:grid-cols-2 bg-red max-w-7xl m-auto  my-5 -'>
                    <div className='flex justify-center items-center '>

                        <div className=" text-center py-3 font-semibold">
                            <ul className="list-unstyled mb-0 w-full">
                                <li className='flex items-center gap-3 my-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                    <p>San Francisco, CA 94126, USA</p>
                                </li>

                                <li className='flex items-center gap-3 my-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                                    <p>+ 01 234 567 89</p>
                                </li>

                                <li className='flex items-center gap-3 my-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>                                <p>contact@mdbootstrap.com</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className='bg-yell'>

                  


                {/* <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2> */}

                <p className="text-center w-responsive mx-auto text-gray-600  text-2xl font-semibold my-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div className="row">

            
                    <div className=" mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                
                            <div className="row">

                        
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                    <label for="name" className="">Your name</label>

                                        <input type="text" id="name" name="name" className="form-control"/>
                                    </div>
                                </div>
                        

                        
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                    <label for="email" className="">Your email</label>

                                        <input type="text" id="email" name="email" className="form-control"/>
                                    </div>
                                </div>
                    

                            </div>
                    
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                    <label for="subject" className="">Subject</label>

                                        <input type="text" id="subject" name="subject" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                
                            <div className="row">

                        
                                <div className="col-md-12">

                                    <div className="md-form">
                                    <label for="message">Your message</label>

                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                    </div>

                                </div>
                            </div>
                

                        </form>

                        <div className="text-md-left">
                            <AppButton className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</AppButton>
                        </div>
                        {/* <div className="status"></div> */}
                    </div>

                   
            

                </div>
                </div>
                    
                    </div>

            </section>

    </div>
  )
}

export default Contact