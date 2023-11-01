import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAssets } from '../../../redux/actions/assets';
import Loader from '../../../components/loader/Loader';

const AssetView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { offers, loading, error } = useSelector((state) => state.assets);
  useEffect(() => {
    dispatch(getAssets());
  }, []);
  const asset = offers.find((offer) => offer.id == id);
  if (loading) {
    <Loader />;
  } else if (error) {
    <h1 className="text-center">Check you connection</h1>;
  } else {
    return (
      <div className="content-container asset-view">
        <div className="">
          <div className="grid-display-assets border-b">
            <span>Asset Class: </span>
            <span>
              {' '}
              {asset.asset_type}
            </span>
          </div>

          <div className="grid-display-assets border-b">
            <span>Asset Title: </span>
            <span>
              {' '}
              {asset.title}
            </span>
          </div>
          <div className="grid-display-assets border-b">
            <span>Description: </span>
            <span>{ asset.description}</span>
          </div>
          <div className="grid-display-assets border-b">
            <span>minimum_investment: </span>
            <span>{ asset.minimum_investment}</span>
          </div>
          <div className="grid-display-assets border-b">
            <span>Term: </span>
            <span>{asset.minimum_investment}</span>
          </div>
          <div className="grid-display-assets border-b">
            <span>Payment Schedule: </span>
            <span>{asset.payment_schedule}</span>
          </div>
          <div className="grid-display-assets border-b">
            <span>Overview Description: </span>
            <span>{asset.overview_description}</span>
          </div>
          <div className="grid-display-assets border-b">
            <span>Overview note: </span>
            <span>{asset.overview_note}</span>
          </div>
          <div className="grid-display-assets border-b">
            <span>Share in Excess: </span>
            <span>{asset.share_in_excess}</span>
          </div>
          <div className="grid-display-assets border-b">
            <span>Annual Flat Expense in %: </span>
            <span>{asset.annual_flat_expense}</span>
          </div>

        </div>
      </div>
    );
  }
};

export default AssetView;
