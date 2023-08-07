import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reccommend: null,
    original: null,
    newDisney: null,
    trending: null,
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.reccommend = action.payload.reccommend;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
            state.newDisney = action.payload.newDisney;
        },
    },
});

export const { setMovies } = movieSlice.actions;

export const selectReccommend = (state) => state.movie.reccommend;
export const selectOriginal = (state) => state.movie.original;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
