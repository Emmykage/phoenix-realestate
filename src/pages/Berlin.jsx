import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAssets } from '../redux/actions/assets'
import { NavLink } from 'react-router-dom'

const Berlin = () => {
  const dispatch = useDispatch()
  const {offers} = useSelector(state => state.assets)
  const berlinCategory = offers.filter((asset) => asset.city == "dubai")

  useEffect(()=> {

    dispatch(getAssets())

  },[])


  return (
    <div>
        <section className="subheader">
  <div className="container">
    <h1 className='bg-gray-dark-trans p-2'>Berlin</h1>
    <div className="breadcrumb right">Home <i className="fa fa-angle-right"></i> <a href="#" className="current">Properties</a></div>
    <div className="clear"></div>
  </div>
</section>

<section className="module">
  <div className="container">
   
  
	<div className="property-listing-header">
    <span className="property-count left">{berlinCategory.length} properties found</span>
      <form action="#" method="get" className="right">
        <select name="sort_by" onchange="this.form.submit();">
          <option value="date_desc">New to Old</option>
          <option value="date_asc">Old to New</option>
          <option value="price_desc">Price (High to Low)</option>
          <option value="price_asc">Price (Low to High)</option>
        </select>
      </form>
      <div className="property-layout-toggle right">
        <a href="property-listing-grid.html" className="property-layout-toggle-item active"><i className="fa fa-th-large"></i></a>
        <a href="property-listing-row.html" className="property-layout-toggle-item"><i className="fa fa-bars"></i></a>
      </div>
      <div className="clear"></div>
	  </div>
    
    <div className="row">
    {berlinCategory.map((asset) => (
      <div className="col-lg-4 col-md-4">
      <div className="property shadow-hover">
        <NavLink to={`/assets_details/${asset.id}`} className="property-img">
          <div className="img-fade"></div>
          <div className="property-tag button status">{asset.sale_type}</div>
          <div className="property-price">${asset.price}</div>
          <div className="property-color-bar"></div>
          <img src={asset.images} alt={asset.name} />
        </NavLink>
        <div className="property-content">
          <div className="property-title">
          <h4><a href="#">{asset.name}</a></h4>
            <p className="property-address"><i className="fa fa-map-marker icon"></i>123 Smith Dr, Annapolis, MD</p>
          </div>
          <table className="property-details">
            <tr>
              <td><i className="fa fa-bed"></i> {asset.number_of_bedrooms} Beds</td>
              <td><i className="fa fa-tint"></i>{asset.number_of_bathrooms} 2 Baths</td>
              <td><i className="fa fa-expand"></i> {asset.area} Sq Ft</td>
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
      
    ))}        
		
	</div>
	

  </div>
</section>
    </div>
  )
}

export default Berlin