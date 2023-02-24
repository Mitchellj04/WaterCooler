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
            console.log(payload)
            return state.categories.filter((category) => category.code === payload[0].code)
        })
    }
})

export default categorySlice.reducer