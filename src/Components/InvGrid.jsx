import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'category',
        headerName: 'Kategorija',
        width: 150,
    },
    {
        field: 'inventoryNumber',
        headerName: 'Inventurni broj',
        width: 100,
    }
];

const rows = [
    { id:1 , category: 'Skener', inventoryNumber: 200}  
];

export default function InvGrid() {
    return (
        <div style={{ height: 400, width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pagesize={5}
                rowsPerPage={5}
                checkboxSelection
            />
        </div>
  );
}
