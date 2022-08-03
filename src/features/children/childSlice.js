import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import childService from './childService';

const initialState = {
  children: [],
  child: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create new child
export const createChild = createAsyncThunk(
  'children/create',
  async (childData, thunkAPI) => {
    try {
      // get the token for the currrent user
      // thunkAPI.getState() method allows access fo data from other states
      const token = thunkAPI.getState().auth.user.token;

      return await childService.createChild(childData, token);
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString(); // cover different possible error JSON formats

      return thunkAPI.rejectWithValue(errorMessage); // sends error response back to component if api request fails
    }
  }
);

// Get User's Children
export const getChildren = createAsyncThunk(
  'children/getAll',
  async (_, thunkAPI) => {
    try {
      // get the token for the current user
      // thunkAPI.getState() method allows access fo data from other states
      const token = thunkAPI.getState().auth.user.token;

      return await childService.getChildren(token);
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString(); // cover different possible error JSON formats

      return thunkAPI.rejectWithValue(errorMessage); // sends error response back to component if api request fails
    }
  }
);

// Get Users Child
export const getChild = createAsyncThunk(
  'children/get',
  async (childId, thunkAPI) => {
    try {
      // get the token for the current user
      // thunkAPI.getState() method allows access fo data from other states
      const token = thunkAPI.getState().auth.user.token;

      return await childService.getChild(childId, token);
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString(); // cover different possible error JSON formats

      return thunkAPI.rejectWithValue(errorMessage); // sends error response back to component if api request fails
    }
  }
);

// Update child data
export const updateChild = createAsyncThunk(
  'chores/updateChild',
  async ({ childData, childId }, thunkAPI) => {
    try {
      // get the token for the current user
      // thunkAPI.getState() method allows access fo data from other states

      const token = thunkAPI.getState().auth.user.token;

      return await childService.updateChild(childData, childId, token);
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString(); // cover different possible error JSON formats

      return thunkAPI.rejectWithValue(errorMessage); // sends error response back to component if api request fails
    }
  }
);

// Delete Child
export const deleteChild = createAsyncThunk(
  'children/deleteChild',
  async (childId, thunkAPI) => {
    try {
      // get the token for the current user
      // thunkAPI.getState() method allows access fo data from other states
      const token = thunkAPI.getState().auth.user.token;
      return await childService.deleteChild(childId, token);
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString(); // cover different possible error JSON formats

      return thunkAPI.rejectWithValue(errorMessage); // sends error response back to component if api request fails
    }
  }
);

export const childSlice = createSlice({
  name: 'child',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createChild.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createChild.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.children.push(action.payload);
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
      .addCase(getChild.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChild.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.child = action.payload;
      })
      .addCase(getChild.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateChild.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateChild.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.child = action.payload;
        const index = state.children.findIndex(
          (child) => child._id === action.payload._id
        );
        state.children[index] = action.payload;
        // update front-end state without having to re-fetch from api
      })
      .addCase(updateChild.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteChild.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteChild.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        const deleteId = action.payload._id;
        const index = state.children.findIndex(
          (child) => child._id === deleteId
        );
        state.children.pop(index);
      })
      .addCase(deleteChild.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = childSlice.actions;
export default childSlice.reducer;
