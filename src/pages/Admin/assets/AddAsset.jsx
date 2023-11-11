import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAsset } from '../../../redux/actions/assets';

const AddAsset = () => {
  const [toggleForm, setToggleForm] = useState('false');
  const dispatch = useDispatch();
  const [assetForm, setAssetForm] = useState({
    name: '', address: "", tenure: '', asset_type: 'other', area: '', number_of_bedrooms: '', number_of_bathrooms: '', status: ''
  });

  const handleInput = (e) => {
    setAssetForm({

      ...assetForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAsset(assetForm));
  };
  return (
    <div className="assets-forms">
      <div className="asset-div border">

        <span onClick={() => setToggleForm(!toggleForm)}>Add Property</span>
        <form onSubmit={handleSubmit} className={toggleForm && 'hide-form'}>
          
          <div>
            <label>Property Title</label>
            <input type="text" id="name" name="name" value={assetForm.name} onChange={handleInput} />
          </div>
          <div>
            <label>Address</label>
            <input type="text" id="address" name="address" value={assetForm.address} onChange={handleInput} />
          </div>

          <div>
            <label>Price</label>
            <input type="number" id="price" name="price" value={assetForm.price} onChange={handleInput} />
          </div>

          <div>
            <label>Tenure</label>
            <select
              name="tenure"
              id="tenure"
              value={assetForm.tenure}
              onChange={handleInput}
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
              value={assetForm.sale_type}
              onChange={handleInput}
            >
              <option value="event Based">Rent </option>
              <option value="monthly">Sale </option>
            </select>
          </div>
          <h3>Details</h3>
          <div>
            {' '}
            <labal>Area</labal>
            <input type="text" name="area" value={assetForm.area} onChange={handleInput} />
          </div>
          <div>
            {' '}
            <labal>Number of Bedrooms</labal>
            <input type="number" name="number_of_bedrooms" value={assetForm.number_of_bedrooms} onChange={handleInput} />
          </div>
          <div>
            {' '}
            <labal>Number of Bathrooms</labal>
            <input type="number" name="number_of_bathrooms" value={assetForm.number_of_bathrooms} onChange={handleInput} />
          </div>
          <h4>Return & Management fees</h4>
          <div>
            {' '}
            <labal>status</labal>
            <input type="text" name="status" value={assetForm.status} onChange={handleInput} />
          </div>
          <div>
            {' '}
            <labal>image</labal>
            <input type="text" name="images" value={assetForm.images} onChange={handleInput} />
          </div>

         

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
