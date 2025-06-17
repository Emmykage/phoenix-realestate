import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { userConfirmation, userPasswordChange, userResetToken, userSession } from '../../redux/actions/auth'
import { SET_LOADER } from '../../redux/app/app'
import SubHeader from '../../components/subHeader/SubHeader'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import { toast } from 'react-toastify'
import FormInput from '../../components/form/FormInput'

const NewPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [query] = useSearchParams()
    const token = query.get("token")
    const email = query.get("email")
    const {user, error, loading, message} = useSelector(state => state.auth)
    const [formInput, setFormInput] = useState({confirm_password: "", password: ""})
   
    const handleInputChange = (e)=> {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
       e.preventDefault();
       
        dispatch(SET_LOADER(true))
        dispatch(userPasswordChange({user: {email, ...formInput}})).then(result => {
            if(userPasswordChange.fulfilled.match(result)){
                navigate("/dashboard/home");
                
                toast(result.payload.message || "Password Changed", {type: "success"})

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
        <SubHeader tittle={"New Password"} link={"/"}  />
        
        <section className="py-10  login px-4">
            <div className="max-w-6xl m-auto">
        
            <div className="row">
                <div className="col-lg-4 col-lg-offset-4"> 

                <form onSubmit={handleFormSubmit} className="login-form mt-10 rounded-lg bg-white p-4">
                

                <FormInput
                            label={"New Password"}
                            type={"password"}
                            name={"password"}
                            handleInputChange={handleInputChange}
                            />

                             <FormInput
                            label={"Confirm Password "}
                            type={"password"}
                            name={"confirm_password"}
                            handleInputChange={handleInputChange}
                            />

                    <p>{loading && "Loading..." }</p>
                    <p className='text-red'>{error && message}</p>
            
                    <div className="form-block">
                    <button className="button button-icon" type="submit"><i className="fa fa-angle-right"></i>Save Password</button>
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

export default NewPassword