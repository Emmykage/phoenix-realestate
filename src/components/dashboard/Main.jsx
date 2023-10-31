import React, { useState } from 'react'
import Withdraw from '../transaction/Withdraw'
import Deposit from '../transaction/Deposite'
import Transaction from '../modals/Transaction'
import Wallet from './Wallet'

const Main = () => {
  const [toggleModal, setToggleModal] = useState(null)
  return (
    <>
         
          
          
          <>
            <Wallet toggleModal={toggleModal} setToggleModal={setToggleModal}/>
            <Transaction toggleModal={toggleModal} setToggleModal={setToggleModal}/>

          </>
    </>
  )
}

export default Main