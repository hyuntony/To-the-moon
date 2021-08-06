import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import "./Watchlist.scss";

const Watchlist = () => {
  return (
    <div>
      <h4 className="watchlist-title">Watchlist</h4>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Watchlist;
