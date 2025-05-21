import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from '../../../redux/actions/users';
import { moneyFormat } from '../../../utils/moneyFormat';
import { FaArrowLeft } from 'react-icons/fa';
import { getTransaction, getTransactions } from '../../../redux/actions/wallet';
import statusColorClass from '../../../utils/statusColorClass';
import Loader from '../../../components/loader/Loader';



const TransactionDeposits = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { transactions, loading } = useSelector((state) => state.transactions);
  useEffect(() => {
    dispatch(getTransactions({
      transaction_type: "deposit"
    }));
  }, []);

  // if (transactions?.length < 1) {
  //   return (
  //     <div className='py-10'>
  //       <h1 className='text-center'> No Transacioons </h1>
  //     </div>
  //   );
  // }


  

  return (
    <>

      <div className='mt-10 flex justify-between'>
        <button onClick={() => navigate(-1)}><FaArrowLeft /> </button>
        <h2 className='my-10 text-4xl font-semibold'>Deposit Transactions</h2>

        </div>
        

    
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <div className="overflow-x-auto">
        
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-sm text-gray-600">
            <th className="p-3 border-b">#</th>
            <th className="p-3 border-b">User</th>
            <th className="p-3 border-b">Type</th>
            <th className="p-3 border-b"> Amount</th>
            <th className="p-3 border-b"> Status</th>
            <th className="p-3 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? <tr> 
            <td colSpan={6}>
               <Loader/>
            </td>
            
           </tr> : transactions.map((transaction, index) => (
            <tr key={transaction.id} className="hover:bg-gray-50">
              <td className="p-3 border-b">{index + 1}</td>
              <td className="p-3 border-b font-medium">{transaction.user.email}</td> 
               <td className="p-3 border-b font-medium">{transaction.coin_type}</td>
              <td className="p-3 border-b text-green-600 font-semibold">
                {moneyFormat(transaction?.amount)}
              </td> 
              <td className="p-3 border-b text-green-600 font-semibold">
                <span className={`ml-2 px-2 py-1 rounded-md text-sm font-medium ${statusColorClass(transaction?.status)}`}>
                {(transaction?.status)}
              </span>
               
              </td>
              <td className="p-3 border-b">
                <button
                  onClick={() => navigate(`/admin/transaction/${transaction.id}`)}
                  className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded hover:bg-blue-700 transition"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      </div>
    </div>

    </>
  );
};

export default TransactionDeposits;

