import React from 'react';
import axios from 'axios';

import { Rating } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 250,
  },
});

//render each company card in the search results - Brad
export default function SearchResultItem(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    review: 0,
  });
  
  //Get the avg rating for each company before rendering the card in search results - Brad
  const companyRating = () => {
    const companyReview = axios.get(`/api/review?company_id=${props.id}`);
    Promise.all([companyReview])
      .then((all) => {
        setState(prev => ({
          ...prev,
          review: all[0].data.total_avg
        }));
      });
  };

  if (state.review === 0) {
    companyRating();
  }
  
  //this is needed to do the redirect onClick() for each card in the return below - Brad
  const link = `/company/${props.id}`;

  return (
    <>
      <div
        style={{
          marginRight: "10px",
          marginLeft: "10px",
          marginBottom: "20px"
        }}
      >
        <Card
          className={classes.root}
          style={{
            width: "400px",
            height: "400px",
          }}
        >
          <CardActionArea href={link}>
            <CardMedia
              className={classes.media}
              image={props.photo}
              title="tradespeople"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Rating
              name="half-rating-read"
              size="medium"
              value={state.review}
              precision={0.2}
              readOnly
            />
          </CardActions>
        </Card>
      </div>
    </>
  );
}