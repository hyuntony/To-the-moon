import Breakdown from "./details/Breakdown";
import DetailBuySell from "./details/DetailBuySell";
import LineChart from "./details/LineChart";
import Personal from "./details/Personal";
import "./Details.scss";
const Details = ({ user }) => {
  return (
    <div className="details">
      <LineChart />
      <Personal user={user}/>
      <Breakdown user={user} />
    </div>
  );
};

export default Details;
