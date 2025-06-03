import React, { useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import AppModal from '../../../components/modals/AppModal'
import Confirmation from '../../../components/modals/DepositModal'
import { createTransaction } from '../../../redux/actions/wallet'
import { toast } from 'react-toastify'
import WithdrawalNotes from '../components/withdrawal-notes'
import { getAccountProfiles } from '../../../redux/actions/accountProfile'
const CapitaltWithdraw = () => {
    const formRef = useRef(null)
        const [formInput, setFormInput] = useState({
            amount: 0,
            address: "",
            coin_type: "",
            transaction_type: "deposit"
    
        })
    const {account_profiles} = useSelector(state => state.account)
    const [selectedValue, setSelectedValue] = useState(null)

    const {portfolio} = useSelector(state => state.portfolios)
    
    
    const [openModal, setOpenModal] = useState(false)


    const handleDepositModal = (e) => {
        e.preventDefault()
        setOpenModal(prev => !prev)    
    }
   

    const dispatch = useDispatch()

    
    const handleSubmit = () => {
        const element = formRef.current

         const formData = new FormData()
         formData.append('transaction[coin_type]', selectedValue.name)
         formData.append('transaction[amount]', formInput.amount)
         formData.append('transaction[address]', formInput.address)
         formData.append('transaction[transaction_type]', "withdraw") 
         formData.append('transaction[portfolio_id]', portfolio.id )


        // const data = Object.fromEntries(formData)

        dispatch(createTransaction(formData)).then(result => {
            if(createTransaction.fulfilled.match(result)){
                element.reset()
                setOpenModal(false)
                toast(result.payload.message || "Withdrawal has been successful", {type: "success"})

            }else{
               toast(result.payload.message, {type: "error"})
            }
        })
        
      }
    

   

   useEffect(()=> {
        setFormInput({...formInput, coin_type: account_profiles[0]?.name})
    },[account_profiles])


    useEffect(()=> {
            dispatch(getAccountProfiles())
        },[])
        


   useEffect(()=> {
        setFormInput({...formInput, coin_type: account_profiles[0]?.name})
    },[account_profiles])

  
   useEffect(()=> {    
        const selectValue = account_profiles?.find(item => item.id === formInput.coin_type)  ?? account_profiles[0]
        setSelectedValue(selectValue)
        
        },[account_profiles, formInput?.coin_type])
    
    
  console.log(selectedValue)

  return (
    <div className='px-4 max-w-1450 bg-white mx-3 box-shadow rounded-sm py-4 my-5'>
       
        <div className='my-3'>
            <h3 className='text-right font-semibold'>Withdrawal</h3>
        </div>

        <div>
        <form onSubmit={handleDepositModal} ref={formRef}>
            <div  className='my-3 text-left'>
                <label className='block m-1 font-medium uppercase'>Payment Method</label> 
                <div className=''>
               
                <select
                        onChange={(e) => setFormInput({...formInput, coin_type: e.target.value})}
                        name='coin_type' id='coin_type' className='border form-select form-select-lg mb-3' required>

                            {account_profiles?.map(item => (
                            <option value={item?.id}>{item.name?.toUpperCase()}</option>

                  ))}
                        
                </select> 

               
                     
                </div>
            </div>
            <div>
                    <label className='block m-1' htmlFor="amount">Enter Amount</label>
                    <input type="number" className='border'  placeholder='Enter Amount in USD' name="amount" onChange={(e)=> setFormInput({...formInput, amount: e.target.value})} required min={500}/>
                </div>
        
             <div className='my-2'>
                        <label className='block m-1 uppercase font-medium' htmlFor="client_address">Enter Wallet Address</label>
                        <input className='border' type='text' onChange={(e) => setFormInput({...formInput, address: e.target.value})} id="client_address" name='wallet_address' required placeholder='Enter Wallet Address'/>
                    </div>
                <WithdrawalNotes/>
        <div className='mt-2'>
        <button type='submit' className='btn py-3 w-full'>Request</button>
        </div>
        </form>
        </div>

           <AppModal  open={openModal}>
                    <Confirmation onCancel={()=> setOpenModal(false)} message={`Confirm Withdrawal`} title={"Confirm Withdrawal"} onConfirm={handleSubmit}  />
            </AppModal>

    </div>
  )
}

export default CapitaltWithdraw