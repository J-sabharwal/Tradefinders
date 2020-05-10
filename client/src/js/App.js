import React, { Component } from 'react';
import { Button } from "@material-ui/core";
import axios from 'axios';
import '../styles/App.css';

import logo from '../images/logo.png';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  fetchData = () => {
    axios.get('/api/user') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data.users.company) // The entire response from the Rails API

      console.log(response.data.users[0].name) // Just the message
      this.setState({
        user: response.data.users[0]
      });
    }) 
  }

  render() {
    return (
      <>
        <nav className="App-header">
          <img alt="" className="App-logo" src={logo} />
          <Button
            variant="contained"
            color="secondary"
            onClick={this.fetchData}
          >
            {" "}
            Hammer Time!
          </Button>
        </nav>
        <div className="App">
          <h1>{this.state.user.name}</h1>
          <h3>{this.state.user.email}</h3>
        </div>
      </>
    );
  }
}

export default App;
