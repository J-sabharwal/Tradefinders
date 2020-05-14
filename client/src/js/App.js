import React, { Component } from "react";

import "../styles/App.css";
import NavBar from './navbar';
import Footer from './Footer'
import ViewSelector from './View_Selector';


class App extends Component {

  render() {
    return (

      <div className="background">
        <NavBar />
        <ViewSelector />
        <Footer />
      </div>
    );
  }
}

export default App;
