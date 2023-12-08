import axios from 'axios';

const apiKey = 'beb5d07ab1c47079d762d8b864b190a4';
const baseUrl = 'https://api.themoviedb.org/3';

export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`);
  return movie.data.results;
};
