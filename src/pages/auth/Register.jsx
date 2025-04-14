import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { registerUser } from '../../redux/actions/auth'
import { accountInfo, userLog } from '../../redux/auth/user_authentication'
import Button from '../../components/buttons/Buttons'
import AppButton from '../../components/buttons/Buttons'
import GetStarted from './steps/GetStarted'
import "./style.scss"
import InvestmentProp from './steps/InvestmentProp'
import InitialInvestment from './steps/InitialInvestment'
import UserInfo from './steps/UserInfo'
import InvestorType from './steps/InvestorType'
import UserInfoPassword from './steps/UserInfoPassword'
import useScrollEffect from '../../hooks/useScrllEffect'

const Register = () => {

  useScrollEffect()
  const {userReg, error, message, loading } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const handleNext = (data) => {
    dispatch(accountInfo(data))
    setStep(step => Math.min(step +1, regJourney.length))
    step === regJourney.length && handleFormSubmit()

  }

  const handlePrev = () => {
    setStep(count => Math.max(count -1, 1))

  }
  const navigation = useNavigate()
  const dispatch = useDispatch()

  const handleFormSubmit = () => {
    dispatch(registerUser(userReg)).then(result => {
      if(registerUser.fulfilled.match(result)){
        navigate("/dashboard/home")
      }else{
console.log("first")
      }
    })  
    
  }



  
  const regJourney = [{
    step: 1,
    label: "Get Started",
    render: <GetStarted setStep={setStep} handleNext={handleNext}/>
  },
  {
    step: 5,
    label: "User Info",
    render: <InvestorType handleNext={handleNext}  handlePrev={handlePrev}/>
  },{
    step: 6,
    label: "User Password",
    render: <UserInfoPassword handleNext={handleNext}  handlePrev={handlePrev}/>
  },


  
  {
    step: 2,
    label: "Investment Property",
    render: <InvestmentProp loading={loading}  handlePrev={handlePrev} error={error} handleNext={handleNext}/>
  }, {
    step: 3,
    label: "Initial Investment",
    render: <InitialInvestment  loading={loading}  handlePrev={handlePrev} error={error} handleNext={handleNext}/>
  }, {
    step: 4,
    label: "User Info",
    render: <UserInfo loading={loading} error={error}  handlePrev={handlePrev} handleNext={handleNext}/>
  }]
  console.log(userReg, step)

  return (
    <div>
      {regJourney.map(item => {
        if(item.step === step){
          return item.render
        }
      })}

 

    </div>
  )  


}

const SignUp = ({handleFormSubmit, error, handleNext, loading}) => {
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
  

<section className="module login h-screen get-started w-full bg-primary px-4 text-white flex justify-center items-center">
  <div className="bg max-w-4xl  fit">

    <div className="w-full px-4">
      <div className="col-lg-4 w-full  col-lg-offset-4 text-center"> 
        <p>
        Great - no matter the selection,You could enjoy guaranteed returns of up to 5-6.5% per Month from our portfolio of
exclusive property investments.
</p>
<p>
We only work with trusted developers that have proven track records of delivering consistent returns.


        </p>
        <p>Already have an account? <strong className='text-alt'><NavLink to="/auth/login">Login here.</NavLink></strong></p> 
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
                <label className='my-2 text-sm'>Password</label>
                <input className="border  bg-transparent border-gray-200 rounded-xl" type="password" name="password" placeholder='Password' onChange={handleInputChange}/>
            </div>
            <div className="form-block">
                <label>Confirm Password</label>
                <input className="border  bg-transparent border-gray-200 rounded-xl" type="password" name="confirm_password" placeholder='Confirm Password' onChange={handleInputChange} />
            </div>
            <div className="form-block">
                <label className='my-2 text-sm'>check</label>
                <input className="border bg-transparent border-gray-200 rounded-xl" type="checkbox" name="completed"  checked={formInput.completed} onChange={handleInputChange} />
            </div>
            <p>{loading && "Loading..." }</p>
            <p className='text-red'>{error && message}</p>
            
            <div className="form-block">
              <AppButton>Register </AppButton>
                {/* <button className="button button-icon" type="submit"><i className="w-[300px] fa fa-angle-right"></i>Register</button> */}
            </div>
            <div className="divider"></div>
            <p className="note">By clicking the "Register" button you agree with our <a href="#">Terms and conditions</a></p>    
            </form>
      </div>
    </div>

  </div>
</section>
)
}

export default Register