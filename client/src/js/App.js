import React, { Component } from "react";
import ViewSelector from "./View_Selector";
import "react-chat-widget/lib/styles.css";
import "../styles/App.css";


class App extends Component {
  render() {
    return (
      <div>
        <ViewSelector />
      </div>
    );
  }
}

export default App;