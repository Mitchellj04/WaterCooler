import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

// FETCH ALL PROJECTS 
export const fetchProjects = createAsyncThunk('project/fetchProjects', () => {
    return fetch('/projects')
    .then((r) => r.json())
    .then((project) => project)
})

// CREATE NEW PROJECT
export const createProjects = createAsyncThunk('project/createProjects', (data) => {
    console.log(data)
   return fetch('/projects',{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then((resp) => resp.json())
    .then((data) => data)
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
export const updateProject = createAsyncThunk('project/updateProject', ({id, newProject}) => {
    fetch(`/projects/${id}`, {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({newProject})
        })
    .then((resp) => resp.json())
    .then(data => data)
    return {id, newProject}

})

export const fetchProject = createAsyncThunk('project/fetchProject', (id) => {
    return fetch(`/projects/${id}`)
    .then((resp) => resp.json())
    .then((data) => data)
})

export const addProjectCollab = createAsyncThunk('project/addProjectCollab', (data) => {
    return fetch('/projects_collab', {
        method: "POST",
        headers: {"Content-Type": "Application/json"},
        body: JSON.stringify(data)
    })
    .then((resp) => resp.json())
    .then((data) => data)
})

export const acceptedCollab = createAsyncThunk('project/acceptedCollab', (data) => {
    return fetch('/update_collab', {
        method: "PATCH",
        headers: {"Content-Type": "Application/json"},
        body: JSON.stringify(data)
    })
    .then((resp) => resp.json())
    .then((data) => data)
    
})

const initialState = {
    projects: [],
    errors: []
}

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProjects.fulfilled, (state, action) => {
            state.projects = action.payload
            state.errors = []
        })
        .addCase(createProjects.fulfilled, (state, action) => {
            if(action.payload.errors){
                console.log(state.errors)
                state.errors = action.payload.errors
            }
            else{
              state.projects.push(action.payload)  
              state.errors = ["Successful"]
            }
        })    
        .addCase(createProjects.rejected, (state, action) => {
            state.projects.errors = action.payload
        })
        .addCase(deleteProject.fulfilled, (state, {payload}) => {
            const index = state.projects.findIndex(({id}) => id === payload)
            state.projects.splice(index, 1)
        })
        .addCase(updateProject.fulfilled, (state, {payload}) => {
            console.log(payload)
            console.log(state.projects.findIndex((project) => project.id === payload.id))
            const index = state.projects.findIndex((project) => project.id === payload.id)
            state.projects[index] = {
                ...state.projects[index],
                ...payload.newProject
            }
        })
        .addCase(fetchProject.fulfilled, (state, action) => {
                console.log(action.payload)
                state.projects.filter()
        })
        .addCase(addProjectCollab.fulfilled, (state, {payload}) => {
            console.log(payload)
            const index = state.projects.findIndex((project) => project.id === payload.id)
            state.projects[index] = {
                ...state.projects[index],
                ...payload
            }
        })
        .addCase(acceptedCollab.fulfilled, (state, {payload}) => {
            console.log(payload.id)
            const index = state.projects.findIndex((project) => project.id === payload.id)
            state.projects[index] = {
                ...state.projects[index],
                ...payload
            }
        })
    }
})

export default projectSlice.reducer
export const { del } = projectSlice.actions