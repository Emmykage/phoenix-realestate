import { createSlice } from "@reduxjs/toolkit"
import { createPost, getPost, getPosts } from "../actions/blog"

const initialState = {
    posts: [],
    post: {}
}

const postSlice = createSlice({
    name: "blog",
    initialState,
    extraReducers: {
        [createPost.fulfilled]: (state, action) => ({
            ...state,
            posts: action.payload,
            loading: false,
            error: false
        }),
        [createPost.pending]: (state) => ({
            ...state,
            loading: true,
            error: false
        }),
        [createPost.rejected]: (state) => ({
            ...state,
            loading: true,
            error: true
        }),
        [getPosts.fulfilled]: (state, action) => { 
            return{
            ...state,
            posts: action.payload
        }},
        [getPost.pending]: (state) => { 
            return{
            ...state,
          
        }},
        [getPost.rejected]: (state, action) => { 
            return{
            ...state,
  
        }},
        [getPost.fulfilled]: (state, action) => { 
            return{
            ...state,
            post: action.payload
        }}
    }
})

export default postSlice.reducer
