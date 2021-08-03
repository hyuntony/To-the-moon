import React from "react";
// import SearchBar from "components/SearchBar";

import Watchlist from "./Watchlist";
import Search from './search/Search'

import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Search />
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
