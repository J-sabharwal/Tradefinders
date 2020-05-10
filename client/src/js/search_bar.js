import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
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
    trade: '',
  });

  const handleChange = (event) => {
    const trade = event.target.name;
    setState({
      ...state,
      [trade]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-helper">Trade</InputLabel>
        <NativeSelect
          value={state.trade}
          onChange={handleChange}
          inputProps={{
            name: 'trade',
            id: 'age-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option value={'Plumber'}>Plumber</option>
          <option value={'Electrician'}>Electrician</option>
          <option value={'Painter'}>Painter</option>
        </NativeSelect>
        <FormHelperText>Choose desired trade</FormHelperText>
      </FormControl>
    </div>
  );
}