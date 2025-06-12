import React, { useEffect } from 'react';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from '../../redux/actions/users';
import dateFormater from '../../utils/dateFormat';
import { NavLink } from 'react-router-dom';

const AHome = () => {

  const {users} = useSelector(state => state.users)


  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(listUsers())
  }, [])


  return(
  <>
    <div>
      <h1>Dashboard</h1>
    
      <div className="insights md:gap-6 grid lg:grid-cols-3">
        <div className="sales">
          <span><AutoGraphOutlinedIcon /></span>
          <div className="middle">
            <div className="left">
              <h3>Total Sale</h3>
              <h1>$25,000</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy={38} r={36} />
              </svg>
              <div className="number">
                <p>81%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">
            last 24 hours
          </small>

        </div>
        <div className="expenses">
          <span><AutoGraphOutlinedIcon /></span>
          <div className="middle">
            <div className="left">
              <h3>Total Expense</h3>
              <h1>$25,000</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy={38} r={36} />
              </svg>
              <div className="number">
                <p>81%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">
            last 24 hours
          </small>

        </div>
        <div className="income">
          <span><AutoGraphOutlinedIcon /></span>
          <div className="middle">
            <div className="left">
              <h3>Total Sale</h3>
              <h1>$25,000</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy={38} r={36} />
              </svg>
              <div className="number">
                <p>81%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">
            last 24 hours
          </small>

        </div>

      </div>

      {/* -----------end of insights ------------- */}
      <div className="recent-orders bg-white p-4">
        <h2>Recent User</h2>

        <div className='overflow-x-auto w-full'>
        <table className='w-full'>
          <thead>
            <tr className=''>
              <th className='px-4 text-left py-2 bg-gray-200'>Name</th>
              <th className='px-4 text-left py-2 bg-gray-200'>Email</th>
              <th className='px-4 text-left py-2 bg-gray-200'>Status</th>
              <th className='px-4 text-left py-2 bg-gray-200'>Date</th>

              <th />
            </tr>

          </thead>
          <tbody>

            {users.map(user => (
              <tr>

              <td className='px-4 py-2 text-left border-b border-gray-100'>{`${user?.first_name} ${user?.last_name} `}</td>
              <td className="px-4 py-2 text-left border-b border-gray-100">{user?.email}</td>
              <td className="px-4 py-2 text-left border-b border-gray-100 text-green-600">Active</td>

              <td className="px-4 py-2 text-left">{ dateFormater(user?.created_at)}</td>
              </tr>
            ))}
           
          
          </tbody>

        </table>
        </div>
     

        
        <NavLink to="/admin/clients">Show All</NavLink>
      </div>
    </div>

  </>
)};

export default AHome;
