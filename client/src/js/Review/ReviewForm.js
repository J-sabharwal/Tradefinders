/* eslint-disable camelcase */
import React from 'react';
import axios from "axios";
import { useHistory, Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Typography from '@material-ui/core/Typography';


// Kevin  - I should probably move those styles somewhere else. No idea where yet.
// Brad   - I think this is good for now! We can always refactor later.
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '30ch',
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

export default function ReviewForm(props) {
  const classes = useStyles();
  const history = useHistory();
  const [scoreCleanliness, setScoreCleanliness] = React.useState(0);
  const [scoreReliability, setScoreReliability] = React.useState(0);
  const [scoreValue, setScoreValue] = React.useState(0);
  const [scoreWorkmanship, setScoreWorkmanship] = React.useState(0);
  const [commentText, setCommentText] = React.useState("");
  const [photoLink, setPhotoLink] = React.useState("");

  const link = "/company/" + props.match.params.company_id;

  const [state, setState] = React.useState({
    goBackToCompanyPage: false,
  });

  const handleSubmit = event => {
    event.preventDefault();

    //TODO Currently user_id and company_id are hard coded.
    //     Later, I will need to get the user_id from the cookie, and company_id from the url.
    //     But we need to setup the routes again later. Currently it's still a bit of a mess.
    //     Update: do this after refactor
    
    axios.post("/api/review", null, {
      params: {
        user_id: props.currentUser.id,
        company_id: props.match.params.company_id,
        cleanliness: scoreCleanliness,
        reliability: scoreReliability,
        value: scoreValue,
        workmanship: scoreWorkmanship,
        comment: commentText,
      }
    }).then((response) => {
      axios.post("/api/photo", null, {
        params: {
          review_id: response.data.new_review.id,
          photo_url: photoLink
        }}).then(((response) => {
        setState({
          ...state,
          goBackToCompanyPage: true,
        });
      }));
    });
  };

  

  return (
    <div>
      <Container maxWidth="md"  className="back-btn">
        <Grid
          container
          style={{ color: '#D35400' }}
          direction='row'
          justify='flex-start'
          alignItems="center"
        >
          <Button
            style={{ color: '#D35400'}}
            component="button"
            onClick={history && history.goBack}
            startIcon={<NavigateBeforeIcon />}
          >
            Back to Company Profile
          </Button>
        </Grid>
      </Container>

        <>
          <Container className="dashboard-section">
            <Typography
              style={{marginBottom: '20px'}}
              className="reviews"
              variant="h5"
            >
          Give your feedback
            </Typography>
          </Container>
          <Container maxWidth="md" >
            <Paper
              xs={12}
              elevation={7}
              m={10}
              className="review-container"
            >
              <form
                className={classes.root}
                noValidate
                autoComplete="off"
              >
                <Grid
                  container
                  item
                  xs={12}
                  direction="row"
                  alignItems="center"
                  justify="center"
                >
                  <Grid
                    container
                    item
                    xs={6}
                    direction="row"
                    alignItems="center"
                    justify="center"
                  >
                    <TextField
                      style={{marginTop: '50px'}}
                      id="outlined-select-score"
                      select
                      label="Cleanliness"
                      value={scoreCleanliness}
                      onChange={(event) => {
                        setScoreCleanliness(event.target.value);
                      }}
                      helperText="How much effort did they make to keep tidy?"
                      variant="outlined"
                    >
                      {scores.map((option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid
                    container
                    item
                    xs={6}
                    direction="row"
                    alignItems="center"
                    justify="center"
                  >
                    <TextField
                      style={{marginTop: '50px'}}
                      id="outlined-select-score"
                      select
                      label="Reliability"
                      value={scoreReliability}
                      onChange={(event) => {
                        setScoreReliability(event.target.value);
                      }}
                      helperText="How reliable were they?"
                      variant="outlined"
                    >
                      {scores.map((option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid
                    container
                    item
                    xs={6}
                    direction="row"
                    alignItems="center"
                    justify="center"
                  >
                    <TextField
                      id="outlined-select-score"
                      select
                      label="Value"
                      value={scoreValue}
                      onChange={(event) => {
                        setScoreValue(event.target.value);
                      }}
                      helperText="How would you rate the value for money?"
                      variant="outlined"
                    >
                      {scores.map((option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid
                    container
                    item
                    xs={6}
                    direction="row"
                    alignItems="center"
                    justify="center"
                  >
                    <TextField
                      id="outlined-select-score"
                      select
                      label="Workmanship"
                      value={scoreWorkmanship}
                      onChange={(event) => {
                        setScoreWorkmanship(event.target.value);
                      }}
                      helperText="How was the quality of work?"
                      variant="outlined"
                    >
                      {scores.map((option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>

                <Divider variant="middle" />
            
                <div>
                  <Grid container item xs={12} direction="row" alignItems="center" justify="center" >
                    <TextField
                      style={{
                        width: "75%",
                        marginLeft: 50,
                        marginRight: 50
                      }}
                      id="outlined-full-width"
                      label="Attach Photo"
                      fullWidth
                      placeholder="Please attach a link for a photo."
                      variant="outlined"
                      onChange={(event) => {
                        setPhotoLink(event.target.value);
                      }}
                    />
                  </Grid>
                </div>

                <div>
                  <Grid container item xs={12} direction="row" alignItems="center" justify="center" >
                    <TextField
                      style={{
                        width: "75%",
                        marginLeft: 50,
                        marginRight: 50
                      }}
                      id="outlined-multiline-static"
                      label="Leave a Review"
                      multiline
                      rows={4}
                      placeholder="Please talk about anything you would like others to know."
                      variant="outlined"
                      onChange={(event) => {
                        setCommentText(event.target.value);
                      }}
                    />
                  </Grid>
                  {/* <RaisedButton type="submit" label="login" className="button-submit" primary={true} /> */}
                </div>
                <Grid
                  container
                  item
                  xs={12}
                  direction="row"
                  alignItems="center"
                  justify="center"
                >
                  <Button
                    style={{
                      marginBottom: '100px',
                      color: 'white',
                      backgroundColor: '#707B7C',
                      paddingLeft: '35%',
                      paddingRight: '35%',
                    }}
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                  >
                  Submit
                  </Button>
                  {state.goBackToCompanyPage && (
                    <Redirect to={ link
                    } />
                  )}
                </Grid>
              </form>
            </Paper>
          </Container>
        </>
      
    </div>
  );
}
