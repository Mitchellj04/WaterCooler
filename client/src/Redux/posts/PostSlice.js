import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', () => {
    return fetch('/posts')
    .then((r) => r.json())
    .then((post) => post)
})

export const createPosts = createAsyncThunk('post/createPosts', (data) => {
    return fetch('/posts',{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
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

export const createPostComment = createAsyncThunk('post/crearePostComment', (data) => {
    console.log(data)
    return fetch('/postComment', {
        method: "POST",
        headers: {"Content-Type": "Application/json"},
        body: JSON.stringify(data)
    })
    .then((resp) => resp.json())
    .then((data) => data) 
})

export const deletePostComment = createAsyncThunk('post/deletePostComment', (id) => {
    fetch(`/comment_delete/${id}`, {
        method: "DELETE",
        headers: {"Conent-Type": "application/json"}
    })
    return id
})
 
const initialState = {
    posts: [],
    errors: []
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
                state.errors = action.payload.errors
            }
            else{
                state.errors = []
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
        .addCase(createPostComment.fulfilled, (state, action) => {
            console.log(state.comments)
            let index = state.posts.findIndex((post) => post.id === action.payload.id)
            state.posts[index] = {
                ...state.posts[index],
                ...action.payload
            }
        })
        .addCase(deletePostComment.fulfilled, (state,action) => {

        })
    }
})

export default postSlice.reducer