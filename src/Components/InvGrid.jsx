import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import AddBoxRounded from '@mui/icons-material/AddBoxRounded'
import IconButton from '@mui/material/IconButton';
import AddModal from './AddModal';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'category',
        headerName: 'Kategorija',
        width: 150,
        align: 'center',
        headerAlign: 'center'
    },
    {
        field: 'type',
        headerName: 'Tip opreme',
        width: 110
    },
    {
        field: 'model',
        headerName: 'Model',
        width: 120
    },
    {
        field: 'inventoryNumber',
        headerName: 'Inventurni broj',
        width: 117,
    },
    {
        field: 'serialNumber',
        headerName: 'Serijski broj',
        width: 150
    },
    {
        field: 'location',
        headerName: 'Lokacija',
        width: 130
    }
];

const rows = [{
    id: 1,
    category: 'Skener',
    type: 'HoneyWell',
    model: 'CK65',
    inventoryNumber: 200,
    serialNumber: 'CNCZK8123Y',
    location: 'Jastrebarsko'
}];



export default function InvGrid() {

    const [modalStatus, setModalStatus] = useState(false);

    // Props for Modal
    const handleOnClickAddButton = () => { 
        setModalStatus(true);
    };

    const handleCloseModal = () => {
        setModalStatus(false);  
    }

    // Select options for category for modal
    const categoryOptions = [{ id: 1, option: 'Skener' }, { id: 2, option: 'PC' }, { id: 3, option: 'Printer' }];
    const typeOptions = [{ id: 1, option: 'CK65' }, { id: 2, option: 'MC91' }, { id: 3, option: 'MC92' }];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <AddModal modalState={modalStatus} closeModal={handleCloseModal} categoryOptions={categoryOptions} typeOptions={typeOptions}/>
            <IconButton onClick={handleOnClickAddButton}>
                <AddBoxRounded fontSize="large" />
            </IconButton>
            <DataGrid rows = { rows }
                columns = { columns }
                pagesize = { 5 }
                rowsPerPage = { 5 }
                checkboxSelection components = {
                    {
                        Toolbar: GridToolbar,
                    }
                }
            />
        </div>
    );
}