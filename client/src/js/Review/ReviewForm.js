/* eslint-disable camelcase */
import React from 'react';
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


//TODO I should probably move those styles somewhere else. No idea where yet.
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const scores = [
  {
    value: 0,
    label: "Please Select",
  },
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  }
];

export default function ReviewForm() {
  const classes = useStyles();
  const [scoreCleanliness, setScoreCleanliness] = React.useState(0);
  const [scoreReliability, setScoreReliability] = React.useState(0);
  const [scoreValue, setScoreValue] = React.useState(0);
  const [scoreWorkmanship, setScoreWorkmanship] = React.useState(0);
  const [commentText, setCommentText] = React.useState("");
  const [photoLink, setPhotoLink] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log(photoLink);

    //TODO Currently user_id and company_id are hard coded.
    //     Later, I will need to get the user_id from the cookie, and company_id from the url.
    //     But we need to setup the routes again later. Currently it's still a bit of a mess.

    
    axios.post("/api/review",null, {params: {
      user_id: 1,
      company_id: 1,
      cleanliness: scoreCleanliness,
      reliability: scoreReliability,
      value: scoreValue,
      workmanship: scoreWorkmanship,
      comment: commentText,
    }}).then((response) => {
      console.log(response.data.new_review);
      axios.post("/api/photo", null, {params: {
        review_id: response.data.new_review.id,
        photo_url: photoLink
      }}).then(((response) => {
        console.log(response);
      }));
    });

  };

  return (
    <form className={classes.root} noValidate autoComplete="off" >
      <div>
        <TextField
          id="outlined-select-score"
          select
          label="Cleanliness"
          value={scoreCleanliness}
          onChange={(event) => {
            setScoreCleanliness(event.target.value);
          }}
          helperText="Did they clean up after themselves?"
          variant="outlined"
        >
          {scores.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="outlined-select-score"
          select
          label="Reliability"
          value={scoreReliability}
          onChange={(event) => {
            setScoreReliability(event.target.value);
          }}
          helperText="Can you rely on them to do a good job?"
          variant="outlined"
        >
          {scores.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="outlined-select-score"
          select
          label="Value"
          value={scoreValue}
          onChange={(event) => {
            setScoreValue(event.target.value);
          }}
          helperText="How is the value?"
          variant="outlined"
        >
          {scores.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="outlined-select-score"
          select
          label="Workmanship"
          value={scoreWorkmanship}
          onChange={(event) => {
            setScoreWorkmanship(event.target.value);
          }}
          helperText="How is the quality of the work?"
          variant="outlined"
        >
          {scores.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Comments"
          multiline
          rows={4}
          placeholder="Please talk about anything you would like others to know."
          variant="outlined"
          onChange={(event) => {
            setCommentText(event.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          id="outlined-static"
          label="Attached Photo"
          placeholder="Please attach a link for a photo."
          variant="outlined"
          onChange={(event) => {
            setPhotoLink(event.target.value);
          }}
        />
      </div>
      <div>
        <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </form>
  );
}
