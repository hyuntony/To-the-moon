import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/Grid/Grid";
import axios from "axios";
import "./Watchlist.scss";
const Watchlist = ({user}) => {
  const id = user._id
  const [array, setArray]=useState([])

  useEffect(()=>{
    axios.get(`/api/watchlist/${id}`)
    .then((res)=>{setArray(res.data)})
  },[])

const list = array.map(each => {
  return (
    <TableRow>
      <TableCell>{each.symbol}</TableCell>
    </TableRow>
  )
})
//   const list = async () => {watchlistArray.map((each)=>{
//     return (<TableRow>
//       <TableCell>{each}</TableCell>
//     </TableRow>)
//   })
// }
  // console.log(list)
  return (
    <div>
      <h4 className="watchlist-title">Watchlist</h4>
      <Grid container justifyContent={"center"}>
        <Grid item xs={10} md={10} className={"flex-col-scroll"}>
          <Paper style={{ overflowX: "auto" }}>
            <Table>
              <TableHead>
                <TableRow>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                {list}
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
