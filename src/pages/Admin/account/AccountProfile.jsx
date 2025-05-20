import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createAccountProfile, getAccountProfile, updateAccountProfile } from '../../../redux/actions/accountProfile'
import { SET_LOADER } from '../../../redux/app/app'
import { toast } from 'react-toastify'

const AdminAccountProfile = () => {
    const {account_profile} = useSelector(state => state.account)
    const [formInput, setFormInput] = useState({
        bank: "",
        bitcoin: "",
        ethereum: "",
        usdt: ""

    })

    const handleChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }


    useEffect(() => {

        dispatch(getAccountProfile()).then(result => {
        if(getAccountProfile.fulfilled.match(result)){
            setFormInput(result.payload)
        }
    })  },[])

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(SET_LOADER(true))

        if(!formInput?.id){
            dispatch(createAccountProfile({account_profile: formInput})).then(result => {
                    if(createAccountProfile.fulfilled.match(result)){
                        dispatch(SET_LOADER(false))
                        toast(result.payload?.message || "Wallet added", {type: "success"})
                        return
                    }
                    dispatch(SET_LOADER(false))
                    toast(result.payload.message, {type: "error"})
            
            
                    })
        }else{
        
            dispatch(updateAccountProfile({account_profile: formInput})).then(result => {
                if(createAccountProfile.fulfilled.match(result)){
                    dispatch(SET_LOADER(false))
                    toast(result.payload?.message || "Wallet added", {type: "success"})
                    return
                }
                dispatch(SET_LOADER(false))
                toast(result.payload.message, {type: "error"})
        
        
                })
            }
 
    }
  return (
    <div className='bg-white p-4 rounded-lg mt-20 shadow-lg'>
        <h2 className='my-5'>Add Account Profile</h2>
        <div>
            
        <form onSubmit={handleSubmit}>
        <div>
            <label class="block text-sm font-medium mb-2">BANK WIRE/ TRANSFER 
            </label>
            <input
            onChange={handleChange}
            value={formInput.bank}
            type="text"
            name="bank"
            class="w-full bg-gray-100 border border-gray-700 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Account Number"
            required
            />
        </div>
        <div>
            <label class="block text-sm font-medium mb-2">BITCOIN</label>
            <input
                onChange={handleChange}
                value={formInput.bitcoin}
            type="text"
            name="bitcoin"
            class="w-full bg-gray-100 border border-gray-700 rounded-lg px-4 py-2 text- text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
            required
            />
        </div>
        <div>
            <label class="block text-sm font-medium mb-2"> ETHEREUM (10% deposit bonus)

            </label>
            <input
                onChange={handleChange}
                value={formInput.ethereum}
            type="text"
            name="ethereum"
            class="w-full bg-gray-100 border border-gray-700 rounded-lg px-4 py-2 text- text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ethereum Address"
            required
            />
        </div>
        <div>
            <label class="block text-sm font-medium mb-2">USDT
            </label>
            <input
                onChange={handleChange}
                value={formInput.usdt}
            type="text"
            name="usdt"
            class="w-full bg-gray-100 border border-gray-700 rounded-lg px-4 py-2 text- text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Address"
            required
            />
        </div>
        <button className='bg-primary text-white py-2 px-4 text-center block rounded-lg'>
            Submit
        </button>
        </form>
        
        </div>
    </div>
  )
}

export default AdminAccountProfile