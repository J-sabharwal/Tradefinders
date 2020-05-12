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
import ButtonBase from '@material-ui/core/ButtonBase';



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

      

      // console.log(this.state.review.reviews)
      //  return this.state.review.reviews.map(rev => {
      //   axios.get(`/api/photo?review_id=${rev.id}`)
      //     .then(response => {
      //       // console.log(response.data)
      //       this.setState(prev => ({
      //         ...prev,
      //         photo: response.data.photos
      //       }))
      //     })
      // })
    });
  }

  // retrievePhoto(reviewId){
  //     axios.get(`/api/photo?review_id=${reviewId}`)
  //       .then(response => {
  //         this.setState({}
  //           photo: response.data.photos[0].photo_url
  //         })
  //       })
  // }

  renderReviewData(){
    return this.state.review.reviews && this.state.review.reviews.map(rev => {
      // console.log(this.state.photo)
        return (
          <Paper xs={12} elevation={2} key={rev.id} className="avg-review-comment" >
            <Grid container mt={10} spacing={3}>
              <Grid item>
                <img className="review-img" src="https://www.reimerhvac.com/wp-content/uploads/2015/08/plumbing-buffalo-ny-affordable-services.jpg" alt=""/>
              {/* <img className="review-img" alt="complex" src={this.state.photo} /> */}
              </Grid>
              <p>{rev.comment}</p>
            </Grid>            
          </Paper>
       )
      })
  }

  render() {
    return (
      <>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid container item xs={9}>
          <div className="Company-details">
            <Typography  className="details" variant="h4" component="h5">
              {this.state.company.name}
            </Typography>
            <Typography component="a" href="mailto:info@tradefinder.com?subject=Message%20from%20Tradefinder%20-%20Information%20about%20your%20services." style={{textDecoration: 'none'}} className="details-email" variant="body1" >
              <EmailIcon style={{minWidth: '40px'}} color="disabled" fontSize="small" m={5}/>
              {this.state.company.email}
            </Typography>
            <Typography className="details-phone" variant="body1">
              <PhoneIcon style={{minWidth: '40px'}} color="disabled" fontSize="small" mr={10}/>
              {this.state.company.phone_number}
            </Typography>
            <Typography className="details-info" variant="body1">
              <InfoTwoToneIcon style={{minWidth: '40px'}} color="disabled" fontSize="small" mr={5}/>
              {this.state.company.description}
            </Typography>
          </div>
          </Grid>
          <Grid container item xs={3}>
          <div className="avg-ratings" >
            <Box borderColor="transparent">
              <Rating name="half-rating-read" size="large" value={this.state.review.total_avg ? this.state.review.total_avg : 0.0} precision={0.2} readOnly />
            </Box>
          </div>
            <Typography className="avg-rating" align="right" variant="body1">
              ({this.state.review.total_avg} / 5 Rating)
            </Typography>
          </Grid>
          </Grid>
            
              {this.renderReviewData()}
           
        </Container>
      </>
    );
  }


}

export default Company;