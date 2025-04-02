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
    console.log(assets)
  return (
    <section className="py-6 md:py-20 px-4 properties">
    <div className="container m-auto">
  
      <div className="module-header">
        <h2>Recently Added <strong>Properties</strong></h2>
        <img src="images/divider.png" alt="" className='block m-auto' />
        <p>Discover our recently added properties, where exceptional features and prime locations combine to offer you the latest and most desirable listings</p>
      </div>
  
      <div className="grid md:grid-cols-2 gap-2">
        {assets?.map(asset => (
            <>
            <div className="col-lg-4 col-md-4">
            <div className="property shadow-hover">
              <NavLink to={`/assets_details/${asset.id}`} className="property-img">
                <div className="img-fade"></div>
                <div className="property-tag button alt featured">{asset.status}</div>
                <div className="property-tag button status">{asset.sale_type}</div>
                <div className="property-price">${asset.price}</div>
                <div className="property-color-bar"></div>
                <img src={asset.image_url} alt="" />
              </NavLink>
              <div className="property-content">
                <div className="property-title">
                <h4><a href="#">{asset.name}</a></h4>
                  <p className="property-address"><i className="fa fa-map-marker icon"></i>123 Smith Dr, Annapolis, MD</p>
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
                <span className="left"><i className="fa fa-calendar-o icon"></i> 5 days ago</span>
                <span className="right">
                  <a href="#"><i className="fa fa-heart-o icon"></i></a>
                  <a href="#"><i className="fa fa-share-alt"></i></a>
                </span>
                <div className="clear"></div>
              </div>
            </div>
          </div>
  
          
          </>

        ))}
  
          
      </div>
  
      <div className="center"><a href="#" className="button button-icon more-properties-btn"><i className="fa fa-angle-right"></i> View More Properties</a></div>
  
    </div>
  </section>
  )
}

export default TopAssets