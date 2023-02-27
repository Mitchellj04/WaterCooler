import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

export const fetchAllUsers = createAsyncThunk('allUsers/fetchAllUsers', () => {
    return fetch('/users')
    .then((resp) => resp.json())
    .then((data) => data)
})

export const fetchUser = createAsyncThunk('allUser/fetchUser', (username) => {
    return fetch(`/users_filter/${username}`)
    .then((resp) => resp.json())
    .then((data) => data)
})

const initialState = {
    allUsers: [],
    errors: null
}

const allUserSlice = createSlice({
    name: 'allUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.allUsers = action.payload
            })
    }
})

export default allUserSlice.reducer