// src/actions/movieActions.js
import axios from 'axios';
import {
  fetchMovieStart,
  fetchMovieSuccess,
  fetchMovieFailure,
  searchMoviesStart,
  searchMoviesSuccess,
  searchMoviesFailure,
} from '../store/movieSlice';

const API_KEY = '5d980e99'; 

export const fetchMovieDetails = (id) => async (dispatch) => {
  try {
    dispatch(fetchMovieStart());

    const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
    dispatch(fetchMovieSuccess(response.data));
  } catch (error) {
    dispatch(fetchMovieFailure(error.message));
  }
};

export const searchMovies = (query) => async (dispatch) => {
  try {
    dispatch(searchMoviesStart());

    const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    dispatch(searchMoviesSuccess(response.data.Search));
  } catch (error) {
    dispatch(searchMoviesFailure(error.message));
  }
};
