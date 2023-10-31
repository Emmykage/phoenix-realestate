import React from 'react'
import img from '../../assets/images/530x345.png'
const Portfolios = () => {
  return (
    <div className='portfolios'>
        <ul className='bg-green'>
            <li className='bg-green text-left'>
                <div className='flex rounded-base'>
                    <div className='portfolio-img flex-1'>
                        <img src={img} alt="" />

                    </div>
                    <div className='bg-red flex-2 p-3'>
                        <h3>House of cards</h3>
                        <div>
                            <div>
                          
                            <h4>price: </h4>
                            <span>$3000</span>
      
                            </div>
                            <div>
                                
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