import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import "bootstrap/dist/css/bootstrap.min.css";
import Watchlist from "./Watchlist";
import Search from "./search/Search";
import HoldingRow from "./HoldingRow";
import AccountInfo from "./AccountInfo";
import Holdings from "./Holdings";

import "./Home.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Home = ({user}) => {
  const [totalPort, setTotalPort] = useState(0);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Search />
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <AccountInfo user={user} totalPort={totalPort} />
          <Holdings user={user} totalPort={totalPort} setTotalPort={setTotalPort} />
        </Grid>
        <Grid item xs={2}>
          <Watchlist user={user}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
