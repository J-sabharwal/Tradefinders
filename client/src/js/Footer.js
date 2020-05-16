import React from "react";

import { grey } from "@material-ui/core/colors";
import logo from '../images/Tradefinder_footer.png'
import "../styles/SearchBar.css"

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


export default function footer() {


  return (
      <div>
      <AppBar className="footer" style={{ backgroundColor: grey[600] }}>
        <Toolbar style={{ justifyContent: "center" }}
          edge="start"
          color="inherit"
          aria-label="menu">
          <img height="50px" alt="" src={logo} />
        </Toolbar>
      </AppBar>
    </div>
  );
  
}
