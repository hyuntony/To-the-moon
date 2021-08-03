import React from "react";
// import SearchBar from "components/SearchBar";

import Watchlist from "./Watchlist";

import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div className="search">
        <div className="fa fa-search"></div>
        <input className="search-bar" type="text" placeholder="Search..." />
        <div className="fa fa-times"></div>
      </div>
      <main className="main">
        <section className="section watchlist">
          <span>Watchlist</span>
          <i className="fas fa-arrow-down"></i>
          <i className="fas fa-arrow-up"></i>
        </section>
        <section className="section portfolio">
          <h1>Portfolio</h1>
          <span>Total Balance:</span>
          <span>Investments:</span>
        </section>
        <section className="section holdings">
          <span>holdings</span>
        </section>
        <footer className="section footer">Footer</footer>
      </main>
    </div>
  );
};

export default Home;
