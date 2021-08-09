import React from "react";
import HistoryGrid from "./transaction-history/HistoryGrid";
import './History.scss'
const History = ({user}) => {
  return (
    <>
    <h3 className="history-title">Holdings</h3>
    <HistoryGrid user={user}/>
    </>
    )
   
};

export default History;
