import React from "react";
// import SearchBar from "components/SearchBar";

import Watchlist from "./Watchlist";

import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div class="search">
        <div class="fa fa-search"></div>
        <input class="search-bar" type="text" placeholder="Search..." />
        <div class="fa fa-times"></div>
      </div>
      <div class="portfolio-container">
        <div class="watchlist-container">
          <i class="fas fa-arrow-up"></i>
          <i class="fas fa-arrow-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Home;
