import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AccountProfileDel, createAccountProfile, getAccountProfileDel, getAccountProfiles, updateAccountProfile } from '../../../redux/actions/accountProfile'
import { SET_LOADER } from '../../../redux/app/app'
import { toast } from 'react-toastify'
import Loader from '../../../components/loader/Loader'
import AppModal from '../../../components/modals/AppModal'
import { useNavigate } from 'react-router-dom'
import { FaArrowAltCircleLeft, FaArrowCircleLeft, FaArrowLeft } from 'react-icons/fa'
import Confirmation from '../../../components/modals/DepositModal'

const AdminAccountProfile = () => {
    const {account_profiles, loading} = useSelector(state => state.account)
    const navigate = useNavigate()
    const formRef = useRef(null)
    const [openModal, setOpenModal] = useState(false)
    const [openDel, setOpenDel] = useState(false)
    const [selectedId, setSelectedId] = useState(null)
    const [formInput, setFormInput] = useState({
        name: "bitcoin",
        address: "",
        routing: "",

    })

    const handleChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }


    useEffect(() => {

        dispatch(getAccountProfiles())
    //     .then(result => {
    //     if(getAccountProfiles.fulfilled.match(result)){
    //         setFormInput(result.payload)
    //     }
    // }) 
 },[])

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const element = formRef.current
        dispatch(SET_LOADER(true))

        // if(!formInput?.id){
        //     dispatch(createAccountProfile({account_profile: formInput})).then(result => {
        //             if(createAccountProfile.fulfilled.match(result)){
        //                 dispatch(SET_LOADER(false))
        //                 toast(result.payload?.message || "Wallet added", {type: "success"})
                       
        //                 return
        //             }
        //             dispatch(SET_LOADER(false))
        //             toast(result.payload.message, {type: "error"})
            
            
        //             })
        // }else{
        
            dispatch(createAccountProfile({account_profile: formInput})).then(result => {
                if(createAccountProfile.fulfilled.match(result)){
                    dispatch(SET_LOADER(false))
                     element.reset()
                     setFormInput({
                        name: "bitcoin",
                        address: "",
                        routing: "",
                        account_type: "bank"

                    })
                        setOpenModal(false)
                        dispatch(getAccountProfiles())
                    toast(result.payload?.message || "Wallet added", {type: "success"})
                    return
                }
                dispatch(SET_LOADER(false))
                toast(result.payload.message, {type: "error"})
        
        
                })         
 
    }

    
    const handleDel = (e) => {
        dispatch(SET_LOADER(true))

      
        
            dispatch(AccountProfileDel(selectedId)).then(result => {
                if(AccountProfileDel.fulfilled.match(result)){
                    dispatch(SET_LOADER(false))
                   
                        setOpenModal(false)
                        setOpenDel(false)
                        dispatch(getAccountProfiles())
                    toast(result.payload || "Wallet deleted", {type: "success"})
                    return
                }
                dispatch(SET_LOADER(false))
                toast(result.payload.message, {type: "error"})
        
        
                })   
 
    }


  return (
    <>
    <div className='bg-white p-4 rounded-lg mt-20 shadow-lg'>

        <div className='flex justify-between'>
            <button onClick={() => navigate(-1)}><FaArrowLeft /> </button>
            <button onClick={() => setOpenModal(true)} className='bg-primary text-white py-2 px-4 rounded-lg'>Add Account Profile</button>
        </div>
        <h2 className='my-5'>Add Account Profile</h2>


         <div className='overflow-x-auto'>
        
            <table className="w-full text-left border-collapse">
                <thead>
                <tr className="bg-gray-100 text-sm text-gray-600">
                    <th className="p-3 border-b">#</th>
                    <th className="p-3 border-b">Name</th>
                    <th className="p-3 border-b">Address</th>
                    <th className="p-3 border-b">Routing</th>
                    <th className="p-3 border-b">Type</th>
                </tr>
                </thead>
                <tbody>

                {loading ? <tr> 
                    <td colSpan={4}>
                    <Loader/>
                    </td>
                    
                </tr> : account_profiles.map((user, index) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                    <td className="p-3 border-b">{index + 1}</td>
                    <td className="p-3 border-b font-medium">{user.name}</td>
                    <td className="p-3 border-b text-green-600 font-semibold">
                        {(user?.address)}
                    </td>
                    <td className="p-3 border-b">{user?.routing} </td>
                    <td className="p-3 border-b">
                        <button
                        onClick={() =>{
                            setOpenDel(true)
                            setSelectedId(user.id)
                        }}
                        className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded hover:bg-blue-700 transition"
                        >
                        del
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
                
            </table>
      
      </div>
       
    </div>

    <AppModal open={openModal} handleClose={()=> setOpenModal(false)} title="Add Account Profile">
        <div>
                    
                <form onSubmit={handleSubmit} ref={formRef} className="space-y-4">
                <div>
                    <label class="block text-sm font-medium mb-2">METHOD NAME
                    </label>

                    <select
                    className="w-full bg-gray-100 border border-gray-700 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    onChange={handleChange}
                        value={formInput?.name} name="name" id="">
                        <option value="bitcoin">Bitcoin</option>
                        <option value="ethereum">Ethereum</option>
                        <option value="usdt">USDT</option>
                        <option value="bank">Bank</option>
                        
                    </select>
                   
                </div>
              
                <div>
                    <label class="block text-sm font-medium mb-2"> ADDRESS/ACCOUT NUMBER             </label>
                    <input
                        onChange={handleChange}
                        value={formInput?.address}
                        type="text"
                        name="address"
                        class="w-full bg-gray-100 border border-gray-700 rounded-lg px-4 py-2 text- text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Address or Account Number"
                        required
                        />
                </div>
                {formInput?.name === "bank" && (
                     <div>
                        <label class="block text-sm font-medium mb-2">ROUTING </label>
                            <input
                                onChange={handleChange}
                                value={formInput?.routing}
                            type="text"
                            name="routing"
                            class="w-full bg-gray-100 border border-gray-700 rounded-lg px-4 py-2 text- text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="ENTER BANK ROUTING ID"
                            required
                            />
                        </div>
                    )}
               

                <div className='flex justify-between'>

                <button className='bg-primary text-white py-2 px-4 text-center block rounded-lg'>
                    Submit
                </button>

                    <button
                    onClick={() => setOpenModal(false)}
                    type="button"
                    className='bg-gray-300 text-gray-900 py-2 px-4 text-center block rounded-lg'>
                        Cancel
                    </button>
                </div>

                </form>
                
      </div>
    </AppModal>

    <AppModal open={openDel} handleClose={()=> setOpenDel(false)}  setOpenModal={setOpenDel} title="Delete Account Profile">
                    <Confirmation title={"Confirm Delete"} message={"Confirm Account Profile to delete"} onConfirm={handleDel} onCancel={()=> setOpenDel(false)}/>
        </AppModal>



    </>
  )
}

export default AdminAccountProfile