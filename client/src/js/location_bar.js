import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function LocationSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    location: "",
  });

  const handleChange = (event) => {
    const location = event.target.name;
    setState({
      ...state,
      [location]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-helper">Location</InputLabel>
        <NativeSelect
          value={state.location}
          onChange={handleChange}
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
    </div>
  );
}
