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
const updateTransaction = createAsyncThunk("transaction/approve_transaction", async ({id, transaction}) => {
    const response = await fetch(`${baseUrl}transactions/${id}`,{
        method: "PATCH",
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token()}`,
        },

        body: JSON.stringify({transaction})
    }).then((res) => res.json())
    return response
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

const getTransaction = createAsyncThunk("wallet/get_transaction", async(id) => {
    const response = await fetch(`${baseUrl}transactions/${id}`, {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token()}`,
        },

    }).then((res) => res.json())
    return response
} )
export const getUserTransactions = createAsyncThunk("transactions/GET_USER_TRANSACTIONS", async(params, {rejectWithValue}) => {


    
    try {
        const response = await fetch(`${baseUrl}transactions/user`, {
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

    console.log(refinedParams)




    
    try {
        const response = await fetch(`${baseUrl}transactions?${refinedParams}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token()}`,
            },
    
        })

        const {data, message} = await response.json()
        console.log(data)
        if(!response.ok){
            return rejectWithValue({message: message || "failed to fetch user transactions"})
        }

        return data
    } catch (error) {

        return rejectWithValue({message: error?.message || "Something went wrong"})

        
    }
   
} )
export { createTransaction, getWallet, updateTransaction, getTransaction }