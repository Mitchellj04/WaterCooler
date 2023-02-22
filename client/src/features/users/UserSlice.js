import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk('user/fetchUser', () => {
    return fetch('/user')
    .then((r) => r.json())
    .then((user) => user)
})

export const login = createAsyncThunk('user/login', ({username, password}) => {
    return fetch('/login', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password})
    })
    .then((r) => r.json()) 
    .catch((error) => {
        console.log(isRejectedWithValue(error))
    })
    .then((data) => data)
   
})

export const signup = createAsyncThunk('user/singup', ({username, password, age, name}) => {
    return fetch('/users', {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({username, password, age, name})
    })
    .then((resp) => resp.json())
    .then((data) => data)
})

export const logout = createAsyncThunk('user/logout', () => {
    return fetch('/logout', {
        method: "DELETE"
    })
    .then((resp) => resp.json())
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
            
            if(action.payload.errors){
                state.errors = action.payload
                state.users = null
            }
            else {
                state.users = action.payload
                state.errors = null
            }
        })
       
        .addCase(login.fulfilled, (state, action) => {
            if(action.payload.errors){
                state.errors = action.payload 
                state.users = null
            }
            else {
                state.users = action.payload
            }
            
        })
        .addCase(signup.fulfilled, (state, action) => {
            if(action.payload.errors){
                state.errors = action.payload
            }
            else{
               state.users = action.payload
            }
        })
        .addCase(logout.fulfilled, (state, action) => {
                state.users = action.payload
        })
    }
})

export default userSlice.reducer