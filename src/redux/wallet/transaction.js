import { createSlice } from "@reduxjs/toolkit";
import { approveTransaction, createTransaction, getTransaction } from "../actions/wallet";

const initialState = {
    transaction: "",
    loading: true,
    error: false,
    status: '',
    paid: false,
}

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        loadTransaction: (state) =>({
            ...state
        })
    },
    extraReducers: {
        [createTransaction.fulfilled]: (state, action) => {
                if(action.payload.error){
                    return{
                        ...state,
                        error: true,
                        loading: false,
                        paid: false
                    }
                }
            return{
            ...state,
            transaction: action.payload,
            loading: false,
            error: false,
            paid: true,
            status: "pay was successful"
            

        }}, 
        [createTransaction.pending]: (state, action) => {
   
            return{
            ...state,
            loading: true,
            paid: false



        }}, 
        [createTransaction.rejected]: (state, action) => ({
            ...state,
            loading: false,
            paid: false



        }),
        [approveTransaction.fulfilled]: (state) => {
     
            return{
            ...state,
            loading: false,
            status: "success"
        }},
        [approveTransaction.rejected]: (state) => {
     
            return {
            ...state,
            status: "failed",
            loading: false
        }},
        [approveTransaction.pending]: (state) => ({
            ...state,
            loading: true,
            status: "pending"
        }),

        [getTransaction.fulfilled]: (state, action) => ({
            ...state,
            loading: false,
            transaction: action.payload
        })
        ,
        [getTransaction.pending]: (state) => ({
            ...state,
            loading: true,
       
        }),
        [getTransaction.rejected]: (state) => ({
            ...state,
            loading: false,
       
        })


    }
})

export default transactionSlice.reducer;
export const {loadTransaction} = transactionSlice.actions