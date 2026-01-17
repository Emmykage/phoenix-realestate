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
    if(!response.ok){
      return rejectWithValue({message: result.message ?? "Failed to fetch users"})
    }
    return result;
  } catch (error) {
    return rejectWithValue({message:  "Something went wrong: Failed to fetch users"})

  }

});

export const getClient = createAsyncThunk('user/GET_CLIENT', async (id, {rejectWithValue}) => {
  try {
    const response = await fetch(`${baseUrl}users/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token()}`,
  
      },
  
    })
    
    const result = await response.json()

    if(!response.ok){
      return rejectWithValue({message: result.message ?? "failed to get user"})
    }

    return result;

  } catch (error) {
    return rejectWithValue({message: "Something went wrong "})

  }
 

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
export { listUsers, patchUser };
