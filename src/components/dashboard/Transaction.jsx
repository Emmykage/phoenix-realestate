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
    <>
    <div className='grid grid-2 gap-2'>
        <Deposit toggleModal={toggleModalDeposit} setToggleModal={setToggleModalDeposit} deposit={deposit} setDeposit={setDeposit}/>
        <Withdraw toggleModal={toggleModalWithdrawal} setToggleModal={setToggleModalWithdrawal} setWithdrawal={setWithdraw} withdrawal={withdraw}/>

    </div>
    <div className='row'>
    <div className='col-md-6'>
      <ul><h3>Deposits</h3>
      {deposits < 1 ? <h3>No Deposite made</h3> :deposits.map((transaction) => {
        if(transaction.transaction_type == "deposit")
        return        (
        <li>
          <div className="row p-8">
          <h5 className='col-sm-6'>{usd_format(transaction.amount)} </h5> <a className='col-sm-6'> {transaction.status}</a>
          </div>
          </li>

      )})}
      </ul>

    </div>
    <div className='col-md-6'>
      <ul><h3>Withdrawals</h3>
      {withdrawals < 1 ? <h3>No Withdrawals yet</h3> : user.wallet.transactions.map((transaction) => {
        if (transaction.transaction_type == "withdraw")
        return(
        <li>
          <div className="row">
          
          <h5 className='col-sm-6 p-4'> {usd_format(transaction.amount)} </h5> 
          <a className='col-sm-6'> {transaction.status}</a>
            
          </div>
          </li>

      )})}
      </ul>

    </div>

    </div>

   
    <DepositModal toggleModal={toggleModalDeposit} setToggleModal={setToggleModalDeposit} deposit={deposit}/>
    <WithdrawalModal toggleModal={toggleModalWithdrawal} setToggleModal={setToggleModalWithdrawal} withdrawal={withdraw}/>
    </>
  )
}

export default Transaction