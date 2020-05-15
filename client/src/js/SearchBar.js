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

import useApplicationData from '../hooks/useApplicationData';

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
      <img alt="" className="home-pic" src={handymen} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
            // minHeight: "100%",
          // paddingBottom: "115px",
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

        <Button style={{ color: 'white', backgroundColor: '#707B7C ' }}variant="contained" onClick={Search}>
          Search
        </Button>

        { state.goToSearchResults && (
          <Redirect to={{
            pathname: '/results',
            state: state,
            trade: state.trade,
            location: state.location,
          }} />
        )}
        <div>

        </div>
        </div>
    </>
  );
}