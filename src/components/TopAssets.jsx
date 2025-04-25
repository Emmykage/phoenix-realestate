import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAssets } from '../redux/actions/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import AppButton from './buttons/appButton';
import { moneyFormat } from '../utils/moneyFormat';
import { CiHeart } from "react-icons/ci";


const TopAssets = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(()=> {
      dispatch(getAssets())
    },[])
    const {assets} = useSelector(state => state.assets)
   return (
    <section className="py-6 md:py-20 px-4 properties">
    <div className="container m-auto">
  
      <div className="module-header">
        <h2>Recently Added <strong>Properties</strong></h2>
        <img src="images/divider.png" alt="" className='block m-auto' />
        <p>Discover our recently added properties, where exceptional features and prime locations combine to offer you the latest and most desirable listings</p>
      </div>
  
      <div className="grid md:grid-cols-2 gap-2">
        {assets?.map((asset) => (
           <AssetDisplay asset={asset}/>

        ))}
  
          
      </div>
  
      <div className="center pt-4">
      
        <AppButton onClick={() => navigate("/properties")}>

          View More Properties
        </AppButton>
        </div>
  
    </div>
  </section>
  )
}



const AssetDisplay = ({asset}) => {
  const [liked, setLiked] = useState(false) 

return(
  <div className="property shadow-hover">
  <div onClick={() => { navigate(`/assets_details/${asset.id}`)}} className="property-img h-96 w-full relative p-4 bg-gray-100">
    <div className="img-fade"></div>
    <div className="property-tag button alt mt-4 ml-3 featured">{asset.status}</div>
    <div className="property-tag button status">{asset.sale_type}</div>
    <div className="property-price">{moneyFormat(asset.price, "GBP")}</div>
    <div className="property-color-bar"></div>
    <img src={asset?.images_url ? asset.images_url[0] : "/images/d4mq83s-0511e07c-421c-4282-b2f6-22357513ffd5.jpg" } alt="" className='absolute top-0 left-0 h-full w-full' />
  </div>
  <div className="property-content px-4">
    <div className="property-title">
    <h4><a href="#">{asset.name}</a></h4>
      <p className="property-address"><i className="fa fa-map-marker icon"></i>{asset?.address}</p>
    </div>
    <table className="property-details">
      <tr>
        <td><i className="fa fa-bed"></i> {asset.number_of_bedrooms} Beds</td>
        <td><i className="fa fa-tint"></i> {asset.number_of_bathrooms} Baths</td>
        <td><i className="fa fa-expand"></i> {asset.area}Sq Ft</td>
      </tr>
    </table>
  </div>
  <div className="property-footer">
    {/* <span className="left"><i className="fa fa-calendar-o icon"></i> 5 days ago</span> */}
    <span className="right flex items-center gap-4">
      <a  onClick={() => {setLiked(prev => !prev)}}><CiHeart className={liked ?  'text-red-600' : "text-gray-600"}/></a>
      <a href="#"><i className="fa fa-share-alt"></i></a>
    </span>
    <div className="clear"></div>
  </div>
</div>

)
}

export default TopAssets