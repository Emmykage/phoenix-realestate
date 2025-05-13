import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAsset, getAssets } from '../../../redux/actions/assets';
import AppButton from '../../../components/buttons/Buttons';
import { SET_LOADER } from '../../../redux/app/app';
import { InputLabel, MenuItem, OutlinedInput, Select, useTheme } from '@mui/material';
import 'trix';
import 'trix/dist/trix.css';
import { propertyFeatures, propertyTypes } from './data/propertyTypes';
const AddAsset = ({
  handleClose,
}) => {
  const [toggleForm, setToggleForm] = useState(false);
  const [assetFeatures, setAssetFeatures] = useState([])
  const [photos, setPhotos] = useState()
  const [mainPhoto, setMainPhoto] = useState(null)
  const dispatch = useDispatch();

  const theme = useTheme();
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SET_LOADER(true))

  
    
    const formData = new FormData();

    formData.append('asset[name]', e.target.name.value)
    // formData.append('asset[images]', e.target.images.files[0])
    formData.append('asset[price]', e.target.price.value)
    formData.append('asset[asset_category]', e.target.asset_category.value)
    formData.append('asset[address]', e.target.address.value)
    formData.append('asset[tenure]', e.target.tenure.value)
    formData.append('asset[sale_type]', e.target.sale_type.value)
    formData.append('asset[area]', e.target.area.value)

    
    formData.append('asset[number_of_bedrooms]', e.target.number_of_bedrooms.value)
    formData.append('asset[number_of_bathrooms]', e.target.number_of_bathrooms.value)
    formData.append('asset[status]', e.target.status.value)
    formData.append('asset[city]', e.target.city.value)
    formData.append('asset[property_type]', e.target.property_type.value)
    formData.append('asset[description_body]', e.target.description.value)
    formData.append('asset[mainphoto]', mainPhoto)
    
    // formData.append('asset[features][]', assetFeatures)
    assetFeatures.forEach((item) => (
      formData.append('asset[features][]', item)
    ))

    

    Array.from(e.target.images.files).forEach((file, index) => (
      formData.append(`asset[photos][]`, file)
    ))

    const data = Object.fromEntries(formData)
    console.log(data)

    dispatch(createAsset(formData)).then(result => {
      if(createAsset.fulfilled.match(result)){
        dispatch(getAssets())

        dispatch(SET_LOADER(false))
        // setToggleForm(false)
        handleClose()
      }else{
        dispatch(SET_LOADER(false))

      }
    });   



    
    // e.currentTarget.reset()

   
  };


  const handleImagesChanges = (e) => {
    const files =  Array.from(e.target.files)
    setPhotos(files)

  }

  console.log(mainPhoto)



  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(name, personName, theme) {
    return {
      fontWeight: personName.includes(name)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
  }
  
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setAssetFeatures(
      // On autofill we get a stringified value.
      // value,
      typeof value === 'string' ? value.split(',') : value,
    );
  };


 
  

  // useEffect(() => {
  //   dispatch(SET_LOADER(false))

  // }, [])
  


  return (
    <div className="assets-forms">
      <div className="asset-div border b">

        <span onClick={() => setToggleForm(!toggleForm)}>Add Property</span>
        <form
 
        onSubmit={handleSubmit} 
        className={ ''}>
        <div>
            <label>Property Title</label>
            <input type="text" id="name" name="name" 
         
             />
          </div> 
          <div>
            <label>Asset Category</label>
            <select
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
        <InputLabel id="demo-multiple-name-label">Features</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={assetFeatures}
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
            <input type="text" id="address" name="address" />
          </div>

          <div>
            <label>Price</label>
            <input type="number" id="price" name="price" 
            
             />
          </div>
           

          <div>
            <label>Tenure</label>
            <select
              name="tenure"
              id="tenure"
             
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
            <input type="text" name="area" />
          </div>
          <div>
            {' '}
            <labal>Number of Bedrooms</labal>
            <input type="number" name="number_of_bedrooms"
             
              />
          </div>
          <div>
            {' '}
            <labal>Number of Bathrooms</labal>
            <input type="number" name="number_of_bathrooms" 
             />
          </div>
          <h4>Return & Management fees</h4>
          <div>
            {' '}
            <labal>status</labal>
            <input type="text" name="status" 
            
             />
          </div> 


          <div>
            <label htmlFor="trix" className='text-base font-medium block'>Description</label>
            <input id="trix" type="hidden" name="description" />
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

          <div className='grid grid-cols-4 gap-4'>
            {photos?.map(photo => (
              <div className={`${photo?.name === mainPhoto && "border-2 border-gray-600"} cursor-pointer  w-40 h-40 rounded-lg overflow-hidden` }>
                <img onClick={()=> setMainPhoto(photo.name)} src={URL.createObjectURL(photo)} alt={photo.name} className={`w-full h-full rounded`}/>
            </div>
            
            ))}

          </div>

          <p className='my-4 text-green-800'>Click to select cover photo</p>

          {/* <div>
            {' '}
            <labal>image</labal>
            <input type="text" name="images" value={assetForm.images} onChange={handleInput} />
          </div> */}

         

          <AppButton className="btn" type="submit"> Create Assets</AppButton>
        </form>
      </div>
 </div>
  );
};

export default AddAsset;
