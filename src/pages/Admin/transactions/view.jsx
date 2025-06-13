import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTransaction, updateTransaction } from '../../../redux/actions/wallet';
import { toast } from 'react-toastify';
import AppModal from '../../../components/modals/AppModal';
import { moneyFormat } from '../../../utils/moneyFormat';
import statusColorClass from '../../../utils/statusColorClass';
import { SET_LOADER } from '../../../redux/app/app';

const TransactionViewer = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [toggleModal, setToggleModal] = React.useState(false)
    const [toggleBonusModal, setToggleBonusModal] = React.useState(false)
    const [transactionStatus, setTransactionStatus] = React.useState("")
    const [transactionInfo, setTransactionInfo] = React.useState({
      status: "",
      bonus: null
    })

    const {transaction} = useSelector(state => state.transactions)

    const handleUpdate = (transactionDetails) => {


      
        dispatch(SET_LOADER(true))
        dispatch(updateTransaction({id, 
           transaction: {
            ...transactionDetails
           }          
           })).then(result => {

            if(updateTransaction.fulfilled.match(result)){
            toast(result.payload?.message || "transaction updated", {type: "success"})
            dispatch(getTransaction(id))
            setToggleModal(false)
            dispatch(SET_LOADER(false))

            setToggleBonusModal(false)
            setTransactionStatus(null)
            setTransactionInfo({
              status: "",
              bonus: null
    })

            }else{
                 dispatch(SET_LOADER(false))

                toast(result.payload?.message || "Failed to update transaction", {type: "error"})
            }
        })

    }


    useEffect(()=>{ 
        dispatch(getTransaction(id))
    },{})
  if (!transaction) return <div className="text-center text-gray-500">No transaction selected</div>;

  const { amount, type, status, bonus, receipt_url, transaction_type, created_at } = transaction;
    console.log(bonus)
  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl font-sans">
      <h2 className="text-xl font-bold mb-4 text-center">Transaction Details</h2>

      <div className='flex justify-between my-2'>
        <h2 className="text-xl font-bold mb-4">{transaction_type}</h2>

           <button
          onClick={() => {
            setToggleBonusModal(true)
          }
        }
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
        >
          Add Bonus
        </button>
      </div>
     

      <div className="mb-3">
        <span className="font-semibold">Amount:</span> {moneyFormat(amount)}
      </div>

        <div className="mb-3">
        <span className="font-semibold">Bonus:</span> {moneyFormat(bonus ?? 0)}
      </div>

      <div className="mb-3">
        <span className="font-semibold">Type:</span> {type}
      </div>

    <div className="mb-3">
        <span className="font-semibold">Status:</span>
        <span className={`ml-2 px-2 py-1 rounded-md text-sm font-medium ${statusColorClass(status)}`}>
          {status}
        </span>
      </div> 

      <div className="mb-3">
        <span className="font-semibold">Transaction Type:</span>
        <span className={`ml-2 px-2 py-1 rounded-md text-sm font-medium ${statusColorClass(status)}`}>
          {transaction_type}
        </span>
      </div>

      <div className="mb-3">
        <span className="font-semibold">Date:</span> {new Date(created_at).toLocaleString()}
      </div>

      <div className="mb-4">
        <span className="font-semibold">Receipt:</span>
        {receipt_url ? (
          <div className="mt-2">
            <img
              src={receipt_url}
              alt="Transaction Receipt"
              className="w-full max-h-64 object-contain border rounded-md"
            />
          </div>
        ) : (
          <p className="text-sm text-gray-500">No receipt uploaded</p>
        )}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => {
            setTransactionStatus("completed")
            setToggleModal(true)
          }
        }
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
        >
          Approve
        </button>
        <button
          onClick={() => {
            setTransactionStatus("declined")
            setToggleModal(true) 
          }   
          }
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
        >
          Decline
        </button>
      </div>

      <AppModal open={toggleModal} onClose={() => setToggleModal(false)}>
     <div class=" inset-0  flex items-center justify-center z-50">

        <div class="bg-white rounded-2xl  p-6 w-full max-w-md">
            {transactionStatus === "completed" ? (
            <h2 class="text-xl font-semibold mb-4 text-center text-gray-800">Confirm Transaction</h2>
            ) :  (
            <h2 class="text-xl font-semibold mb-4 text-center text-gray-800">Decline Transaction</h2>
            ) }
            <p class="text-gray-600 text-center mb-6">
            Are you sure you want to proceed with this transaction?
            </p>
            <div class="flex justify-between">
            <button
                class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl w-1/2 mr-2"
                onClick={()=> setToggleModal(false)}
            >
                Cancel
            </button>
            <button
                class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl w-1/2 ml-2"
                onClick={() => handleUpdate({status: transactionStatus})}
            >
                Confirm
            </button>
            </div>
        </div>
    </div>

      </AppModal>

       <AppModal open={toggleBonusModal} onClose={() => setToggleBonusModal(false)}>
     <div class=" inset-0  flex items-center justify-center z-50">

        <div class="bg-white rounded-2xl  p-6 w-full max-w-md">
          <form onSubmit={(e) => {
            e.preventDefault()

            if(transactionInfo.bonus){
            handleUpdate(transactionInfo)

            }
          }}>
            <div>
              <label htmlFor="bonus">Bonus</label>
              <input type="number" name='bonus' value={transactionInfo.bonus} onChange={(e)=> {setTransactionInfo({bonus: e.target.value})}}/>
            </div>

            <div class="flex justify-between">
            <button
                class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl w-1/2 mr-2"
                onClick={()=> setToggleBonusModal(false)}
            >
                Cancel
            </button>
            <button
                type='submit'
                class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl w-1/2 ml-2"
               
              
            >
                Confirm
            </button>
            </div>
            </form>
            
        </div>
    </div>

      </AppModal>
    </div>
  );
};

// Tailwind status color classes

export default TransactionViewer;
