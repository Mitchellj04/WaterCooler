import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategory = createAsyncThunk('category/fetchCategory', () => {
    return fetch('/categories')
    .then((r) => r.json())
    .then((category) => category)
})

const initialState = {
    category: null,
    errors: null
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategory.fulfilled, (state, action) => {
            state.category = action.payload
        })
    }
})

export default categorySlice.reducer