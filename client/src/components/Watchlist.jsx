import React from "react";
import ReactDOM from "react-dom";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/Grid/Grid";

import "./Watchlist.scss";

const Watchlist = () => {
  return (
    <div>
      <h4 className="watchlist-title">Watchlist</h4>
      <Grid container justify={"center"}>
        <Grid item xs={10} md={10} className={"flex-col-scroll"}>
          <Paper style={{ overflowX: "auto" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Content</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Content</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Content</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Content</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Content</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Content</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Content</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Watchlist;
