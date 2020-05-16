import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import Snackbar from '@material-ui/core/Snackbar';

const mailgun = require("mailgun-js");
const DOMAIN = process.env.REACT_APP_MAILGUN_DOMAIN;
const API_KEY = process.env.REACT_APP_MAILGUN_API_KEY;

export default function QuotationForm(props) {
  const [open, setOpen] = React.useState(false);
  const [currentDetails, setCurrentDetails] = React.useState({});
  const mg = mailgun({apiKey: API_KEY, domain: DOMAIN});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const mailText = generateMailText();

    const data = {
      from: `Tradefinder User <Tradefinder@${DOMAIN}>`,
      to: `${props.company.email}`,
      subject: `Quotation Request Form`,
      text: mailText,
    };

    mg.messages().send(data, function(error, body) {
      console.log("error:");
      console.log(error);
      console.log("body:");
      console.log(body);

      //TODO Add Art or alert or a message or something to show success
      // If error is undefined then it's success.
    });
  };

  const generateMailText = () => {
    //TODO Please format and make this mailText look better when possible.

    let mailText = JSON.stringify(currentDetails);

    return mailText;
  };
  
  return (
    <>

        <Button
          style={{ color: '#D35400'}}
          component="button"
          onClick={handleClickOpen}
          startIcon={<LiveHelpIcon />}
        >
        Request a Quotation
        </Button>
  
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Quotation Request Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please complete the form with as much detail about the work you wish to have done.
          </DialogContentText>
          <TextField
            style={{
              marginBottom: 20,
            }}
            autoFocus
            variant="outlined"
            id="outlined-multiline-static"
            label="Name"
            type="name"
            fullWidth
            onChange={(event) => {
              setCurrentDetails({
                ...currentDetails,
                name: event.target.value
              });
            }}
          />
          <TextField
            style={{
              marginBottom: 20,
            }}
            autoFocus
            variant="outlined"
            id="outlined-multiline-static"
            placeholder="Please provide contact telephone number"
            label="Contact Details"
            type="contact"
            fullWidth
            onChange={(event) => {
              setCurrentDetails({
                ...currentDetails,
                contact: event.target.value
              });
            }}
          />
          <TextField
            style={{
              marginBottom: 20,
            }}
            autoFocus
            variant="outlined"
            id="outlined-multiline-static"
            label="Location"
            placeholder="Please provide your address"
            type="location"
            fullWidth
            onChange={(event) => {
              setCurrentDetails({
                ...currentDetails,
                location: event.target.value
              });
            }}
          />
          <TextField
            style={{
              marginBottom: 20,
            }}
            autoFocus
            variant="outlined"
            id="outlined-multiline-static"
            label="Email address"
            type="email"
            fullWidth
            onChange={(event) => {
              setCurrentDetails({
                ...currentDetails,
                email: event.target.value
              });
            }}
          />
          <TextField
            style={{
              marginBottom: 20,
            }}
            autoFocus
            variant="outlined"
            placeholder="Please enter the date you wish the work to be carried out"
            id="outlined-multiline-static"
            label="Date of Required Work"
            type="date-text"
            fullWidth
            onChange={(event) => {
              setCurrentDetails({
                ...currentDetails,
                date: event.target.value
              });
            }}
          />
          <TextField
            style={{
              marginBottom: 20,
            }}
            autoFocus
            variant="outlined"
            id="outlined-multiline-static"
            label="Message Subject"
            placeholder="Please enter a subject line"
            type="subject"
            fullWidth
            onChange={(event) => {
              setCurrentDetails({
                ...currentDetails,
                subject: event.target.value
              });
            }}
          />
          <TextField
            multiline
            rows={8}
            autoFocus
            variant="outlined"
            id="outlined-multiline-static"
            label="Message"
            type="message"
            fullWidth
            onChange={(event) => {
              setCurrentDetails({
                ...currentDetails,
                message: event.target.value
              });
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
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Your message has been sent.
            </Alert>
          </Snackbar>
        </DialogActions>
      </Dialog>
    </>
  );
}