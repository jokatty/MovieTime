import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default function MovieCard() {
  const [movieArr, setMovieArr] = useState([]);
  // request top rated movie data from our BE
  useEffect(async () => {
    const response = await axios.get('/top-rated');
    // response.data gives us array of movie objects[{...}, {...},....]
    const topRatedMovies = response.data;
    console.log(topRatedMovies);
    setMovieArr(topRatedMovies);
    // return topRatedMovies;
  }, []);

  return (
    <>
      <p>MovieCards</p>
      {/* {cards} */}
      <div className="row">
        {movieArr.map((entry) => (
          <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="movie" />
            <div className="card-body">
              <h5 className="card-title">{entry.title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
