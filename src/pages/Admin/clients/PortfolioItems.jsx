import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPortfolio, getPortfolios } from '../../../redux/actions/portfolio'
import { createInterest } from '../../../redux/actions/interest'

const PortfolioItems = () => {
    const dispatch = useDispatch()
    const {client_id, portfolio_id} = useParams()
    const {portfolio, loading} = useSelector(state => state.portfolios)
    const loadingInterest = useSelector(state => state.interests.loading)
    const [interest, setInterest] = useState(null)
    const handleSubmit = (e)=> {
        e.preventDefault()

        dispatch(createInterest({portfolio_id, interest: interest }))
    }
    useEffect(()=> {
        dispatch(getPortfolio(portfolio_id)) 

    },[loadingInterest])


if(loading || loadingInterest){
    return(
        <h3 className='text-gray font-bold text-center my-5'>Loading...</h3>
    )

}else{


  return (
    <div className='py-4'>
        <div>
            {portfolio.portfolio_interests.length < 1 ? <h2 className='pb-3'>No interest yet</h2> : portfolio.portfolio_interests.map(interest => (
                <div className='box-shadow py-3 my-2 px-2 flex justify-between items-center'><span className='font-medium text-lg'>interest: </span> ${interest.interest} <span className='font-normal'>{interest.created_at}</span> </div>
            ))}
        </div>
        <form onSubmit={handleSubmit}>
            <input type="number" name="interest" value={interest} onChange={(e)=> setInterest(e.target.value)} required/>
            <button className="btn">Add Interest</button>
        </form>
    </div>
  )
}
}

export default PortfolioItems