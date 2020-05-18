import React from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const Alert = function(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export default function NewCompany(props) {
  const [state, setState] = React.useState({
    goBackToHomePage: false,
    name: '',
    email: '',
    location: '',
    description: '',
    phone: '',
    trade: '',
    photo: '',
  });

  const [open, setOpen] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
  };

  const handleSnackOpen = () => {
    setOpenSuccess(true);
  };

  const handleSnackClose = () => {
    setOpenSuccess(false);
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post("/api/company", null, {
      params: {
        name: state.name,
        email: state.email,
        description: state.description,
        phone_number: state.phone,
        trade_type: state.trade,
        location: state.location,
        company_photo: state.photo,
      }
    }).then((response) => {
      console.log(response);
      handleSnackOpen();
      handleClose();
        setState({
          ...state,
          goBackToHomePage: true,
        });
    });
  };

  return (
    <>
      <Button
      style={{
        color: "white",
      }}
        component="button"
        onClick={handleClickOpen}
      >
        Add Company
      </Button>
  
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Register Your Trade</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please complete the form to register your company to tradefinder.
          </DialogContentText>
          <TextField
            style={{
              marginBottom: 20,
            }}
            autoFocus
            variant="outlined"
            id="outlined-multiline-static"
            label="Company Name"
            type="name"
            fullWidth
            onChange={handleChange}
            inputProps={{
              name: 'name',
              id: 'name-native-simple',
            }}
          />
          <TextField
            style={{
              marginBottom: 20,
            }}
            autoFocus
            variant="outlined"
            id="outlined-multiline-static"
            placeholder="Please provide your business email"
            label="Company Email Address"
            type="email"
            fullWidth
            onChange={handleChange}
            inputProps={{
              name: 'email',
              id: 'email-native-simple',
            }}
          />
          <div>
            <FormControl fullWidth style={{ marginBottom: 20,}}variant="outlined" className='location'>
              <InputLabel id="demo-simple-select-outlined-label">Location</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={state.location}
                  onChange={handleChange}
                  inputProps={{
                    name: 'location',
                    id: 'location-native-simple'
                  }}
                  label="Location"
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={"Burnaby"}>Burnaby</MenuItem>
                  <MenuItem value={"Coquitlam"}>Coquitlam</MenuItem>
                  <MenuItem value={"Delta"}>Delta</MenuItem>
                  <MenuItem value={"North Vancouver"}>North Vancouver</MenuItem>
                  <MenuItem value={"Richmond"}>Richmond</MenuItem>
                  <MenuItem value={"Surrey"}>Surrey</MenuItem>
                  <MenuItem value={"Vancouver"}>Vancouver</MenuItem>
                </Select>
            </FormControl>
          </div>
          <TextField
            style={{
              marginBottom: 20,
            }}
            autoFocus
            variant="outlined"
            id="outlined-multiline-static"
            label="Phone Number"
            type="phone"
            fullWidth
            onChange={handleChange}
            inputProps={{
              name: 'phone',
              id: 'phone-native-simple',
            }}
          />
          <FormControl fullWidth style={{ marginBottom: 20,}}variant="outlined" className='trade-type'>
            <InputLabel id="demo-simple-select-outlined-label">Type of Trade</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={handleChange}
                inputProps={{
                  name: 'trade',
                  id: 'trade-native-simple',
                }}
                label="Type of Trade"
                value={state.trade}

                
              >
                <MenuItem value="">
                  <em></em>
                </MenuItem>
                <MenuItem value={"Alarm & Security"}>Alarm & Security</MenuItem>
                <MenuItem value={"Appliance Repair"}>Appliance Repair</MenuItem>
                <MenuItem value={"Carpet & Flooring"}>Carpet & Flooring</MenuItem>
                <MenuItem value={"Electrical"}>Electrical</MenuItem>
                <MenuItem value={"Painter/Decorator"}>Painter/Decorator</MenuItem>
                <MenuItem value={"Plumbing"}>Plumbing</MenuItem>
                <MenuItem value={"Roofing"}>Roofing</MenuItem>
              </Select>
          </FormControl>
          <TextField
            style={{
              marginBottom: 20,
            }}
            autoFocus
            variant="outlined"
            id="outlined-multiline-static"
            label="Company Photo"
            placeholder="Please add a company photo."
            type="subject"
            fullWidth
            onChange={handleChange}
            inputProps={{
              name: 'photo',
              id: 'photo-native-simple',
            }}
          />
          <TextField
            multiline
            rows={8}
            autoFocus
            variant="outlined"
            id="outlined-multiline-static"
            placeholder="Please provide a short description of the services you company provides. This will assist users to find the correct trade to suit their needs."
            label="Company Description"
            type="description"
            fullWidth
            onChange={handleChange}
            inputProps={{
              name: 'description',
              id: 'description-native-simple',
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              color: '#D35400'
            }}
            component="button"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            style={{
              color: '#D35400',
            }}
            component="button"
            onClick={handleSubmit}
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
      
      <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleSnackClose}>
        <Alert onClose={handleSnackClose} severity="success">
          Your Company has been listed!
        </Alert>
      </Snackbar>
    </>
  );
}
