import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './client.css';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from '../../../redux/actions/users';
import { moneyFormat } from '../../../utils/moneyFormat';

// const Clients = () => {
 
//   return (
//     <div className="client md:pt-20">
//       <div className="">
//         <ul className="client-row">
//           {users?.map((user) => (
//             <li key={user.id} className="p-3 m-2 b-radius-2 flex justify-between border-light box-shadow overflow-hidden">
//               <span>
//                 Client Name: {`${user.first_name} ${user.last_name}`}
//               </span>
//               <span>
//                 <NavLink to={``}>View</NavLink>
//               </span>
//             </li>

//           ))}

//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Clients;


const Clients = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
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

  

  return (
    <>

    <h2 className='my-10 text-4xl font-semibold'>Users and Clients</h2>
    
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">User List</h2>
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
          {users.map((user, index) => (
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

    </>
  );
};

export default Clients;

