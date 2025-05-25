import React, { useEffect, useState } from 'react'
import Withdraw from '../transaction/Withdraw'
import Deposit from '../transaction/Deposite'
import { useDispatch, useSelector } from 'react-redux'
import DepositModal from '../modals/DepositModal'
import WithdrawalModal from '../modals/WithdrawalModal'
import { usd_format } from '../misc/USD'
import { NavLink } from 'react-router-dom'
import { formattedDate } from '../misc/Date'

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
    <div className='transaction px-3 ' >
    <div className='grid grid-2 gap-2'>
    <NavLink to={'/dashboard/deposit'} className='tran-card text-xl font-semibold flex justify-center items-center py-4 rounded-sm text-dark'>  Deposit </NavLink>
    <NavLink to={'/dashboard/withdraw'} className='tran-card text-xl font-semibold flex justify-center items-center py-4 rounded-sm text-dark'> Withdraw </NavLink>
        {/* <Deposit toggleModal={toggleModalDeposit} setToggleModal={setToggleModalDeposit} deposit={deposit} setDeposit={setDeposit}/> */}
        {/* <Withdraw toggleModal={toggleModalWithdrawal} setToggleModal={setToggleModalWithdrawal} setWithdrawal={setWithdraw} withdrawal={withdraw}/> */}

    </div>
    <div className='flex gap-2'>
    <div className='flex-1 px-2'>
      <ul className='px-0'>
        <h4>Deposits</h4>
        <table className='w-full'>
          <thead className='text-white'>
            <tr >
              <th className='px-2 py-2'>Transaction</th>
              <th>Amount</th>
              <th>Status</th>
              <th></th>
              <th />
            </tr>

          </thead>
          <tbody>
          {deposits < 1 ? <p className='text-lg font-medium'>No Deposite made</p> :deposits.map((transaction) => (
        
          <tr className=''>

          <td className='py-2 px-2 text-dark font-medium'>{transaction.coin_type}</td>
          <td>{usd_format(transaction.amount)}</td>
          <td className="warning">Pending</td>
          <td className="primary">{formattedDate(transaction.created_at)}</td>
        </tr>
    )
    )

      }

      </tbody>
      </table>
      </ul>

    </div>
    <div className='flex-1 px-2'>
      <ul><h4>Withdrawals</h4>

      <table className='w-full'>
          <thead className='text-white'>
            <tr >
              <th className='px-2 py-2'>Transaction</th>
              <th>Amount</th>
              <th>Status</th>
              <th></th>
              <th />
            </tr>

          </thead>
          <tbody>
      {withdrawals < 1 ? <p className='text-lg font-medium'>No Withdrawals yet</p> : user.wallet.transactions.map((transaction) => (
            <tr className=''>

            <td className='py-2 px-2 text-dark font-medium'>{transaction.coin_type}</td>
            <td>{transaction.amount}</td>
            <td className="warning">Pending</td>
            <td className="primary">{formattedDate(transaction.created_at)}</td>
          </tr>
      )
      )

        }

      
    
      </tbody>
      </table>
      </ul>

    </div>

    </div>

   
    <DepositModal toggleModal={toggleModalDeposit} setToggleModal={setToggleModalDeposit} deposit={deposit}/>
    <WithdrawalModal toggleModal={toggleModalWithdrawal} setToggleModal={setToggleModalWithdrawal} withdrawal={withdraw}/>
    </div>
  )
}

export default Transaction