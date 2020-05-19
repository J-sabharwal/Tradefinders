import React from 'react';
import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Divider from '@material-ui/core/Divider';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


import '../styles/SearchBar.css';
import handymen from '../images/handymen.jpg';
import painter from '../images/painters-Vancouver.jpg'
import electrician from '../images/Electrician.jpg'
import decorator from '../images/Interior-Designer.jpg'
import plumber from '../images/woman+plumber.jpg'
import fixer from '../images/fixer.jpg'

import useApplicationData from '../hooks/useApplicationData';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();
  const { state, Search, handleLocationChange, handleTradeChange } = useApplicationData();


  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      >
        <Carousel autoPlay={5000} animationSpeed={2000} infinite>
          <img alt="" src={handymen} className="home-pic" />
          <img alt="" src={plumber} className="home-pic" />
          <img alt="" src={painter} className="home-pic" />
          <img alt="" src={electrician} className="home-pic" />
          <img alt="" src={decorator} className="home-pic" />
          <img alt="" src={fixer} className="home-pic" />
        </Carousel>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "20px",
        }}
      >
        <FormControl style={{ width: "25vw" }} className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">Trade</InputLabel>
          <NativeSelect
            value={state.trade}
            onChange={handleTradeChange}
            inputProps={{
              name: "trade",
              id: "age-native-helper",
            }}
          >
            <option aria-label="None" value="" />
            <option value={"Alarm & Security"}>Alarm & Security</option>
            <option value={"Appliance Repair"}>Appliance Repair</option>
            <option value={"Carpet & Flooring"}>Carpet & Flooring</option>
            <option value={"Electrical"}>Electrical</option>
            <option value={"Painter/Decorator"}>Painting/Decorating</option>
            <option value={"Plumbing"}>Plumbing</option>
            <option value={"Roofing"}>Roofing</option>
          </NativeSelect>
          <FormHelperText>Choose desired trade</FormHelperText>
        </FormControl>

        <FormControl style={{ width: "25vw" }} className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">Location</InputLabel>
          <NativeSelect
            value={state.location}
            onChange={handleLocationChange}
            inputProps={{
              name: "location",
              id: "age-native-helper",
            }}
          >
            <option aria-label="None" value="" />
            <option value={"Burnaby"}>Burnaby</option>
            <option value={"Coquitlam"}>Coquitlam</option>
            <option value={"Delta"}>Delta</option>
            <option value={"North Vancouver"}>North Vancouver</option>
            <option value={"Richmond"}>Richmond</option>
            <option value={"Surrey"}>Surrey</option>
            <option value={"Vancouver"}>Vancouver</option>
          </NativeSelect>
          <FormHelperText>Choose your location</FormHelperText>
        </FormControl>

        <Button
          style={{ color: "white", backgroundColor: "#707B7C" }}
          variant="contained"
          onClick={Search}
        >
          Search
        </Button>

        {state.goToSearchResults && (
          <Redirect
            to={{
              pathname: "/results",
              state: state,
              trade: state.trade,
              location: state.location,
            }}
          />
        )}
      </div>
      <Divider variant="middle" />
      <div
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Card
          className={classes.root}
          style={{
            width: "600px",
            height: "250px",
            marginLeft: "30px",
            marginRight: "30px",
            marginBottom: "20px",
            backgroundColor: "#e8e8e8",
            backgroundImage:
              "url(https://www.transparenttextures.com/patterns/egg-shell.png)",
            // display: "flex",
            // flexWrap: "wrap",
            // justifyContent: "center",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Blog - Recent Articles and Tips
            </Typography>
            <p></p>
            <Typography variant="body2" color="textSecondary" component="p">
              How to fix a leaky faucet -
              <a href="https://www.familyhandyman.com/plumbing/faucet-repair/how-to-repair-a-kitchen-faucet/" target="_blank" rel="noopener noreferrer">
                familyhandiman.com
              </a>
            </Typography>
            <p></p>
            <Typography variant="body2" color="textSecondary" component="p">
              TOP 5 DIY Electrical Tools Every Homeowner Should Own -
              <a href="https://www.youtube.com/watch?v=A_oPk3UIIa4" target="_blank" rel="noopener noreferrer">
                MrFixitDIY - youtube.com
              </a>
            </Typography>
            <p></p>
            <Typography variant="body2" color="textSecondary" component="p">
              20 painting secrets the pros won't tell you -
              <a href="https://www.popularmechanics.com/home/interior-projects/how-to/g151/13-painting-secrets-the-pros-wont-tell-you/" target="_blank" rel="noopener noreferrer"> 
                popularmechanics.com
              </a>
            </Typography>
            <p></p>
            <Typography variant="body2" color="textSecondary" component="p">
              How to fix a hole in the wall -
              <a href="https://www.instructables.com/id/Introduction-26/" target="_blank" rel="noopener noreferrer">
                instructables.com
              </a>
            </Typography>
          </CardContent>
        </Card>
        <Card
          className={classes.root}
          style={{
            width: "600px",
            height: "250px",
            marginLeft: "30px",
            marginRight: "30px",
            backgroundColor: "#e8e8e8",
            backgroundImage:
              "url(https://www.transparenttextures.com/patterns/egg-shell.png)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img
              alt=""
              height="150px"
              src="https://norcommortgage.com/uploads/pages/bigstock-Portrait-of-a-confused-young-c-250827721.jpg"
            />
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ marginTop: "50px", marginRight: "50px" }}
            >
              Live Chat with an Expert!
            </Typography>
          </div>
          <div style={{ margin: "25px" }}>
            <Typography variant="body2" color="textSecondary" component="p">
              Have an emergency, and need advice fast? Maybe you just have a
              quick question? We have experts standing by to help! Just click on
              the chat button to get started!
            </Typography>
          </div>
        </Card>
      </div>
    </>
  );
}