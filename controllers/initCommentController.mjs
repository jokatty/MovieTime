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

  const show = async (req, res) => {
    const { movieId } = req.params;
    console.log('GET REQEUST CAME IN');
    console.log(movieId);
    const comments = await db.Review.findAll({
      where: {
        movieImdb: movieId,
      },
    });
    console.log(comments);
    res.send(comments);
  };
  return {
    create,
    show,
  };
}
