import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import FormControl from '@material-ui/core/FormControl'

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
            <FormControl>

            </FormControl>


          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button> */}
        </DialogActions>
      </Dialog>
    </>
   );
  }


// export default QuotationForm;