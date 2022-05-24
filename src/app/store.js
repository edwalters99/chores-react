import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import childReducer from '../features/children/childSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    child: childReducer
  },
});
