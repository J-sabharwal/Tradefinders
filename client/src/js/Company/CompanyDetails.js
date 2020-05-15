import axios from 'axios';
import React, { Component } from 'react';
import { buildStyles, CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import CreateDialog from '../Quotation/quotationForm'

import { Button } from "@material-ui/core";
import { Rating } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

import 'react-circular-progressbar/dist/styles.css';
import '../../styles/Company.css';

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
        this.setState(prev => ({
          ...prev,
          company: all[0].data.company,
          review: all[1].data
        }));
      });
  }

  renderDetails() {
    return (
      <Grid container className="profile" spacing={2} direction='row' justify='flex-start' >
        <Grid container item xs={9}>
          <div className="Company-details">
            <Typography  className="details" variant="h4" component="h5">
              {this.state.company.name}
            </Typography>
            <Typography component="a" href="mailto:info@tradefinder.com?subject=Message%20from%20Tradefinder%20-%20Information%20about%20your%20services." style={{textDecoration: 'none'}} className="details-email" variant="body1" >
              <EmailIcon style={{minWidth: '40px', color: '#D35400'}} color="inherit" fontSize="small" m={5}/>
              {this.state.company.email}
            </Typography>
            <Typography className="details-phone" variant="body1">
              <PhoneIcon style={{minWidth: '40px', color: '#D35400'}} fontSize="small" mr={10}/>
              {this.state.company.phone_number}
            </Typography>
            <Typography className="details-info" variant="body2">
              <InfoTwoToneIcon style={{minWidth: '40px', color: '#D35400'}} fontSize="small" mr={5}/>
              {this.state.company.description}
            </Typography>
          </div>
        </Grid>

        <Grid container item xs={3} direction='row' justify='flex-end' >
          <div>
            <Box borderColor="transparent" className="avg-ratings">
              <Rating name="half-rating-read" size="large" value={this.state.review.total_avg ? this.state.review.total_avg : 0.0} precision={0.2} readOnly />
            </Box>
            <Typography className="avg-rating" align="right" variant="body1" >
              ({this.state.review.reviews && this.state.review.reviews.length} Reviews)
            </Typography>
          </div>
        </Grid>
      

        <Grid container item mt={10} spacing={2}>
          <Grid item xs={12}>
            <img className="profile-photo" alt="Profile" src={this.state.company.company_photo}/>
          </Grid>
        </Grid>
      </Grid>
    );
  }


  renderReviewData() {
    return this.state.review.reviews && this.state.review.reviews.map(rev => {
      return (
        <>
          <div key={rev.id} className="review">
            <Paper xs={12} elevation={2} m={5} key={rev.id} className="avg-review-comment" >
              <Grid container mt={10} spacing={2} direction='row' justify='flex-start'>
                <Grid item>
                  <img className="review-img" alt="Review" src={rev.photo_url} />
                </Grid>

                <Grid container item xs={12} sm={true}>
                  <Grid container className="review-comment" spacing={2} item direction-xs="column" xs={10}>
                    <Typography variant="body2" gutterBottom>{rev.comment}</Typography>
                  </Grid>
                  <Grid container item xs={2} direction='row' justify='flex-end'>
                    <img style={{ borderRadius: "20px", height: "40px", marginTop: "8px" }} alt="user-avatar" className="avatar" src={rev.user_avatar}/>
                  </Grid>
                  <Grid container className="review-comment" spacing={2} item direction-xs="row" alignItems="flex-end">
                    <Typography className="reviewer" variant="caption" >Posted by {rev.user_name}</Typography>
                  </Grid>
                  
                </Grid>
              </Grid>
            </Paper>
          </div>
        </>
      );
    });
  }

  renderDashboard() {
    return (
      <>
        <Container className="dashboard-section">
          <Typography  className="reviews" variant="h5">
            Reviews Summary
          </Typography>
        </Container>
        <Container maxWidth="md" className="dashboard">
          <Grid container item xs={12} justify="center" spacing={3}>
            <Grid container item xs={3} direction="row" alignItems="center" justify="center">
              <div style={{ width: 120, height: 120 }} className="cleanliness">
                <CircularProgressbarWithChildren
                  strokeWidth={10}
                  maxValue={5}
                  value={this.state.review.cleanliness_avg}
                  text="Cleanliness"
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    textSize: '90%',
                    textColor: '#616A6B',
                    pathColor: '#616A6B'
                  })}>
                  <br></br>
                  <br></br>
                  <div style={{ fontSize: '80%', margin: 10  }}>
                    <h3 style={{ color: '#D35400' }}><strong>{this.state.review.cleanliness_avg}</strong></h3>
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
                    textSize: '90%',
                    textColor: '#D35400',
                    pathColor: '#D35400',
                  })}>
                  <br></br>
                  <br></br>
                  <div style={{ fontSize: '80%', margin: 10  }}>
                    <h3><strong>{this.state.review.reliability_avg}</strong></h3>
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
                    textSize: '90%',
                    textColor: '#616A6B',
                    pathColor: '#616A6B',
                  })}>
                  <br></br>
                  <br></br>
                  <div style={{ fontSize: '80%', margin: 10  }}>
                    <h3 style={{ color: '#D35400' }}><strong>{this.state.review.value_avg}</strong></h3>
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
                    textSize: '80%',
                    textColor: '#D35400',
                    pathColor: '#D35400',
                  })}>
                  <br></br>
                  <br></br>
                  <div style={{ fontSize: '80%', margin: 10 }}>
                    <h3><strong>{this.state.review.workmanship_avg}</strong></h3>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }

  render() {
    return (
      <>
       <div>
         <Container maxWidth="md"  className="back-btn">
           <Grid container style={{ color: '#D35400' }} direction='row' justify='flex-start' alignItems="center">
             <Button
               style={{ color: '#D35400'}}
               component="button"
               onClick={this.props.history.goBack}
               startIcon={<NavigateBeforeIcon />}
             >
            Back to Search Results
             </Button>
           </Grid>
         </Container>
         <Container maxWidth="md" >
           <Paper xs={12} elevation={4} m={10} className="page-container">
             <Container maxWidth="md">
               {this.renderDetails()}
             </Container>
             <Container maxWidth="md"  className="back-btn">
           <Grid container style={{ color: '#D35400' }} direction='row' justify='flex-end' alignItems="center">
             <CreateDialog />
             {/* <Button
               style={{ color: '#D35400'}}
               component="button"
              //  onClick={this.props.history.goBack}
               startIcon={<LiveHelpIcon />}
             >
              Request a Quotation
             </Button> */}
           </Grid>
         </Container>

             <Divider variant="middle" />

             <Container maxWidth="md">
               {this.renderDashboard()}
             </Container>

             <Link href={`/review/${this.props.match.params.id}/new`} className="add-review" style={{ textDecoration: 'none'}}>
               <Grid container direction='row' justify='flex-end' alignItems="center" >
                 <Typography style={{ color: '#D35400', marginRight: '10px', marginBottom: '10px' , fontWeight: 'bold'}} className="add-review" variant="body1">
                    Add Review
                 </Typography>
                 <Tooltip style={{ color: '#D35400', marginRight: '30px', marginBottom: '15px' }} title="Add" aria-label="add" >
                   <Fab  size="small" className="add-btn">
                     <AddIcon/>
                   </Fab>
                 </Tooltip>
               </Grid>
             </Link>

             <Divider variant="middle" />

             <Container maxWidth="md">
               <Container className="reviews-section">
                 <Typography  className="reviews" variant="h5">
                  Customer Reviews
                 </Typography>
               </Container>
               <Grid item >
                 {this.renderReviewData()}
               </Grid>
             </Container>
           </Paper>
         </Container>
       </div>
      </>
    );
  }
}

export default Company;