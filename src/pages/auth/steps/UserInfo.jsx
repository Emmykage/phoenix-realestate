import { useState } from "react"
import { NavLink } from "react-router-dom"
import AppButton from "../../../components/buttons/Buttons"

const UserInfo = ({handleNext, handlePrev}) => {
    const [formInput, setFormInput] = useState({first_name: "", last_name: "", email: "", password: "", role: "client"})
  
    
    const handleInputChange = (e) => {
      if (e.target.name === "completed"){
        setFormInput({
          ...formInput,
          [e.target.name]: e.target.checked
        })
      }else{
      setFormInput({
        ...formInput,
        [e.target.name]: e.target.value
      })
    }
   
    }
    return(
    
  
  <div data-aos="zoom-in-down" className="h-screen get-started w-full bg-primary px-4 text-white flex justify-center items-center text-justify">
  
        <div className=" w-full max-w-5xl ma h-max"> 
          <p className="text-xl text-center my-4">
          Great - no matter the selection,You could enjoy guaranteed returns of up to 5-6.5% per Month from our portfolio of
  exclusive property investments.
  </p>
  {/* <p className="mt-3">
  We only work with trusted developers that have proven track records of delivering consistent returns.
  
  
          </p> */}
              <form onSubmit={handleNext} className="login-form">
                <div className='flex md:gap-6 flex-col md:flex-row'>
  
              <div className="form-block flex-1">
                  <input className="border bg-transparent border-gray-200 rounded-xl" type="text" name="first_name" placeholder='First Name' onChange={handleInputChange} />
              </div>
              <div className="form-block flex-1">
                  <input className="border  bg-transparent border-gray-200 rounded-xl" type="text" name="last_name" placeholder='Last Name' onChange={handleInputChange}/>
              </div>
              </div>
  
              <div className="form-block">
                  <input className="border  bg-transparent border-gray-200 rounded-xl" type="text" name="email" placeholder='Email' onChange={handleInputChange}/>
              </div>
             <div className="form-block">
                  <input className="border  bg-transparent border-gray-200 rounded-xl" type="text" name="phone" placeholder='Pnone Number' onChange={handleInputChange}/>
              </div>

              <div className='flex gap-5 mt-10 bg-blue- justify-center'>

                            <AppButton onClick={()=> {
                                handlePrev()
                            }}>Prev</AppButton>  
                            <AppButton onClick={()=> {
                                formInput && handleNext({value: formInput, name: "user"})
                            }}>Next</AppButton>
                                                    </div>
              <div className="divider"></div>
              <p className="note">By clicking the "Register" button you agree with our <a href="#">Terms and conditions</a></p>    
              </form>
        </div>  
    </div>
  )
  }
  
  export default UserInfo