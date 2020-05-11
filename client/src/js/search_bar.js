import React from 'react';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { Button } from "@material-ui/core";
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Selects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    trade: "",
    location: "",
  });

  const handleTradeChange = (event) => {
    const trade = event.target.name;
    setState({
      ...state,
      [trade]: event.target.value,
    });
    
  };

  const handleLocationChange = (event) => {
    const location = event.target.name;
    setState({
      ...state,
      [location]: event.target.value,
    });
  };

  // console.log(state.trade);
  const companySearch = () => {
    const companiesByTrade = axios
      .get(`/api/company?trade_type=${state.trade}`);
    const companiesByLocation = axios
      .get(`/api/company?location=${state.location}`);
    
    Promise.all([companiesByTrade, companiesByLocation])
        .then((response) => {
          console.log(response[0].data.companies);
          console.log(response[1].data.companies);
        });
  }

  return (
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

      <Button variant="contained" color="secondary" onClick={companySearch}> 
        Search
      </Button>
    </div>
  );
}