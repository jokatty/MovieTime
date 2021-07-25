// import dotenv from 'dotenv';

// dotenv.config();

import axios from 'axios';

export default function initMovieController(db) {
  const showMovie = async (req, res) => {
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
    } catch (error) {
      console.log(error.stack);
    }
  };

  return {
    showMovie,
  };
}
