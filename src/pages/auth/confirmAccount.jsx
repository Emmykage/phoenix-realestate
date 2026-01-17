import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { userConfirmation, userSession } from '../../redux/actions/auth'
import { SET_LOADER } from '../../redux/app/app'
import SubHeader from '../../components/subHeader/SubHeader'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import { toast } from 'react-toastify'
import FormInput from '../../components/form/FormInput'

const ConfirmAccount = () => {
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
               dispatch(userConfirmation({ email, token})).then(result => {
                   if(userConfirmation.fulfilled.match(result)){
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

    console.log(email, token)

  return (
    <div>
        <SubHeader tittle={"Confirm Account"} link={"/"}  />
        
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

                    <p>{loading && "Loading..." }</p>
                    <p className='text-red'>{error && message}</p>
            
                    <div className="form-block">
                    <button className="button button-icon" type="submit"><i className="fa fa-angle-right"></i>Confirm Account</button>
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

export default ConfirmAccount