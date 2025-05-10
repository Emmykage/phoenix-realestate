import { createAsyncThunk } from '@reduxjs/toolkit';
import baseUrl from '../baseURL';
import { token } from '../../utils/localStore';



const createPortfolio = createAsyncThunk('portfolio/create_portfolios', async (data) => {
  const response = await fetch(`${baseUrl}portfolios`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token()}`,

    },
    body: JSON.stringify(data),

  }).then((res) => res.json());

  return response;
});

const getPortfolios = createAsyncThunk('portfolios/get_portfolios', async () => {
  const response = await fetch(`${baseUrl}portfolios`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token()}`,

    },

  }).then((res) => res.json());

  return response;
});
const getPortfolio = createAsyncThunk('portfolios/get_portfolio', async (id) => {
  const response = await fetch(`${baseUrl}portfolios/${id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token()}`,

    },

  }).then((res) => res.json());

  return response;
});



const getInvestmentPortfolio = createAsyncThunk('portfolios/get_portfolio', async (id, {rejectWithValue}) => {
  
  try {
    const response = await fetch(`${baseUrl}portfolios/${id}/investment`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token()}`,
  
      },
  
    })
    
    const {data, message} =  await response.json()
  
    if(!response.ok) {
      return rejectWithValue({message: message || "something failed to fetch"} )
    }

  
    return data;
  } catch (error) {
    return rejectWithValue({message: error.message || "something fa"} )

  }
 
});
const userPorfolio = createAsyncThunk('user/pick_user', async(id) => {
  const response = await fetch(`${baseUrl}portfolios_user/${id}`, {
    method: "GET",
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token()}`
    }
  }).then(res => res.json())

  return response
})

const makePayment = createAsyncThunk('portfolio/make_payment', async (id) => {
  const response = await fetch(`${baseUrl}portfolios/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token()}`,
    },
    body: JSON.stringify({ paid: true }),

  }).then((res) => res.json());
  return response;
});

export { createPortfolio, getInvestmentPortfolio, getPortfolios, getPortfolio, makePayment, userPorfolio };
