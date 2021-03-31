import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <div>
      <CircularProgress />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Post />
        </Grid>
        <Grid item xs={6}>
          <Post />
        </Grid>
      </Grid>
    </div>
  );
};

export default Posts;
