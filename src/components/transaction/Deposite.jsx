import React, { useState } from 'react'

const Deposit = ({setToggleModal, deposit, setDeposit}) => {
    const handleWithdrawalModal = (e) => {
        e.preventDefault()
        setToggleModal("show-modal")


    }
    const handleDepositInput = (e) => {
        setDeposit({
            ...deposit,
            [e.target.name]: e.target.value

        })        

    }
  return (
    <div className='form-card'>
           <div className='bg-white box-shadow p-3 b-radius-1 text-left'>
            <h3>Deposit</h3>
            <form onSubmit={handleWithdrawalModal}>
            <div  className='m-3 text-left'>
                <label className='block m-1'>Select Coin to receive payment</label> 
                <div className=''>
               
                <select name='coin_type' className='bg-green form-select form-select-lg mb-3 ' value={deposit.coin_type} onChange={handleDepositInput} required>
                    <option className='border' value="USD THETHER" selected>USD THETHER</option>
                    <option value="BITCOIN">BITCOIN</option>
                    <option value="ETHERUM">ETHERUM (ERC-20)</option>
                </select>
                     
                </div>
            </div>
            <div>
                <label className='block m-1' htmlFor="amount">Enter Amount</label>
                <input type="number" className='border' placeholder='Enter Amount in USD' name="amount" value={deposit.amount} onChange={handleDepositInput} required/>
            </div>
            <div className='m-2'>
                    <p className='text-red text-center'>Pay to the following Wallet Address</p>
                    <p className='block text-center bg-light p-2 b-radius-1 text-danger'>bc1qusn333vtanazyywdvr5u5mwk5eq32h5n5lpchr</p>

                </div>
        <div>
        <button className='btn w-full bg-semi text-white'>Request</button>
        </div>
        </form>
        </div>
        
    </div>
  )
}

export default Deposit 
