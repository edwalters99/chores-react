import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import choreService from './choreService';

const initialState = {
    chores: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

// Get child's chores
export const getChores = createAsyncThunk(
    'chores/getAll',
    async (childId, thunkAPI) => {
       
        try {
             // get the token for the current user 
             // thunkAPI.getState() method allows access fo data from other states
        const token = thunkAPI.getState().auth.user.token;
       
            return await choreService.getChores(childId, token)
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

// Create child's chore
export const createChore = createAsyncThunk(
    'chores/create',
    async ({choreData, childId}, thunkAPI) => {
       
        try {
             // get the token for the current user 
             // thunkAPI.getState() method allows access fo data from other states
             const token = thunkAPI.getState().auth.user.token;
       
            return await choreService.createChore(choreData, childId, token)
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

export const choreSlice = createSlice({
    name: 'chore',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder  
        .addCase(getChores.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getChores.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.chores = action.payload;
        })
        .addCase(getChores.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(createChore.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createChore.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.chores.push(action.payload);
        })
        .addCase(createChore.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});



export const { reset } = choreSlice.actions;
export default choreSlice.reducer;