import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Personal = ({ user }) => {
  const { symbol } = useParams();
  const [personal, setPersonal]=useState({
holding: 0,
balance: 0
  })
  // const [balance, setBalance]=useState(0)
  const email = user.email
  useEffect(()=>{
    axios.get('/user/user', {email})
    .then((res)=>{
    setPersonal({holding: res.data.holdings[symbol], balance: res.data.balance})
    })
  },[])
  return (
    <div className="details-breakdown">
      <h1>My Portfolio</h1>
      <div>
        <p>Current Holding:</p>
        <p>{personal.holding} shares</p>
      </div>
      <div>
        <p>Current Balance:</p>
        <p>${personal.balance}</p>
      </div>
    </div>
  );
};

export default Personal;
