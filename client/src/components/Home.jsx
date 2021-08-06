import React from "react";
// import SearchBar from "components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";

import Watchlist from "./Watchlist";
import Search from "./search/Search";
import HoldingRow from "./HoldingRow";
import AccountInfo from "./AccountInfo";
import Holdings from "./Holdings";

import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Search />
      <AccountInfo />
      <Holdings />
    </div>
  );
};

export default Home;
