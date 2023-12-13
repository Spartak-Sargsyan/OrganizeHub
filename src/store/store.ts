import { configureStore } from '@reduxjs/toolkit'
import registerSlice from './registerSlice'
import tasksSlice from './tasksSlice'


export const store = configureStore({
    reducer: {
    auth:registerSlice,
      tasks: tasksSlice,
    },
});
