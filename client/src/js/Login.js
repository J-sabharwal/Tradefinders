/* eslint-disable camelcase */
import React from 'react';
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Cookies from 'universal-cookie';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '30ch',
    },
  },
}));

export default function ReviewForm() {
  const classes = useStyles();
  const cookies = new Cookies();
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");



  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputEmail);
    console.log(inputPassword);

    axios.get(`/api/user?email=${inputEmail}`)
      .then((res) => {
        console.log(res);
        console.log(res.data.users[0]);
        if (res.data.users[0] && res.data.users[0].password && res.data.users[0].password === inputPassword) {
          console.log("Login good");
          cookies.set('userEmail', inputEmail, { path: '/' });
          console.log(cookies.get('userEmail'));
        } else {
          console.log("Login bad");
        }
      });
    
    // axios.post("/api/review",null, {params: {
    //   user_id: 1,
    //   company_id: 1,
    //   cleanliness: scoreCleanliness,
    //   reliability: scoreReliability,
    //   value: scoreValue,
    //   workmanship: scoreWorkmanship,
    //   comment: commentText,
    // }}).then((response) => {
    //   console.log(response.data.new_review);
    //   axios.post("/api/photo", null, {params: {
    //     review_id: response.data.new_review.id,
    //     photo_url: photoLink
    //   }}).then(((response) => {
    //     console.log(response);
    //   }));
    // });

  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <h1>Login</h1>
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
              marginTop: '40px',
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