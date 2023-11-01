import React, { useEffect } from 'react';
import './client.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import default_photo from '../../../assets/user/no-profile-picture-icon-14.jpg';
import { listUsers } from '../../../redux/actions/users';
import { userLog } from '../../../redux/auth/user_authentication';
import Loader from '../../../components/loader/Loader';
import { usd_format } from '../../../components/misc/USD';
import { approveTransaction } from '../../../redux/actions/wallet';

const ClientsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const {loading} = useSelector((state)=> state.transactions)
  useEffect(() => {
    dispatch(listUsers());
    dispatch(userLog());
  }, [loading]);

  const handleApprove = (id) => {
    dispatch(approveTransaction({id, status: "completed" }))
  }

  const user = users.find((user) => user.id == id);

  if (user == undefined) {
    return (
      <Loader />
    );
  }

  return (
    <div className="client-profile">

      <div className="profile-top">
        <img src={default_photo} alt="profile pic" />
      </div>
      <div className="profile-detail">
        <ul className="">
          <li className="flex-space ">
            <span>Name: </span>
            {' '}
            <span>
              {' '}
              {user.first_name}
              {' '}
              {user.last_name}
            </span>

          </li>
          <li className="flex-space ">
            <span>Email: </span>
            {' '}
            <span>
              {' '}
              {user.email}
            </span>

          </li>
          <li className="flex-space ">
            <span>Mobile: </span>
            {' '}
            <span> +1 703 544 3435</span>

          </li>
          <li className="flex-space ">
            <span>Address: </span>
            {' '}
            <span> John Doe</span>

          </li>
        </ul>

      </div>
      <hr />

      <div className="asset-details">
        <p>
          <span>
            total inestment
          </span>
          <span>
            value: 200000
          </span>
        </p>
        <hr />
        <div>
          <h2>{usd_format(user.wallet.balance)}</h2>

          <p>{user.wallet.transactions.map(transaction => (
            <li className='flex-justify-space'> 
              <span>{transaction.coin_type}</span>
              <span>{transaction.amount}</span>
              <span>{transaction.status}</span>
              <span>{transaction.id}</span>
              <button className='approve' onClick={()=> handleApprove(transaction.id)}>Approve</button>
            </li>
           
            
          ))}</p>

          </div>
          <hr />
        {user.portfolios.length < 1 ? <h3>User has no Portfolios</h3>

          : user.portfolios.map((portfolio) => (
            <div className="asset-infos">
              <a href="" />

              <div className="asset-info flex-space">
                <span>{portfolio.asset.asset_type}</span>
                <span>
                  $
                  {portfolio.amount}
                </span>
              </div>

            </div>
          ))}

        <hr />
       

        <span>
          Edit
        </span>
      </div>

    </div>
  );
};

export default ClientsPage;
