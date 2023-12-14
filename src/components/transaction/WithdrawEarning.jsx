import React from 'react'

const WithdrawEarning = ({setToggleModal, setWithdrawEarning, withdrawEarning}) => {
    const handleEarningModal = (e) => {
        e.preventDefault()
        setToggleModal("show-modal withdrawal")

    }
    const handleWithdrawalInput = (e) => {
        setWithdrawEarning({
            ...withdrawEarning,
            [e.target.name]: e.target.value,

        })        

    }
  return (
    <div className='form-card'>
           <div className='bg-white box-shadow p-3 b-radius-1 text-left'>
            <h3>Withdraw</h3>
            <form onSubmit={handleEarningModal}>
          
            <div>
                <label className='block m-1' htmlFor="amount">Enter Amount</label>
                <input type="number" className='border' min={10} placeholder='Enter Amount in USD' name="amount" value={withdrawEarning.amount} onChange={handleWithdrawalInput} required/>
            </div>
           
        <div>
        <button className='btn w-full bg-semi text-white'>Liquidate Earnings</button>
        </div>
        </form>
        </div>
        
    </div>
  )
}

export default WithdrawEarning