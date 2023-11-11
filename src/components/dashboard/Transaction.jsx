import React, { useState } from 'react'
import Withdraw from '../transaction/Withdraw'
import Deposit from '../transaction/Deposite'
import { useSelector } from 'react-redux'
import DepositModal from '../modals/DepositModal'
import WithdrawalModal from '../modals/WithdrawalModal'

const Transaction = () => {
  const {user} = useSelector(state => state.users)
  const [toggleModalWithdrawal, setToggleModalWithdrawal] = useState(null)
  const [toggleModalDeposit, setToggleModalDeposit] = useState(null)
  const [deposit, setDeposit] = useState({coin_type: "USD THETHER", amount: "", wallet_address: "bc1qusn333vtanazyywdvr5u5mwk5eq32h5n5lpchr", transaction_type: "deposit"})
    const [withdraw, setWithdraw] = useState({coin_type: "USD THETHER", amount: "", wallet_address: "", transaction_type: "withdraw"})
    
  return (
    <>
    <div className='grid grid-2 gap-2'>
        <Withdraw toggleModal={toggleModalWithdrawal} setToggleModal={setToggleModalWithdrawal} setWithdrawal={setWithdraw} withdrawal={withdraw}/>
        <Deposit toggleModal={toggleModalDeposit} setToggleModal={setToggleModalDeposit} deposit={deposit} setDeposit={setDeposit}/>
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

   
    <DepositModal toggleModal={toggleModalDeposit} setToggleModal={setToggleModalDeposit} deposit={deposit}/>
    <WithdrawalModal toggleModal={toggleModalWithdrawal} setToggleModal={setToggleModalWithdrawal} withdrawal={withdraw}/>
    </>
  )
}

export default Transaction