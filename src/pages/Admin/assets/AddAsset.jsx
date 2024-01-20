import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAsset } from '../../../redux/actions/assets';

const AddAsset = () => {
  const [toggleForm, setToggleForm] = useState('false');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    
    const formData = new FormData();

    formData.append('asset[name]', e.target.name.value)
    formData.append('asset[image]', e.target.image.files[0])
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

    const data = Object.fromEntries(formData)
    dispatch(createAsset(formData));                                                                                                                                                  
    e.currentTarget.reset()
   
  };
  return (
    <div className="assets-forms">
      <div className="asset-div border">

        <span onClick={() => setToggleForm(!toggleForm)}>Add Property</span>
        <form
 
        onSubmit={handleSubmit} className={toggleForm && 'hide-form'}>
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
              <option value="Studio Apartment">Studio Apartment </option>
              <option value="Condo & Villa">Condo & Villa </option>
              <option value="Water Front Home">Water Front Home  </option>
              <option value="Cozy Home">Cozy Home </option>

            </select>
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
            {' '}
            <labal>image upload</labal>
            <input type="file" name="image" 
              // onChange={handleInputImage}
            />
          </div>
          {/* <div>
            {' '}
            <labal>image</labal>
            <input type="text" name="images" value={assetForm.images} onChange={handleInput} />
          </div> */}

         

          <button className="btn" type="submit"> create assets</button>
        </form>
      </div>

      <div className="asset-div mx-5"><span>Add Transport</span></div>
      <div className="asset-div"><span>Add Crypto</span></div>
      <div className="asset-div"><span>Add Art</span></div>
    </div>
  );
};

export default AddAsset;
