import { create } from "@mui/material/styles/createTransitions";
import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

// FETCH USER
export const fetchUser = createAsyncThunk('user/fetchUser', () => {
    return fetch('/user')
        .then((r) => r.json())
        .then((user) => user)
})

// CREATE SESSION
export const login = createAsyncThunk('user/login', ({ username, password }) => {
    return fetch('/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
        .then((r) => r.json())
        .then((data) => data)

})

// CREATE NEW USER 
export const signup = createAsyncThunk('user/singup', ({ username, password, age, name }) => {
    return fetch('/users', {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username, password, age, name })
    })
        .then((resp) => resp.json())
        .then((data) => data)
})

// DELETE SESSION
export const logout = createAsyncThunk('user/logout', () => {
        fetch('/logout', {
        method: "DELETE"
    })
        .then((resp) => resp.json())
        .then((data) => data)
})

// EDIT USER 
export const editUser = createAsyncThunk('user/editUSer', ({ id, updatedUser }) => {
    fetch(`/users/${id}`, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({updatedUser})
    })
        .then((resp) => resp.json())
        .then((user) => user)
        return updatedUser 
})

const initialState = {
    users: [],
    loggedIn: false,
    errors: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.rejected, (state, action) => {
                state.errors = action.payload
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                if (action.payload.errors) {
                    state.users = null
                }
                else {
                    state.users = action.payload
                    state.errors = []
                }
            })

            .addCase(login.fulfilled, (state, action) => {
                if (action.payload.errors) {
                    console.log(action.payload)
                    state.errors = action.payload.errors
                    state.loggedIn = false
                    state.users = null
                }
                else {
                    state.loggedIn = true
                    state.users = action.payload
                    state.errors = []
                }

            })
            .addCase(signup.fulfilled, (state, action) => {
                if (action.payload.errors) {
                    state.errors = action.payload
                }
                else {
                    state.users = action.payload
                    state.loggedIn = true
                }
            })
            .addCase(logout.fulfilled, (state, {payload}) => {
                console.log('loggedOut')
                console.log({payload})
                state.users = null
                state.loggedIn = false
            })
            .addCase(editUser.fulfilled, (state, { payload }) => {
                state.users = payload

            })
    }
})

export default userSlice.reducer