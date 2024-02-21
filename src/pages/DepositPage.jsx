import React, { useEffect, useRef, useState } from 'react'
import barcode from '../assets/images/png-transparent-qr-code-barcode-scanners-scanner-q-text-rectangle-logo.png'
import { FaCopy } from 'react-icons/fa'
import DepositModal from '../components/modals/DepositModal'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../redux/wallet/transaction'
const DepositPage = () => {
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const [toggleModalDeposit, setToggleModalDeposit] = useState(null)
    const [deposit, setDeposit] = useState(null)  
    const [show, setShow] = useState("hidden")
    const {status} = useSelector(state => state.transactions)
    const handleDepositModal = (e) => {
        e.preventDefault()
         const formData = new FormData()
         formData.append('transaction[coin_type]', e.target.coin_type.value)
         formData.append('transaction[amount]', e.target.amount.value)
         formData.append('transaction[receipt]', e.target.receipt.files[0])
         formData.append('transaction[transaction_type]', "deposit")


        // const data = Object.fromEntries(formData)
        setToggleModalDeposit("show-modal deposit")

        setDeposit(formData)

        
    }
    const element = formRef.current
 
 
    useEffect(()=> {       


        if(status == "success" ){
            setShow("flex")
            if(status == "success" ){
                element.reset()
                setInterval(()=> {setShow("hidden"); dispatch(reset()) }, 5000)
                }
        
    
            }
            else{ setShow("hidden")}
     

    },[status])


    const [textToCopy, setTextToCopy] = useState("bc1qusn333vtanazyywdvr5u5mwk5eq32h5n5lpchr")
    const [copySuccess, setCopySuccess] = useState(false)
    const handleCopyClick = async ()=> {
        try{
            await navigator.clipboard.writeText(textToCopy)
            setCopySuccess(true)
        }catch(err){
            console.error('Unable to copy text: ', err)
        }
    }
  return (
    <div className='px-3'>
        <div className={`${show} p-2  rounded-md my-1 gap-3 fixed`}>
            <p className='text-base text-green border p-2 rounded-md box-shadow'>
                <span>Payment was success full </span> 
                <span className="text-gray font-semibold" onClick={()=> setShow("hidden")}>X</span> 
            </p>
            
        </div>
        <div>
            <h3 className='text-right font-semibold'>Fund Account</h3>
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
                    <p className='font-medium'>Minimum deposit = 500 USDT</p>
                    <li className='px-3 font-normal'><p>Please make deposit before submitting the form</p></li>
                    <li className='px-3 font-normal'><p>Deposit will be credited and available on the dashboard after confirmation</p></li>
                    <li className='px-3 font-normal'><p>Crypto deposits are recommended</p></li>
                    <li className='px-3 font-normal'><p>Deposit may be via any of the supported networks: Tron (TRC20), BSC(BEP20), ETH(ER20), Polygon, Arbitum Network </p></li>
                    <li className='px-3 font-normal'><p>Do not send NFTs to this address</p></li>
                    <li className='px-3 font-normal'><p>Please make deposit before submitting the form</p></li>
                </ul>
                <div className='m-2'>
                    <p className='text-dark text-left px-4 text-base font-medium'>Deposit Address</p>
                    <div className='flex items-center bg-gray  my-4 '>
                        <div className='h-250 w-250  mr-2'>
                            <img src={barcode} alt="barcode" className='w-full h-full' />

                        </div>
                        <div className='flex-1 flex  items-center barc'>
                            <div className=' w-08 mr-3 mt-3'>
                                <input type="text"  value={textToCopy} readOnly className='text-3xl bg-gray'/>
                            </div>  
                            <div className='p-2 border bg-gray-light rounded-sm'>
                            <a onClick={handleCopyClick}><FaCopy className='text-4xl ml-2 bg-gray-light ' /></a>

                            </div>
   

                        </div>

                      

                    </div>

                </div>
                <div className=''>
                    <input type="file" name='receipt' className='border w-full' required/>
                </div>
        <div>
        <button type='submit' className='btn w-full bg-semi text-white'>Deposite</button>
        </div>
        </form>
        </div>
        <DepositModal toggleModal={toggleModalDeposit} setToggleModal={setToggleModalDeposit} deposit={deposit}/>

    </div>
  )
}

export default DepositPage