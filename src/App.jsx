import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from './actions/movieActions';
import Card from './components/Card';
import CardDetail from './components/CardDetail';
import Search from './components/Search';
import { getMovieList } from './components/popular/popular.service';
import Populer from './components/popular/Popular';
import LOGO from './assets/icons/Redmovie.svg';
import Hero from './components/Hero';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const dispatch = useDispatch();
  const { movieDetails, searchResults, loading, error } = useSelector((state) => state.movie);

  const handleShowDetails = (imdbId) => {
    dispatch(fetchMovieDetails(imdbId));
  };

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  return (
    <div className="container">
      <Hero />

      <div className="row mt-5">
        <div className="col">
          <img src={LOGO} alt="logo" />
        </div>
      </div>

      <Search />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="row movie-container">
        {((searchResults?.length ?? 0) > 0 ? searchResults : popularMovies)?.map((movie, index) =>
          searchResults?.length > 0 ? (
            <Card key={movie.imdbID} movie={movie} handleShowDetails={handleShowDetails} />
          ) : (
            <Populer key={index} movie={movie} />
          )
        )}
      </div>

      <div
        className="modal fade"
        id="movieDetailModal"
        tabIndex="-1"
        aria-labelledby="movieDetailModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="movieDetailModalLabel">
                Description Movie
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{movieDetails && <CardDetail movie={movieDetails} />}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
