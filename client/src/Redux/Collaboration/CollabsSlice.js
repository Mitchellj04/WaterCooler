import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

export const createCollab = createAsyncThunk('collab/createCollab', ({newCollab}) => {

    fetch('/collaborations', {
        method: "POST", 
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(newCollab)
    })
    .then((resp) => resp.json())
    .then((data) => data)
    return {newCollab}
})


const initialState = {
    collabs: [],
    errors: []
}

const collabSlice = createSlice({
    name: 'collabs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createCollab.fulfilled, (state, action) => {
            state.collabs = action.payload
        })
    }
})

export default collabSlice.reducer
