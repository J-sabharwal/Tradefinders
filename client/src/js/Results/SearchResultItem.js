import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Rating } from '@material-ui/lab';
import useApplicationData from '../useApplicationData';



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

  const { state } = useApplicationData();

    console.log(state.companies)
    console.log(props);

    return (
      <div style={{
        margin: '20px',
      }}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://www.macleans.ca/wp-content/uploads/2020/01/MLTSD-skilled-trades-feature-image.jpg-810x445-1578938370.png"
              title="tradespeople"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Joe's handyman service {state.trade}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                My name is Joe and I am a great handiman. I will fix anything. Call me today! {state.location}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Rating name="half-rating-read" size="medium" />
            <Button size="small" color="primary">
              Company Profile »
        </Button>
          </CardActions>
        </Card>
      </div>
    );
}