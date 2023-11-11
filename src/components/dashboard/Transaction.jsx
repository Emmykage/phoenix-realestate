import React, { useState } from 'react'
import TransactionModal from '../modals/DepositModal'
import Withdraw from '../transaction/Withdraw'
import Deposit from '../transaction/Deposite'
import { useSelector } from 'react-redux'
import DepositModal from '../modals/DepositModal'

const Transaction = () => {
  const {user} = useSelector(state => state.users)
    const [toggleModal, setToggleModal] = useState(null)
    const [deposit, setDeposit] = useState({coin_type: "USD THETHER", amount: "", wallet_address: "bc1qusn333vtanazyywdvr5u5mwk5eq32h5n5lpchr", transaction_type: "deposit"})
    const [withdraw, setWithdraw] = useState({coin_type: "USD THETHER", amount: "", wallet_address: "", transaction_type: "withdraw"})
    
  return (
    <>
    <div className='grid grid-2 gap-2'>
        <Withdraw toggleModal={toggleModal} setToggleModal={setToggleModal} setWithdrawal={setWithdraw} withdrawal={withdraw}/>
        <Deposit toggleModal={toggleModal} setToggleModal={setToggleModal} deposit={deposit} setDeposit={setDeposit}/>
    </div>
    <div>
    <div>
      <ul><h3>Deposits</h3>
      {user.wallet.transactions.map((transaction) => (
        <li><span>{transaction.amount} </span> <a> {transaction.status}</a></li>

      ))}
      </ul>

    </div>
    <div>
      <ul><h3>Withdrawals</h3>
      {user.wallet.transactions.map((transaction) => (
        <li><span>{transaction.amount} </span> <a> {transaction.status}</a></li>

      ))}
      </ul>

    </div>

    </div>

   
    <TransactionModal toggleModal={toggleModal} setToggleModal={setToggleModal} deposit={deposit} withdrawal={withdraw}/>
    <DepositModal toggleModal={toggleModal} setToggleModal={setToggleModal} withdrawal={withdraw}/>
    </>
  )
}

export default Transaction