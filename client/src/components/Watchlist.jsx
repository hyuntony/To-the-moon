import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/Grid/Grid";
import { withStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import "./Watchlist.scss";

const Watchlist = ({ user, update }) => {
  const useStyles = makeStyles({
    root: {
      padding: "0 30px",
      width: "96%",
      marginLeft: 30,
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "#f5f5f5",
      },
    },
    green: {
      color: "green",
    },
    red: {
      color: "red",
    },
  });

  const TableHeader = withStyles({
    root: {
      color: "black",
      fontSize: 13,
    },
  })(TableCell);

  const classes = useStyles();
  const id = user._id;
  const [array, setArray] = useState([]);

  useEffect(() => {
    let mounted = true;
    console.log("running");
    axios
      .get(`/api/watchlist/${id}`)
      .then((res) => {
        const promiseArray = res.data.map((each) => {
          return axios.get(`/finn/${each.symbol}/quote`);
        });
        return Promise.all(promiseArray);
      })
      .then((array) => {
        if (mounted) {
          setArray(array);
        }
      })
      .catch((err) => console.log("error:", err));

    return () => (mounted = false);
  }, [update]);

  const list = array.map((each) => {
    const clean = (url) => {
      let cleanedUrl = url.replace("/finn/", "");
      cleanedUrl = cleanedUrl.replace("/quote", "");
      return cleanedUrl;
    };

    return (
      <TableRow className={classes.root} key={each.config.url}>
        <TableCell>
          <Link
            className="symbol-link"
            to={`/details/${clean(each.config.url)}`}
          >
            {clean(each.config.url)}
          </Link>
        </TableCell>
        <TableCell>${each.data === null ? 0 : each.data.c}</TableCell>
        <TableCell className={each.data.d < 0 ? classes.red : classes.green}>
          ${each.data === null ? 0 : each.data.d.toFixed(2)}(
          {each.data === null ? 0 : each.data.dp.toFixed(2)}%)
        </TableCell>
      </TableRow>
    );
  });

  return (
    <div>
      <h4 className="watchlist-title">Watchlist</h4>
      <Grid container justifyContent={"center"}>
        <Grid item xs={10} md={10} className={"flex-col-scroll"}>
          <Paper style={{ overflowX: "auto" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader align="center">Symbol</TableHeader>
                  <TableHeader align="center">Price</TableHeader>
                  <TableHeader align="center">Change</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>{list.length > 0 && list}</TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Watchlist;
