

import React, { useEffect, useRef, useState } from 'react'
// import BARC from "../../../assets"
import barcode from '../../../assets/images/png-transparent-qr-code-barcode-scanners-scanner-q-text-rectangle-logo.png'
import { FaCopy } from 'react-icons/fa'
// import DepositModal from '../components/modals/DepositModal'
import { useDispatch, useSelector } from 'react-redux'
import DepositModal from '../../../components/modals/DepositModal'
import { getInvestmentPortfolio } from '../../../redux/actions/portfolio'
import { getInvestments } from '../../../redux/actions/investment'
import { getAccountProfile } from '../../../redux/actions/accountProfile'
// import { reset } from '../redux/wallet/transaction'
const FixedDeposit = () => {
    const formRef = useRef(null)
    const dispatch = useDispatch()

    
    const {wallet, loading} = useSelector(state => state.wallet)
    const [selectPayment, setSelectedPayment] = useState(null)
    const [paymentOptions, setPaymentOptions] = useState([])
    const {account_profile} = useSelector(state => state.account)

    
    const {investments} = useSelector(state => state.investment)
    const {portfolio} = useSelector(state => state.portfolios)


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
         formData.append('transaction[portfolio_id]', portfolio.id )


        // const data = Object.fromEntries(formData)
        setToggleModalDeposit("show-modal deposit")

        setDeposit(formData)

        
    }
   
    useEffect(()=>{
        dispatch(getInvestmentPortfolio("fixed income"))
      },[])
    
      useEffect(()=>{
        dispatch(getInvestments())
      },[])     
       useEffect(()=>{
        dispatch(getAccountProfile()).then(result => {
            if(getAccountProfile.fulfilled.match(result)){
                setSelectedPayment(result.payload[0])
            }
        })
      },[])


      useEffect(()=> {

        const options = Object.entries(account_profile).map((item) => ({
            label: item[0], value: item[1]
        })).slice(1)
        setPaymentOptions(options)
        setSelectedPayment(options[3]?.value)

        console.log(options[3]?.value)
      },
    [account_profile])

    useEffect(()=> {
        setSelectedPayment(paymentOptions[0]?.value)
    },[paymentOptions])


    
      const handleSubmit = () => {
        
        
      }
    
     
    const element = formRef.current


    console.log("selected payment ====>", account_profile, paymentOptions, selectPayment)
 
 
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

    const handleChange = (e) => {
        setSelectedPayment(e.target.value)

    }


    return (
    <div className='bg-white max-w-1450 box-shadow-gray my-6 rounded-sm py-2'>
        <div className={`${show} p-2  rounded-md my-1 gap-3 fixed`}>
            <p className='text-base text-green border p-2 rounded-md box-shadow'>
                <span>Payment was success full </span> 
                <span className="text-gray font-semibold" onClick={()=> setShow("hidden")}>X</span> 
            </p>
            
        </div>
        <h3 className='text-right font-semibold text-3xl'>Fund Account</h3>
        <div></div>

        <div className='grid md:grid-cols-2  gap-10'>
        <form onSubmit={handleDepositModal} ref={formRef}>
            <div  className='my-3 text-left'>
                <label className='block m-1 font-medium'>Payment Method</label> 
                <div className=''>
               
                <select onChange={handleChange} value={selectPayment} name='coin_type' id='coin_type' className='border form-select form-select-lg mb-3' required>

                    {paymentOptions?.map(item => (
                    <option value={item?.value}>{item.label?.toUpperCase()}</option>

                    ))}
                  
                </select>

               
                     
                </div>
            </div>
            <div>
                <label className='block m-1' htmlFor="amount">Enter Amount</label>
                <input type="number" className='border'  placeholder='Enter Amount in USD' name="amount" required min={500}/>
            </div>
           
            <div className='m-2'>
                <p className='text-dark text-left text-base font-medium'>Deposit Address</p>
                <div className='flex items-center bg-gray  my-2 '>
                    {/* <div className='scanner-ing  mr-2'>
                        <img src={barcode} alt="barcode" className='w-full h-full' />

                    </div> */}
                    <div className='flex-1 flex  items-center barc'>
                        <div className=' w-full mr-3'>
                            <input type="text"  value={selectPayment} readOnly className='text-xl font-semibold bg-gray'/>
                        </div>  
                        {/* <div className='p-2 border bg-gray-light rounded-sm'>
                        <a onClick={handleCopyClick}><FaCopy className='text-4xl ml-2 bg-gray-light ' /></a>

                        </div> */}


                    </div>

                    

                </div>

            </div>
            <div className=''>
                <input type="file" name='receipt' className='border w-full' required/>
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
        <DepositModal toggleModal={toggleModalDeposit} setToggleModal={setToggleModalDeposit} deposit={deposit}/>

    </div>
  )
}

export default FixedDeposit