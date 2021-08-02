import React from "react";
// import SearchBar from "components/SearchBar";

import "./Home.scss";

const Home = () => {
  return (
    <div class="search">
      <div class="fa fa-search"></div>
      <input class="search-bar" type="text" placeholder="Search..." />
      <div class="fa fa-times"></div>
    </div>
  );
};

export default Home;
