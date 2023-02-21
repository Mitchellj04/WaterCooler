import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', () => {
    return fetch('/posts')
    .then((r) => r.json())
    .then((post) => post)
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
    }
})

export default postSlice.reducer