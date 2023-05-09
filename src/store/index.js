import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies';
import userReducer from './users';

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        users: userReducer
    }
});