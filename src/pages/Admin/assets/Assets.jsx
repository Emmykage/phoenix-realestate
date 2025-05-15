import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAssets } from '../../../redux/actions/assets';
import { Button } from '@mui/material';
import AddAsset from './AddAsset';
import AppModal from '../../../components/modals/AppModal';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';


const AssetList = () => {

    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { offers } = useSelector((state) => state.assets);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAssets());
    }, []);  

     
    const handleDel = (id) => {
  
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

    <>

     <div className='mt-10 flex justify-between'>
        <button onClick={() => navigate(-1)}><FaArrowLeft /> </button>
        <h2 className='my-2 text-4xl font-semibold'>Assets and Properties</h2>
    
      </div>

      <div className='mt-4 flex justify-between'>
        <Button 
          sx={{
            marginLeft: "auto"
          }}
          variant='outlined' onClick={()=> setOpen(true)} >Add Property</Button>
      </div>
      
      <div className="max-w-6xl mt-4 mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Available Properties</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {offers?.map((asset) => (
            <div
              key={asset.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={asset.images_url[0]}
                alt={asset.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">{asset.name}</h3>
                <div className="flex justify-between">
                  <button
                    onClick={() => navigate(`/admin/asset/${asset.id}`)}
                    className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700"
                  >
                    View
                  </button>
                  <button
                  onClick={() => handleDel(asset.id)}
                    className="bg-red-500 text-white text-sm px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          {offers?.length === 0 && (
            <p className="col-span-3 text-center text-gray-500">No assets found.</p>
          )}
        </div>
      </div>
        <AppModal open={open} handleClose={handleClose} handleOpen={handleOpen}>
        <AddAsset handleClose={handleClose}/>
      </AppModal>
    </>
  );
};

export default AssetList;
