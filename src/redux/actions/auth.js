import { createAsyncThunk } from '@reduxjs/toolkit';
import baseUrl from '../baseURL';
import { setToken, token } from '../../utils/localStore';

console.log(token())
const registerUser = createAsyncThunk('user/register', async (data, {rejectWithValue}) => {

  try {
    
    const response = await fetch(`${baseUrl}users`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',

      },
      body: JSON.stringify(data),
    })
    
    const result = await response.json()

    if(!response.ok){
      return rejectWithValue({message: result.message ?? "Failed to login"})
    }

    setToken(result.token)

    return result;
  } catch (error) {
    return rejectWithValue({message: error?.response.message ?? "Failed to login"})

  }
 
});
const userSession = createAsyncThunk('user/session', async (data, {rejectWithValue}) => {

  try {
    
    const response = await fetch(`${baseUrl}users/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',

      },
      body: JSON.stringify(data),
    })
    
    const result = await response.json()

    if(!response.ok){
      return rejectWithValue({message: result.message ?? "Failed to login"})
    }

    setToken(result.token)


    return result.user;
  } catch (error) {
    return rejectWithValue({message: error?.response.message ?? "Failed to login"})

  }
});

export const userProfile = createAsyncThunk('user/profile', async (data, {rejectWithValue}) => {
console.log("first", token())

  try{
    const response = await fetch(`${baseUrl}users/account`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token()}`,
  
      },
    })

    const result = await response.json()

    console.log(result)

    if(!response.ok){
      return rejectWithValue({message: result.message ?? "Failed to login"})
    }  
    return result;
  }catch (error) {
    return rejectWithValue({message: error?.response.message ?? "Failed to login"})

  }
  
});

export { registerUser, userSession };
