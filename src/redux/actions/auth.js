import { createAsyncThunk } from '@reduxjs/toolkit';
import baseUrl from '../baseURL';
import { setToken, token } from '../../utils/localStore';

const registerUser = createAsyncThunk('user/register', async (data, {rejectWithValue}) => {
  console.log(data)
  const formData = new FormData
  data?.user.first_name && formData.append("user[first_name]", data.user.first_name)
  data?.user.last_name && formData.append("user[last_name]", data.user.last_name)
  data?.user.email && formData.append("user[email]", data.user.email)
  data?.password && formData.append("user[password]", data.password)
  data?.role && formData.append("user[role]", data.user.role)
  data?.phone && formData.append("user[phone_no]", data.user.phone)
  data?.investment_purpose && formData.append("user[profile_attributes][investment_purpose]", data.investment_purpose)
  data?.investment_property && formData.append("user[profile_attributes][investment_property]", data.investment_property)
  data?.initial_investment && formData.append("user[profile_attributes][initial_investment]", data.initial_investment)
  data?.investor_type && formData.append("user[profile_attributes][investor_type]", data.investor_type)

  const dataO = Object.fromEntries(formData)
  // console.log(dataO)
  try {

    const response = await fetch(`${baseUrl}users`, {
      method: 'POST',
      
      body: formData,
    })
    
    const result = await response.json()

    if(!response.ok){

      console.log("error response", result)
      return rejectWithValue({message: result.message ?? "Failed to login"})
    }

    setToken(result.token)

    return result;
  } catch (error) {
    console.log("error response", result.response)


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
// console.log("first", token())

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


export const userlogOut = createAsyncThunk("log-out", async() => {
  
  localStorage.removeItem("phoenix_auth")
  return {message: "logout successful"}

  

})

export { registerUser, userSession };
