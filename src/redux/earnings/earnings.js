import { createSlice } from "@reduxjs/toolkit"
import { withdrawEarning } from "../actions/earnings"

const initialState = {
    earning_transaction: {},
    loading: false,
    error: false,
    message: ""
}

const earningSlice = createSlice({
    initialState,
    name: "earnings",
    extraReducers: {
        [withdrawEarning.fulfilled]: (state, action)=>{

            return{
                ...state,
                earning_transaction: action.payload,
                loading: false,
                error: false,
                message: "success"
            }

        },
        [withdrawEarning.pending]:(state) => ({
            ...state,
            loading: true,
            error: false
        }) ,
        [withdrawEarning.rejected]:(state) => ({
            ...state,
            loading: false,
            error: true
        })
    }
})
export default earningSlice.reducer