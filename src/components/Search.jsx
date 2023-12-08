import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../actions/movieActions';

const Search = () => {
  const [inputKeyword, setInputKeyword] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchMovies(inputKeyword));
  };

  return (
    <div className="row mt-3 mb-3">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control input-keyword"
            placeholder="Search Movie"
            value={inputKeyword}
            onChange={(e) => setInputKeyword(e.target.value)}
          />
          <button
            className="btn search-button btn-primary"
            type="button"
            id="button-addon2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
