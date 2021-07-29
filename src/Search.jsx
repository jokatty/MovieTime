import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SearchedMovieInfo from './components/SearchComps/SearchedMovieInfo.jsx';
import Comment from './components/SearchComps/Comment.jsx';
import OldComments from './components/SearchComps/OldComments.jsx';

export default function Search(props) {
  // state for searched movie's id. Will be empty initially
  // and gets updated when searchedMovieInfo updates the state.
  const [movieId, setMovieId] = useState(0);
  // set state for user comment. Gets updated in the comment component.
  const [newComment, setNewComment] = useState([]);
  const params = useParams();
  const { movieName } = props.match.params;
  return (
    <>
      <p>hurrah!!!!! new page</p>
      <SearchedMovieInfo movieName={movieName} setMovieId={setMovieId} />
      {/* pass the updated movieId.
      comment needs movie id for sending it to db along with comment */}
      {/* pass the new comment state so that parent gets updated when new comment is passed */}
      <Comment movieId={movieId} newComment={newComment} setNewComment={setNewComment} />
      {/* send newComemnts data as props */}
      <OldComments newComment={newComment} movieId={movieId} />
    </>
  );
}
