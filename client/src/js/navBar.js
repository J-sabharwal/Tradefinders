import React, { Component } from 'react';
import { Button } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import InputBase from '@material-ui/core/InputBase';

import logo from '../images/tradefinder_logo.png';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  render() {
    return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <img alt="logo" src={logo} height="60px" />
            <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
    )
  }
}

export default NavBar;