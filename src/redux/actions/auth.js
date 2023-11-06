import { createAsyncThunk } from '@reduxjs/toolkit';
import baseUrl from '../baseURL';


const registerUser = createAsyncThunk('user/register', async (data) => {
  const response = await fetch(`${baseUrl}users`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',

    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
  return response;
});
const userSession = createAsyncThunk('user/session', async (data) => {
  const response = await fetch(`${baseUrl}users/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',

    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  return response;
});

export { registerUser, userSession };
