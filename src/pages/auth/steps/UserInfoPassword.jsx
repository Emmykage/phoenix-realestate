import { useState } from "react"
import { NavLink } from "react-router-dom"
import AppButton from "../../../components/buttons/Buttons"
import { useDispatch, useSelector } from "react-redux"
import { accountInfo } from "../../../redux/auth/user_authentication"

const UserInfoPassword = ({handleNext, handlePrev}) => {
    // const [formInput, setFormInput] = useState({confirm_password: "",  password: "", role: "client"})
     const {userReg, error, message, loading } = useSelector(state => state.auth)
    
    const [notce, setNotice] = useState({message: null, error: false})
    const dispatch = useDispatch()
    const handleInputChange = (e) => {
  
      // setFormInput({
      //   ...formInput,
      //   [e.target.name]: e.target.value
      // })

      dispatch(accountInfo({name: e.target.name, value: e.target.value }))

   
    }

    const handleVerification = () => {   
      if(userReg && userReg.confirm_password === userReg.password){
        handleNext()

      }
      else{
        setNotice({error: true, message: "Set Matching password"})

      }
    }
    return(
    
  
  <section className="module  min-h-screen get-started w-full bg-primary px-4 text-white flex justify-center  items-center">
    <div data-aos="zoom-in-down" className="">
  
      <div className=" px-4 text-justify">
        <div className="col-lg-4 w-full  col-lg-offset-4"> 
          <p className="text-xl my-4 text-center">
            User  Password
            </p>
            
              <form onSubmit={handleNext} className="login-form">
              
  
              <div className="form-block">
                {/* <label className='my-2 text-sm'>Password</label> */}
                <input className="border  bg-transparent border-gray-200 rounded-xl" type="password" name="password" placeholder='Password' onChange={handleInputChange}/>
            </div>
            <div className="form-block">
                {/* <label>Confirm Password</label> */}
                <input className="border  bg-transparent border-gray-200 rounded-xl" type="password" name="confirm_password" placeholder='Confirm Password' onChange={handleInputChange} />
                <p className="text-red-500">{notce.message && notce.message }</p>
            </div>

            <div className='flex gap-5 mt-10 bg-blue- justify-center'>

              <AppButton onClick={()=> {
                  handlePrev()
              }}>Prev</AppButton>  
              <AppButton onClick={handleVerification}>Submit</AppButton>
                                      </div>
              <div className="divider"></div>
              <p className="note mt-5">By clicking the "Register" button you agree with our <a href="#">Terms and conditions</a></p>    
              </form>

        </div>
      </div>
  
    </div>
  </section>
  )
  }
  
  export default UserInfoPassword