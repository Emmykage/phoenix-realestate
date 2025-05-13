import { createAsyncThunk } from '@reduxjs/toolkit';
import baseUrl from '../baseURL';
import { token } from '../../utils/localStore';

const listUsers = createAsyncThunk('users/GET_CLIENTS', async (_, {rejectWithValue}) => {

  try {
    const response = await fetch(`${baseUrl}users`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token()}`,
      },
    })

    const result = await response.json()
    console.log(result)

    if(!response.ok){
      return rejectWithValue({message: result.message})
    }
    return result;
  } catch (error) {
    
  }
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
