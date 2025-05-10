import { createSlice } from "@reduxjs/toolkit"
import { getInvestments } from "../actions/investment"

const initialState = {
    investments: [],
    loading: true,
    error: false
}


const investmentSlice = createSlice({
    name: "investment",
    initialState,
    extraReducers: {
        [getInvestments.fulfilled]: (state, action) => {
            return {
                ...state, 
                investments: action.payload,
                loading: false
            }
        },
        [getInvestments.rejected]: (state, action) => (
            {
                ...state, 
                message: action.payload.message,
                loading: false,
                error: true
            }
        ),
        [getInvestments.pending]: (state) => (
            {
                ...state, 
                error: false,
                loading: true
            }
        )
    }

})


export default investmentSlice.reducer