import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWallet } from '../../../redux/actions/wallet'
import Loader from '../../../components/loader/Loader'

const History = () => {
  const {wallet, loading} = useSelector(state => state.wallet)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getWallet())
  },[])
  return (
    <div className="inline-block min-w-full py-2 align-middle">
      <table className="min-w-full bg-white border border-gray-200 rounded-md border-separate border-spacing-0 table-auto overflow-hidden">
        <thead className='bg-gray-300'>
          <tr>
            <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg-gray-200 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-600 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">Name</th>
            <th scope="col" className="sticky top-0  z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 pr-3 text-left text-xs font-semibold text-gray-600 backdrop-blur backdrop-filter">Amount</th>
            <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-200/50 bg-opacity-75 px-6 py-3.5  text-left text-xs font-semibold text-gray-600 backdrop-blur backdrop-filter sm:table-cell">Amount</th>
            <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-200/50  bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-600 backdrop-blur backdrop-filter lg:table-cell">Payment Method</th>
            <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-600 backdrop-blur backdrop-filter">Status</th>
            <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50  bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
              
        <tbody>
        {loading ? (<td colSpan={6}><Loader/></td>) :
          wallet?.transactions.length < 1 ? <td colSpan={6} className='py-6 font-medium text-center'> No Transaction Available </td> : 
            wallet?.transactions.map(transaction => (
              <tr className=''>

              <td className='py-2 px-2 text-dark font-medium'>{transaction.coin_type}</td>
              <td className='text-sm text-gray font-medium'>{usd_format(transaction.amount)}</td>
              <td className='text-sm text-gray font-medium'>{transaction.transaction_type}</td>
              <td className="warning">{transaction.status}</td>
              <td className="primary">{transaction.created_at} </td>
            </tr>
            ))
  
          }
   
        </tbody>     
      </table>
  </div>  
  )
}

export default History