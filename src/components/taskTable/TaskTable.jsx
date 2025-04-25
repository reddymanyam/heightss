import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 70, editable: false },
  { field: 'task', headerName: 'Task', width: 170, editable: true },
  { field: 'startdate', headerName: 'Start Date', width: 130, editable: true },
  { field: 'duedate', headerName: 'Due Date', width: 130, editable: true },
  { field: 'status', headerName: 'Status', width: 130, editable: true },
  { field: 'priority', headerName: 'Priority', width: 130, editable: true },
  { field: 'assignedto', headerName: 'Assigned To', width: 130, editable: true },
  { field: 'department', headerName: 'Department', width: 130, editable: true },
];

const rows = [
  { id: 1, task: 'mr task', startdate: "10/03/2025", duedate: "20/03/2025", status: "working", priority: "high", assignedto: "mr", department: "Account" },
  { id: 2, task: 'mr task 1', startdate: "11/03/2025", duedate: "11/03/2025", status: "pending review", priority: "low", assignedto: "rm", department: "Account" },
  { id: 3, task: 'mr task 2', startdate: "12/03/2025", duedate: "30/03/2025", status: "cancelled", priority: "medium", assignedto: "kl", department: "Account" },
  { id: 4, task: 'mr task 3', startdate: "23/03/2025", duedate: "14/03/2025", status: "overdue", priority: "high", assignedto: "rh", department: "Account" },
  { id: 5, task: 'mr task 4', startdate: "21/03/2025", duedate: "12/03/2025", status: "open", priority: "low", assignedto: "msd", department: "Account" },
  { id: 6, task: 'mr task 5', startdate: "28/03/2025", duedate: "16/03/2025", status: "completed", priority: "medium", assignedto: "vk", department: "Account" },
  { id: 7, task: 'mr task 6', startdate: "30/03/2025", duedate: "18/03/2025", status: "open", priority: "low", assignedto: "mr", department: "Account" },
  { id: 8, task: 'mr task 7', startdate: "20/03/2025", duedate: "23/03/2025", status: "completed", priority: "medium", assignedto: "kj", department: "Account" },
  { id: 9, task: 'mr task 8', startdate: "10/03/2025", duedate: "27/03/2025", status: "completed", priority: "low", assignedto: "mr", department: "Account" },
];

export default function TaskTable() {
  const [rowsData, setRowsData] = React.useState(rows);

  const handleRowUpdate = (newRow, oldRow) => {
    const updatedRows = rowsData.map(row => {
      if (row.id === newRow.id) {
        return { ...newRow };
      }
      return row;
    });
    
    setRowsData(updatedRows);
    return newRow;
  };

  return (
    <Paper sx={{ maxWidth:"1400px", height: "88vh" }}>
      <DataGrid
        rows={rowsData}
        columns={columns}
        initialState={{ pagination: { paginationModel: { page: 0, pageSize: 10 } } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        editMode="row"
        processRowUpdate={handleRowUpdate}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}