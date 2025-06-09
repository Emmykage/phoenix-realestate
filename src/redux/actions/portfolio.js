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

export const updatePortfolio = createAsyncThunk('portfolio/UPDATE_PORTFOLIO', async ({id, portfolio}) => {
  try {
    const response = await fetch(`${baseUrl}portfolios/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token()}`,

    },
    body: JSON.stringify({portfolio}),

  })
  
  const result = await response.json()

  if(!response.ok){
    return rejectWithValue({message: "OPeration Failed"})
  }


  return result;
      
  } catch (error) {
        return rejectWithValue({message: "Operation Failed"})

  }
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


export const getUserPortfolios = createAsyncThunk('portfolios/GET_USER_PORTFOLIO', async (_, {rejectWithValue}) => {
 try {const response = await fetch(`${baseUrl}portfolios/user`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token()}`,

    },

  })
  
  const {data} = await response.json()

  if(!response.ok) {
    return rejectWithValue({message: "Something went wrong"})
  }

  return data
}
  catch(error){
    return rejectWithValue({message: error?.message ?? "Something went wrong"})

  }
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



const getInvestmentPortfolio = createAsyncThunk('portfolios/get_investmentportfolio', async (id, {rejectWithValue}) => {
  
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


export const userReinvest = createAsyncThunk('user/RE_INVEST', async(id, {rejectWithValue}) => {

  try {
    
  const response = await fetch(`${baseUrl}portfolios/${id}/re_invest`, {
    method: "GET",
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token()}`
    }
  })
  const result = await response.json()

  if(!response.ok) {
    console.log(result.message)
    return rejectWithValue({message: result.message || "failed to reinvest"})
  }


  return result

  
  } catch (error) {
        return rejectWithValue({message: error.message || "Soething went wrong: Failed to reinvest"})

  }
})


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
