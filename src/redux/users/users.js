import { createSlice } from "@reduxjs/toolkit"
import { getUser, listUsers } from "../actions/users";

const initialState = {
    users: [],
    user: {},
    loading: true,
    erroe: false,
    message: null
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: {
        [listUsers.fulfilled]: (state, action) => {
            const response = action.payload;

            if(response.message){
                return{
                    ...state,
                    error: true,
                    loading: false
                }
            }else{
                return{
                    ...state,
                    users: response,
                    error: false,
                    loading: false

                }
                
            }
        },
        [listUsers.rejected]: (state) => {
            return{
                ...state,
                error: true,
                loading: false
            }
        },
        [getUser.fulfilled]: (state, action) => {
            if(action.payload.message){
                return {
                    ...state,
                    error: true,
                    loading: false
                }
            }else{
                return{
                    ...state,
                user: action.payload,
                loading: false,
                error: false
                }
            }
        },
        [getUser.pending]: (state)=> {
            return{
                ...state,
                loading: true,
                error: false
            }


        },
        [getUser.rejected]: (state) => {
            return{
                ...state,
                loading: false,
                error: true
            }
        }

    }
})
export default usersSlice.reducer