import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Aside from '../components/dashboard/Aside'
import Main from '../components/dashboard/Main'
import { useSelector } from 'react-redux'
import { IoWalletOutline } from 'react-icons/io5'
import { FaArrowRight, FaFolderOpen } from 'react-icons/fa'
import { MdAttachMoney } from 'react-icons/md'
import { usd_format } from '../components/misc/USD'
import { formattedDate } from '../components/misc/Date'

const Dashboard = () => {
  const {user} = useSelector(state => state.users)

  return (
    <div className='user-dashboard my-5'>
     
     <div className='top-details box-shadow c-container'>
          <div className='box-shadow py-2 px-3'>
            <div className='text-left'>
              <h2 className='text-3xl font-medium'>welcome, {user.first_name}</h2>
              <p className='text-sm font-medium'>Individual Account</p>
            </div>

          </div>

          <div className='grid gap-2 grid-3 cards text-left my-3'>
            <div className='pt-6 card'>
              <p><IoWalletOutline className='icon'/></p>

              <h2>{usd_format(user?.wallet?.wallet_balance)}</h2>
              <NavLink to={'/dashboard/wallet/wallet'} className={'items-center flex gap-2'}>Wallet <FaArrowRight/>
              </NavLink>
            </div>
            <div className='card'><p><FaFolderOpen className='icon'/></p>
              <h2>{usd_format(user.total_asset)}</h2>
              <NavLink to={'/dashboard/wallet/portfolios'} className={'items-center flex gap-2 text-gray'}>
              Portfolios
              <FaArrowRight/>
                </NavLink></div>
            <div className='card'><p><MdAttachMoney className='icon'/></p>
              <h2>{usd_format(user.net_earnings)}</h2>
              <NavLink to={'/dashboard/wallet/bonuses'} className='items-center flex gap-2'>
                Earnings 
                <FaArrowRight/>
              </NavLink></div>

          </div>

          <div className='border div-tab my-3'>
          <table className='w-full'>
          <thead className='text-white'>
            <tr >
              <th className='px-2 py-2'>Transaction</th>
              <th>Amount</th>
              <th>Status</th>
              <th></th>
              <th />
            </tr>

          </thead>
          <tbody>
            {user?.wallet?.transactions?.length < 1 ? <td> No Transaction Available </td> : 
            user?.wallet?.transactions.map(transaction => (
              <tr className=''>

              <td className='py-2 px-2 text-dark font-medium'>{transaction.coin_type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.transaction_type}</td>
              <td className="warning">Pending</td>
              <td className="primary">{formattedDate(transaction.created_at)}</td>
            </tr>
            ))
  
          }
          </tbody>

        </table>
          </div>
          
            
        </div>

    
    </div>
  )
}

export default Dashboard