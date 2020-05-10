import React from 'react';
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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormControl style={{ width: "25vw" }} className={classes.formControl}>
        <InputLabel htmlFor="trade-native-helper">Trade</InputLabel>
        <NativeSelect
          value={state.trade}
          onChange={handleTradeChange}
          inputProps={{
            name: "trade",
            id: "trade-native-helper",
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Plumber"}>Plumber</option>
          <option value={"Electrician"}>Electrician</option>
          <option value={"Painter"}>Painter</option>
        </NativeSelect>
        <FormHelperText>Choose desired trade</FormHelperText>
      </FormControl>

      <FormControl style={{ width: "25vw" }} className={classes.formControl}>
        <InputLabel htmlFor="location-native-helper">Location</InputLabel>
        <NativeSelect
          value={state.location}
          onChange={handleLocationChange}
          inputProps={{
            name: "location",
            id: "location-native-helper",
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Vancouver"}>Vancouver</option>
          <option value={"Richmond"}>Richmond</option>
          <option value={"Surrey"}>Surrey</option>
        </NativeSelect>
        <FormHelperText>Choose your location</FormHelperText>
      </FormControl>

      <Button variant="contained" color="secondary">
        Search
      </Button>
    </div>
  );
}