import React from "react";

import "./Watchlist.scss";

const Watchlist = () => {
  return (
    <div className="search">
      <div className="fa fa-search"></div>
      <input className="search-bar" type="text" placeholder="Search..." />
      <div className="fa fa-times"></div>
    </div>
  );
};

export default Watchlist;
