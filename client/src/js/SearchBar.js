import React from 'react';
// import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { Button } from "@material-ui/core";
import NativeSelect from '@material-ui/core/NativeSelect';

import useApplicationData from './useApplicationData';
import handymen from '../images/handymen.jpg';
import '../styles/SearchBar.css';


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
  const { state, search, handleLocationChange, handleTradeChange } = useApplicationData();

  //** Leaving this here for now incase something breaks while moving logic to another component- please dont' touch - Brad
  // const [state, setState] = React.useState({
  //   trade: "",
  //   location: "",
  // });

  // const handleTradeChange = (event) => {
  //   const trade = event.target.name;
  //   setState({
  //     ...state,
  //     [trade]: event.target.value,
  //   });
    
  // };

  // const handleLocationChange = (event) => {
  //   const location = event.target.name;
  //   setState({
  //     ...state,
  //     [location]: event.target.value,
  //   });
  // };

  // // console.log(state.trade);
  // const Search = () => {
  //   const companySearch = axios
  //     .get(`/api/company?trade_type=${state.trade}&location=${state.location}`);
  //   // const companiesByLocation = axios
  //   //   .get(`/api/company?location=${state.location}`);
    
  //   Promise.all([companySearch])
  //       .then((response) => {
  //         console.log(response[0].data.companies)
  //         if (response[0].data.companies.length === 0) {
  //         }
  //         // console.log(response[1].data.companies);
  //       });
  // }

  return (
    <>
      <img alt="" className="home-pic" src={handymen} />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "20px"
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

      <Button variant="contained" color="secondary" onClick={search}>
          Search
      </Button>
    </div>
      </>
  );
}