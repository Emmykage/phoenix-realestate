import React from 'react'
import { useDispatch } from 'react-redux'
import { createTransaction } from '../../redux/actions/wallet'

const DepositModal = ({toggleModal, setToggleModal, deposit}) => {

  const dispatch = useDispatch()
  const handleDeposit =() => {
   dispatch(createTransaction(deposit))
  
  }  
  
  return (
    <div className={`modal-container ${toggleModal}`}>
        <div className='modal-info'>


           <div className='close-icon text-right pr-8'>
            <span onClick={()=> setToggleModal(null)}>
              <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>   
                      
              </span>   
           <i class="bi bi-x-lg"></i>
           </div>
           <h3>Confirm Deposit</h3>
           <div className='bg- h-full items-center flex'>
            <div className='flex justify-around w-full'>
              <button onClick={()=> setToggleModal(null)} className='btn cancel'>Cancel</button>
              <button onClick={handleDeposit} className='btn'>Confirm</button>
            </div>
           
           </div>
        </div>
    </div>
  )
}

export default DepositModal