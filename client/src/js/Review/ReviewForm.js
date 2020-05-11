import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from '@material-ui/core/Button';

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
  const [scorePunctuality, setScorePunctuality] = React.useState(0);
  const [scoreCleanliness, setScoreCleanliness] = React.useState(0);
  const [scoreCommunication, setScoreCommunication] = React.useState(0);
  const [scorePrice, setScorePrice] = React.useState(0);
  const [reviewText, setReviewText] = React.useState("");


  // Punctuality

  // Cleanliness

  // Communication

  // Price

  const handleSubmit = event => {
    let result = {
      scorePunctuality,
      scoreCleanliness,
      scoreCommunication,
      scorePrice,
      reviewText
    };
    console.log(result);
    event.preventDefault();
  };

  return (
    <form className={classes.root} noValidate autoComplete="off" >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Punctuality"
          value={scorePunctuality}
          onChange={(event) => {
            setScorePunctuality(event.target.value);
          }}
          helperText="Did they arrive on time?"
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
          id="outlined-select-currency"
          select
          label="Cleanliness"
          value={scoreCleanliness}
          onChange={(event) => {
            setScoreCleanliness(event.target.value);
          }}
          helperText="Did they do a good job?"
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
          id="outlined-select-currency"
          select
          label="Communication"
          value={scoreCommunication}
          onChange={(event) => {
            setScoreCommunication(event.target.value);
          }}
          helperText="Is it easy to communicate with them?"
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
          id="outlined-select-currency"
          select
          label="Price"
          value={scorePrice}
          onChange={(event) => {
            setScorePrice(event.target.value);
          }}
          helperText="How is the price for the job?"
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
          label="Review"
          multiline
          rows={4}
          placeholder="Please talk about anything you would like others to know."
          variant="outlined"
          onChange={(event) => {
            setReviewText(event.target.value);
          }}
        />
      </div>
      <div>
        {/* <RaisedButton type="submit" label="login" className="button-submit" primary={true} /> */}
        <Button variant="contained" color="primary" type="submit"
          onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </form>
  );
}
