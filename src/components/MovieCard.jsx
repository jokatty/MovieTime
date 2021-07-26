import React from 'react';

import axios from 'axios';

export default function MovieCard() {
  // request top rated movie data from our BE
  async function getTopRatedMovies() {
    const response = await axios.get('/top-rated');
    // response.data gives us array of movie objects[{...}, {...},....]
    const topRatedMovies = response.data;
    console.log(topRatedMovies);
    return topRatedMovies;
  }
  const topMovies = getTopRatedMovies();

  function displayCards() {
    const dummyArr = [{ title: 'someTitle', image: '#' }, { title: 'someTitle', image: '#' }, { title: 'someTitle', image: '#' }, { title: 'someTitle', image: '#' }, { title: 'someTitle', image: '#' }];

    // const dummyArr = getTopRatedMovies();

    return (
      <div className="row">
        {dummyArr.map((entry) => (
          <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{entry.title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
  const cards = displayCards();

  return (
    <>
      <p>MovieCards</p>
      {cards}
    </>
  );
}
