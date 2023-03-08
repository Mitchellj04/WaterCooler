import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategory = createAsyncThunk('category/fetchCategory', () => {
    return fetch('/categories')
    .then((r) => r.json())
    .then((category) => category)
})

export const fetchCategoryType = createAsyncThunk('category/fetchCategoryType', (type) => {
    return fetch(`/categories_filter/${type}`)
    .then((resp) => resp.json())
    .then((category) => category)
})

export const createCategory = createAsyncThunk('category/createCategory', (code) => {
    return fetch('/categories', {
        method: "POST", 
        headers: {'Content-Type':"Application/json"},
        body: JSON.stringify(code)
    })
    .then((resp) => resp.json())
    .then((data) => data)
})
const initialState = {
    categories: [],
    errors: []
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategory.fulfilled, (state, action) => {
            state.categories = action.payload
        })
        .addCase(fetchCategoryType.fulfilled, (state, {payload}) => {
            state.categories = payload
        })
        .addCase(createCategory.fulfilled, (state, action) => {
            if(action.payload.errors){
                console.log(action.payload)
                state.errors = action.payload.errors
            }
            else{
                console.log(action.payload)
                state.categories.push(action.payload)
                state.errors = []
            }
        })
    }
})

export default categorySlice.reducer