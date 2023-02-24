import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComment = createAsyncThunk('comments/fetchComment', () => {
    return fetch('/comments')
    .then((resp) => resp.json())
    .then((comments) => comments)
})

export const createComment = createAsyncThunk('comments/createComment', (comment) => {
    return fetch('/comments', {
        method: "POST",
      headers: {"Content-Type": "Application/json"},
      body: JSON.stringify(comment)
    })
    .then((resp) => resp.json())
    .then((comments) => comments)
})


const initialState = {
    comments: [],
    errors: null
}

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchComment.fulfilled, (state, action) => {
            state.comments = action.payload
        })
        .addCase(createComment.fulfilled, (state, {payload}) => {
            state.comments.push(payload)
        })
   
    }
})







export default commentSlice.reducer