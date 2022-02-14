import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddModal(props) {
    return (
        <div>
        <Dialog open={props.modalState} onClose={props.closeModal} fullWidth maxWidth='lg'>
            <DialogTitle>Add New Asset</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Here you can Add New Asset
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="New Asset"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
            <DialogActions>
            <Button onClick={props.closeModal}>Cancel</Button>
            <Button>Add</Button>
            </DialogActions>
        </Dialog>
        </div>
  );
}