import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    user:  '',
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

//AsyncThunk is a function that allows use of asynchronous data
// Imported in component/page that needs to send data up to global state

// Register New User
export const register = createAsyncThunk(
    'auth/register',
    async (user, thunkApi) => {
        console.log(user)
    }
    );

// Login User    
export const login = createAsyncThunk(
    'auth/login',
    async (user, thunkApi) => {
        console.log(user)
    }
    );

// config/setup
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
})

export default authSlice.reducer;
   