import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SearchedMovieInfo(props) {
  const [searchedMovie, setSearchedMovie] = useState({
    title: '',
    image: '',
    id: '',
  });
  // get the searched movie data from our backend
  useEffect(async () => {
    const { movieName } = props;
    const response = await axios.post('/search', { movieName });
    const movieData = response.data;
    setSearchedMovie(movieData);
    // this will update the state of parent's(Search.mjs) movieid
    props.setMovieId(response.data.id);
  }, []);
  console.log(searchedMovie);
  return (
    <>
      <p>hey movie info</p>
      <div className="card" style={{ width: '18rem' }}>
        <img src={searchedMovie.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{searchedMovie.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  );
}
