import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { confirmResetToken } from '../../redux/actions/auth'
import { SET_LOADER } from '../../redux/app/app'
import SubHeader from '../../components/subHeader/SubHeader'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import { toast } from 'react-toastify'
import FormInput from '../../components/form/FormInput'

const ResetPasswordToken = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [query] = useSearchParams()
    const token = query.get("token")
    const email = query.get("email")
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
               dispatch(confirmResetToken({email, password: formInput.password})).then(result => {
                   if(confirmResetToken.fulfilled.match(result)){
                       
                       toast(result.payload.message || "Password Sent", {type: "success"})

                       dispatch(SET_LOADER(false))
                       navigate(`/auth/new-password?email=${email}`);

       
       
                   }else
                   {
                    dispatch(SET_LOADER(false))
                    toast(result.payload.message || "Failed to Login", {type: "error"})
       
                   }
               });
    }

    console.log(email, token, loading)

  return (
    <div>
        <SubHeader tittle={"Reset Password"} link={"/"}  />
        
        <section className="py-10  login px-4">
            <div className="max-w-6xl m-auto">
        
            <div className="row">
                <div className="col-lg-4 col-lg-offset-4"> 

                <form onSubmit={handleFormSubmit} className="login-form mt-10 rounded-lg bg-white p-4">
                    <FormInput
                    label={"Email"}
                    type={"text"}
                    name={"email"}
                    disabled
                    value={email}
                    handleInputChange={handleInputChange}
                    />

                <FormInput
                            label={"Reset Password Token"}
                            type={"password"}
                            name={"password"}
                            handleInputChange={handleInputChange}
                            />

                    <p>{loading && "Loading..." }</p>
                    <p className='text-red'>{error && message}</p>
            
                    <div className="form-block">
                    <button className="button button-icon" type="submit"><i className="fa fa-angle-right"></i>Request Password</button>
                    </div>
                    <div className="divider"></div>
                </form>
                </div>
            </div>
        
            </div>
        </section>
        
        <NewsLetter/>
    </div>
  )
}

export default ResetPasswordToken