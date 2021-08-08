import { useState } from "react";
import Breakdown from "./details/Breakdown";
import DetailBuySell from "./details/DetailBuySell";
import Personal from "./details/Personal";
import Search from "./search/Search";
import "./Details.scss";

const Details = ({ user }) => {
  const [price, setPrice] = useState(0);

  return (
    <div className="details">
      <Search />
      <Breakdown user={user} price={price} setPrice={setPrice} />
      <Personal user={user}/>
      <DetailBuySell user={user} price={price} />
    </div>
  );
};

export default Details;
