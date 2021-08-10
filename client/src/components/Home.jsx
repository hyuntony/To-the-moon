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
  const [update, setUpdate] = useState(0);
  const classes = useStyles();

  const onClick = () => {
    setUpdate((prev) => prev + 1);
  };

  return (
    <div className={classes.root}>
      <Search />
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <button onClick={onClick}>
            <i className="fas fa-sync-alt"></i>
          </button>
          <AccountInfo user={user} totalPort={totalPort} />
          <Holdings user={user} totalPort={totalPort} setTotalPort={setTotalPort} update={update} />
        </Grid>
        <Grid item xs={4}>
          <Watchlist user={user} update={update} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
