import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import moment from "moment";

const Post = (post) => {
  return (
    <Card>
      <CardMedia image={post.selectedFile} title={post.title} />
      <CardContent>
        <Typography variant="body1">
          Contenido del blog, bla bla bla...
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
