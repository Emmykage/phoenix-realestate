import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './client.css';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from '../../../redux/actions/users';
import { moneyFormat } from '../../../utils/moneyFormat';
import { FaArrowLeft } from 'react-icons/fa';
import Loader from '../../../components/loader/Loader';



const Clients = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(listUsers());
  }, []);
  if (users?.length < 1) {
    return (
      <div className='py-10'>
        <h1 className='text-center'> No Clients </h1>
      </div>
    );
  }

  console.log(users)

  

  return (
    <>

      <div className='mt-10 flex justify-between'>
        <button onClick={() => navigate(-1)}><FaArrowLeft /> </button>
        <h2 className='my-10 text-4xl font-semibold'>Users and Clients</h2>

        </div>
        

    
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">User List</h2>

      <div className='overflow-x-auto'>
        
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-sm text-gray-600">
            <th className="p-3 border-b">#</th>
            <th className="p-3 border-b">Name</th>
            <th className="p-3 border-b">Total Balance</th>
            <th className="p-3 border-b">Action</th>
          </tr>
        </thead>
        <tbody>

          {loading ? <tr> 
            <td colSpan={4}>
               <Loader/>
            </td>
            
           </tr> : users.map((user, index) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="p-3 border-b">{index + 1}</td>
              <td className="p-3 border-b font-medium">{user.email}</td>
              <td className="p-3 border-b text-green-600 font-semibold">
                {moneyFormat(user?.wallet?.wallet_balance)}
              </td>
              <td className="p-3 border-b">
                <button
                  onClick={() => navigate(`/admin/client/${user.id}`)}
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

export default Clients;

