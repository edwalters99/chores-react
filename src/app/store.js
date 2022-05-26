import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import childReducer from '../features/children/childSlice';
import favouriteReducer from '../features/favourites/favouriteSlice';
import choreReducer from '../features/chores/choreSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    child: childReducer,
    favourite: favouriteReducer,
    chore: choreReducer
  },
});
