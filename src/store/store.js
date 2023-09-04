import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slice/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})
