import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk('user/fetchUser', () => {
    return fetch('/users')
    .then((r) => r.json())
    .then((user) => user)
})

const initialState = {
    users: null,
    errors: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }
})

export default userSlice.reducer