import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(title, value, percentage) {
  return {
    title,
    value,
    percentage,
  };
}

function Row(props) {
  const { row } = props;
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell component="th" scope="row"></TableCell>
        <TableCell align="right" component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell align="right" component="th" scope="row">
          {`$${row.value}`}
        </TableCell>
        <TableCell align="right" component="th" scope="row">
          {`${row.percentage}%`}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};

export default function CollapsibleTable(props) {
  if (props.data === null) {
    return null;
  } else {
    const rows = [];
    var resData = props.data;
    resData.forEach(function(e) {
      rows.push(
        createData(
          e.title,
          Math.round(e.value * 10) / 10,
          Math.floor(e.percentage)
        )
      );
    });
    return (
      <TableContainer component={Paper}>
        {console.log(rows)}
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Savings</TableCell>
              <TableCell align="right">Savings (%) </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
