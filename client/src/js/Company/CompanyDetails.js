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




class Company extends Component {
  constructor(props) {
    super(props)
    this.state = {
      company: {},
      review: {}
    }
  }
  
  async componentDidMount() {
    const {match: {params}} = this.props;
    const companyDeets = axios.get(`/api/company/${params.id}`)
    const companyReviews = axios.get(`/api/review?company_id=${params.id}`)
    // console.log(params)

         
    Promise.all([companyDeets, companyReviews])
      .then((all) => {
        console.log(all)
        this.setState(prev => ({
          ...prev,
          company: all[0].data.company,
          review: all[1].data
      }));
    }) 
  }

  render() {
    return (
      <>
      <div className="Company-details">
        <Typography  className="details" variant="h4" component="h5">
          {this.state.company.name}
        </Typography>
          <Typography className="details" variant="body1">
            <EmailIcon color="disabled" fontSize="small" m={5}/>
            {this.state.company.email}
          </Typography>
          <Typography className="details" variant="body1">
            <PhoneIcon color="disabled" fontSize="small" mr={10}/>
              {this.state.company.phone_number}
          </Typography>
          <Typography className="details" variant="body1">
            <InfoTwoToneIcon color="disabled" fontSize="small" mr={5}/>
              {this.state.company.description}
          </Typography>
          </div>
          <div className="avg-ratings" >
            <Box borderColor="transparent">
              <Rating name="half-rating-read" size="large" value={this.state.review.total_avg ? this.state.review.total_avg : 0.0} precision={0.2} readOnly />
            </Box>
          </div>
          <Typography className="avg-rating" variant="body1">
            ({this.state.review.total_avg} / 5 Rating)
          </Typography>
      </>
    );
  }


}

export default Company;