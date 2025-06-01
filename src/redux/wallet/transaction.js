import { createSlice } from "@reduxjs/toolkit";
import { updateTransaction, createTransaction, getTransaction, getTransactions, getUserTransactions } from "../actions/wallet";

const initialState = {
    transaction: {},
    transactions: [],
    loading: true,
    error: false,
    status: '',
    paid: false,
    fixedtransactions: [],
    capitalTransactions: []
}

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        loadTransaction: (state) =>({
            ...state
        }),
        reset: (state) => ({
            ...state,
            status: ""
        })
    },
    extraReducers: {
        [createTransaction.fulfilled]: (state, action) => {
             
            return{
            ...state,
            transaction: action.payload,
            loading: false,
            error: false,
            paid: true,
            

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
            error: true,
            message: action.payload



        }),
        [updateTransaction.fulfilled]: (state, action) => {
     
            return{
            ...state,
            loading: false,
            error: false,
            transaction: action.payload
        }},
        [updateTransaction.rejected]: (state) => {
     
            return {
            ...state,
            error: true,
            loading: false
        }},
        [updateTransaction.pending]: (state) => ({
            ...state,
            loading: true,
            error: false
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
       
        }),
        [getUserTransactions.fulfilled]: (state, action) => {

            // const withdrawalTransactions = action.payload?.filter(transaction => transaction.transaction_type === "withdrawal")

            const fixedIncomeTransactions = action.payload?.filter(transaction => transaction.portfolio?.portfolio_name === "fixed income") || []
            const capitalGrowthTransactions = action.payload?.filter(transaction => transaction.portfolio?.portfolio_name === "capital growth") || []

            return{

            
            ...state,
            loading: false,
            transactions: action.payload,
            fixedtransactions: fixedIncomeTransactions,
            capitalTransactions: capitalGrowthTransactions
            }
        }
        ,
        [getUserTransactions.pending]: (state) => ({
            ...state,
            loading: true,
       
        }),
        [getUserTransactions.rejected]: (state) => ({
            ...state,
            loading: false,
       
        }) ,
        [getTransactions.fulfilled]: (state, action) => {
            return{

            
            ...state,
            loading: false,
            transactions: action.payload,
            }
        },
        [getUserTransactions.pending]: (state) => ({
            ...state,
            loading: true,
       
        }),
        [getUserTransactions.rejected]: (state) => ({
            ...state,
            loading: false,
       
        })


    }, 
    
})

export default transactionSlice.reducer;
export const {loadTransaction, reset} = transactionSlice.actions