import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movieDetails: null,
    searchResults: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchMovieStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMovieSuccess: (state, action) => {
      state.loading = false;
      state.movieDetails = action.payload;
    },
    fetchMovieFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    searchMoviesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    searchMoviesSuccess: (state, action) => {
      state.loading = false;
      state.searchResults = action.payload;
    },
    searchMoviesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchMovieStart,
  fetchMovieSuccess,
  fetchMovieFailure,
  searchMoviesStart,
  searchMoviesSuccess,
  searchMoviesFailure,
} = movieSlice.actions;
export default movieSlice.reducer;
