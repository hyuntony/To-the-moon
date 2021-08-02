import React from "react";

import "./Watchlist.scss";

const Watchlist = () => {
  return (
    <div class="search">
      <div class="fa fa-search"></div>
      <input class="search-bar" type="text" placeholder="Search..." />
      <div class="fa fa-times"></div>
    </div>
  );
};

export default Watchlist;
