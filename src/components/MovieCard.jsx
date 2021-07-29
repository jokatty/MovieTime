import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default function MovieCard() {
  const [movieArr, setMovieArr] = useState([]);
  // request top rated movie data from our BE
  useEffect(async () => {
    const response = await axios.get('/top-rated');
    // response.data gives us array of movie objects[{...}, {...},....]
    const topRatedMovies = response.data;
    // filter a few movies
    const firstArr = topRatedMovies.slice(1, 3);
    const secondArr = topRatedMovies.slice(6);
    const finalArr = [...firstArr, ...secondArr];
    console.log(topRatedMovies);
    setMovieArr(finalArr);
  }, []);

  return (
    <>
      <p>MovieCards</p>
      {/* {cards} */}
      <div className="row">
        {movieArr.map((entry) => (
          <div className="card" style={{ width: '18rem' }} key={entry.title}>
            <img src={`https://image.tmdb.org/t/p/original/${entry.poster_path}`} className="card-img-top" alt="movie" />
            <div className="card-body">
              <h5 className="card-title">{entry.title}</h5>
              <p className="card-text">
                {entry.overview.substring(0, 100)}
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
