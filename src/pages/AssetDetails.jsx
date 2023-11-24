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
  console.log(asset)
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
        <div class="">
          <div class="property property-display shadow-hover">
            <a href="#" class="property-img">
              <div class="img-fade"></div>
              <div class="property-tag button alt featured">Featured</div>
              <div class="property-tag button status">{asset.sale_type}</div>
              <div class="property-price">${asset.price} <span>{asset.tenure}</span></div>
              <div class="property-color-bar"></div>
              <img src={asset.image_url} alt="" />
            </a>
            <div class="property-content">
              <div className='flex justify-between w-max-800'>
             
              <div class="property-title">
              <h4><a href="#">{asset.name}</a></h4>
                <p class="property-address"><i class="fa fa-map-marker icon"></i>{asset.address}</p>
              </div>
              <div>
              <a onClick={()=> setToggleModal("show-modal")} className='btn p-3'>
                  Purchase
                </a>
              </div>
                 
              </div>
              <table class="property-details">
                <tr>
                  <td><i class="fa fa-bed"></i> {asset.number_of_bedrooms} Beds</td>
                  <td><i class="fa fa-tint"></i> {asset.number_of_bedrooms} Baths</td>
                  <td><i class="fa fa-expand"></i>{asset.area} Sq Ft</td>
                </tr>
              </table>
              
            </div>
            <div class="property-footer">
              <span class="left"><i class="fa fa-calendar-o icon"></i> 1 week ago</span>
              <span class="right">
                <a href="#"><i class="fa fa-heart-o icon"></i></a>
                <a href="#"><i class="fa fa-share-alt"></i></a>
              </span>
              <div class="clear"></div>
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