import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

// FETCH ALL PROJECTS 
export const fetchProjects = createAsyncThunk('project/fetchProjects', () => {
    return fetch('/projects')
    .then((r) => r.json())
    .then((project) => project)
})

// CREATE NEW PROJECT
export const createProjects = createAsyncThunk('project/createProjects', ({newProject}) => {
    return fetch('/projects',{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({newProject})
    })
    .then((resp) => console.log(resp))
    .then((data) => console.log(data))
})

// DELETE INDIVIDUAL PROJECT
export const deleteProject = createAsyncThunk('project/deleteProject', (id) => {
    fetch(`/projects/${id}`, {
          method: "DELETE",
          headers: {'Content-Type' : 'application/json'}
        })
    return id
})

// UPDATE INDIVIDUAL PROJECT
export const updateProject = createAsyncThunk('project/updateProject', (id, data) => {
    return fetch(`/projects/${id}`, {
        method: "PATCH", 
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({data})
    })
    .then((resp) => console.log(resp))
    .then((data) => data)
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
        .addCase(deleteProject.fulfilled, (state, {payload}) => {
            let index = state.projects.findIndex(({id}) => id === payload)
            state.projects.splice(index, 1)
        })
        .addCase(updateProject.fulfilled, (state, {payload}) => {

        })
    }
})

export default projectSlice.reducer
export const { del } = projectSlice.actions