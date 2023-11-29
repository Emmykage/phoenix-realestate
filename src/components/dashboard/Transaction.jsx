import React, { useEffect, useState } from 'react'
import Withdraw from '../transaction/Withdraw'
import Deposit from '../transaction/Deposite'
import { useDispatch, useSelector } from 'react-redux'
import DepositModal from '../modals/DepositModal'
import WithdrawalModal from '../modals/WithdrawalModal'
import { usd_format } from '../misc/USD'
import { getUser } from '../../redux/actions/users'

const Transaction = () => {
  const dispatch = useDispatch()

  const {user} = useSelector(state => state.users)
  const [toggleModalWithdrawal, setToggleModalWithdrawal] = useState(null)
  const [toggleModalDeposit, setToggleModalDeposit] = useState(null)
  const [deposit, setDeposit] = useState({coin_type: "USD THETHER", amount: "", wallet_address: "bc1qusn333vtanazyywdvr5u5mwk5eq32h5n5lpchr", transaction_type: "deposit"})  
    const [withdraw, setWithdraw] = useState({coin_type: "USD THETHER", amount: "", wallet_address: "", transaction_type: "withdraw"})
    const deposits = user.wallet.transactions.filter(transaction => transaction.transaction_type == "deposit")
    const withdrawals = user.wallet.transactions.filter(transaction => transaction.transaction_type == "withdraw")


  return (
    <div className='transaction'>
    <div className='grid grid-2 gap-2'>
        <Deposit toggleModal={toggleModalDeposit} setToggleModal={setToggleModalDeposit} deposit={deposit} setDeposit={setDeposit}/>
        <Withdraw toggleModal={toggleModalWithdrawal} setToggleModal={setToggleModalWithdrawal} setWithdrawal={setWithdraw} withdrawal={withdraw}/>

    </div>
    <div className='flex gap-2'>
    <div className='flex-1 px-2'>
      <ul><h4>Deposits</h4>
      {deposits < 1 ? <p className='text-lg font-medium'>No Deposite made</p> :deposits.map((transaction) => {
        if(transaction.transaction_type == "deposit")
        return        (
        <li className='box-shadow p-2'>

          <div className='p-2'>
            <div className="flex items-center">
            <h5 className='flex-1' >{usd_format(transaction.amount)} </h5> 

            <a className={`flex-1 status ${transaction.status == "pending" && "cancel"}`}> {transaction.status}</a>
            </div>

          </div>
          
          </li>

      )})}
      </ul>

    </div>
    <div className='flex-1 px-2'>
      <ul><h4>Withdrawals</h4>
      {withdrawals < 1 ? <p className='text-lg font-medium'>No Withdrawals yet</p> : user.wallet.transactions.map((transaction) => {
        if (transaction.transaction_type == "withdraw")
        return(
        <li className='box-shadow p-2'>
          <div className="p-2">
            <div className='flex items-center'>

          
          <h5 className='flex-1'> {usd_format(transaction.amount)} </h5> 
          <a className={`flex-1 status ${transaction.status == "pending" && "cancel"} `}> {transaction.status}</a>
          </div>
          
          </div>
          </li>

      )})}
      </ul>

    </div>

    </div>

   
    <DepositModal toggleModal={toggleModalDeposit} setToggleModal={setToggleModalDeposit} deposit={deposit}/>
    <WithdrawalModal toggleModal={toggleModalWithdrawal} setToggleModal={setToggleModalWithdrawal} withdrawal={withdraw}/>
    </div>
  )
}

export default Transaction