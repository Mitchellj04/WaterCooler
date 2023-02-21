import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk('project/fetchProjects', () => {
    return fetch('/projects')
    .then((r) => r.json())
    .then((project) => project)
})

const initialState = {
    projects: [],
    errors: null
}

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProjects.fulfilled, (state, action) => {
            state.projects = action.payload
        })
    }
})

export default projectSlice.reducer