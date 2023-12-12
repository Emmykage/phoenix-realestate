import { createSlice } from "@reduxjs/toolkit"
import { createInterest } from "../actions/interest"

const initialState = {
    interests: [] ,
    interest: {},
    loading: false,
    error: true
}

const interestSlice = createSlice({
    name: "interst",
    initialState,
    extraReducers: {
        [createInterest.fulfilled]: (state, action) => {

            return{
                ...state,
                interest: action.payload,
                loading: false
            }
        },
        [createInterest.pending]: (state) => ({

                ...state,
                loading: true,
                error: false
   
        }),
        [createInterest.rejected]: (state) => ({

            ...state,
            loading: false,
            error: true

    })
    }
})

export default interestSlice.reducer