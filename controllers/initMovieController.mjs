export default function initMovieController(db) {
  const showMovie = (req, res) => {
    console.log(req.body.movieName);
    console.log('this is sjow movie controller file');
    res.send('received the post request');
  };

  return {
    showMovie,
  };
}
