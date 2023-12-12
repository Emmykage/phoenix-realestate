import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WithdrawEarning from '../transaction/WithdrawEarning'
import ConfirmEarning from '../modals/ConfirmEarning'
import ClearConfirmEarning from '../modals/ClearConfirmEarning'
import { getUser } from '../../redux/actions/users'

const Bonus = () => {
  const dispatch = useDispatch()
  const [toggleModal, setToggleModal] = useState(null)
  const [clearModal, setClearModal] = useState()
  const [withdrawEarning, setWithdrawEarning] = useState({amount: ""})

  const {user} = useSelector(state => state.users)

  return (
    <div>
      <h3 className='text-center'>Withdraw Earnings</h3>
      <div>
        <a className='btn' onClick={()=> setToggleModal("show-modal deposit") }>Widthdraw all Earnings</a>
      </div>

      <WithdrawEarning toggleModal={toggleModal} setToggleModal={setToggleModal} withdrawEarning={withdrawEarning} setWithdrawEarning={setWithdrawEarning} />
      <ConfirmEarning amount={withdrawEarning} toggleModal={toggleModal} setToggleModal={setToggleModal} />
      <ClearConfirmEarning amount={user.total_earnings} toggleModal={clearModal} setToggleModal={setClearModal}  />
    </div>
  )
}

export default Bonus