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

// Create new child
export const createChild = createAsyncThunk(
    'children/create',
    async (childData, thunkAPI) => {
       
        
        try {
             // get the token for the currrent user 
             // thunkAPI.getState() method allows access fo data from other states
        const token = thunkAPI.getState().auth.user.token;
        console.log(token)
            return await childService.createChild(childData, token)
        }   catch (error) {
            const errorMessage = 
                (error.response && 
                error.response.data && 
                error.response.data.message) || 
                error.message ||
                error.toString() // cover different possible error JSON formats
                
                return thunkAPI.rejectWithValue(errorMessage);  // sends error response back to component if api request fails
            } 
    }
);

// Get User's Children
export const getChildren = createAsyncThunk(
    'children/getAll',
    async (_, thunkAPI) => {
       
        try {
             // get the token for the currrent user 
             // thunkAPI.getState() method allows access fo data from other states
        const token = thunkAPI.getState().auth.user.token;
       
            return await childService.getChildren(token)
        }   catch (error) {
            const errorMessage = 
                (error.response && 
                error.response.data && 
                error.response.data.message) || 
                error.message ||
                error.toString() // cover different possible error JSON formats
                
                return thunkAPI.rejectWithValue(errorMessage);  // sends error response back to component if api request fails
            } 
    }
);

export const childSlice = createSlice({
    name: 'child',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(createChild.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createChild.fulfilled, (state) => {
            state.isLoading = false;
            state.isSuccess = true;
        })
        .addCase(createChild.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(getChildren.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getChildren.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.children = action.payload;
        })
        .addCase(getChildren.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});

export const { reset } = childSlice.actions;
export default childSlice.reducer;
