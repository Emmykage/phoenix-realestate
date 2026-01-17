import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../baseURL";
import { token } from "../../utils/localStore";

const createTransaction = createAsyncThunk("transaction/create_transaction", async (faormdata, {rejectWithValue}) => {


    try {
        const response = await fetch(`${baseUrl}transactions`, {
            method: "POST",
            headers: {
                
                Authorization: `Bearer ${token()}`,
            },
    
            body: faormdata,

        })
        const {data, message} = await response.json()


        if(!response.ok) {
            return rejectWithValue({message: message || "failed to make transaction"})
        }
        return data
    } catch (error) {
        return rejectWithValue({message: error.message || "Soething went wrong"})

    }
   
})
const updateTransaction = createAsyncThunk("transaction/UPDATE_TRANSACTION", async ({id, transaction}, {rejectWithValue}) => {
    try {
        

    const response = await fetch(`${baseUrl}transactions/${id}`,{
        method: "PATCH",
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token()}`,
        },

        body: JSON.stringify({transaction})
    })
    const result = await response.json()

    console.log("result ====>",result)

    if(!response.ok){
        return rejectWithValue({message: result.message ?? "failed to update transaction"})
    }
    return result.message

        } catch (error) {
  return rejectWithValue({message: error.message ?? "Soemthing went wrong:failed to update transaction"})

    }
})
const getWallet = createAsyncThunk("wallet/get_wallet", async() => {
    const response = await fetch(`${baseUrl}wallets`, {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token()}`,
        },

    }).then((res) => res.json())
    return response
} )

const getTransaction = createAsyncThunk("wallet/GET_TRANSACTION", async(id, {rejectWithValue}) => {
    try {
        
  
    const response = await fetch(`${baseUrl}transactions/${id}`, {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token()}`,
        },

    })
    
    const result = await response.json()

    if(!response.ok){
        return rejectWithValue({message: result.message ?? "failed to fetch data"})
    }
    return result.data
      } catch (error) {
         return rejectWithValue({message: error.message ?? "Something: failed to fetch data"})

    }
    
} )
export const getUserTransactions = createAsyncThunk("transactions/GET_USER_TRANSACTIONS", async(params, {rejectWithValue}) => {
    const refinedParams = new URLSearchParams(params).toString()
    console.log(params, refinedParams)
    try {
        const response = await fetch(`${baseUrl}transactions/user?${refinedParams}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token()}`,
            },
    
        })

        const {data, message} = await response.json()
        if(!response.ok){
            return rejectWithValue({message: message || "failed to fetch user transactions"})
        }

        return data
    } catch (error) {

        return rejectWithValue({message: error?.message || "Something went wrong"})

        
    }
   
} )
export const getTransactions = createAsyncThunk("transactions/GET_TRANSACTIONS", async(params, {rejectWithValue}) => {

    const refinedParams = new URLSearchParams(params).toString()

   
    try {
        const response = await fetch(`${baseUrl}transactions?${refinedParams}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token()}`,
            },
    
        })

        const {data, message} = await response.json()

        if(!response.ok){
            return rejectWithValue({message: message || "failed to fetch user transactions"})
        }

        return data
    } catch (error) {

        return rejectWithValue({message: error?.message || "Something went wrong"})

        
    }
   
} )
export { createTransaction, getWallet, updateTransaction, getTransaction }