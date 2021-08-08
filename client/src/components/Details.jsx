import { useState } from "react";
import Breakdown from "./details/Breakdown";
import DetailBuySell from "./details/DetailBuySell";
import Personal from "./details/Personal";
import Search from "./search/Search";
import "./Details.scss";
import Grid from "@material-ui/core/Grid";
import LineChart from "./details/LineChart";

const Details = ({ user }) => {
  const [price, setPrice] = useState(0);

  return (
    <div>
      <Search />
      <Grid className="details">
        <Grid item xs={10}>
          <LineChart />
        </Grid>
        <Grid item xs={4}>
          <Breakdown user={user} price={price} setPrice={setPrice} />
        </Grid>
      </Grid>
      <Personal user={user} />
      <DetailBuySell user={user} price={price} />
    </div>
  );
};

export default Details;
