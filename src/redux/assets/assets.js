import { createSlice } from "@reduxjs/toolkit"
import { createAsset, getAsset, getAssets } from "../actions/assets"

const initialState = {
    assets: [],
    loading: true,
    offers: [],
    error: false,
    asset: {}

}

const assetSlice = createSlice({
    name: 'asset',
    initialState,
    extraReducers: {
        [createAsset.fulfilled]: (state, action) => {
            const response = action.payload;
            return{
                ...state,
                asset: response.assets,
                error: false,
                loading: false
            }
        },
        [createAsset.pending]: (state) => ({
            ...state,
            loading: true,
            error: false
        }),
        [createAsset.rejected]: (state) => ({
            ...state,
            loading: false,
            error: true
        }),
        [getAssets.fulfilled]: (state, action) => {
            const response = action.payload
            
            return{
                ...state,
                loading: false,
                offers: response?.data,
                assets: response?.data.slice(0, 2),
                error: false,                 
            
    
          }},

          [getAssets.rejected]: (state) => ({
            ...state,
            loading: false,
            error: true,
          }),
          [getAssets.pending]: (state) => ({
            ...state,
            loading: true,
            error: false,
      
          }),

          [getAsset.fulfilled]: (state, action) => {
            const response = action.payload
            
            return{
                ...state,
                loading: false,
                asset: response?.data,
                error: false,                 
            
    
          }},

          [getAsset.rejected]: (state) => ({
            ...state,
            loading: false,
            error: true,
          }),
          [getAsset.pending]: (state) => ({
            ...state,
            loading: true,
            error: false,
      
          }),
    }
})


export default assetSlice.reducer