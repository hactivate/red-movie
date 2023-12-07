import React from 'react';
import axios from 'axios';

const apiKey = '5d980e99';

const Content = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [data, setData] = React.useState([]);

  const handleSearch = () => {
    if (!searchTerm) {
      return;
    }

    axios({
      method: 'get',
      url: `https://www.omdbapi.com/?t=${searchTerm}&apikey=${apiKey}`,
    }).then((response) => {
      setData(response.data);
    });

    setSearchTerm('');
  };

  return (
    <div className="h-screen bg-slate-800 w-full pt-7">
      <div className="w-full flex items-center justify-center">
        <input
          type="text"
          placeholder="Search movie..."
          className="text-[19px] mr-4 outline-none rounded-md p-2 w-[40%]"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button
          className="border border-white rounded-md p-2 text-white font-bold"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="mt-10 w-full flex items-center justify-center text-white font-bold flex-wrap">
        <div>
          <img src={data.Poster} alt="Poster" className="border border-white rounded-lg" />
        </div>
        <div className="ml-5 bg-slate-700 p-2 rounded-md">
          <h1>Title : {data.Title}</h1>
          <div className="pt-2">
            <p>Director : {data.Director}</p>
          </div>
          <div className="pt-2">
            <p>Genre : {data.Genre}</p>
          </div>
          <div className="pt-2">
            <p>Year : {data.Year}</p>
          </div>
          <div className="pt-2">
            <p>Country : {data.Country}</p>
          </div>
          <div className="pt-2">
            <p>Actors : {data.Actors}</p>
          </div>
          <div className="pt-2">
            <p>Language : {data.Language}</p>
          </div>
          <div className="pt-2">
            <p>Rating : {data.imdbRating}</p>
          </div>
          <div className="pt-2">
            <p>Plot : {data.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
