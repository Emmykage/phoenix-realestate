import React, { useState } from 'react'

const Withdraw = ({toggleModal, setToggleModal, setWithdrawal, withdrawal}) => {
    const handleWithdrawalModal = (e) => {
        e.preventDefault()
        setToggleModal("show-modal")

    }
    const handleWithdrawalInput = (e) => {
        setWithdrawal({
            ...withdrawal,
            [e.target.name]: e.target.value,

        })        

    }
  return (
    <div className='form-card'>
           <div className='bg-white box-shadow p-3 b-radius-1 text-left'>
            <h3>Withdraw</h3>
            <form onSubmit={handleWithdrawalModal}>
            <div  className='m-3 text-left'>
                <label className='block m-1'>Select Coin to receive payment</label> 
                <div className=''>
               
                <select name='coin_type' className='border' value={withdrawal.coin_type} onChange={handleWithdrawalInput} required>
                    <option className='border' value="USD THETHER" selected>USD THETHER</option>
                    <option value="BITCOIN">BITCOIN</option>
                    <option value="ETHERUM">ETHERUM (ERC-20)</option>
                </select>
                     
                </div>
            </div>
            <div>
                <label className='block m-1' htmlFor="amount">Enter Amount</label>
                <input type="number" className='border' placeholder='Enter Amount in USD' name="amount" value={withdrawal.amount} onChange={handleWithdrawalInput} required/>
            </div>
            <div className='m-2'>
                <label className='block m-1' htmlFor="client_address">Enter Wallet Address</label>
                <input className='border' type='text' id="client_address" name='wallet_address' value={withdrawal.wallet_address} onChange={handleWithdrawalInput} required/>
            </div>
        <div>
        <button className='btn w-full bg-semi text-white'>Request</button>
        </div>
        </form>
        </div>
        
    </div>
  )
}

export default Withdraw
