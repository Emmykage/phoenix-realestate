import { createAsyncThunk } from '@reduxjs/toolkit';
import baseUrl from '../baseURL';

const token = () => JSON.parse(localStorage.getItem('phoenix_auth')).token;
const listUsers = createAsyncThunk('user/get_clients', async () => {
  const response = await fetch(`${baseUrl}users`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token()}`,
    },
  }).then((res) => res.json());
  return response;
});

const getUser = createAsyncThunk('user/get_account', async () => {
  const response = await fetch(`${baseUrl}users/account`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token()}`,

    },

  }).then((res) => res.json());
  console.log(response)
  return response;
});


const patchUser = createAsyncThunk('user/update_user', async() => {
  const response = await fetch(`${baseUrl}users`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token()}`,
    }
  }).then((res) => res.json());
  return response
})
export { listUsers, getUser, patchUser };
