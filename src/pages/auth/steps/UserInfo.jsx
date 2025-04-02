import { useState } from "react"
import { NavLink } from "react-router-dom"
import AppButton from "../../../components/buttons/Buttons"

const UserInfo = ({handleFormSubmit, error, handleNext, loading}) => {
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
    
  
  <div className="h-screen get-started w-full bg-primary px-4 text-white flex justify-center items-center text-justify">
  
        <div className=" w-full max-w-5xl ma h-max"> 
          <p className="text-xl">
          Great - no matter the selection,You could enjoy guaranteed returns of up to 5-6.5% per Month from our portfolio of
  exclusive property investments.
  </p>
  <p className="mt-3">
  We only work with trusted developers that have proven track records of delivering consistent returns.
  
  
          </p>
              <form onSubmit={handleNext} className="login-form">
                <div className='flex md:gap-6 flex-col md:flex-row'>
  
              <div className="form-block flex-1">
                  <label className='my-2 text-sm'>First Name</label>
                  <input className="border bg-transparent border-gray-200 rounded-xl" type="text" name="first_name" placeholder='First Name' onChange={handleInputChange} />
              </div>
              <div className="form-block flex-1">
                  <label className='my-2 text-sm'>Last Name</label>
                  <input className="border  bg-transparent border-gray-200 rounded-xl" type="text" name="last_name" placeholder='Last Name' onChange={handleInputChange}/>
              </div>
              </div>
  
              <div className="form-block">
                  <label className='my-2 text-sm'>Email</label>
                  <input className="border  bg-transparent border-gray-200 rounded-xl" type="text" name="email" placeholder='Email' onChange={handleInputChange}/>
              </div>
             <div className="form-block">
                  <label className='my-2 text-sm'>Phone</label>
                  <input className="border  bg-transparent border-gray-200 rounded-xl" type="text" name="phone" placeholder='Pnone Number' onChange={handleInputChange}/>
              </div>

              <div className="form-block">
                <AppButton 
                onClick={() => {
                    formInput && handleNext({name: "user", value: formInput })
                }}>NEXT </AppButton>
                  {/* <button className="button button-icon" type="submit"><i className="w-[300px] fa fa-angle-right"></i>Register</button> */}
              </div>
              <div className="divider"></div>
              <p className="note">By clicking the "Register" button you agree with our <a href="#">Terms and conditions</a></p>    
              </form>
        </div>  
    </div>
  )
  }
  
  export default UserInfo