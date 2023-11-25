import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAssets } from '../redux/actions/assets';
import { NavLink } from 'react-router-dom';

const TopAssets = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
      dispatch(getAssets())
    },[])
    const {assets} = useSelector(state => state.assets)
  return (
    <section class="module properties">
    <div class="container">
  
      <div class="module-header">
        <h2>Recently Added <strong>Properties</strong></h2>
        <img src="images/divider.png" alt="" />
        <p>Morbi accumsan ipsum velit nam nec tellus a odiose tincidunt auctor a ornare odio sed non mauris vitae erat consequat auctor</p>
      </div>
  
      <div class="flex justify-center gap-2">
        {assets?.map(asset => (
            <>
            <div class="col-lg-4 col-md-4">
            <div class="property shadow-hover">
              <NavLink to={`/assets_details/${asset.id}`} className="property-img">
                <div class="img-fade"></div>
                <div class="property-tag button alt featured">{asset.status}</div>
                <div class="property-tag button status">{asset.sale_type}</div>
                <div class="property-price">${asset.price}</div>
                <div class="property-color-bar"></div>
                <img src={asset.image_url} alt="" />
              </NavLink>
              <div class="property-content">
                <div class="property-title">
                <h4><a href="#">{asset.name}</a></h4>
                  <p class="property-address"><i class="fa fa-map-marker icon"></i>123 Smith Dr, Annapolis, MD</p>
                </div>
                <table class="property-details">
                  <tr>
                    <td><i class="fa fa-bed"></i> {asset.number_of_bedrooms} Beds</td>
                    <td><i class="fa fa-tint"></i> {asset.number_of_bathrooms} Baths</td>
                    <td><i class="fa fa-expand"></i> {asset.area}Sq Ft</td>
                  </tr>
                </table>
              </div>
              <div class="property-footer">
                <span class="left"><i class="fa fa-calendar-o icon"></i> 5 days ago</span>
                <span class="right">
                  <a href="#"><i class="fa fa-heart-o icon"></i></a>
                  <a href="#"><i class="fa fa-share-alt"></i></a>
                </span>
                <div class="clear"></div>
              </div>
            </div>
          </div>
  
          
          </>

        ))}
  
          
      </div>
  
      <div class="center"><a href="#" class="button button-icon more-properties-btn"><i class="fa fa-angle-right"></i> View More Properties</a></div>
  
    </div>
  </section>
  )
}

export default TopAssets