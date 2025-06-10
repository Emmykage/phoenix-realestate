import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { userSession } from '../../redux/actions/auth'
import { SET_LOADER } from '../../redux/app/app'
import SubHeader from '../../components/subHeader/SubHeader'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import { toast } from 'react-toastify'
import FormInput from '../../components/form/FormInput'

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {user, error, loading, message} = useSelector(state => state.auth)
    const [formInput, setFormInput] = useState({email: "", password: ""})
   
    const handleInputChange = (e)=> {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
       e.preventDefault();
       
               dispatch(SET_LOADER(true))
               dispatch(userSession({ user: formInput })).then(result => {
                   if(userSession.fulfilled.match(result)){
                       navigate("/dashboard/home");
                       toast(result.payload.message || "Login successful", {type: "success"})

                       dispatch(SET_LOADER(false))
       
       
                   }else
                   {
                    dispatch(SET_LOADER(false))
                    toast(result.payload.message || "Failed to Login", {type: "error"})
       
                   }
               });
    }


  return (
    <div>
        <SubHeader tittle={"Login"} link={"/"}  />
        
        <section className="py-10  login px-4">
            <div className="max-w-6xl m-auto">
        
            <div className="row">
                <div className="col-lg-4 col-lg-offset-4"> 
                <p>Don't have an account? <strong><NavLink to="/auth/register" className={"text-theme-pry"}> Register here.</NavLink></strong></p> 
                <form onSubmit={handleFormSubmit} className="login-form mt-10 rounded-lg bg-white p-4">
                    <FormInput
                    label={"Email"}
                    type={"text"}
                    name={"email"}
                    handleInputChange={handleInputChange}
                    />

                       <FormInput
                    label={"Password"}
                    type={"password"}
                    name={"password"}
                    handleInputChange={handleInputChange}
                    />
                    
                    <div className="form-block">
                    <label><input type="checkbox" name="remember" />Remember Me</label><br/>
                    </div>
                    <p>{loading && "Loading..." }</p>
                    <p className='text-red'>{error && message}</p>
            
                    <div className="form-block">
                    <button className="button button-icon" type="submit"><i className="fa fa-angle-right"></i>Login</button>
                    </div>
                    <div className="divider"></div>
                    <p className="note"><a href="#">I don't remember my password.</a> </p>    
                </form>
                </div>
            </div>
        
            </div>
        </section>
        
        <NewsLetter/>
    </div>
  )
}

export default Login