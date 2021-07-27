import React from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default function Comment() {
  return (
    <>
      <TextField
        label="comment here..."
        placeholder="write your review"
        multiline
        rows={1}
        rowsMax={Infinity}
      />
      <Button variant="outlined" size="small" color="primary" className="">
        Submit
      </Button>
    </>
  );
}
