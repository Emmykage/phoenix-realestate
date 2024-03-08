import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AssetCard from './AssetCard';
import { getAssets } from '../../../redux/actions/assets';
import { getUser } from '../../../redux/actions/users';
import { useNavigate } from 'react-router-dom';

const Assets = () => {
  const navigation = useNavigate()
  const { offers } = useSelector((state) => state.assets);
  const {user, error, message} = useSelector(state => state.users)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser())
    dispatch(getAssets());
  }, []);
  const login = () => {
    localStorage.setItem('phoenix_auth', null)
    navigation('/auth/admin/login')
  }
  // console.log(user)
  if(error){
    return(
      <div>
        <h1 className='text-center'>{message}</h1>
        <a onClick={login} className='cursor-pointer block text-center text-2xl font-medium text-blue'>Login</a>
      </div>
    )
  }
  return (
    <div>
      {offers.length < 1 && <h1 className='center my-5'>No Assets has been added</h1>}
      <ul>
        {offers.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}

      </ul>
    </div>
  );
};

export default Assets;
