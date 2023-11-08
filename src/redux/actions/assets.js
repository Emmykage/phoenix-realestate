import { createAsyncThunk } from '@reduxjs/toolkit';
import baseUrl from '../baseURL';


const token = () => JSON.parse(localStorage.getItem('phoenix_auth')).token;

const createAsset = createAsyncThunk('asset/create_asset', async (data) => {
  const response = await fetch(`${baseUrl}assets`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token()}`,

    },
    body: JSON.stringify(data),
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

  }).then((res) => res.json());
  // console.log(response)
  return response;
});
const getAsset = createAsyncThunk('asset/get_assets', async (id) => {
  const response = await fetch(`${baseUrl}assets/${id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,

    },

  }).then((res) => res.json());
  return response;
});

export { createAsset, getAssets, getAsset };
