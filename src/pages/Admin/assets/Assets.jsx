import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AssetCard from './AssetCard';
import { getAssets } from '../../../redux/actions/assets';
import { Button } from '@mui/material';
import AddAsset from './AddAsset';
import AppModal from '../../../components/modals/AppModal';
import { useNavigate } from 'react-router-dom';

const Assets = () => {
  const [open, setOpen] = useState(false)
    const navigate = useNavigate()
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
  const { offers } = useSelector((state) => state.assets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAssets());
  }, []);
  console.log(offers)
  return (
    <>
    
    <div className='md:pt-20'>
      <Button 
    sx={{
      marginLeft: "auto"
    }}
    variant='outlined' onClick={()=> setOpen(true)} >Add Property</Button>

        <ul>
          {offers.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}

        </ul>

      </div>
      <AppModal open={open} handleClose={handleClose} handleOpen={handleOpen}>
        <AddAsset handleClose={handleClose}/>
      </AppModal>
      </>
  );
};

export default Assets;
