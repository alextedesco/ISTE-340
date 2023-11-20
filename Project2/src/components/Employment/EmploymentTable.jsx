// Imports
import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const EmploymentTable = ({ empObj }) => {
    //instance vars
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(100);
  
    // Creates the amount of columns in the table based on the 
    // content of the employer table object
    const columns = [
      { id: 'index', label: '#', minWidth: 50 },
      { id: 'employer', label: 'Employer', minWidth: 170 },
      ...(empObj[0].title ? [{ id: 'title', label: 'Title', minWidth: 170, align: 'right' }] : []),
      { id: 'degree', label: 'Degree', minWidth: 100 },
      { id: 'city', label: 'City', minWidth: 170, align: 'right' },
      ...(empObj[0].startDate ? [{ id: 'startDate', label: 'Start Date', minWidth: 170, align: 'right' }] : []),
      ...(empObj[0].term ? [{ id: 'term', label: 'Term', minWidth: 170, align: 'right' }] : []),
    ];
  
    // Create the table rows based on the data in the object
    const rows = empObj.map((e, index) => {
      const row = {
        index: index + 1,
        employer: e.employer,
        degree: e.degree,
        city: e.city,
      };
  
      // Adds 'startDate', 'term', and 'title' to the row if they exist in the table object
      if (e.startDate) row.startDate = e.startDate;
      if (e.term) row.term = e.term;
      if (e.title) row.title = e.title;

      return row;
    });
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return (
        // Creates the table
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.index}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default EmploymentTable;
