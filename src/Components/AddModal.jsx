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

    const [category, setCategory] = React.useState(''); // State za kategoriju iz select komponente
    const [type, setType] = React.useState(''); // State za tip opreme iz select komponente

    // handleCategory code for setting the category variable from selected value
    const handleCategory = (event) => { 
        // eslint-disable-next-line no-restricted-globals
        setCategory(event.target.value);
    };

    // handleCategory code for setting the category variable from selected value
    const handleType = (event) => { 
        // eslint-disable-next-line no-restricted-globals
        setType(event.target.value);
    };

    return (
        <div>
        <Dialog open={props.modalState} onClose={props.closeModal} fullWidth maxWidth='lg'>
            <DialogTitle>Add New Asset</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fields with * are required
                    </DialogContentText>
                    <Box sx={{ m: 2 }} >
                        {/* Kategorija */}
                        <FormControl sx={{ width: 150 }}>
                            <InputLabel id="categoryInput">Kategorija *</InputLabel>
                            <Select
                                labelId="categoryInput"
                                id="categoryInput-select"
                                value={category}
                                label="Kategorija *"
                                onChange={handleCategory}
                            >
                            <MenuItem value=""></MenuItem>
                            {props.categoryOptions.map(option => {
                                return <MenuItem key={option.id} value={option.option}>{option.option}</MenuItem>
                            })
                                }
                            </Select>
                        </FormControl>
                        {/* Tip opreme */}
                        <FormControl sx={{ width: 150 }}>
                            <InputLabel id="typeInput">Tip opreme *</InputLabel>
                            <Select
                                labelId="typeInput"
                                id="typeInput-select"
                                value={type}
                                label="Tip opreme *"
                                onChange={handleType}
                            >
                            <MenuItem value=""></MenuItem>
                            {props.typeOptions.map(option => {
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