import React, { Component } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";
import "../styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CompanyDetails from "./Company/CompanyDetails";

import ButtonAppBar from './navbar'
import TradeSelects from './search_bar'
import LocationSelects from './location_bar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  fetchData = () => {
    axios
      .get("/api/user") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data.users.company); // The entire response from the Rails API

        console.log(response.data.users[0].name); // Just the message
        this.setState({
          user: response.data.users[0],
        });
      });
  };

  render() {
    return (
      <>
        <ButtonAppBar />
        <section>
          <TradeSelects />
          <LocationSelects />
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </section>

        <Router>
          <div className="company-details">
            <Route exact path="/company/:id" component={CompanyDetails} />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
