// import React, { Component } from 'react';
// import axios from 'axios';
// import 'typeface-roboto';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// class ReviewForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       company: {},
//       review: {}
//     };
//   }
  
  
//   async componentDidMount() {
//     const {match: {params}} = this.props;
//     console.log(params);

         
//     // Promise.all([companyDeets, companyReviews])
//     //   .then((all) => {
//     //   console.log(all.data)
//     //   this.setState(prev => ({
//     //     ...prev,
//     //     company: all.data.company,
//     //     review: all.data.review
//     //   }));

//     // axios.get(`/api/company/${params.id}`)
//     // .then((response) => {
      
//     //   console.log(response.data)
//     //   this.setState({
//     //     company: response.data.company
//     //   });
//     // })


//   }

//   render() {
//     return (
//       <article className="profile">
//         <form className="ReviewForm" noValidate>
//           <div>
//             <TextField
//               id="outlined-select-currency"
//               select
//               label="Punctuality"
//               value={currency}
//               onChange={handleChange}
//               helperText="Please select your currency"
//               variant="outlined"
//             >
//               {currencies.map((option) => (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </div>
//         </form>
//       </article>
//     );
//   }


// }

// export default ReviewForm;


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



const reviewChoices = [
  {
    value: 0,
    label: "Please Select",
  },
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
  {
    value: 6,
    label: 6,
  },
  {
    value: 7,
    label: 7,
  },
  {
    value: 8,
    label: 8,
  },
  {
    value: 9,
    label: 9,
  },
  {
    value: 10,
    label: 10,
  }
];



export default function MultilineTextFields() {
  const classes = useStyles();
  const [scorePunctuality, setScorePunctuality] = React.useState(0);
  // const [scoreCleanliness, setScoreCleanliness] = React.useState(0);
  // const [scoreCommunication, setScoreCommunication] = React.useState(0);
  // const [scorePrice, setScorePrice] = React.useState(0);

  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });

  const handleChange = event => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };


  console.log(reviewChoices);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={scorePunctuality}
          onChange={handleChange}
          helperText="Please select your currency"
          variant="outlined"
        >
          {reviewChoices.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">Punctuality</InputLabel>
          <Select
            native
            value={state.age}
            onChange={handleChange}
            label="Age"
            inputProps={{
              name: "age",
              id: "outlined-age-native-simple"
            }}
          >
            <option aria-label="None" value="" />
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </Select>
        </FormControl>
      </div>
    </form>
  );
}
