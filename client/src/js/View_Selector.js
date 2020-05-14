import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import CompanyDetails from "./Company/CompanyDetails";
import ReviewForm from './Review/ReviewForm';
import SearchResults from './Results/SearchResults';
import SearchBar from './SearchBar';
import Login from './Login';


export default function ViewSelector() {

  return (
    <>
      <Router>

        <Route className="company-details"
          exact path="/company/:id"
          component={CompanyDetails} >
        </Route>

        <Route className="review-form"
          exact path='/review/:company_id/new'
          component={ReviewForm} >
        </Route>
      
        <Route exact path="/"
          component={SearchBar} >
        </Route>
      
        <Route className="search-results"
          exact path="/results"
          component={SearchResults} >
        </Route>

        <Route className="test-login"
          exact path="/test/login"
          component={Login} >
        </Route>

      </Router>
    </>
  );
}