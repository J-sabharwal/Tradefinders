import React, { Component, useState } from "react";

import "../styles/App.css";
import NavBar from './navbar';
import ViewSelector from './View_Selector';


export default function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  return (
    <div className="background">
      <NavBar
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <ViewSelector
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
    </div>
  );
}