import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/loader/Loader'
import { approveTransaction, getTransaction } from '../redux/actions/wallet'
import { useParams } from 'react-router-dom'

const ViewImage = () => {
  
    const {id} = useParams()
    const dispatch = useDispatch()
    const {transaction, loading} = useSelector(state => state.transactions)
    useEffect(()=> {
        dispatch(getTransaction(id))
    }, [])

    const handleApprove = (id) => {
        dispatch(approveTransaction({id, status: "completed" }))
      }
    

if(loading){
    return(
        <Loader/>
    )
}

  return (
    <div>
        <div className='py-6'>
            <h1>Transaction Info</h1>
            <h2 className='font-bold'>Amount: {transaction.amount}</h2>
            <p className='font-medium'>{transaction.coin_type}</p>
            <p className='text-lg'>{transaction.status}</p>
            <p className='text-lg font-medium'>{transaction.transaction_type}</p>
        </div>

        <div className='h-450'>
            {transaction.receipt_url && <img src={transaction.receipt_url} alt=""  className='h-full'/>
}
        </div>

        <button className={`approve text-sm status w-full my-1 ${transaction.status == "completed" ? "status" : "pending"}`} onClick={()=> handleApprove(transaction.id)}>{transaction.status == "completed" ?  "approved" : "pending"}</button>

    </div>
  )
}

export default ViewImage