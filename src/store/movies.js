import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        list: [
            { id: 1, title: 'Pulp fiction'},
            { id: 2, title: 'Casper'}
        ]
    },
    reducers: {
        addMovie: (state, actions) => {
            const newMovie = actions.payload
            state.list = [...state.list, newMovie];
        }
    }
});


export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;