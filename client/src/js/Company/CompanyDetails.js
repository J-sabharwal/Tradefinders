import React, { Component } from 'react';
import axios from 'axios';
import '../../styles/Company.css';
import { Rating } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



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
        <Typography  variant="h4" component="h5" gutterBottom>
          {this.state.company.name}
          </Typography>
            <Typography variant="body1" gutterBottom>
              {this.state.company.email}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {this.state.company.phone_number}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {this.state.company.description}
            </Typography>
          </div>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating name="half-rating-read" size="large" value={this.state.review.total_avg ? this.state.review.total_avg : 0.0} precision={0.2} readOnly />
          </Box>
          <h5>{this.state.review.total_avg}</h5>
      </>
    );
  }


}

export default Company;