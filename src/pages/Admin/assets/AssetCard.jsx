import React from 'react';
import { useNavigate } from 'react-router-dom';

const AssetCard = ({ asset }) => {
  const navigation = useNavigate();
  return (
    <li className="flex-justify-space border m-3 p-2 shadow radius">
      <div>
        {' '}
        <span>{asset.asset_type}</span>
        <p>{asset.title}</p>
      </div>
      <div>
        {' '}
        <span onClick={() => navigation(`/admin/assets/${asset.id}`)}> view</span>
        <p>delete</p>
      </div>
    </li>
  );
};

export default AssetCard;
