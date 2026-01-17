import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loader: false
}
const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        SET_LOADER: (state, action) => {
            return{
                ...state,
                loader: action.payload

            }
        }
    }
})


export const {SET_LOADER} = AppSlice.actions
export default AppSlice.reducer