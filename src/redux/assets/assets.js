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
                loading: response.assets,
                error: false
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
            return{
            ...state,
            loading: false,
            offers: action.payload,
            assets: action.payload.slice(0, 2),
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
    }
})


export default assetSlice.reducer