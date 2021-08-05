import React from "react";
// import SearchBar from "components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";

import Watchlist from "./Watchlist";
import Search from "./search/Search";
import HoldingRow from "./HoldingRow";

import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Search />
      <div>
        <h1 className="holding-title">Holdings</h1>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr className="table-headers">
              <th>Ticker</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
              <th>Shares</th>
            </tr>
          </thead>
          <tbody>
            <HoldingRow ticker="AAPL" />
            <HoldingRow ticker="BRK.A" />
            <HoldingRow ticker="AMZN" />
            <HoldingRow ticker="GOOGL" />
          </tbody>
        </table>
        {/* <div className="watchlist">
            <table className="table mt-5">
              <thead>
                <tr>
                  <th>Watchlist</th>
                </tr>
              </thead>
            </table>
          </div> */}
      </div>
    </div>
  );
};

export default Home;
