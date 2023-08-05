import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../featues/usersSlice';
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
