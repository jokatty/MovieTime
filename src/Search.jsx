import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchedMovieInfo from './components/SearchComps/SearchedMovieInfo.jsx';
import Comment from './components/SearchComps/Comment.jsx';
import OldComments from './components/SearchComps/OldComments.jsx';

export default function Search(props) {
  // state for searched movie's id. Will be empty initially
  // and gets updated when searchedMovieInfo updates the state.
  const [movieId, setMovieId] = useState(0);
  const params = useParams();
  const { movieName } = props.match.params;
  console.log(movieName);
  return (
    <>
      <p>hurrah!!!!! new page</p>
      <SearchedMovieInfo movieName={movieName} setMovieId={setMovieId} />
      {/* pass the updated movieId.
      comment needs movie id for sending it to db along with comment */}
      <Comment movieId={movieId} />
      <OldComments />
    </>
  );
}
