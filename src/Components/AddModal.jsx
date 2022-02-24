import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function AddModal(props) {
    return (
        <div>
        <Dialog open={props.modalState} onClose={props.closeModal} fullWidth maxWidth='lg'>
            <DialogTitle>Add New Asset</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fields with * are required
                    </DialogContentText>
                    <Box sx={{ m: 2 }} >
                        <FormControl sx={{ width: 150 }}>
                                <InputLabel id="categoryInput">Kategorija *</InputLabel>
                                <Select
                                    labelId="categoryInput"
                                    id="categoryInput-select"
                                    // value={age}
                                    label="Kategorija *"
                                    // onChange={handleChange}
                                >
                                <MenuItem value=""></MenuItem>
                                {props.categoryOptions.map(option => {
                                    return <MenuItem key={option.id} value={option.option}>{option.option}</MenuItem>
                                })
                                    }
                                </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
            <DialogActions>
            <Button onClick={props.closeModal}>Cancel</Button>
            <Button>Add</Button>
            </DialogActions>
        </Dialog>
        </div>
  );
}