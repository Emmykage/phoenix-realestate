import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../baseURL";
const token = () => JSON.parse(localStorage.getItem('phoenix_auth')).token;

const createInterest = createAsyncThunk('interest/create_portfolio_interest', async ({portfolio_id, interest}) => {
    const response = await fetch(`${baseUrl}portfolios/${portfolio_id}/portfolio_interests`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token()}`,
  
      },
      body: JSON.stringify({interest}),
  
    }).then((res) => res.json());
    console.log(response)
    return response;
  });

  export { createInterest };
