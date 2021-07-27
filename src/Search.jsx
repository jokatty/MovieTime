import React from 'react';
import { useParams } from 'react-router-dom';
import SearchedMovieInfo from './components/SearchComps/SearchedMovieInfo.jsx';
import Comment from './components/SearchComps/Comment.jsx';
import OldComments from './components/SearchComps/OldComments.jsx';

export default function Search(props) {
  const params = useParams();
  const { movieName } = props.match.params;
  console.log(movieName);
  return (
    <>
      <p>hurrah!!!!! new page</p>
      <SearchedMovieInfo movieName={movieName} />
      <Comment />
      <OldComments />
    </>
  );
}
