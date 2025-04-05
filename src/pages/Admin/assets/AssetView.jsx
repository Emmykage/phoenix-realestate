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
  console.log(asset)
  if (loading) {
    <Loader />;
  } else if (error) {
    <h1 className="text-center">Check you connection</h1>;
  } else {
    return (
      <div className="content-container asset-view mt-20 max-w-5xl bg-white p-4 shadow rounded-xl">
        <div className="">
          <div className="grid-display-assets border-b py-5">
            <span>Asset Class: </span>
            <span className='block'>
              {' '}
              {asset.asset_type}
            </span>
          </div>

          <div className="grid-display-assets border-b my-2">
            <span className='font-semibold'>Asset Title: </span>
            <p>
              {' '}
              {asset.name}
            </p>
          </div>
          <div className="grid-display-assets border-b my-2 py-2">
            <span className='font-semibold'>Price: </span>
            <p>
              {' '}
              {asset.price}
            </p>
          </div>
          <div className="grid-display-assets border-b py-2">
            <span>Property Address: </span>
            <p>{ asset.address}</p>
          </div>
          <div className="grid-display-assets border-b py-2">
            <span>tenure: </span>
            <p>{ asset.tenure}</p>
          </div>
          <div className="grid-display-assets border-b py-2">
            <span>Sale Type: </span>
            <p>{asset.sale_type}</p>
          </div>
          <div className="grid-display-assets border-b py-2">
            <span>Area: </span>
            <p>{asset.area}</p>
          </div>
          <div className="grid-display-assets border-b py-2">
            <span>Bedrooms: </span>
            <p>{asset.number_of_bedrooms}</p>
          </div>
          <div className="grid-display-assets border-b py-2">
            <span>Bathrooms: </span>
            <p>{asset.number_of_bathrooms}</p>
          </div>
          <div className="grid-display-assets border-b">
            <span>Status: </span>
            <p>{asset.status}</p>
          </div>
          
        </div>
      </div>
    );
  }
};

export default AssetView;
