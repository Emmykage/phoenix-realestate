import { createSlice } from "@reduxjs/toolkit"
import { createPost, getPost, getPosts, updatePost } from "../actions/blog"

const initialState = {
    posts: [],
    post: {},
    loading: true
}

const postSlice = createSlice({
    name: "blog",
    initialState,
    extraReducers: {
        [createPost.fulfilled]: (state, action) => ({
            ...state,
            post: action.payload,
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
            loading: false,
            error: true
        }),
        [getPosts.fulfilled]: (state, action) => { 
            return{
            ...state,
            posts: action.payload ?? [],
            loading: false
        }},
        [getPost.pending]: (state) => { 
            return{
            ...state,
            loading: true
          
        }},
        [getPost.rejected]: (state, action) => { 
            return{
            ...state,
            loading: false

  
        }},
        [getPost.fulfilled]: (state, action) => { 
            return{
            ...state,
            post: action.payload ?? {},
            loading: false

        }},

        [updatePost.fulfilled]: (state, action) => ({
            ...state,
            post: action.payload,
            loading: false,
            error: false
        }),
        [updatePost.pending]: (state) => ({
            ...state,
            loading: true,
            error: false
        }),
        [updatePost.rejected]: (state) => ({
            ...state,
            loading: false,
            error: true
        }),
    }
})

export default postSlice.reducer
