import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Rating } from '@material-ui/lab';


const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 250,
  },
});

export default function SearchResultItem(props) {
  const classes = useStyles();
  
  //this is needed to do the redirect onClick() for each card in the return below
  const link = `/company/${props.id}`;


  return (
    <>
      <div
        style={{
          margin: "20px",
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
              value={props.rating}
              precision={0.2}
              readOnly
            />
          </CardActions>
        </Card>
      </div>
    </>
  );
}