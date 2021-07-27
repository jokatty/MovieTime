export default function initCommentController(db) {
  const create = async (req, res) => {
    const { comment, movieId } = req.body;
    console.log(req.body);
    // save the comment in the db
    // IN NEED MOVIE ID here.
    // await db.Review.create({
    //   comment:comment,

    // })
    res.send('received comment to server');
  };
  return {
    create,
  };
}
