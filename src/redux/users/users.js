import { createSlice } from "@reduxjs/toolkit"
import { getClient, getUser, listUsers, pickUser, userPorfolio } from "../actions/users";

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
    reducers: {
        updateUser: (state, action) => {
            const value = action.payload.target.value
            const name = action.payload.target.name
            return{
                ...state,
                user: {
                    ...state.user,
                    [name]: value
                }
            }

        }
    },
    extraReducers: {
        [listUsers.fulfilled]: (state, action) => {
            const response = action.payload;
   
           
                return{
                    ...state,
                    users: response.data,
                    error: false,
                    loading: false

                }
                
        
        },
        [listUsers.rejected]: (state, action) => {
            
            return{
                ...state,
                error: true,
                message: action.payload.message,
                loading: false
            }
        },
        [getUser.fulfilled]: (state, action) => {
            const response = action.payload;
            console.log(response)
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
        },

         [getClient.fulfilled]: (state, action) => {
            const response = action.payload;
          
                return{
                    ...state,
                user: response.data,
                loading: false,
                error: false
                }
        
        },
        [getClient.pending]: (state)=> {

            return{
                ...state,
                loading: true,
                error: false
            }


        },
        [getClient.rejected]: (state, action) => {

            console.log(action.payload)
            
            return{
                ...state,
                loading: false,
                error: true,
                message: action.payload?.message
            }
        },

        
        // [userPorfolio.fulfilled]: (state, action) => {
        //     const response = action.payload;
        //     if(action.payload.message){
        //         return {
        //             ...state,
        //             error: true,
        //             loading: false,
        //             message: response.message
        //         }
        //     }else{
        //         return{
        //             ...state,
        //         user: response,
        //         loading: false,
        //         error: false
        //         }
        //     }
        // },
        // [userPorfolio.rejected]: (state) => {
            
        //     return{
        //         ...state,
        //         loading: false,
        //         error: true,
        //         message: "No internet"
        //     }
        // },
        // [userPorfolio.pending]: (state)=> {

        //     return{
        //         ...state,
        //         loading: true,
        //         error: false
        //     }


        // }
       

    }
})
export default usersSlice.reducer
export const {updateUser} = usersSlice.actions