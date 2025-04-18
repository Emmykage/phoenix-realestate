import React, { useEffect, useState } from 'react'
import ConfirmPurchase from '../components/modals/ConfirmPurchase'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAssets } from '../redux/actions/assets'
import Loader from '../components/loader/Loader'
import Nav from '../components/nav/Nav'
import SubHeader from '../components/subHeader/SubHeader'

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
    <Nav/>
    <SubHeader/>
    <div className='asset-details m-auto max-w-7xl py-10 my-10 '>
        <div className="">
          <div className="property property-display shadow-hover my-10">
            <div className="property-img relative  p-1 bg-black">
              <div className="img-fade bg-blue-200"></div>
              <div className="absolute p-2 rounded-lg text-white text-xs z-10 bg-[#4fba6f] right-3 mt-10">Featured</div>
              <div className="property-tag button status">{asset.sale_type}</div>
              <div className="property-price">${asset.price} <span>{asset.tenure}</span></div>
              <div className="property-color-bar"></div>
              <img src={asset.images_url ? asset.images_url[0] : "/images/ai-generative-interior-design-decor-showing-modern-bedroom-area-in-open-plan-luxury-studio-apartment-showroom-with-sofa-bed-photo.jpg" } alt="" className='mx-aut w-full h-full object-cover'/>
            </div>
            <div className="property-content">
              <div className='flex justify-between px-10 items-center my-10'>
             
              <div className="property-title py-8">
                <p className="property-address"><i className="fa fa-map-marker icon"></i>{asset.address}</p>
              </div>
              <div>
              <a onClick={()=> setToggleModal("show-modal")} className='btn p-3'>
                  Purchase
                </a>
              </div>
                 
              </div>
              <div className=' px-10'>

              <table className="property-details  items-center my-10">
                <tr>
                  <td><i className="fa fa-bed"></i> {asset.number_of_bedrooms} Beds</td>
                  <td><i className="fa fa-tint"></i> {asset.number_of_bedrooms} Baths</td>
                  <td><i className="fa fa-expand"></i>{asset.area} Sq Ft</td>
                </tr>
              </table>
              </div>

              
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