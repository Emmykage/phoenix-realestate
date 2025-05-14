import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAsset, updateAsset } from '../../../redux/actions/assets';
import Loader from '../../../components/loader/Loader';
import { propertyFeatures, propertyTypes } from './data/propertyTypes';
import { InputLabel, MenuItem, OutlinedInput, Select, useTheme } from '@mui/material';

import { SET_LOADER } from '../../../redux/app/app';
import { toast } from 'react-toastify';
import ClassicButton from '../../../components/buttons/Buttons';

const AssetView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    features: [],
    name: ""
  })
  const { asset, loading, error } = useSelector((state) => state.assets);
    const [photos, setPhotos] = useState()
    const [mainPhoto, setMainPhoto] = useState(null)

    
  useEffect(() => {
    dispatch(getAsset(id));
  }, []);


  useEffect(() => {
    setFormInput(asset)
  }, [asset]);




  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(SET_LOADER(true))

  
    
    const formData = new FormData();


    formInput.name &&  formData.append('asset[name]', formInput.name)
    formInput.asset_category &&  formData.append('asset[asset_category]', formInput.asset_category)
    formInput.address &&  formData.append('asset[address]', formInput.address)
    formInput.price &&  formData.append('asset[price]', formInput.price)
    formInput.tenure &&   formData.append('asset[tenure]', formInput.tenure)
    formInput.sale_type &&  formData.append('asset[sale_type]', formInput.sale_type)
    formInput.area && formData.append('asset[area]', formInput.area)
   
    formInput.number_of_bedrooms &&     formData.append('asset[number_of_bedrooms]', formInput.number_of_bedrooms)
    formInput.number_of_bathrooms &&     formData.append('asset[number_of_bathrooms]', formInput.number_of_bathrooms)
    formInput.status &&  formData.append('asset[status]', formInput.status)
    formInput.property_type &&  formData.append('asset[property_type]', formInput.property_type)
    formInput.description_body &&   formData.append('asset[description_body]', e.target.description_body.value)
    formInput.city &&   formData.append('asset[city]', formInput.city)
    mainPhoto && formData.append('asset[mainphoto]', mainPhoto)
    
   

    
    // formData.append('asset[features][]', assetFeatures)
    formInput.features.forEach((item) => (
      formData.append('asset[features][]', item)
    ))

    

    Array.from(e.target.images.files).forEach((file) => (
      formData.append(`asset[photos][]`, file)
    ))




    dispatch(updateAsset({id: formInput,id, assetData: formData})).then(result => {
      if(updateAsset.fulfilled.match(result)){
        toast(result.payload.message || "Updated Successfully", {type: "success"})
        dispatch(getAsset(id))
        setPhotos([])

        dispatch(SET_LOADER(false))
      }else{
        dispatch(SET_LOADER(false))
        toast(result.payload.message || "Updated Failed", {type: "error"})


      }
    });   



    
    // e.currentTarget.reset()

   
  };
  const handleImagesChanges = (e) => {
    const files =  Array.from(e.target.files)
    setPhotos(files)

  }

  const handleChange = (event) => {
    console.log(event.target)

    const {
      target: { value, name },
    } = event;

    setFormInput({
      ...formInput,
      [name]: name === "features" ? (typeof value === "string" ?  value?.split(',') : value) : value
    }
    
    );
  };
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };


  if (loading) {

    return(
      <Loader />

    )
  } else if (error) {
    <h1 className="text-center">Check you connection</h1>;
  } else {
    return (
      <div className="content-container assets-forms asset-view mt-20 max-w-5xl shadow rounded-xl">
        <div className="">

          <form onSubmit={handleUpdate}>

          <div>
            <label>Property Title</label>
            <input type="text" 
            id="name" name="name" 
            value={formInput?.name}
            onChange={handleChange}
         
             />
          </div> 

          <div>
            <label>Asset Category</label>
            <select
            value={formInput?.asset_category}
            onChange={handleChange}
              name="asset_category"
              id="asset_category"
           
            >
              <option value="Family Home">Family Home </option>
              <option value="Apartment Building"> Apartment Building </option>
              <option value="Condo & Villa">Condo & Villa </option>
              <option value="Water Front Home">Water Front Home  </option>
              <option value="Commercial">Commercial </option>

            </select>
          </div>

          <div>
            <label>Property Type</label>
            <select
            value={formInput?.property_type}
            onChange={handleChange}

              name="property_type"
              id="property_type"
           
            >
              {
                propertyTypes.map(item => (
                  <option value={item}>{item} </option>

                ))
              }
           
            </select>
          </div>

          <div>
            <label>City</label>
            <select
            value={formInput?.price}
            onChange={handleChange}

              name="city"
              id="city"
             
            >
              <option value="United Kingdom">United Kingdom </option>
              <option value="Dubai">Dubai </option>
              <option value="Tokyo">Tokyo </option>
              <option value="Berlin">Berlin  </option>
              <option value="Shangai">Shangai </option>
              <option value="Spain">Spain </option>

            </select>
          </div>

           <div>
                  <InputLabel id="demo-multiple-name-label">Features</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    name='features'
                    value={formInput?.features ?? []}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    {propertyFeatures.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        // style={getStyles(name, assetFeatures, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
              </div>
              <div>
            <label>City</label>
            <select
              name="city"
              id="city"
              onChange={handleChange}
              value={formInput?.city}
             
            >
              <option value="United Kingdom">United Kingdom </option>
              <option value="Dubai">Dubai </option>
              <option value="Tokyo">Tokyo </option>
              <option value="Berlin">Berlin  </option>
              <option value="Shangai">Shangai </option>
              <option value="Spain">Spain </option>

            </select>
          </div>

          <div>
            <label>Address</label>
            <input type="text" id="address" 
            onChange={handleChange}
            value={formInput?.address} name="address" />
          </div>

          <div>
            <label>Price</label>
            <input type="number"              
            onChange={handleChange}
            id="price" value={formInput?.price} name="price" 
            
             />
          </div>
           

          <div>
            <label>Tenure</label>
            <select
              name="tenure"
              id="tenure"
              onChange={handleChange}

              value={formInput?.tenure}
             
            >
              <option value="event Based">Event based </option>
              <option value="monthly">Monthly </option>
              <option value="quarterly">Quarterly </option>
              <option value="biannually">Biannually  </option>
              <option value="yearly">Yearly based </option>

            </select>
          </div>
          <div>
            <label>Sale Type</label>
            <select
              name="sale_type"
              value={formInput?.sale_type}
              onChange={handleChange}

              id="sale_type"
            
            >
              <option value="Rent">Rent </option>
              <option value="Sale">Sale </option>
            </select>
          </div>
          <h3>Details</h3>
          <div>
            {' '}
            <labal>Area</labal>
            <input type="text" name="area"
              onChange={handleChange}
              value={formInput?.area} />
          </div>
          <div>
            {' '}
            <labal>Number of Bedrooms</labal>
            <input 
              onChange={handleChange}
              type="number" 
              name="number_of_bedrooms" 
              value={formInput?.number_of_bedrooms}
             
              />
          </div>
          <div>
            {' '}
            <labal>Number of Bathrooms</labal>
            <input 
            type="number" 
            name="number_of_bathrooms" 
            onChange={handleChange}
            value={formInput?.number_of_bathrooms}
             />
          </div>
          <h4>Return & Management fees</h4>
          <div>
            {' '}
            <labal>status</labal>
            <input type="text"
              onChange={handleChange}
              name="status" value={formInput?.status}
            
             />
          </div> 


          <div>
            <label htmlFor="trix" className='text-base font-medium block'>Description</label>
            <input id="trix" type="hidden" name="description_body" 
              onChange={handleChange}
              value={formInput?.description_body} />
            <trix-editor input="trix" />

          </div>

          
          <div>
            {' '}
            <labal>image upload</labal>
            <input 
            multiple
            onChange={handleImagesChanges}
            type="file" name="images" 

/>
          </div>

         

          <div className='grid grid-cols-3 border-t border-gray-600 my-10 gap-5'>
            {photos?.map(photo => (
              <div className={`${photo?.name === mainPhoto && "border-2 border-gray-600"} cursor-pointer  w-40 h-40 rounded-lg overflow-hidden` }>
                <img onClick={()=> setMainPhoto(photo.name)} src={URL.createObjectURL(photo)} alt={photo.name} className={` w-full h-40 rounded-lg object-cover my-2`}/>
            </div>
            
            ))}

          </div>
          
          <div className='grid grid-cols-3 border-t border-gray-600 my-10 gap-5'>
          {asset.images_url
            ? asset.images_url.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt=""
                  className="w-full h-40 rounded-lg object-cover my-2"
                />
              ))
            : null}
        </div>

          {/* <button type='submit' className='bg-primary text-white px-4 py-2  rounded'>Update Post</button> */}
          <ClassicButton className="btn" type="submit"> Update Assets</ClassicButton>

          
          </form>



        

          
          
        </div>
      


      </div>
    );
  }
};

export default AssetView;
