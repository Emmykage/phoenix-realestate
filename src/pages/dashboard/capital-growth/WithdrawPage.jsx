import React, { useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import AppModal from '../../../components/modals/AppModal'
import Confirmation from '../../../components/modals/DepositModal'
import { createTransaction } from '../../../redux/actions/wallet'
import { toast } from 'react-toastify'
const CapitaltWithdraw = () => {
    const formRef = useRef(null)
        const [formInput, setFormInput] = useState({
            amount: 0,
            address: "",
            coin_type: "",
            transaction_type: "deposit"
    
        })
    const {account_profile} = useSelector(state => state.account)
    const [paymentOptions, setPaymentOptions] = useState([])
    

        const {portfolio} = useSelector(state => state.portfolios)
    
    
    const [openModal, setOpenModal] = useState(false)


    const handleDepositModal = (e) => {
        e.preventDefault()
        setOpenModal(prev => !prev)    
    }
   

    const dispatch = useDispatch()

    
    const handleSubmit = () => {
        const element = formRef.current

        const typeCoin = paymentOptions.find(item => item.value === formInput.coin_type)

         const formData = new FormData()
         formData.append('transaction[coin_type]', typeCoin.label)
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

        const options = Object.entries(account_profile).map((item) => ({
            label: item[0], value: item[1]
        })).slice(1)
        setPaymentOptions(options)

      },
    [account_profile])


    useEffect(()=> {
        setFormInput({...formInput, coin_type: paymentOptions[0]?.value})
    },[paymentOptions])


  

  return (
    <div className='md:px-4 max-w-1450 bg-white mx-3 box-shadow rounded-sm py-4 my-5'>
       
        <div className='my-3'>
            <h3 className='text-right font-semibold'>Withdrawal</h3>
        </div>

        <div>
        <form onSubmit={handleDepositModal} ref={formRef}>
            <div  className='my-3 text-left'>
                <label className='block m-1 font-medium uppercase'>Payment Method</label> 
                <div className=''>
               
                <select onChange={(e) => setFormInput({...formInput, coin_type:  e.target.value})}  name='coin_type' id='coin_type' className='border form-select form-select-lg mb-3' required>

                    {paymentOptions?.map(item => (
                    <option value={item?.value}>{item.label?.toUpperCase()}</option>

                    ))}

                    </select>

               
                     
                </div>
            </div>
            <div>
                    <label className='block m-1' htmlFor="amount">Enter Amount</label>
                    <input type="number" className='border'  placeholder='Enter Amount in USD' name="amount" onChange={(e)=> setFormInput({...formInput, amount: e.target.value})} required min={500}/>
                </div>
            <ul>
                    <p className='font-medium'>Minimum Withdrawal = 500 USDT</p>
                    <li className='px-3 font-normal'><p>Ensure that your account information is accurate and up-to-date</p></li>
                    <li className='px-3 font-normal'><p>Be aware of any daily or transactional withdrawal limits imposed by the financial institution.</p></li>
                    <li className='px-3 font-normal'><p>Be aware of any potential delays, especially for large or international transactions.</p></li>
                    <li className='px-3 font-normal'><p>Withdrwal may be via any of the supported networks: Tron (TRC20), BSC(BEP20), ETH(ER20), Polygon, Arbitum Network </p></li>
                    <li className='px-3 font-normal'><p>Your withdrawal request will be confirmed and approved in a minute</p></li>
                    {/* <li className='px-3 font-normal'><p>Please make deposit before submitting the form</p></li> */}
                </ul>
                {/* <div className='m-2'> */}
                    {/* <p className='text-dark text-left text-base font-semibold my-3'>Deposit Address</p> */}
                    <div className='my-2'>
                        <label className='block m-1 uppercase font-medium' htmlFor="client_address">Enter Wallet Address</label>
                        <input className='border' type='text' onChange={(e) => setFormInput({...formInput, address: e.target.value})} id="client_address" name='wallet_address' required placeholder='Enter Wallet Address'/>
                    </div>

                {/* </div> */}
                {/* <div className=''>
                    <input type="file" name='receipt' className='border w-full' />
                </div> */}
        <div>
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