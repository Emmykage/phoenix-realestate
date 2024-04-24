import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWallet } from '../../redux/actions/wallet'
import { formattedDate } from '../misc/Date'
import { usd_format } from '../misc/USD'
import { NavLink } from 'react-router-dom'
import Loader from '../loader/Loader'

const Account = () => {
  const {wallet, loading} = useSelector(state => state.wallet)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getWallet())
  },[])
  return (
    <div className='w-max-1450'>
      <div className='min-h-300 bg-pry max-w-1450 c-container rounded py-2 px-3 my-6 box-shadow-gray'>
        <div className="transaction-history py-6">
        <h2 className='text-4xl'>Transactions</h2>
        <table className='w-full'>
          <thead className='text-white'>
          <tr >
              <th className='px-2 py-2'>Transaction</th>
              <th>Amount</th>
              <th>type</th>
              <th>status</th>
              <th />
            </tr>

          </thead>
          <tbody>
            {loading ? (<td colSpan={3}><Loader/></td>) :
          wallet?.transactions.length < 1 ? <td> No Transaction Available </td> : 
            wallet?.transactions.map(transaction => (
              <tr className=''>

              <td className='py-2 px-2 text-dark font-medium'>{transaction.coin_type}</td>
              <td className='text-sm text-gray font-medium'>{usd_format(transaction.amount)}</td>
              <td className='text-sm text-gray font-medium'>{transaction.transaction_type}</td>
              <td className="warning">Pending</td>
              <td className="primary">{formattedDate(transaction.created_at)}</td>
            </tr>
            ))
  
          }
          </tbody>

        </table>
        <NavLink to="#" className='block text-dark max-content m-auto my-3 hover-text-green'>Show All</NavLink>
      </div>

      </div>
    </div>
  )
}

export default Account