import React from 'react';
import { useParams } from 'react-router-dom';

export default function Search(props) {
  const params = useParams();
  const { movieName } = props.match.params;
  console.log(movieName);
  return <p>hurrah!!!!! new page</p>;
}
