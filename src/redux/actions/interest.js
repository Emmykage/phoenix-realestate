import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../baseURL";
import { token } from "../../utils/localStore";

const createInterest = createAsyncThunk('interest/CREATE_INTEREST', async (interest, {rejectWithValue}) => {

  try {
    const response = await fetch(`${baseUrl}portfolio_interests`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token()}`,
  
      },
      body: JSON.stringify(interest),
  
    })
    
    const result = await response.json()
    if (!response.ok) {
      return rejectWithValue({message: result.message})
    }
    return response;

  } catch (error) {
    return rejectWithValue({message: error.message || 'Something went wrong'})
  }
  });

  export { createInterest };
