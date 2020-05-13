import React, { Component } from 'react';
// import { Button } from "@material-ui/core";
import axios from 'axios';
import '../../styles/Company.css';
import { Rating } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import ButtonBase from '@material-ui/core/ButtonBase';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {},
      review: {}
    };
  }
  
  async componentDidMount() {
    const {match: {params}} = this.props;
    const companyDeets = axios.get(`/api/company/${params.id}`);
    const companyReviews = axios.get(`/api/review?company_id=${params.id}`);
    
    Promise.all([companyDeets, companyReviews])
    .then((all) => {
      // console.log(all);
      this.setState(prev => ({
        ...prev,
        company: all[0].data.company,
        review: all[1].data
      }));
    });
  }

  renderDetails(){
    return (
      <Grid container className="profile" spacing={3}>
        <Grid container item xs={9}>
          <div className="Company-details">
            <Typography  className="details" variant="h4" component="h5">
              {this.state.company.name}
            </Typography>
            <Typography component="a" href="mailto:info@tradefinder.com?subject=Message%20from%20Tradefinder%20-%20Information%20about%20your%20services." style={{textDecoration: 'none'}} className="details-email" variant="body1" >
              <EmailIcon style={{minWidth: '40px'}} color="darkred" fontSize="small" m={5}/>
              {this.state.company.email}
            </Typography>
            <Typography className="details-phone" variant="body1">
              <PhoneIcon style={{minWidth: '40px'}} color="disabled" fontSize="small" mr={10}/>
              {this.state.company.phone_number}
            </Typography>
            <Typography className="details-info" variant="body2">
              <InfoTwoToneIcon style={{minWidth: '40px'}} color="disabled" fontSize="small" mr={5}/>
              {this.state.company.description}
            </Typography>
          </div>
        </Grid>

        <Grid container item xs={3}>
          <div>
            <Box borderColor="transparent" className="avg-ratings">
              <Rating name="half-rating-read" size="large" value={this.state.review.total_avg ? this.state.review.total_avg : 0.0} precision={0.2} readOnly />
            </Box>
            <Typography className="avg-rating" align="right" variant="body1" >
              ({this.state.review.total_avg} / 5 Rating)
            </Typography>
          </div>
        </Grid>
      </Grid>
    )
  }  


  renderReviewData(){
    return this.state.review.reviews && this.state.review.reviews.map(rev => {
      return (
        <div key={rev.id} className="review">
          <Paper xs={12} elevation={2} m={5} key={rev.id} className="avg-review-comment" >
            <Grid container mt={10} spacing={2} >
              <Grid item>
                <img className="review-img" alt="Review" src={rev.photo_url} />
              </Grid>

              <Grid container item xs={12} sm={true}>
                <Grid container className="review-comment" spacing={2} item direction-xs="column" xs={12}>
                  <Typography variant="body2" gutterBottom>{rev.comment}</Typography>
                </Grid>
                <Grid container className="review-comment" spacing={2} item direction-xs="row" alignItems="flex-end">
                  <Typography className="reviewer" variant="caption" >Posted by {rev.user_name}</Typography>
                </Grid>
              </Grid>
            </Grid>  
          </Paper>
        </div>
      )
    })
  }

  renderDashboard() {

    // console.log(cleanliness)
    return (
      <>
        <Container maxWidth="md">
          <Grid container item xs={12} direction="row" justify="space-between">
            <Grid container item xs={3} direction="row" alignItems="center" justify="center">
              <div style={{ width: 120, height: 120 }} className="cleanliness">
                <CircularProgressbarWithChildren
                  strokeWidth={10}
                  maxValue={5}
                  value={this.state.review.cleanliness_avg}
                  text="Cleanliness"
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    textSize: '13px',
                    textColor: '#616A6B',
                    pathColor: '#616A6B'
                  })}>
                    <br></br>
                    <br></br>
                  <div style={{ fontSize: 12, marginTop: -5 }}>
                  <h3 style={{ color: '#D35400' }}><strong>{this.state.review.cleanliness_avg} / 5 </strong></h3>  
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center" justify="center">
              <div style={{ width: 120, height: 120 }}>
                <CircularProgressbarWithChildren
                  strokeWidth={10}
                  maxValue={5}
                  value={this.state.review.reliability_avg}
                  text="Reliability"
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    textSize: '14px',
                    textColor: '#D35400',
                    pathColor: '#D35400',
                  })}>
                  <br></br>
                  <br></br>
                  <div style={{ fontSize: 12, marginTop: -5 }}>
                    <h3><strong>{this.state.review.reliability_avg} / 5</strong></h3>
                  </div>
                  </CircularProgressbarWithChildren>
              </div>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center" justify="center">
            <div style={{ width: 120, height: 120 }}>
              <CircularProgressbarWithChildren
                strokeWidth={10}
                maxValue={5}
                value={this.state.review.value_avg}
                text="Value"
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: '14px',
                  textColor: '#616A6B',
                  pathColor: '#616A6B',
                })}>
                  <br></br>
                  <br></br>
                  <div style={{ fontSize: 12, marginTop: -5 }}>
                    <h3 style={{ color: '#D35400' }}><strong>{this.state.review.value_avg} / 5 </strong></h3> 
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center" justify="center">
              <div style={{ width: 120, height: 120 }}>
                <CircularProgressbarWithChildren
                  strokeWidth={10}
                  maxValue={5}
                  value={this.state.review.workmanship_avg}
                  text="Workmanship"
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    textSize: '12px',
                    textColor: '#D35400',
                    pathColor: '#D35400',
                  })}>
                  <br></br>
                  <br></br>
                  <div style={{ fontSize: 12, marginTop: -5 }}>
                    <h3><strong>{this.state.review.workmanship_avg} / 5</strong></h3> 
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </Grid>
          </Grid>
        </Container>
      </>
    )
  }



  render() {
    return (
      <>
       <div>
          <Container maxWidth="md">
            {this.renderDetails()}
          </Container>

          <Container maxWidth="md">
            {this.renderDashboard()}
          </Container>

          <Container maxWidth="md">
            {this.renderReviewData()}
          </Container>
        </div>
      </>
    );
  }
}

export default Company;