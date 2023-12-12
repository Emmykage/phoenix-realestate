
import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../baseURL";
const token = () => JSON.parse(localStorage.getItem('phoenix_auth')).token;

const withdrawEarning = createAsyncThunk('earning/earning_transactions', async (amount) => {
    const response = await fetch(`${baseUrl}earning_transactions`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token()}`,
  
      },
      body: JSON.stringify(amount),
  
    }).then((res) => res.json());
    return response;
  });

  export { withdrawEarning };
