import { response } from 'express';
import { request } from 'http';
import { resolve } from 'path';
import db from './models/index.mjs';
import initMovieController from './controllers/initMovieController.mjs';

export default function routes(app) {
  const movieController = initMovieController(db);
  // special JS page. Include the webpack index.html file
  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
  // get the movie search result page
  app.get('/search', (request, response) => {
    response.sendFile(resolve('dist', 'search.html'));
  });
  // post request for search a movie by name
  app.post('/search', movieController.showMovie);
}
