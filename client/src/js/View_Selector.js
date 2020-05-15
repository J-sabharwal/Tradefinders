import React, {useState} from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './navbar';
import CompanyDetails from "./Company/CompanyDetails";
import ReviewForm from './Review/ReviewForm';
import SearchBar from './SearchBar';
import ResultsPage from './Results/ResultsPage';
import Login from './Login';
import Footer from './Footer';


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
        component={ResultsPage} >
      </Route>

      <Route className="login"
        exact path="/login"
        component={() =>
          <Login
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        }>
      </Route>

      <Footer />

    </Router>
  
  );
}