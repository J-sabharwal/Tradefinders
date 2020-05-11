import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import CompanyDetails from "./Company/CompanyDetails";
import ReviewForm from './Review/ReviewForm';
import SearchBar from './SearchBar';


export default function ViewSelector() {

  return (
    <>
      
      <Router>
        <div className="company-details">
          <Route exact path="/company/:id" component= {CompanyDetails} />
        </div>
      </Router>

      <Router>
        <div className="review-form">
          <Route exact path='/review/:company_id/new'   component={ReviewForm} />
        </div>
      </Router>

      <Router>
        <section className="background">
          <Route exact path="/" component={SearchBar} />
        </section>
      </Router>
      
    </>
  );
}