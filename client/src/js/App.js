import React, { Component } from "react";

import "../styles/App.css";
import ButtonAppBar from './navbar';
import ViewSelector from './View_Selector'

class App extends Component {

  render() {
    return (
      <>
        <ButtonAppBar />
        <div className="background">
        <ViewSelector />
       
          </div>
      </>
    );
  }
}

export default App;
