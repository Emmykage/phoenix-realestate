import React, { useState } from 'react'
import TransactionModal from '../modals/Transaction'
import Withdraw from '../transaction/Withdraw'
import Deposit from '../transaction/Deposite'

const Transaction = () => {
    const [toggleModal, setToggleModal] = useState(null)

    
  return (
    <>
    <div className='grid grid-2 gap-2'>
        <Withdraw toggleModal={toggleModal} setToggleModal={setToggleModal}/>
        <Deposit toggleModal={toggleModal} setToggleModal={setToggleModal}/>
    </div>
    <TransactionModal toggleModal={toggleModal} setToggleModal={setToggleModal}/>
    </>
  )
}

export default Transaction