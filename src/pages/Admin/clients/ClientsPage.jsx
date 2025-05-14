import React, { useEffect } from 'react';
import './client.css';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import default_photo from '../../../assets/users/profile_pic.jpg';
import { getClient, listUsers } from '../../../redux/actions/users';
import Loader from '../../../components/loader/Loader';
import { usd_format } from '../../../components/misc/USD';
import { approveTransaction } from '../../../redux/actions/wallet';
import { userPorfolio } from '../../../redux/actions/portfolio';
import { moneyFormat } from '../../../utils/moneyFormat';
import { FaArrowLeft } from "react-icons/fa";

// const ClientsPage = () => {
//  
//   const {portfolios} = useSelector(state => state.portfolios)
//   const {loading} = useSelector((state)=> state.transactions)
//   useEffect(() => {
//     dispatch(listUsers());
//     dispatch(userPorfolio(id))
//   }, []);


//   const handleApprove = (id) => {
//     dispatch(approveTransaction({id, status: "completed" }))
//   }

//   const user = users.find((user) => user.id == id);

  
//   if (user == undefined) {
//     return (
//       <Loader />
//     );
//   }

//   return (
//     <div className="client-profile">

//       <div className="profile-top">
//         <img src={default_photo} alt="profile pic" />
//       </div>
//       <div className="profile-detail">
//         <ul className="">
//           <li className="flex-space font-semibold">
//             <span>Name: </span>
//             {' '}
//             <span className='font-semibold'>
//               {' '}
//               {user.first_name}
//               {' '}
//               {user.last_name}
//             </span>

//           </li>
//           <li className="flex-space ">
//             <span>Email: </span>
//             {' '}
//             <span>
//               {' '}
//               {user.email}
//             </span>

//           </li>
//           <li className="flex-space ">
//             <span>Mobile: </span>
//             {' '}
//             <span> {user?.phone_no}</span>

//           </li>
        
//         </ul>

//       </div>
//       <hr />

//       <div className="asset-details">
//         <p className='p-1 flex justify-around'>
//           <span className='font-bold text-2xl'>
//             Investment
//           </span>
//           <span className='font-bold'>
//             value: {user.total_asset}
//           </span>
//         </p>
//         <hr/>
//         <div className='p-2'>
//           <h2>{usd_format(user?.wallet?.wallet_balance ?? 0)}</h2>

//           <p>{user?.wallet?.transactions?.map(transaction => (
//             <li className='flex items-center my-1 px-1 py-2 justify-between box-shadow flex-wrap gap-1'>
//               <span className='font-medium flex-1'>{transaction.coin_type}</span>
//               <span className='flex-1 font-normal'>{transaction.transaction_type}</span>
//               <span className='flex-1 font-medium'>{usd_format(transaction.amount)}</span>
//               <NavLink to={`/admin/transaction/${transaction.id}`} className='flex-1 font-normal border text-center py-1 bg-primary text-white cursor'>view Receipt</NavLink>

//               <button className={`approve text-sm status w-full my-1 ${transaction.status == "completed" ? "status" : "pending"}`} onClick={()=> handleApprove(transaction.id)}>{transaction.status == "completed" ?  "approved" : "pending"}</button>
//             </li>
           
            
//           ))}</p>

//           </div>
//           <hr />
//         {portfolios.length < 1 ? <h3 className='py-3'>User has no Portfolios</h3>

//           : portfolios.map((portfolio) => (
//             <div className="asset-infos">
//               <li className='text-left box-shadow rounded-base my-1'>
//                 <div className='flex rounded-base'>
//                     {/* <div className='portfolio-img flex-1 p-3'>
//                         <img src={portfolio.asset.image_url} alt="" className='rounded-base' />

//                     </div> */}
//                     <div className='flex-2 p-3 '>
//                         <div className='flex '>

                      
//                             <div className='flex-1' >
                        
//                             <h4>{portfolio.asset.name}</h4>
//                             <p><i className="fa fa-map-marker icon"></i>{portfolio.asset.address}</p>
                                
//                             </div>
//                             <div><span className='text-lg font-medium text-green' >Profits: </span> <span className='text-lg font-medium'>{usd_format(portfolio.investment_interest)}</span></div>
//                         </div>
//                         <div className='flex justify-between'>
//                             <div className='flex-1'>
                          
//                              <span className='text-xl font-semibold'>{portfolio.asset.price}</span>
      
//                             </div>
//                             <div className='flex-1 flex justify-between'>
//                                 <span><i className="fa fa-bed"></i> {portfolio.asset.number_of_bedrooms} beds</span>
//                                 <span><i className="fa fa-tint"></i> {portfolio.asset.number_of_bathrooms} Baths</span>
//                                 <span><i className="fa fa-expand"></i> {portfolio.asset.area}Sq Ft</span>
//                             </div>
//                         </div>
//                         <div className="text-right p-2">
//                             <NavLink to={`/admin/client/${id}/portfolio/${portfolio.id}`} className="btn inline-block p-1 text-white">view interest</NavLink>
//                         </div>
                        
                        
//                     </div>
//                 </div>
//             </li>

//             </div>
//           ))}

//         <hr />
       

//         <span>
//           Edit
//         </span>
//       </div>

//     </div>
//   );
// };

// export default ClientsPage;


const UserProfileDashboard = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.users);

  console.log(id, user)

  useEffect(() => {
  dispatch(getClient(id))
  }, [])

  const user_ = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    role: "Investor",
    availableBalance: 5000,
    totalEarnings: 2400,
    portfolios: [
      { name: "Real Estate Fund", value: 15000 },
      { name: "Tech Startup Equity", value: 12000 },
      { name: "Agriculture Investment", value: 8000 },
    ],
  };

  const totalInvestment = user_.portfolios.reduce(
    (sum, p) => sum + p.value,
    0
  );

  return (
    <>
    <div className='mt-10'>
    <button onClick={() => navigate(-1)}><FaArrowLeft /> </button>
    </div>
    
    <div className="max-  mt-20 mx-auto p-6 bg-white shadow-md rounded-2xl space-y-6">
      <div className="flex justify-between items-center border-b pb-4">
       
        <div>
          <h2 className="text-xl font-bold">User Profile</h2>
          <p className="text-sm text-gray-500">{user?.role}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">{user?.profile?.last_name}</p>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Available Balance</p>
            <p className="text-lg font-semibold text-green-600">
              {moneyFormat(user?.wallet?.wallet_balance ?? 0)}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Total Earnings</p>
            <p className="text-lg font-semibold text-blue-600">
            {moneyFormat(user?.total_earnings ?? 0)}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg col-span-2">
            <p className="text-gray-500">Total Investment</p>
            <p className="text-lg font-semibold text-indigo-600">
            {moneyFormat(user?.net_earnings ?? 0)}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-md font-medium mb-2">Investment Portfolio</h3>
          <ul className="space-y-2">
            {user?.portfolios?.map((portfolio, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center p-3 bg-gray-100 rounded-md"
              >
                <span>{portfolio.name}</span>
                <button className='text-green-700 '>Generate Interest</button>
                <span className="font-semibold text-gray-700">
                  {moneyFormat(portfolio.investment_interest)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserProfileDashboard;
