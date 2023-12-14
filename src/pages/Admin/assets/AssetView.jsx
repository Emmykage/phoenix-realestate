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
              {asset.name}
            </span>
          </div>
          <div className="grid-display-assets border-b">
            <span>Price: </span>
            <span>
              {' '}
              {asset.price}
            </span>
          </div>
          <div className="grid-display-assets border-b">
            <span>Property Address: </span>
            <span>{ asset.address}</span>
          </div>
          <div className="grid-display-assets border-b">
            <span>tenure: </span>
            <span>{ asset.tenure}</span>
          </div>
          <div className="grid-display-assets border-b">
            <span>Sale Type: </span>
            <span>{asset.sale_type}</span>
          </div>
          <div className="grid-display-assets border-b">
            <span>Area: </span>
            <span>{asset.area}</span>
          </div>
          <div className="grid-display-assets border-b">
            <span>Bedrooms: </span>
            <span>{asset.number_of_bedrooms}</span>
          </div>
          <div className="grid-display-assets border-b">
            <span>Bathrooms: </span>
            <span>{asset.number_of_bathrooms}</span>
          </div>
          <div className="grid-display-assets border-b">
            <span>Status: </span>
            <span>{asset.status}</span>
          </div>
          
        </div>
      </div>
    );
  }
};

export default AssetView;
