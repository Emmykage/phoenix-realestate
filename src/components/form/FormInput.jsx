import React, { useState } from 'react'
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
const FormInput = ({
    label,
    type,
    disabled,
    handleInputChange,
    name,
    value,
    placeHolder
}) => {
    const [see, setSee] = useState(true)
    const togglePassword = () => {

    }
  return (
    <div className="form-block relative">
        {type == "password" && <span 
        onClick={() => setSee(prev => !prev)} className='absolute top-1/2 right-5 -translate-y-1/2'>
            {see ? 
            <IoMdEye /> : 
            <IoIosEyeOff />
}
        </span>
        }
        
        <label>{label}</label>
        <input
        disabled={disabled}
        value={value}
        placeHolder={placeHolder}
        className="border" 
        type={type === "text" ? "text" : see  ? "text" : "password"} 
        name={name} onChange={handleInputChange} />
    </div>  )
}

export default FormInput