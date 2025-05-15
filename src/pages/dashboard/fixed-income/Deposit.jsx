

import React, { useEffect, useRef, useState } from 'react'


import { useDispatch, useSelector } from 'react-redux'

import AppModal from '../../../components/modals/AppModal'
import Confirmation from '../../../components/modals/DepositModal'
import { createTransaction, getUserTransactions } from '../../../redux/actions/wallet'
import { toast } from 'react-toastify'
import { SET_LOADER } from '../../../redux/app/app'

const FixedIncomeDeposit = () => {
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const [formInput, setFormInput] = useState({
        amount: 0,
        receipt: [],
        coin_type: "",
        transaction_type: "deposit"

    })

    const [paymentOptions, setPaymentOptions] = useState([])
    const {account_profile} = useSelector(state => state.account)

    const {portfolio} = useSelector(state => state.portfolios)


    const [openModal, setOpenModal] = useState(false)

    const handleDepositModal = (e) => {
        e.preventDefault()
        setOpenModal(prev => !prev)    
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


    
      const handleSubmit = () => {
                        dispatch(SET_LOADER(true))
        
        const element = formRef.current

        const typeCoin = paymentOptions.find(item => item.value === formInput.coin_type)
         const formData = new FormData()
         formData.append('transaction[coin_type]', typeCoin.label)
         formData.append('transaction[amount]', formInput.amount)
         formData.append('transaction[receipt]', formInput.receipt[0])
         formData.append('transaction[transaction_type]', "deposit") 
         formData.append('transaction[portfolio_id]', portfolio.id )


        // const data = Object.fromEntries(formData)

        dispatch(createTransaction(formData)).then(result => {
            if(createTransaction.fulfilled.match(result)){
                element.reset()
                setOpenModal(false)
                dispatch(getUserTransactions())
                dispatch(SET_LOADER(false))
                
                toast(result.payload.message || "Deposit has been successful", {type: "success"})

            }else{
                                dispatch(SET_LOADER(false))
                
               toast(result.payload.message, {type: "error"})
            }
        })
        
      }

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


    const selectedValue = paymentOptions?.find(coinValue => coinValue.value === formInput.coin_type) ?? ""

    return (
    <div className='bg-white max-w-1450 box-shadow-gray my-6 rounded-sm py-2 md:px-4'>
     
        <h3 className='text-right font-semibold text-3xl'>Fund Account</h3>
        <div></div>

        <div className='grid md:grid-cols-2  gap-10'>
            <form onSubmit={handleDepositModal} ref={formRef}>
                <div  className='my-3 text-left'>
                    <label className='block m-1 font-medium'>Payment Method</label> 
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
                    <input type="number" className='border'  placeholder='Enter Amount in USD' name="amount" onChange={(e)=> setFormInput({...formInput, amount: e.target.value})} required min={0}/>
                </div>
            
                <div className='m-2'>
                    <p className='text-dark text-left text-base font-medium'>Deposit Address</p>
                    <div className='flex items-center bg-gray  my-2 '>
                        {/* <div className='scanner-ing  mr-2'>
                            <img src={barcode} alt="barcode" className='w-full h-full' />

                        </div> */}
                        <div className='flex-1 flex  items-center barc'>
                            <div className=' w-full mr-3'>
                                <input type="text"  value={selectedValue?.value} readOnly className='text-xl font-semibold bg-gray'/>
                            </div>  
                            {/* <div className='p-2 border bg-gray-light rounded-sm'>
                            <a onClick={handleCopyClick}><FaCopy className='text-4xl ml-2 bg-gray-light ' /></a>

                            </div> */}


                        </div>

                        

                    </div>

                </div>
                <div className=''>
                    <input type="file"
                    accept="image/*"
                    name='receipt' onChange={(e)=> (setFormInput({...formInput,receipt: e.target.files }))} className='border w-full' required/>
                </div>
            <div>
            <button type='submit' className='py-2 btn w-full '>Deposite</button>
            </div>
            </form>
        <div>
        <ul>
                    <p className='font-medium'>Minimum deposit = 500 USDT</p>
                    <li className='px-3 font-normal'><p>Please make deposit before submitting the form</p></li>
                    <li className='px-3 font-normal'><p>Deposit will be credited and available on the dashboard after confirmation</p></li>
                    <li className='px-3 font-normal'><p>Crypto deposits are recommended</p></li>
                    <li className='px-3 font-normal'><p>Deposit may be via any of the supported networks: Tron (TRC20), BSC(BEP20), ETH(ER20), Polygon, Arbitum Network </p></li>

                </ul>
        </div>

        </div>

        <AppModal  open={openModal}>
            <Confirmation onCancel={()=> setOpenModal(false)} message={`Confirm Transaction deposit`} title={"Conform Deposit"} onConfirm={handleSubmit}  />
        </AppModal>

    </div>
  )
}

export default FixedIncomeDeposit
