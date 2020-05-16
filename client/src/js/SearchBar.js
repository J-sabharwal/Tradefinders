import React from 'react';
import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import '../styles/SearchBar.css';
import handymen from '../images/handymen.jpg';
import tradespeople from '../images/tradespeople.png'

import useApplicationData from '../hooks/useApplicationData';
import Carousel, { Dots } from "@brainhubeu/react-carousel";
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
        <Carousel autoPlay={3000} animationSpeed={2000} infinite>
          <img src={handymen} className="home-pic" />
          <img src={tradespeople} className="home-pic" />
          <img src={handymen} className="home-pic" />
          <img src={tradespeople} className="home-pic" />
        </Carousel>
        {/* <img alt="" id="home-pic" src={handymen} /> */}
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
            <option value={"Plumbing"}>Plumbing</option>
            <option value={"Electrical"}>Electrical</option>
            <option value={"Painter/Decorator"}>Painting/Decorating</option>
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
            <option value={"Vancouver"}>Vancouver</option>
            <option value={"Richmond"}>Richmond</option>
            <option value={"Surrey"}>Surrey</option>
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
        <div></div>
      </div>
    </>
  );
}