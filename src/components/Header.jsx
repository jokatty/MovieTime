import React from 'react';

export default function Header() {
  return (
    <div className="custom-nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <a className="navbar-brand" href="#">Navbar scroll</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
          <form className="d-flex" method="POST" action="/search">
            <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" name="movieName" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
}
