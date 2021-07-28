export default function initCommentController(db) {
  const create = async (req, res) => {
    const { comment, movieId } = req.body;
    console.log(req.body);
    // save the comment in the db
    try {
      await db.Review.create({
        comment,
        movieImdb: movieId,
      });
      res.send('received comment to server');
    } catch (error) {
      console.log(error.stack);
    }
  };
  return {
    create,
  };
}
