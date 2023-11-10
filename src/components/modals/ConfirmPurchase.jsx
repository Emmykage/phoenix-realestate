import React from 'react'
import { createPortfolio } from '../../redux/actions/portfolio'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const ConfirmPurchase = ({toggleModal, setToggleModal, portfolio}) => {
  const {loading, error} = useSelector(state => state.portfolios)
  const dispatch = useDispatch()
  const handlePurchase =() => {
    dispatch(createPortfolio({asset_id: portfolio.id, amount: portfolio.price}))
  }
  useEffect(()=> {
    if(!loading && !error){
      setToggleModal(null)
    }
  },[loading, error])
  console.log(portfolio.id)
  return (
    <div>
       <div className={`modal-container ${toggleModal}`}>
        <div className='modal-info'>

           <div className='close-icon text-right pr-8'>
              <span onClick={()=> setToggleModal(null)}>
                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
              </span>   
           <i class="bi bi-x-lg"></i>
           </div>
           <div><h3 className='text-center'>Confirm Purchase</h3></div>
           <div className='bg- h-full items-center flex'>

            <div className='flex justify-around w-full'>
              <button onClick={()=> setToggleModal(null)} className='btn cancel'>Cancel</button>
              <button onClick={handlePurchase} className='btn'>Confirm</button>
            </div>
           
           </div>
        </div>
    </div>
    </div>
  )
}

export default ConfirmPurchase