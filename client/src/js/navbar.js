import React, { useEffect } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';

import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import NewTrade from "./NewTrade";

import logo from "../images/new-company-logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const cookies = new Cookies();

  useEffect(()=>{
    let userID = cookies.get('userID');
    // console.log(userID);
    if (userID) {
      axios.get(`/api/user/${userID}`)
        .then((res) => {
          // console.log(res);
          props.setCurrentUser(res.data.user);
        });
    } else {
      props.setCurrentUser(undefined);
    }
  }, []);

  const logout = () => {
    props.setCurrentUser(undefined);
    cookies.remove('userID', { path: '/' });
    // console.log(cookies.get('userID'));
    // console.log("Logout Success");
  };

  const LoginButton = () => {
    // getCurrentUser();
    if (props.currentUser) {
      return <>
        <Button style={{ color: grey[900] }}>Welcome {props.currentUser.name}</Button>
        <Button
          color="inherit"
          onClick={logout}
        >Logout</Button>
      </>;
    } else {
      return <Button
        color="inherit"
        href="/login"
      >
          Login
      </Button>;
    }
  };

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: grey[600] }} position="static">
        <Toolbar>
          <Button href="/">
            <img height="75px" alt="" src={logo} />
          </Button>

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          />
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <NewTrade />
          <LoginButton/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
