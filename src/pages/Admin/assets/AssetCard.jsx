import React from 'react';
import { useNavigate } from 'react-router-dom';

const AssetCard = ({ asset }) => {
  const navigation = useNavigate();
  return (
    <li className="flex-justify-space border m-3 p-2 shadow radius">
      <div>
        {' '}
        <span>{asset.name}</span>
        <p>{asset.address}</p>
      </div>
      <div>
        {' '}
        <span onClick={() => navigation(`/admin/asset/${asset.id}`)}> view</span>
        <span>delete</span>
      </div>
    </li>
  );
};

export default AssetCard;
