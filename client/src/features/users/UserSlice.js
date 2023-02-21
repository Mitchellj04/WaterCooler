import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    .then((data) => data)
})

export const signup = createAsyncThunk('signup/singup', ({userData}) => {
    return fetch('/signup', {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({userData})
    })
    .then((resp) => console.log(resp))
    .then((data) => console.log(data))
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
        .addCase(fetchUser.rejected, (state, action) => {
            state.errors = action.payload
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            
            if(action.payload.errors ){
                state.errors = action.payload
            }
            else {
                state.users = action.payload
            }
        })
       
        .addCase(login.fulfilled, (state, action) => {
            state.users = action.payload
        })
        .addCase(signup.fulfilled, (state, action) => {
            state.user.push(action.payload)
        })
    }
})

export default userSlice.reducer