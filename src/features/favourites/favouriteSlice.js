import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import favouriteService from './favouriteService';

const initialState = {
    favourites: [],
    favourite: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

// Create new favourite
export const createFavourite = createAsyncThunk(
    'favourites/create',
    async (favouriteData, thunkAPI) => {
       
        
        try {
             // get the token for the currrent user 
             // thunkAPI.getState() method allows access fo data from other states
        const token = thunkAPI.getState().auth.user.token;
 
            return await favouriteService.createFavourite(favouriteData, token)
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

// Get User's Favourites
export const getFavourites = createAsyncThunk(
    'favouritesgetAll',
    async (_, thunkAPI) => {
       
        try {
             // get the token for the current user 
             // thunkAPI.getState() method allows access fo data from other states
        const token = thunkAPI.getState().auth.user.token;
       
            return await favouriteService.getFavourites(token)
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

export const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(createFavourite.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createFavourite.fulfilled, (state) => {
            state.isLoading = false;
            state.isSuccess = true;
        })
        .addCase(createFavourite.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(getFavourites.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getFavourites.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.children = action.payload;
        })
        .addCase(getFavourites.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});

export const { reset } = favouriteSlice.actions;
export default favouriteSlice.reducer;