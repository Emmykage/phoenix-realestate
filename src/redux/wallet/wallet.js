import { createSlice } from "@reduxjs/toolkit";
import { getWallet } from "../actions/wallet";
// import {create}

const initialState = {
    wallet: {},
    loading: true,
    error: false,
    status: '',
    paid: false,
}

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    extraReducers: {
        [getWallet.fulfilled]: (state, action) => {
             return{
            ...state,
            wallet: action.payload,
            loading: false
        }}, 
        [getWallet.pending]: (state) => ({
            ...state,
            loading: true,


        }), 
        [getWallet.rejected]: (state) => ({
            ...state,
            loading: false


        }),

    }
})

export default walletSlice.reducer;