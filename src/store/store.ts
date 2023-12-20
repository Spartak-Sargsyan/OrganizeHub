import { configureStore } from '@reduxjs/toolkit'
import registerSlice from './registerSlice'
import tasksSlice from './tasksSlice'
import userSlice from './userSlice';
import loginSlice from './loginSlice';


export const store = configureStore({
    reducer: {
      auth:registerSlice,
      tasks: tasksSlice,
      user: userSlice,
      login: loginSlice
    },
});
  