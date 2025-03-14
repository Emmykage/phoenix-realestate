import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../baseURL";
import { token } from "../../utils/localStore";

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
const getPosts = createAsyncThunk('blog/get_posts', async (_, {rejectWithValue}) => {
    console.log("get post")
    try {
        const response = await fetch(`${baseUrl}blogs`)

        const result = await response.json()

        if(!response.ok){
            return rejectWithValue({mesage: result.mesage})
        }

        console.log(result)
        return result

    } catch (error) {
        return rejectWithValue({mesage: result?.mesage || "something went wrong"})

    }
})


export {createPost, getPosts, getPost}