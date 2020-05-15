import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

export default function QuotationForm() {
 const [open, setOpen] = React.useState(false)


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            type="email"
            fullWidth
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
            type="message"
            fullWidth
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
            onClick={handleClose} 
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </>
   );
  }


// export default QuotationForm;