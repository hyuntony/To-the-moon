import React from "react";
import HistoryGrid from "./transaction-history/HistoryGrid";
import OrderHistories from "./transaction-history/OrderHistories";

const History = ({user}) => {
  return (
<OrderHistories user={user}/>
  )
  // <HistoryGrid user={user}/>;
};

export default History;
