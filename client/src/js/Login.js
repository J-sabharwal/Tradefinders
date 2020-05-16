/* eslint-disable camelcase */
import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "30ch",
    },
  },
}));

export default function ReviewForm(props) {
  const classes = useStyles();
  const history = useHistory();
  const cookies = new Cookies();

  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");
  const [loginFailed, setLoginFails] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputEmail);
    console.log(inputPassword);

    axios.get(`/api/user?email=${inputEmail}`).then((res) => {
      console.log(res);
      console.log(res.data.users[0]);
      if (
        res.data.users[0] &&
        res.data.users[0].password &&
        res.data.users[0].password === inputPassword
      ) {
        console.log("Login Success");
        cookies.set("userID", res.data.users[0].id, { path: "/" });
        props.setCurrentUser(res.data.users[0]);
        history && history.goBack();
      } else {
        console.log("Login Failed");
        setLoginFails(true);
      }
    });
  };

  return (
    <div
      style={{
        color: "#D35400",
        // direction: "row",
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        marginLeft: "40px",
        marginTop: "10px",
      }}
    >
      <form className={classes.root} noValidate autoComplete="off">
        <Container maxWidth="md" className="back-btn">
          <Grid>
            <Button
              style={{ color: "#D35400" }}
              component="button"
              onClick={history && history.goBack}
              startIcon={<NavigateBeforeIcon />}
            >
              Back
            </Button>
          </Grid>
        </Container>

        <h1
          style={{
            marginLeft: "20px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Login
        </h1>

        {loginFailed && (
          <Container className="dashboard-section">
            <Typography
              style={{ marginBottom: "20px" }}
              className="reviews"
              variant="h5"
            >
              Incorrect email or password.
            </Typography>
          </Container>
        )}

        <div>
          <TextField
            id="outlined-static"
            label="Email"
            placeholder=""
            variant="outlined"
            onChange={(event) => {
              setInputEmail(event.target.value);
            }}
          />
        </div>

        <div>
          <TextField
            id="outlined-static"
            label="Password"
            placeholder=""
            variant="outlined"
            onChange={(event) => {
              setInputPassword(event.target.value);
            }}
          />
        </div>

        <div>
          <Button
            style={{
              marginLeft: "20px",
              marginTop: "20px",
              marginBottom: "20px",
              backgroundColor: "#707B7C",
            }}
            variant="contained"
            color="secondary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
