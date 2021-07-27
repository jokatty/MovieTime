import { response } from 'express';
import { request } from 'http';
import { resolve } from 'path';
import db from './models/index.mjs';
import initMovieController from './controllers/initMovieController.mjs';
import initCommentController from './controllers/initCommentController.mjs';

export default function routes(app) {
  const movieController = initMovieController(db);
  const commentController = initCommentController(db);
  // special JS page. Include the webpack index.html file
  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
  // get the movie search result page
  // app.get('/search', (request, response) => {
  //   response.sendFile(resolve('dist', 'search.html'));
  // });

  // app.post('/search', movieController.showMovie);

  //  get the latest movies.receiving axios request from FE of our app
  app.get('/top-rated', movieController.showTopRated);
  // post request for search a movie by name. receiving axios request from the FE of our app
  app.post('/search', movieController.showMovie);
  // post request for user's comment on movie
  app.post('/comment', commentController.create);
}
