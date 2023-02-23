import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategory = createAsyncThunk('category/fetchCategory', () => {
    return fetch('/categories')
    .then((r) => r.json())
    .then((category) => category)
})

export const fetchCategoryType = createAsyncThunk('category/fetchCategoryType', (type) => {
    return fetch(`/categories/${type}`)
    .then((resp) => resp.json())
    .then((category) => category)
})

const initialState = {
    categories: [],
    errors: null
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
            state.categories.filter((category) => category.code === payload)
        })
    }
})

export default categorySlice.reducer