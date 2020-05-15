import React, { useState } from "react";

import "../styles/App.css";
import NavBar from './navbar';
import Footer from './Footer';
import ViewSelector from './View_Selector';


export default function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  return (
    <div className="background" style={{ minHeight: "100vh" }}>
      <NavBar
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <ViewSelector className="App"
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <Footer />
    </div>
  );
}
