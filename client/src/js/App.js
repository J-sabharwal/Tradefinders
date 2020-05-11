import React, { Component } from "react";

// import axios from "axios";
import "../styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CompanyDetails from "./Company/CompanyDetails";
import ReviewForm from './Review/ReviewForm';

import ButtonAppBar from './navbar';
import Selects from './search_bar';
import handymen from '../images/handymen.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

 

  render() {
    return (
      <>
        <ButtonAppBar />
        <section className="background">
          <img alt="" className="home-pic" src={handymen} />
          <Selects />
        </section>

        <Router>
          <div className="company-details">
            <Route exact path="/company/:id" component={CompanyDetails} />
          </div>
        </Router>
        <Router>
          <div className="review-form">
            <Route exact path='/review/:company_id/new' component={ReviewForm}/>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
