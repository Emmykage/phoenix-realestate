import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { delAsset, getAssets } from '../../../redux/actions/assets';
import { SET_LOADER } from '../../../redux/app/app';

const AssetCard = ({ asset }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch()

  const handleDel = (id) => {
    console.log("deleted: ", id)
    dispatch(SET_LOADER(true))

    dispatch(delAsset(id)).then(result =>{
      if(delAsset.fulfilled.match(result)){
        dispatch(SET_LOADER(false))
        dispatch(getAssets())
      }else{
        dispatch(SET_LOADER(false))

      }
    })

  }
  return (
    <li className="flex-justify-space border m-3 p-2  shadow radius">
      <div>
        {' '}
        <span>{asset.name}</span>
        <p>{asset.address}</p>
      </div>
      <div className='flex justify-end gap-10'>
        {' '}
        <span onClick={() => navigation(`/admin/asset/${asset.id}`)}> view</span>
        <span onClick={() => handleDel(asset.id)} className='bg-primary px-3 py-2 text-white'>delete</span>
      </div>
    </li>
  );
};

export default AssetCard;
