import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', () => {
    return fetch('/posts')
    .then((r) => r.json())
    .then((post) => post)
})

export const createPosts = createAsyncThunk('post/createPosts', ({title, description, link, user_id}) => {
    return fetch('/posts',{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title, description, link, user_id})
    })
    .then((resp) => resp.json())
    .then((data) => data)
})

export const deletePost = createAsyncThunk('post/deletePost', (id) => {
    fetch(`/posts/${id}`, {
        method: "DELETE",
        headers: {"Conent-Type": "application/json"}
    })
    return id
})

export const updatePost = createAsyncThunk('post/updatePost', ({id, newPost}) => {
    fetch(`/posts/${id}`, {
        method: "PATCH",
        headers:{ "Content-Type":"application/json"},
        body: JSON.stringify(newPost)
    })
    .then((resp) => resp.json)
    .then((post) => post)
    return {id, newPost}
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
            if(action.payload.errors){
                console.log(action.payload)
                state.errors = action.payload
            }
            else{
                console.log(action.payload)
                state.posts.push(action.payload)
            }
            
        })
        .addCase(deletePost.fulfilled, (state, {payload}) => {
            let index = state.posts.findIndex(({id}) => id === payload)
            state.posts.splice(index, 1)
        })
        .addCase(updatePost.fulfilled, (state, {payload}) => {
            let index = state.posts.findIndex((post) => post.id === payload.id)
            state.posts[index] = {
                ...state.posts[index],
                ...payload.newPost
            }
        })
    }
})

export default postSlice.reducer