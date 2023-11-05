import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AssetCard from './AssetCard';
import { getAssets } from '../../../redux/actions/assets';

const Assets = () => {
  const { offers } = useSelector((state) => state.assets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAssets());
  }, []);
  return (
    <div>
      <ul>
        {offers.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}

      </ul>
    </div>
  );
};

export default Assets;
