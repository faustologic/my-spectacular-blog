import React, { useState } from "react";
import { TextField, Typography, Button, Paper } from "@material-ui/core/";
import FileBase from "react-file-base64";

// StyleSheet
import useStyles from "./Style";

const Form = () => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    email: "",
    selectedFile: "",
  });
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    return console.log("blog publicado!");
  };

  return (
    <Paper className={classes.paper} elevation={3}>
      <form autoComplete="off" className={`${classes.root} ${classes.form}`}>
        <Typography variant="h5" className={classes.typography}>
          New Blog Post
        </Typography>
        <TextField
          name="title"
          label="My Post Title"
          variant="outlined"
          fullWidth
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          label="My Message"
          variant="outlined"
          fullWidth
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="email"
          label="Email Address"
          variant="outlined"
          style={{ width: "50%" }}
          onChange={(e) => setPostData({ ...postData, email: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            multiple={false}
            className={classes.fileBase}
            onDone={(base64) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          onClick={handleSubmit}
        >
          Save Post
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
