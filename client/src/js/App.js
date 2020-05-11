import React, { Component } from "react";

import "../styles/App.css";
import ButtonAppBar from './navbar';
import ViewSelector from './View_Selector'

class App extends Component {

  render() {
    return (
      <>
        <ButtonAppBar />
        <ViewSelector />
       
      </>
    );
  }
}

export default App;
