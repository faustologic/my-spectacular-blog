import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
// import moment from "moment";

const Post = (post) => {
  return (
    <Card>
      <CardMedia />
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body1">
          Contenido del blog, bla bla bla...
        </Typography>
      </CardContent>
      <Button variant="contained">Guardar Post</Button>
    </Card>
  );
};

export default Post;
