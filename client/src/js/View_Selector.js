import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './navbar';
import Footer from './Footer';
import CompanyDetails from "./Company/CompanyDetails";
import ReviewForm from './Review/ReviewForm';
import SearchBar from './SearchBar';
import ResultsPage from './Results/ResultsPage';
import Login from './Login';


export default function ViewSelector(props) {
  const [currentUser, setCurrentUser] = useState(undefined);

  return (

    <Router>
      <NavBar
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />

      <Route className="company-details"
        exact path="/company/:id"
        component={CompanyDetails}
      />

      <Route className="review-form"
        exact path='/review/:company_id/new'
        component={ReviewForm}
      />
      
      <Route exact path="/"
        component={SearchBar}
      />
      
      <Route className="search-results"
        exact path="/results"
        component={ResultsPage}
      />

      <Route className="login"
        exact path="/login"
        component={() =>
          <Login
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />}
      />

      <Footer />

    </Router>
  
  );
}