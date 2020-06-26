import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStoreState } from '../../store';
import { addDays } from 'date-fns';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles({
  table: {
    // maxWidth: 600,
  },
});

const CountryDataTable: React.FC = () => {
  const classes = useStyles();

  const tableData = useStoreState((state) => state.covid.countryDataByDate);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Confirmed</StyledTableCell>
            <StyledTableCell align="right">Deaths</StyledTableCell>
            <StyledTableCell align="right">Recovered</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <StyledTableRow key={row.Date}>
              <StyledTableCell component="th" scope="row">
                {row.Date ? addDays(Date.parse(row.Date), 2).toDateString() : null}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Confirmed}</StyledTableCell>
              <StyledTableCell align="right">{row.Deaths}</StyledTableCell>
              <StyledTableCell align="right">{row.Recovered}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CountryDataTable;
