import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../baseURL";
import { token } from "../../utils/localStore";

export const createAccountProfile = createAsyncThunk('account/profile', async (account_profile, {rejectWithValue}) => {
  console.log(account_profile)
  try {
    const response = await fetch(`${baseUrl}account_profiles`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
         Authorization: `Bearer ${token()}`,
  
      },
      body: JSON.stringify(account_profile)
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


export const updateAccountProfile = createAsyncThunk('account/profile', async (account_profile, {rejectWithValue}) => {
        const id = account_profile.account_profile.id

    try {
      const response = await fetch(`${baseUrl}account_profiles/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
           Authorization: `Bearer ${token()}`,
    
        },
        body: JSON.stringify(account_profile)
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
  


export const getAccountProfile = createAsyncThunk('account/profile', async (account_profile, {rejectWithValue}) => {
    try {
      const response = await fetch(`${baseUrl}account_profiles`)
      
      const {data, message} = await response.json()
      if(!response.ok){
        return rejectWithValue({message: message })
      }
      
      return data;
    } catch (error) {
      return rejectWithValue({message: error.message ?? "Something went wrong"})
  
    }
   
  });