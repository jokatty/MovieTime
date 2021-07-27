import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function Comment(props) {
  //  state for user comment
  const [comment, setComment] = useState('');
  // call abck for button click
  async function handleClick() {
    const response = await axios.post('/comment', { comment, movieId: props.movieId });
    // clear the comment input field.
    setComment('');
    console.log(response);
  }

  return (
    <>
      <TextField
        label="comment here..."
        placeholder="write your review"
        multiline
        rows={1}
        rowsMax={Infinity}
        value={comment}
        onChange={(event) => {
          setComment(event.target.value);
        }}
      />
      <Button variant="outlined" size="small" color="primary" className="" onClick={handleClick}>
        Submit
      </Button>
    </>
  );
}
