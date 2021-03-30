import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    width: "75%",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "left",
  },

  typography: {
    marginLeft: 10,
  },

  fileInput: {
    width: "90%",
    margin: "10px 0",
    marginLeft: 10,
  },
  buttonSubmit: {
    marginBottom: 10,
    marginLeft: 10,
    width: "25%",
  },
}));
