import React, { useEffect, useState } from 'react'
import ConfirmPurchase from '../components/modals/ConfirmPurchase'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAssets } from '../redux/actions/assets'
import Loader from '../components/loader/Loader'

const AssetDetails = () => {
  const [toggleModal, setToggleModal] = useState(null)
  const {offers} = useSelector(state => state.assets)
  const {id} = useParams()

  const asset = offers.find((prop) => prop.id == id)
  const dispatch = useDispatch()
  useEffect(()=> {
  dispatch(getAssets())
 },[])
 if(!asset){
  <div>
    <Loader/>
  </div>

 }else{
  return (
    <>
    <div className='asset-details container'>
        <div className="">
          <div className="property property-display shadow-hover">
            <a href="#" className="property-img">
              <div className="img-fade"></div>
              <div className="property-tag button alt featured">Featured</div>
              <div className="property-tag button status">{asset.sale_type}</div>
              <div className="property-price">${asset.price} <span>{asset.tenure}</span></div>
              <div className="property-color-bar"></div>
              <img src={asset.image_url} alt="" />
            </a>
            <div className="property-content">
              <div className='flex justify-between w-max-800'>
             
              <div className="property-title">
              <h4><a href="#">{asset.name}</a></h4>
                <p className="property-address"><i className="fa fa-map-marker icon"></i>{asset.address}</p>
              </div>
              <div>
              <a onClick={()=> setToggleModal("show-modal")} className='btn p-3'>
                  Purchase
                </a>
              </div>
                 
              </div>
              <table className="property-details">
                <tr>
                  <td><i className="fa fa-bed"></i> {asset.number_of_bedrooms} Beds</td>
                  <td><i className="fa fa-tint"></i> {asset.number_of_bedrooms} Baths</td>
                  <td><i className="fa fa-expand"></i>{asset.area} Sq Ft</td>
                </tr>
              </table>
              
            </div>
            <div className="property-footer">
              <span className="left"><i className="fa fa-calendar-o icon"></i> 1 week ago</span>
              <span className="right">
                <a href="#"><i className="fa fa-heart-o icon"></i></a>
                <a href="#"><i className="fa fa-share-alt"></i></a>
              </span>
              <div className="clear"></div>
            </div>
          </div>
        </div>       
                
    </div>
    <ConfirmPurchase toggleModal={toggleModal} setToggleModal={setToggleModal} portfolio={asset} />
    </>

  )
 }
}

export default AssetDetails