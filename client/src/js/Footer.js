import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { grey } from "@material-ui/core/colors";
import logo from '../images/Tradefinder_footer.png'
import "../styles/SearchBar.css"

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function footer() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar className="footer" style={{ backgroundColor: grey[600] }} position="bottom">
        <Toolbar style={{ justifyContent: "center" }}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu">
          <img height="50px" alt="" src={logo} />
        </Toolbar>
      </AppBar>
    </div>
  );
  
}
