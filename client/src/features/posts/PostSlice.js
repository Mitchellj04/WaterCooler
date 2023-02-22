import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', () => {
    return fetch('/posts')
    .then((r) => r.json())
    .then((post) => post)
})

export const createPosts = createAsyncThunk('post/createPosts', ({newPost}) => {
    return fetch('/posts',{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({newPost})
    })
    .then((resp) => console.log(resp))
    .then((data) => console.log(data))
})

export const deletePost = createAsyncThunk('post/deletePost', (id) => {
    fetch(`/posts/${id}`, {
        method: "DELETE",
        headers: {"Conent-Type": "application/json"}
    })
    return id
})
 
const initialState = {
    posts: [],
    errors: null
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
        .addCase(createPosts.fulfilled, (state, action) => {
            state.posts.push(action.payload)
        })
        .addCase(deletePost.fulfilled, (state, {payload}) => {
            let index = state.posts.findIndex(({id}) => id === payload)
            state.posts.splice(index, 1)
        })
    }
})

export default postSlice.reducer