import React, { Component } from 'react';
import axios from 'axios';
import '../../styles/App.css';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {},
      review: {}
    };
  }
  
  
  async componentDidMount() {
    const {match: {params}} = this.props;
    console.log(params);

         
    // Promise.all([companyDeets, companyReviews])
    //   .then((all) => {
    //   console.log(all.data)
    //   this.setState(prev => ({
    //     ...prev,
    //     company: all.data.company,
    //     review: all.data.review
    //   }));

    // axios.get(`/api/company/${params.id}`)
    // .then((response) => {
      
    //   console.log(response.data)
    //   this.setState({
    //     company: response.data.company
    //   });
    // })
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

export default ReviewForm;