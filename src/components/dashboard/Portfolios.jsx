import React from 'react'
import img from '../../assets/images/530x345.png'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPortfolios } from '../../redux/actions/portfolio'
import { usd_format } from '../misc/USD'
import { NavLink } from 'react-router-dom'
const Portfolios = () => {
    const dispatch = useDispatch()
    const {portfolios} = useSelector(state => state.portfolios)
    useEffect(()=> {
        dispatch(getPortfolios())
    },[])
    // console.log(portfolios)

  return (
    <div className='portfolios p-3 w-3-4'>
        <ul className=''>
            {portfolios.length < 1 ? (<h2 className='text-center'>You have no portfolios</h2>) : portfolios.map((portfolio) => (
                <li className='text-left box-shadow rounded-base my-1'>
                <div className='flex rounded-base'>
                    <div className='portfolio-img flex-1 p-3'>
                        <img src={portfolio.asset.image_url} alt="" className='rounded-base' />

                    </div>
                    <div className='flex-2 p-3 '>
                        <div className='flex '>

                      
                            <div className='flex-1' >
                        
                            <h4>{portfolio.asset.name}</h4>
                            <p><i class="fa fa-map-marker icon"></i>{portfolio.asset.address}</p>
                                
                            </div>
                            <div><span className='text-lg font-medium text-green' >Profits: </span> <span className='text-lg font-medium'>{usd_format(portfolio.investment_interest)}</span></div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex-1'>
                          
                             <span className='text-xl font-semibold'>{portfolio.asset.price}</span>
      
                            </div>
                            <div className='flex-1 flex justify-between'>
                                <span><i class="fa fa-bed"></i> {portfolio.asset.number_of_bedrooms} beds</span>
                                <span><i class="fa fa-tint"></i> {portfolio.asset.number_of_bathrooms} Baths</span>
                                <span><i class="fa fa-expand"></i> {portfolio.asset.area}Sq Ft</span>
                            </div>
                        </div>
                        <div class="text-right p-2">
                            <NavLink to="" className="btn inline-block p-1">view interest</NavLink>
                        </div>
                        
                        
                    </div>
                </div>
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default Portfolios