import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk('project/fetchProjects', () => {
    return fetch('/projects')
    .then((r) => r.json())
    .then((project) => project)
})

export const createProjects = createAsyncThunk('project/createProjects', ({newProject}) => {
    return fetch('/projects',{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({newProject})
    })
    .then((resp) => console.log(resp))
    .then((data) => console.log(data))
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
        .addCase(createProjects.fulfilled, (state, action) => {
            state.projects.push(action.payload)
        })
    }
})

export default projectSlice.reducer