import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './features/UserSlice';

export const store = configureStore({
  reducer: {
    user : counterReducer,
  },
})