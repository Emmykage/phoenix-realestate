import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../baseURL";

export const getInvestments = createAsyncThunk("investments/get-investment", async(_, {rejectWithValue}) => {
    try {
        const response = await fetch(`${baseUrl}investments`)

        const {data, message} = await response.json()

        if(!response.ok){
         return rejectWithValue({message: message || "failed to fetch data"})

        }
        return data
    } catch (error) {
        return rejectWithValue({message: error?.message || "Something went wrong"})
        
    }
})