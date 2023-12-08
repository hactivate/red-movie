const Populer = ({ movie }) => {
  return (
    <div className="col-md-4 my-3">
      <div className="card bg-dark text-light">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="card-img-top card-poster"
          alt={`${movie.title} Poster`}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <h6 className="card-subtitle mb-2 ">release: {movie.release_date}</h6>
          <h6 className="card-subtitle mb-2 ">rating: {movie.vote_average}</h6>
        </div>
      </div>
    </div>
  );
};

export default Populer;
