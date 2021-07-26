// import dotenv from 'dotenv';

// dotenv.config();
import { resolve } from 'path';

import axios from 'axios';

export default function initMovieController(db) {
  const showTopRated = async (req, res) => {
    const displayApiKey = process.env.API_DISPLAY_KEY;
    // make axios request to api for most popular movies
    let response = '';
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${displayApiKey}`,
    };
    try {
      response = await axios.request(options);
      console.log(response);
    }
    catch (error) {
      console.log(error.stack);
    }
    res.send(response.data.results);
  };

  const showMovie = async (req, res) => {
    console.log(req.body);
    const { movieName } = req.body;
    console.log(movieName);
    const searchApiKey = process.env.API_SEARCH_KEY;
    // we got the movie name. Now make the request to api

    const options = {
      method: 'GET',
      url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${movieName}`,
      headers: {
        'x-rapidapi-key': searchApiKey,
        'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      // see the structure of received data.
      console.log(response.data.titles[0]);
      // sending back a response obj containing {title: , image: , id:} of requested movie
      res.send(response.data.titles[0]);
      // response.sendFile(resolve('dist', 'search.html'));
    } catch (error) {
      console.log(error.stack);
    }
  };

  return {
    showTopRated,
    showMovie,
  };
}
