import { createAsyncThunk } from '@reduxjs/toolkit';
import baseUrl from '../baseURL';
import { token } from '../../utils/localStore';


const createAsset = createAsyncThunk('asset/create_asset', async (data) => {
  const response = await fetch(`${baseUrl}assets`, {
    method: 'POST',
    headers: {
       Authorization: `Bearer ${token()}`,

    },
    body: data,
  }).then((res) => res.json());
  return response;
});

const getAssets = createAsyncThunk('asset/get_assets', async (data) => {
  const response = await fetch(`${baseUrl}assets`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,

    },

  })
  
  const result =  await response.json()

  console.log(result, response)
  return result;
});
const getAsset = createAsyncThunk('asset/get_assets', async (id) => {
  const response = await fetch(`${baseUrl}assets/${id}`, {
    method: 'GET',
    headers: {
      // 'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,

    },

  }).then((res) => res.json());
  return response;
});

export { createAsset, getAssets, getAsset };
