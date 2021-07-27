import React from 'react';
import { Avatar, Grid, Paper } from '@material-ui/core';

export default function OldComments(props) {
  return (
    <>
      {props.newComment.map((entry) => <p>{entry}</p>)}
      <Paper style={{ padding: '40px 20px', marginTop: 100 }} elevation={1}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="" src="{imgLink}" />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
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
