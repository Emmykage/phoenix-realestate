import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAssets } from '../../redux/actions/assets'
import { NavLink } from 'react-router-dom'
import { usd_format } from '../../components/misc/USD'
import Nav from '../../components/nav/Nav'
import SubHeader from '../../components/subHeader/SubHeader'
import Loader from '../../components/loader/Loader'
import { FaLocationDot } from 'react-icons/fa6'
import { FaBath, FaBed } from 'react-icons/fa'
import { TbRulerMeasure } from "react-icons/tb";
import { moneyFormat } from '../../utils/moneyFormat'


const Properties = () => {
  const dispatch = useDispatch()
  const {offers, loading} = useSelector(state => state.assets)
  useEffect(()=> {

    dispatch(getAssets())

  },[])

  return (
    <div>
      <Nav/>
    
<SubHeader tittle={"Property Listing"} />

<section className="module">
  <div className="container m-auto">
   
  
	<div className="property-listing-header">
    <span className="property-count left">{offers.length} properties found</span>
      {/* <form action="#" method="get" className="right">
        <select name="sort_by" onchange="this.form.submit();">
          <option value="date_desc">New to Old</option>
          <option value="date_asc">Old to New</option>
          <option value="price_desc">Price (High to Low)</option>
          <option value="price_asc">Price (Low to High)</option>
        </select>
      </form> */}
      {/* <div class="property-layout-toggle right">
        <a  class="property-layout-toggle-item active"><i class="fa fa-th-large"></i></a>
        <a  class="property-layout-toggle-item"><i class="fa fa-bars"></i></a>
      </div> */}
      <div class="clear"></div>
	  </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 relative min-h-96">
    {loading ? <div className='h-full w-full absolute top-0 left-0 bg-red-'> <Loader/> </div> :  offers.length > 0  ? offers.map((asset) => (
      <div className="h-max rounded-lg overflow-hidden">
      <div className=" shadow-hover bg-white ">
        <div  className="property-img relative bg-gray-900 p-0 h-96">
          <div className="img-fade"></div>
          <div className="property-tag button status">{asset.sale_type}</div>
          <div className="property-price">{moneyFormat(asset.price, "GBP")}</div>
          <div className="property-color-bar"></div>
          <img src={asset.images_url ? asset.images_url[0] :  "/images/ai-generative-interior-design-decor-showing-modern-bedroom-area-in-open-plan-luxury-studio-apartment-showroom-with-sofa-bed-photo.jpg" } alt={asset.name} className='object-cover m-auto h-full w-full' />
        </div>
        <div className="property-content p-4">
            <h4><NavLink to={`/assets_details/${asset.id}`} className='text-xl hover:text-theme-pry text-primary font-semibold'>{asset.name}</NavLink></h4>

              <div className='flex justify-between items-center my-3'>
             
              <div className="property-title ">
                <p className="property-address flex gap-4 items-center">
                  <span><FaLocationDot className='text-theme-pry'/></span>{asset.address}</p>
              </div>
              <div>
           
              </div>
                 
              </div>
              <div className=' '>

              <table className="property-details  items-center my-5">
                <tr>
                  <td className='fl-4'> <p className='flex items-center gap-4'><FaBed className='text-theme-pry'/>  {asset.number_of_bedrooms} Beds</p> </td>
                  <td className='fl-4'> <p className='flex items-center gap-4'><FaBath  className='text-theme-pry'/>  {asset?.number_of_bathrooms} Baths</p> </td>
                  <td> <p className='flex items-center gap-4'><TbRulerMeasure  className='text-theme-pry'/>{asset.area} Sq Ft </p></td>
                </tr>
              </table>
              </div>

              
            </div>
    
      </div>
    </div>
      
    ))
  : 
  <div>
    <h3 className='text-theme-alt font-semibold'>
      No Property Listing available
      </h3> </div>}        
		
	</div>
	
	
	{/* <div class="pagination">
        <div class="center">
            <ul>
              <li><a href="#" class="button small grey"><i class="fa fa-angle-left"></i></a></li>
              <li class="current"><a href="#" class="button small grey">1</a></li>
              <li><a href="#" class="button small grey">2</a></li>
              <li><a href="#" class="button small grey">3</a></li>
              <li><a href="#" class="button small grey"><i class="fa fa-angle-right"></i></a></li>
            </ul>
        </div>
        <div class="clear"></div>
    </div> */}

  </div>
</section>
    </div>
  )
}

export default Properties