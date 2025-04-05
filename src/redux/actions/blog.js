import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../baseURL";
import { token } from "../../utils/localStore";
const createPost = createAsyncThunk('blog/create_post', async (assetdata, { rejectWithValue }) => {
    try {
        const response = await fetch(`${baseUrl}blogs`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token()}`
            },
            body: assetdata
        });

        const {data} = await response.json();

        if (!response.ok) {
            return rejectWithValue({ message: data.message ?? "Something went wrong" });
        }

        return data;
    } catch (error) {
        return rejectWithValue({ message: error.message ?? "Something went wrong" });
    }
});

const updatePost = createAsyncThunk('blog/update-post', async ({id, formData}, { rejectWithValue }) => {
    try {
        const response = await fetch(`${baseUrl}blogs/${id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token()}`
            },
            body: formData
        });

        const {data} = await response.json();

        if (!response.ok) {
            return rejectWithValue({ message: data.message ?? "Something went wrong" });
        }

        return data;
    } catch (error) {
        return rejectWithValue({ message: error.message ?? "Something went wrong" });
    }
});
const getPost = createAsyncThunk('blog/getPost', async(id) => {
    try {
        const response = await fetch(`${baseUrl}blogs/${id}`)

        const {data} = await response.json()

        if(!response.ok){
            return rejectWithValue({mesage: result.mesage})
        }

        console.log(data)
        return data

    } catch (error) {
        return rejectWithValue({mesage: result?.mesage || "something went wrong"})

    }
})
const getPosts = createAsyncThunk('blog/get_posts', async (_, {rejectWithValue}) => {
    console.log("get post")
    try {
        const response = await fetch(`${baseUrl}blogs`)

        const {data} = await response.json()

        if(!response.ok){
            return rejectWithValue({mesage: result.mesage})
        }

        console.log(data)
        return data

    } catch (error) {
        return rejectWithValue({mesage: result?.mesage || "something went wrong"})

    }
})


const delPost = createAsyncThunk('blog/delete-post', async(id) => {
    try {
        const response = await fetch(`${baseUrl}blogs/${id}`,{
            method: "DELETE",
            headers:  {
                Authorization: `Bearer ${token()}`

            }}
        )

        const {message} = await response.json()

        if(!response.ok){
            return rejectWithValue({mesage: result.mesage})
        }
        return message

    } catch (error) {
        return rejectWithValue({mesage: result?.mesage || "something went wrong"})

    }
})


export {createPost, getPosts, getPost, updatePost, delPost}