import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  // define the state of the serach movie input
  const [movie, setMovie] = useState('');

  async function handleClick() {
    // const movieName = event.target.value;
    // console.log(movieName);
    const movieName = movie;
    console.log(movieName);
    // const response = await axios.get('/search', { movieName });
    const response = await axios.post('/search', { movieName });
    console.log(response);
  }

  //  send data with the params in the link to Search Component
  const searchPage = {
    pathname: `/search-result/${movie}`,
  };

  return (
    <div className="custom-nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <a className="navbar-brand" href="/">MovieTime</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
          {/* <form className="d-flex" method="POST" action="/search"> */}
          <form className="d-flex">
            <input
              className="form-control mr-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="movieName"
              value={movie}
              onChange={(event) => {
                setMovie(event.target.value);
              }}
            />
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={(event) => {
                handleClick(event);
              }}
            >
              <Link to={searchPage} className="nav-link">
                Search
              </Link>
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
