import React, { useEffect, useState } from 'react'
import ConfirmPurchase from '../components/modals/ConfirmPurchase'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAssets } from '../redux/actions/assets'
import Loader from '../components/loader/Loader'
import Nav from '../components/nav/Nav'
import SubHeader from '../components/subHeader/SubHeader'
import { MdLocationSearching, MdOutlineAccessTime, MdOutlinePhone } from 'react-icons/md'
import { FaRegMessage } from "react-icons/fa6";
import { RiHotelBedLine } from "react-icons/ri";
import { LuBath } from "react-icons/lu"
import { moneyFormat } from '../utils/moneyFormat'
// import { MdLocationSearching } from "react-icons/md";

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
    <SubHeader tittle={asset?.name}/>
    <section className='px-4'>

    <div className='asset-details m-auto max-w-7xl py-10 my-10 px-4 bg-white'>
      <div className='md:h-[500px] w-full flex flex-col md:flex-row gap-5 '>
        <div className='md:w-2/3 w-full h-72 md:h-full bg-blue-300'>
          <img src={asset.images_url ? asset.images_url[0] : "/images/ai-generative-interior-design-decor-showing-modern-bedroom-area-in-open-plan-luxury-studio-apartment-showroom-with-sofa-bed-photo.jpg" } alt="" className='w-full h-full object-cover' />
        </div>
        <div className='md:w-1/3 flex flex-col  gap-4'>
          <div className='bg-gray-100 h-72 md:h-1/2 -1'>
            <img src={asset.images_url ? asset.images_url[1] : "/images/ai-generative-interior-design-decor-showing-modern-bedroom-area-in-open-plan-luxury-studio-apartment-showroom-with-sofa-bed-photo.jpg" } alt="" className='w-full h-full object-cover' />
          </div>
          <div className='bg-gray-100 h-72 md:h-1/2  overflow-hidden'>
            <img src={asset.images_url ? asset.images_url[2] : "/images/ai-generative-interior-design-decor-showing-modern-bedroom-area-in-open-plan-luxury-studio-apartment-showroom-with-sofa-bed-photo.jpg" } alt="" className='w-full h-full px-0 object-cover' />
          </div>

        </div>
        
       

      </div>
      <div  className='bg-white py-10 grid  md:grid-cols-propDetails gap-5'>
        <div className='px-3'>
          <div  className='pb-6 bg--400 border-b border-gray-400/50'>
          <h5 className='text-xl mb-4 capitalize'>{asset?.name} </h5>

          <span>Starting Price</span>
          <p className='text-2xl'>{moneyFormat(asset?.price, "GBP")}</p>
        
          </div>
          <div className='overflow-x-auto'>

          <div className='grid grid-cols-5 md:w-full  w-[500%] py-6 border-b border-gray-400/50'>
            <div>
              <p className='font-medium'>PROPERTY TYPE</p>
              <p className='flex items-center my-2 gap-4'>{asset?.property_type ?? "N/A" }</p>
            </div>
            <div>
              <p>BATHROOMS</p>
              <p className='flex items-center my-2 gap-4'>   <LuBath />{asset?.number_of_bathrooms}</p>
            
            </div>
            <div>
              <p>BEDROOMS</p>
              <p className='flex items-center my-2 gap-4'><RiHotelBedLine /> {asset?.number_of_bedrooms}</p>

              <p></p>
            </div>
            <div>
              <p>AREA SIZE</p>
              <p className='flex items-center my-2 gap-4'><MdLocationSearching />{asset?.area}</p>
            </div> <div>
              <p>PAYMENT PLAN</p>
              <p className='flex items-center my-2 gap-4'><MdOutlineAccessTime /> {asset?.tenure}</p>
            </div>
      </div>
      </div>

      <div className='grid border-gray-400/50 bg-red- mt-5 bg- rounded-lg py-6 border-b pb-6 '>
        <div className='grid bg-b md:grid-cols-2 gap-5 py-4 border-b border-gray-400/50'>
          <div className='bg h-60'>
            <img src={asset.images_url ? asset.images_url[2] : "/images/ai-generative-interior-design-decor-showing-modern-bedroom-area-in-open-plan-luxury-studio-apartment-showroom-with-sofa-bed-photo.jpg" } alt="" className='w-full rounded-lg h-full px-0 object-cover' />
          </div>
          <div className='flex bg-ye flex-wrap grid-cols-4 gap-2 '>
            {asset?.images_url.map(img => (
            <div className='overflow-hidden h-20 border rounded-lg w-20'>
              <img src={img} className='w-full h-full'/></div>
            ))}
          </div>
        </div>

        <div className='py-10 border-b'>
        <h5 className='text-lg'>Key Features</h5>
        <ul className='list-disc list-inside mt-5 flex flex-col flex-wrap gap-2 md:h-40'>
        
        {asset?.features ? asset?.features.map((item) => (
        <li>{item}</li>

        )) : "N/A"}
      
        </ul>
      </div>
      <div className='py-7'>
        <h5>Description</h5>
        {asset.asset_description ? <p>{asset.asset_description}</p> :  <p className='mt-6' dangerouslySetInnerHTML={{__html: asset?.description_body}}/>}
        </div>
      

      </div>



         </div>
         <div className='bg-white relative border shadow-lg p-6'>
          <div className='sticky top-20 left-0'>
            <p className='font-medium text-lg'>Marketed By</p>
            <p>Phoenix Precast LTD</p>
            <p className='mt-5 text-xs pr-10'>2-3 Little Burrow,
              Welwyn Garden City, Herts, AL7 4SP
              England</p>

              <div className='bg-primary rounded px-4 py-4 mt-5'>
                <button className='bg-alt flex items-center font-medium text-sm p-4 text-center w-full rounded-lg justify-start gap-5 text-primary'>
                <MdOutlinePhone className='text-'/> Call Agent
                </button>
                <button>
              
                </button>
                <a href="tel:+44757800966" className='bg-alt flex items-center font-medium text-sm p-4 text-center w-full rounded-lg justify-start gap-5 text-primary'>
                
              
                <FaRegMessage />
                Request Details
           
                </a>


              </div>
            </div>

        </div>


      </div>
   
     
      
        {/* <div className="">
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
        </div>        */}
                
    </div>
    <ConfirmPurchase toggleModal={toggleModal} setToggleModal={setToggleModal} portfolio={asset} />
    </section>

    </>

  )
 }
}

export default AssetDetails