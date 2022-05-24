import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import childService from './childService';

const initialState = {
    children: [],
    child: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

export const childSlice = createSlice({
    name: 'child',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {}
});

export const { reset } = childSlice.actions;
export default childSlice.reducer;
