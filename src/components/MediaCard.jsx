import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

// TEST API
const axios = require('axios').default;

const options = {
  method: 'GET',
  url: 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/luca',
  headers: {
    'x-rapidapi-key': 'bca3a19aefmshe2cbba63b667787p1c0ba3jsn8942a0167f57',
    'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
  },
};

// let movieName;
// let movieImage;
// axios.request(options).then((response) => {
//   console.log(response.data);
//   movieName = response.data.titles[0].title;
//   movieImage = response.data.titles[0].image;
//   console.log(movieName);
//   console.log(movieImage);
// }).catch((error) => {
//   console.error(error);
// });

// End test APi 1

export default function MediaCard() {
  const [movie, setMovie] = useState('');
  const [image, setImage] = useState('');
  let movieName = '';
  async function apiCall() {
    try {
      const response = await axios.request(options);
      console.log(response);
      movieName = response.data.titles[0].title;
      setMovie(movieName);
      const movieImage = response.data.titles[0].image;
      setImage(movieImage);
      console.log(movieName);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  apiCall();
  return (
    // <img src="https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@.jpg" alt="movie" />
    // <img src="#" alt="hi" />
    // <p>
    //   movie is:
    //   {movie}
    //   <img src={image} alt="hi" />
    // </p>
    <>
      <div className="card" style={{ width: '18rem', height: '25rem' }}>
        <img src={image} className="card-img-top" alt="card" />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </>

  );
}
