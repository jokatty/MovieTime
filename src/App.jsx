import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header.jsx';
// import Hero from './components/Hero.jsx';
// import MovieCard from './components/MovieCard.jsx';
import Home from './Home.jsx';
import Search from './Search.jsx';

export default function App() {
  return (
    <div>
      <Header />
      {/* <Hero />
      <MovieCard /> */}
      {/* <Home /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/search-result/:movieName" component={Search} />
    </div>
  );
}
