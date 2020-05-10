import React, { Component } from 'react';
// import { Button } from "@material-ui/core";
import axios from 'axios';
import '../../styles/App.css';


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
    // const companyPhotos = axios.get(`/api/company/${params.id}`)

    console.log(params)

    // axios.get(`/api/company/${params.id}`) 
    // .then((response) => {
      
    Promise.all([companyDeets, companyReviews])
      .then((all) => {
      console.log(all.data)
      this.setState(prev => ({
        ...prev,
        company: all.data.company,
        review: all.data.review
      }));
    // }) 

    // axios.get(`/api/review?company_id=${params.id}`) 
    // .then((response) => {
      
    //   console.log(response.data)
    //   this.setState({
    //     review: response.data.reviews
    //     // let averageRating = review.cleanliness + review.reliability + review.value + review.workmanship
          
        
    //   });
    }) 
  }

  render() {
    return (
      <>
        <article className="profile">
          <header className="company-name">{this.state.company.name}</header>
          <ul className="company-info">
            <li>{this.state.company.email}</li>
            <li>{this.state.company.phone_number}</li>
            <li>{this.state.company.description}</li>
          </ul>
          <h5>{this.state.review.comment}</h5>
        </article>
      </>
    );
  }


}

export default Company;