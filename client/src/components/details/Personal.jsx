import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Personal = () => {
  // const { symbol } = useParams();
  // const [state, setState] = useState({
  //   symbol: {},

  // });
  // useEffect(() => {
  //     Promise.all([
  //       axios.get(`/finn/${symbol}/profile`),
  //     ])
  //       .then((all) => {
  //         const [symbol, financial, quote] = all;
  //         setState((prev) => {
  //           return {
  //             ...prev,
  //             symbol: symbol.data,
  //           };
  //         });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);
  return (
    <div className="details-breakdown">
      <h1>My Portfolio</h1>
      <div>
        <p>Current Holding:</p>
        <p>1231223</p>
      </div>
      <div>
        <p>Current Balance:</p>
        <p>$1231223</p>
      </div>
    </div>
  );
};

export default Personal;
