import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../baseURL";
const token = () => JSON.parse(localStorage.getItem('phoenix_auth')).token

const createPost = createAsyncThunk('blog/create_post', async (data) => {
    const response = fetch(`${baseUrl}blogs`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token()}`
        },
        body: data
    }).then((res) => res.json())
    return response
})
const getPost = createAsyncThunk('blog/getPost', async(id) => {
    const response = fetch(`${baseUrl}blogs/${id}`).then(res => res.json())
   
    return response
})
const getPosts = createAsyncThunk('blog/get_posts', async () => {
    const response = fetch(`${baseUrl}blogs`).then((res) => res.json())
    return response
})


export {createPost, getPosts, getPost}