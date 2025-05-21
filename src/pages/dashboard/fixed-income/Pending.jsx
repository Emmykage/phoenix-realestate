import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../../components/loader/Loader'
import { moneyFormat } from '../../../utils/moneyFormat'
import dateFormater from '../../../utils/dateFormat'

const FixedIncomeTrasactions = () => {
  const {fixedtransactions, loading} = useSelector(state => state.transactions)


 
  return (
    <div class="inline-block min-w-full py-2 align-middle">
      <table class="min-w-full bg-white border border-gray-200 rounded-md border-separate border-spacing-0 table-auto overflow-hidden">
        <thead className='bg-gray-300'>
          <tr className='uppercase'>
    

                     <th scope="col" class="sticky top-0 z-10 hidden border-b border-gray-200/50  bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-600 backdrop-blur backdrop-filter lg:table-cell">Payment Method</th>

            <th scope="col" class="sticky top-0  z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 pr-3 text-left text-xs font-semibold text-gray-600 backdrop-blur backdrop-filter">Amount</th>

                    <th scope="col" class="sticky top-0 z-10 border-b border-gray-200/50 bg-gray-200 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-600 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">Date</th>
      
   
            <th scope="col" class="sticky top-0 z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-600 backdrop-blur backdrop-filter">Status</th>
            <th scope="col" class="sticky top-0 z-10 border-b border-gray-200/50  bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
              
        <tbody>
        {loading ? (<td colSpan={6}><Loader/></td>) :
          fixedtransactions?.length < 1 ? <td colSpan={6} className='py-6 font-medium text-center'> No Transaction Available </td> : 
          fixedtransactions.map(transaction => (
              <tr className=''>

              <td className='py-2 px-4 text-dark text-sm font-medium uppercase'>{transaction.coin_type}</td>
              <td className='text-sm text-gray font-medium pl-2'>{moneyFormat(transaction.amount)}</td>
           
              <td className="text-blue-900">{dateFormater(transaction.created_at)} </td>
                 <td className={`${transaction?.status === "completed" ? "text-green-800" : " text-orange-700"} font-medium pl-4`}>{transaction.status}</td>
            </tr>
            ))

          }
  
        </tbody>     
      </table>
</div>  
  )
}

export default FixedIncomeTrasactions