import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { userSession } from "../../redux/actions/auth";
import { SET_LOADER } from "../../redux/app/app";
import SubHeader from "../../components/subHeader/SubHeader";
import { toast } from "react-toastify";
import FormInput from "../../components/form/FormInput";
// import { userSession } from "../../actions/authActions"; // Ensure this is correctly imported

const AdminLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, loading, error, message } = useSelector(state => state.auth);
    const [formInput, setFormInput] = useState({ email: "", password: "" });

    const handleInputChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        dispatch(SET_LOADER(true))
        dispatch(userSession({ user: formInput })).then(result => {
            if(userSession.fulfilled.match(result)){
                navigate("/admin/dashboard");
                dispatch(SET_LOADER(false))
                   toast(result.payload.message || "Login Successful", {type: "success"})
                


            }else
            {
                toast(result.payload.message || "Failed to Login", {type: "error"})
                              
                dispatch(SET_LOADER(false))

            }
        });
    };


    return (
        <div>
            <SubHeader tittle={"Login as an Admin"}/>

         
            <section className=" login py-8 md:py-20 px-4">
                <div className="m-auto  max-w-5xl ">
                    <div className="row">
                        <div className="col-lg-4 col-lg-offset-4"> 

                            <form onSubmit={handleFormSubmit} className="login-form">
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
                      
                                <p>{loading && "Loading..." }</p>
                                <p className="text-red">{error && message}</p>
                        
                                <div className="form-block">
                                    <button className="button button-icon" type="submit">
                                        <i className="fa fa-angle-right"></i>Login
                                    </button>
                                </div>
                                <div className="divider"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="module cta newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7">
                            <h3>Sign up for our <strong>newsletter.</strong></h3>
                            <p>Lorem molestie odio. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <form method="post" id="newsletter-form" className="newsletter-form">
                                <input type="email" placeholder="Your email..." />
                                <button type="submit" form="newsletter-form"><i className="fa fa-send"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdminLogin;
