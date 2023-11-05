import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAsset } from '../../../redux/actions/assets';

const AddAsset = () => {
  const [toggleForm, setToggleForm] = useState('false');
  const dispatch = useDispatch();
  const [assetForm, setAssetForm] = useState({
    asset_name: '', minimum_investment: null, term: '', asset_type: 'other', title: '', description: '', share_in_excess: '', annual_mangt_fee: '', annual_flat_expense: '', overview_description: '', overview_note: '',
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

        <span onClick={() => setToggleForm(!toggleForm)}>Add Asset</span>
        <form onSubmit={handleSubmit} className={toggleForm && 'hide-form'}>
          <div>
            <label>Asset Type</label>
            <select
              name="asset_type"
              onChange={handleInput}
            >
              <option value="other"> other</option>
              <option value="art">Art</option>
              <option value="Real Estate">Real Estate</option>
              <option value="venture_capital">Venture Capital</option>
              <option value="private equity">Private Equity</option>
              <option value="private_credit">Private Credit Estate</option>
              <option value="crypto">Crypto</option>
              <option value="short_term_note">Short Term Note</option>
              <option value="legal">Legal</option>
              <option value="transportation">Transportation</option>
            </select>

          </div>
          <div>
            <label>Asset</label>
            <input type="text" id="asset_name" name="asset_name" value={assetForm.asset_name} onChange={handleInput} />
          </div>
          <div>
            <label>Min. Investment</label>
            <input type="text" id="minimum_investment" name="minimum_investment" value={assetForm.minimum_investment} onChange={handleInput} />
          </div>

          <div>
            <label>Payment Schedule</label>
            {/* <input type="text" name="payment_schedule" value={assetForm.payment_schedule} onChange={handleInput} /> */}
            <select
              name="payment_schedule"
              id="payment_schedule"
              value={assetForm.payment_schedule}
              onChange={handleInput}
            >
              <option value="event Based">Event based </option>
              <option value="monthly">Monthly </option>
              <option value="quarterly">Quarterly </option>
              <option value="biannually">Biannually  </option>
              <option value="yearly">Yearly based </option>

            </select>
          </div>
          <h3>Details</h3>
          <div>
            {' '}
            <labal>Title</labal>
            <input type="text" name="title" value={assetForm.title} onChange={handleInput} />
          </div>
          <div>
            {' '}
            <labal>Description</labal>
            <input type="text" name="description" value={assetForm.description} onChange={handleInput} />
          </div>
          <h4>Return & Management fees</h4>
          <div>
            {' '}
            <labal>Annual Management fee</labal>
            <input type="number" name="annual_mangt_fee" value={assetForm.annual_mangt_fee} onChange={handleInput} />
          </div>
          <div>
            {' '}
            <labal>Share In Excess Profit</labal>
            <input type="number" name="share_in_excess" value={assetForm.share_in_excess} onChange={handleInput} />
          </div>

          <h4>Schedule</h4>
          <div>
            <label>Term</label>
            <input type="text" name="term" id="term" value={assetForm.term} onChange={handleInput} />
          </div>
          <h4>Structure</h4>
          <div>
            <label>Annual Flat Expense</label>
            <input type="number" name="annual_flat_expense" id="term" value={assetForm.annual_flat_expense} onChange={handleInput} />
          </div>

          <h3>Overview</h3>
          <div>
            <label>Description</label>
            <textarea onChange={handleInput} name="overview_description" id="" cols="30" rows="10" value={assetForm.overview_description} />
          </div>
          <div>
            <label>Overview note</label>
            <textarea onChange={handleInput} name="overview_note" id="" cols="30" rows="10" value={assetForm.overview_note} />
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
