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
      <main class="main">
        <section class="section watchlist">
          <span>Watchlist</span>
          <i class="fas fa-arrow-down"></i>
          <i class="fas fa-arrow-up"></i>
        </section>
        <section class="section portfolio">
          <h1>Portfolio</h1>
          <span>Total Balance:</span>
          <span>Investments:</span>
        </section>
        <section class="section holdings">
          <span>holdings</span>
        </section>
        <footer class="section footer">Footer</footer>
      </main>
    </div>
  );
};

export default Home;
