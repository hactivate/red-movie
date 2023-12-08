import React from 'react';

const Card = ({ movie, handleShowDetails }) => (
  <div key={movie.imdbID} className="col-md-4 my-3">
    <div className="card bg-dark text-light">
      <img src={movie.Poster} className="card-img-top card-poster" alt={`${movie.Title} Poster`} />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <h6 className="card-subtitle mb-2">{movie.Year}</h6>
        <button
          className="btn btn-primary modal-detail-button mt-2"
          data-bs-toggle="modal"
          data-bs-target="#movieDetailModal"
          onClick={() => handleShowDetails(movie.imdbID)}
        >
          Show Details
        </button>
      </div>
    </div>
  </div>
);
export default Card;
