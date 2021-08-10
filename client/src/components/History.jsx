import React from "react";
import HistoryGrid from "./transaction-history/HistoryGrid";
import './History.scss'
const History = ({user}) => {
  return (
    <>
    <HistoryGrid user={user}/>
    </>
    )
   
};

export default History;
