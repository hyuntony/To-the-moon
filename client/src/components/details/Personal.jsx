import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Personal = ({ user }) => {
  const { symbol } = useParams();
  const [personal, setPersonal] = useState({
    holding: 0,
    balance: 0,
  });
  let url = window.location.pathname;

  const email = user.email;
  useEffect(() => {
    axios.get("/user/user", { email })
      .then((res) => {
        setPersonal({
          holding: res.data.holdings[symbol],
          balance: res.data.balance.toLocaleString(),
        });
      });
  }, [user, url]);
  
  return (
    <div>
      <h4 className="personal-title">My Portfolio</h4>
      <div className="details-personal">
        <div>
          <p>Current Holding: </p>
          <p className="personal-text">{personal.holding ? personal.holding : 0} shares</p>
        </div>
        <div>
          <p>Current Balance: </p>
          <p className="personal-text">${personal.balance}</p>
        </div>
      </div>
    </div>
  );
};

export default Personal;
