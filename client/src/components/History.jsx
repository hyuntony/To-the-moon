import React from "react";
import HistoryGrid from "./transaction-history/HistoryGrid";
import HistoryComp from "./transaction-history/HistoryComp";
import OrderHistories from "./transaction-history/OrderHistories";
const History = ({user}) => {
  return (
    <OrderHistories user={user}/>
    )
   
};

export default History;
