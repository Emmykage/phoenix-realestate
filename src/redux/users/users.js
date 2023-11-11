import { createSlice } from "@reduxjs/toolkit"
import { getUser, listUsers } from "../actions/users";

const initialState = {
    users: [],
    user: {},
    loading: true,
    error: false,
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
                    loading: false,
                    message: response.message
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
            const response = action.payload;

            if(action.payload.message){
                return {
                    ...state,
                    error: true,
                    loading: false,
                    message: response.message
                }
            }else{
                return{
                    ...state,
                user: response,
                loading: false,
                error: false
                }
            }
        },
        [getUser.pending]: (state)=> {
            console.log("loadiing...")

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
                error: true,
                message: "No internet"
            }
        }

    }
})
export default usersSlice.reducer