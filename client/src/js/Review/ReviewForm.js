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

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const a = Array.from(Array(11).keys());

export default function MultilineTextFields() {
  const classes = useStyles();
  const [scorePunctuality, setScorePunctuality] = React.useState(0);
  // const [scoreCleanliness, setScoreCleanliness] = React.useState(0);
  // const [scoreCommunication, setScoreCommunication] = React.useState(0);
  // const [scorePrice, setScorePrice] = React.useState(0);

  const handleChange = (event) => {
    setScorePunctuality(event.target.value);
  };

  console.log(a);

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
          {a.map((number) => (
            <MenuItem key={number} value={number}>
              {number}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
