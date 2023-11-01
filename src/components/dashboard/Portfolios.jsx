import React from 'react'
import img from '../../assets/images/530x345.png'
const Portfolios = () => {
  return (
    <div className='portfolios p-3 w-3-4'>
        <ul className=''>
            <li className='text-left box-shadow rounded-base'>
                <div className='flex rounded-base'>
                    <div className='portfolio-img flex-1 p-3'>
                        <img src={img} alt="" className='rounded-base' />

                    </div>
                    <div className='flex-2 p-3'>
                        <h3>House of cards</h3>
                        <p><i class="fa fa-map-marker icon"></i>123 Smith Dr, Annapolis, MD</p>
                        <div className='flex justify-between '>
                            <div className='flex-1'>
                          
                             <span className='text-xl font-semibold'>$3000</span>
      
                            </div>
                            <div className='flex-1 flex justify-between'>
                                <span><i class="fa fa-bed"></i> 3 beds</span>
                                <span><i class="fa fa-tint"></i> 2 Baths</span>
                                <span><i class="fa fa-expand"></i> 25,000 Sq Ft</span>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Portfolios