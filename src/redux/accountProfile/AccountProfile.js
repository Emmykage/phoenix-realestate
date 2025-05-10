import { createSlice } from "@reduxjs/toolkit"
import { createAccountProfile, getAccountProfile, updateAccountProfile } from "../actions/accountProfile";

const initialState = {
    loading: true,
    offers: [],
    error: false,
    account_profile: {}

}

const accountSlice = createSlice({
    name: 'account_profile',
    initialState,
    extraReducers: {
        [createAccountProfile.fulfilled]: (state, action) => {
            const response = action.payload;
            console.log(response)
            return{
                ...state,
                account_profile: response.data,
                error: false,
                loading: false
            }
        },
        [createAccountProfile.pending]: (state) => ({
            ...state,
            loading: true,
            error: false
        }),
        [createAccountProfile.rejected]: (state) => ({
            ...state,
            loading: false,
            error: true
        }),
        [getAccountProfile.fulfilled]: (state, action) => {
            const response = action.payload;

            return{
                ...state,
                account_profile: response,
                error: false,
                loading: false
            }
        },
        [getAccountProfile.pending]: (state) => ({
            ...state,
            loading: true,
            error: false
        }),
        [getAccountProfile.rejected]: (state) => ({
            ...state,
            loading: false,
            error: true
        }),


        [updateAccountProfile.fulfilled]: (state, action) => {
            const response = action.payload;
            console.log(response)
            return{
                ...state,
                account_profile: response.data,
                error: false,
                loading: false
            }
        },
        [updateAccountProfile.pending]: (state) => ({
            ...state,
            loading: true,
            error: false
        }),
        [updateAccountProfile.rejected]: (state) => ({
            ...state,
            loading: false,
            error: true
        })
       
    }
})


export default accountSlice.reducer