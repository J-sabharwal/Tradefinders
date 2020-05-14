import React, { Component } from "react";

import "../styles/App.css";
import NavBar from './navbar';
import ViewSelector from './View_Selector';


class App extends Component {

  render() {
    return (

      <div className="background">
        <NavBar />
        <ViewSelector />
      </div>
    );
  }
}

export default App;
