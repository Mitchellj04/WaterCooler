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
        .catch((error) => {
            console.log(isRejectedWithValue(error))
        })
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
    return fetch('/logout', {
        method: "DELETE"
    })
        .then((resp) => resp.json())
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
    errors: null
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
                    state.errors = action.payload
                    state.users = null
                }
                else {
                    state.users = action.payload
                    state.errors = null
                }
            })

            .addCase(login.fulfilled, (state, action) => {
                if (action.payload.errors) {
                    state.errors = action.payload
                    state.users = null
                }
                else {
                    state.users = action.payload
                }

            })
            .addCase(signup.fulfilled, (state, action) => {
                if (action.payload.errors) {
                    state.errors = action.payload
                }
                else {
                    state.users = action.payload
                }
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.users = action.payload
            })
            .addCase(editUser.fulfilled, (state, { payload }) => {
                console.log(payload)
                // const index = state.users.findIndex((user) => user.id === payload.id)
                // state.users[index] = {
                //     ...state.users[index],
                //     ...payload.updatedUser
                // }
            })
    }
})

export default userSlice.reducer