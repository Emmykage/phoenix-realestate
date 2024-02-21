import React, { useEffect, useRef, useState } from 'react'

import WithdrawalModal from '../components/modals/WithdrawalModal'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../redux/wallet/transaction'
const WithdrawPage = () => {
    const formRef = useRef(null)
    const [toggleModalWithdrawal, setToggleModalWithdrawal] = useState(null)
    const [withdraw, setWithdraw] = useState(null)  
    const [show, setShow] = useState("hidden")
    const {status} = useSelector(state => state.transactions)
    const dispatch = useDispatch()
    const handleDepositModal = (e) => {
        e.preventDefault()
        const formData = new FormData()
       
        // const data = Object.fromEntries(formData)
        setToggleModalWithdrawal("show-modal withdrawal")
      
            formData.append('transaction[coin_type]', e.target.coin_type.value)
            formData.append('transaction[amount]', e.target.amount.value)
            formData.append('transaction[address]', e.target.wallet_address.value)
            formData.append('transaction[transaction_type]', "withdraw")

   
        setWithdraw(formData)
               
    }

    useEffect(()=> {
        const element = formRef.current

        console.log(element)
        if(status =="success"){
            setShow("flex")
            element.reset()
            
            setInterval(()=> {setShow("hidden"); dispatch(reset())})

        }else{
            setShow("hidden")
        }
    },[status])




  

  return (
    <div className='px-3'>
        <div className={`${show} p-2  rounded-md my-1 gap-3 fixed`}>
            <p className='text-base text-green border p-2 rounded-md box-shadow'>
                <span>Payment was success full </span> 
                <span className="text-gray font-semibold" onClick={()=> setShow("hidden")}>X</span> 
            </p>
            
        </div>
        <div>
            <h3 className='text-right font-semibold'>Withdraw from Wallet</h3>
        </div>

        <div>
        <form onSubmit={handleDepositModal} ref={formRef}>
            <div  className='my-3 text-left'>
                <label className='block m-1 font-medium'>Payment Method</label> 
                <div className=''>
               
                <select name='coin_type' id='coin_type' className='border form-select form-select-lg mb-3' required>
                    <option className='border' value="USD THETHER" selected>USD THETHER</option>
                    <option value="BITCOIN">BITCOIN</option>
                    <option value="ETHERUM">ETHERUM (ERC-20)</option>
                </select>

               
                     
                </div>
            </div>
            <div>
                <label className='block m-1' htmlFor="amount">Enter Amount</label>
                <input type="number" className='border'  placeholder='Enter Amount in USD' name="amount" required min={10}/>
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
                <div className='m-2'>
                    <p className='text-dark text-left px-4 text-base font-medium'>Deposit Address</p>
                    <div className='m-2'>
                        <label className='block m-1' htmlFor="client_address">Enter Wallet Address</label>
                        <input className='border' type='text' id="client_address" name='wallet_address' required/>
                    </div>

                </div>
                {/* <div className=''>
                    <input type="file" name='receipt' className='border w-full' />
                </div> */}
        <div>
        <button type='submit' className='btn w-full bg-semi text-white'>Request</button>
        </div>
        </form>
        </div>
        <WithdrawalModal toggleModal={toggleModalWithdrawal} setToggleModal={setToggleModalWithdrawal} withdrawal={withdraw}/>

    </div>
  )
}

export default WithdrawPage