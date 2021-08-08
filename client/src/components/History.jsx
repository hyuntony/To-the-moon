import React from "react";
import HistoryGrid from "./transaction-history/HistoryGrid";
import HistoryComp from "./transaction-history/HistoryComp";
import OrderHistories from "./transaction-history/OrderHistories";
const History = ({user}) => {
  return (
    <>
    <h3 className="holdings-title">Holdings</h3>
    <OrderHistories user={user}/>
    </>
    )
   
};

export default History;
