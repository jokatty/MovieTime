import React, { useEffect, useState } from 'react';
import { Avatar, Grid, Paper } from '@material-ui/core';
import axios from 'axios';

export default function OldComments(props) {
  //  set the state for the display of comments
  const [comments, setComments] = useState([]);
  // query the db for all comments belonging to the movieId in the props
  useEffect(async () => {
    const allComments = await axios.get(`/comment/${props.movieId}`);
    console.log(allComments);
    if (props.movieId !== 0) {
      setComments(allComments.data[2].comment);
    }
    // console.log('hi');
  }, []);

  return (
    <>
      {props.newComment.map((entry) => <p key={entry}>{entry}</p>)}
      <p>These are old comments: </p>
      <p>{comments}</p>
      {/* {comments.map((comment) => <p>{comment}</p>)} */}
      <Paper style={{ padding: '40px 20px', marginTop: 100 }} elevation={1}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="" src="{imgLink}" />
          </Grid>
          <Grid item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: 'left' }}>Jo</h4>
            <p style={{ textAlign: 'left' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
              Suspendisse congue vulputate lobortis. Pellentesque at interdum
              tortor. Quisque arcu quam, malesuada vel mauris et, posuere
              sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
              metus, efficitur lobortis nisi quis, molestie porttitor metus.
              Pellentesque et neque risus. Aliquam vulputate, mauris vitae
              tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
              lectus vitae ex.
            </p>
            <p style={{ textAlign: 'left', color: 'gray' }}>
              posted 1 minute ago
            </p>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
