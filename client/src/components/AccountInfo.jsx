import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { grey } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import "./AccountInfo.scss";

const useStyles = makeStyles({
  root: {
    boxShadow: "grey",
    padding: "0 30px",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "grey",
    },
  },
});

const TableHeader = withStyles({
  root: {
    color: "black",
    fontSize: 20,
  },
})(TableCell);

const createData = function (balance, investments, cash, date) {
  return { balance, investments, cash, date };
};

export default function AccountInfo({ user, totalPort }) {
  const classes = useStyles();
  const cashBalance = user.balance
  const today = new Date().toISOString().split('T')[0]
  const totPort = totalPort
  const totBal = totPort + cashBalance

  const rows = [createData(totBal, totPort, cashBalance, today)];

  return (
    <div>
      <h4 className="balances-title">Balances</h4>
      <TableContainer className={classes.root} component={Paper}>
        <Table
          className={classes.table}
          size="medium"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableHeader align="center">Total Balance&nbsp;($)</TableHeader>
              <TableHeader align="center">Investments&nbsp;($)</TableHeader>
              <TableHeader align="center">Cash&nbsp;($)</TableHeader>
              <TableHeader align="center">As of</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.balance}>
                <TableCell align="center" component="th" scope="row">
                  {row.balance}
                </TableCell>
                <TableCell align="center">{row.investments}</TableCell>
                <TableCell align="center">{row.cash}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
