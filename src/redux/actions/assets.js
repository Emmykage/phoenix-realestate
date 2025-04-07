import { createAsyncThunk } from '@reduxjs/toolkit';
import baseUrl from '../baseURL';
import { token } from '../../utils/localStore';


const createAsset = createAsyncThunk('asset/create_asset', async (assetData, {rejectWithValue}) => {
  
  try {
    const response = await fetch(`${baseUrl}assets`, {
      method: 'POST',
      headers: {
         Authorization: `Bearer ${token()}`,
  
      },
      body: assetData,
    })
    
    const {data, message} = await response.json()
    if(!response.ok){
      return rejectWithValue({message: message })

    }
    return data;
  } catch (error) {
    return rejectWithValue({message: error.message ?? "Something went wrong"})

  }
 
});

const getAssets = createAsyncThunk('asset/get_assets', async (_, {rejectWithValue}) => {
console.log("first")
  try {
    const response = await fetch(`${baseUrl}assets`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token()}`,
  
      },
  
    })
    
    const {data, message} =  await response.json()

    if(!response.ok){
      return rejectWithValue({message: message })

    }
  
    return data;
  } catch (error) {
    return rejectWithValue({message: error.message ?? "Something went wrong"})

  }
  
});
const getAsset = createAsyncThunk('asset/get_assets', async (id, {rejectWithValue}) => {
  try {
    const response = await fetch(`${baseUrl}assets/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token()}`,
  
      },
  
    })
    
    const {data, message} = await response.json()

    if(!response.ok){
      return rejectWithValue({message: message })

    }


    return data
  } catch (error) {
    return rejectWithValue({message: error.message ?? "Something went wrong"})
    
  }
  
});




export const delAsset = createAsyncThunk('asset/delete-asset', async (id, {rejectWithValue}) => {
  console.log("Clicked")
  try {
    const response = await fetch(`${baseUrl}assets/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token()}`,
  
      }
  
    })
    
    const {message} = await response.json()

    if(!response.ok){
      return rejectWithValue({message: message })

    }


    return message
  } catch (error) {
    if(error.response){
      return rejectWithValue({message: error.response.message ?? "Failed to delete"})

    }
    return rejectWithValue({message: error.message ?? "Something went wrong"})
    
  }
  
});
export { createAsset, getAssets, getAsset };
