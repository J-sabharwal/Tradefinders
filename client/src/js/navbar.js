import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

import logo from "../images/tradefinder_logo.png";
import { grey } from "@material-ui/core/colors";

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
    let userEmail = cookies.get('userEmail');
    console.log(userEmail);
    if (userEmail) {
      Axios.get(`/api/user?email=${userEmail}`)
        .then((res) => {
          console.log(res);
          console.log(res.data.users[0]);
          props.setCurrentUser(res.data.users[0]);
        });
    } else {
      props.setCurrentUser(undefined);
    }
  }, []);


  // const getCurrentUser = () => {
  //   let userEmail = cookies.get('userEmail');
  //   console.log(userEmail);
  //   if (userEmail) {
  //     Axios.get(`/api/user?email=${userEmail}`)
  //       .then((res) => {
  //         console.log(res);
  //         console.log(res.data.users[0]);
  //         setCurrentUser(res.data.users[0]);
  //       });
  //   } else {
  //     setCurrentUser(undefined);
  //   }
  // };

  const LoginButton = () => {
    // getCurrentUser();
    if (props.currentUser) {
      return <>
        <Button color="inherit">Welcome {props.currentUser.name}!</Button>
        <Button color="inherit">Logout</Button>
      </>;
    } else {
      return <Button
        color="inherit"
        onClick={()=>{
          
        }}>
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
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <LoginButton/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
